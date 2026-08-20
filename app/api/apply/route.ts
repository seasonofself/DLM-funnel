import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/apply
 * The autumn season application (/apply).
 *
 * 1. Forwards the application to the same Google Apps Script web app
 *    the retreat form uses: it appends a row to the Google Sheet and
 *    emails hello@seasonofself.co from the team's Google account.
 *    The payload carries BOTH readable season keys and the retreat
 *    form's column names (fullName/about/walkAway/...) so the answers
 *    arrive complete whether the script iterates keys or reads fixed
 *    columns.
 * 2. Tags the applicant `autumn-applied` in Kit (fire-and-forget) so
 *    the confirmation automation runs and the 24h "finish your
 *    application" nudge for `autumn-applicant` stops.
 */

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxyjI6zlu1mJrN_5GFfPuI97pzXBfPQpl978ULp0VEwWk6QEIsT7Ww44asSz8Rp3W8/exec";

const KIT_API_SECRET = process.env.KIT_API_SECRET;
const APPLIED_TAG = "autumn-applied";

async function tagInKit(email: string, firstName: string) {
  if (!KIT_API_SECRET) return;
  try {
    const tagsRes = await fetch(
      `https://api.convertkit.com/v3/tags?api_secret=${KIT_API_SECRET}`
    );
    const tagsData = await tagsRes.json();
    let tag = tagsData.tags?.find(
      (t: { name: string }) => t.name === APPLIED_TAG
    );
    if (!tag) {
      const createRes = await fetch(`https://api.convertkit.com/v3/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          tag: { name: APPLIED_TAG },
        }),
      });
      tag = (await createRes.json()).tag;
    }
    if (!tag?.id) return;
    await fetch(`https://api.convertkit.com/v3/tags/${tag.id}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_secret: KIT_API_SECRET,
        email,
        ...(firstName ? { first_name: firstName } : {}),
      }),
    });
  } catch (err) {
    console.error("apply: Kit tagging failed (application still delivered):", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, string>;

    /* spam honeypot: real users never fill this */
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const g = (k: string) => (body[k] ?? "").toString().trim();

    const blockers = g("blockers");
    const dreams = [
      g("dreams"),
      blockers ? `standing between her & those dreams: ${blockers}` : "",
      g("blockersOther") ? `something else: ${g("blockersOther")}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const readiness = [g("readiness"), g("readinessNote")]
      .filter(Boolean)
      .join(" · ");

    const closing = [
      g("anythingElse"),
      g("wantsCall") ? `20-minute call before deciding: ${g("wantsCall")}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const payload: Record<string, string> = {
      submittedAt: new Date().toISOString(),
      formType: "the autumn season · application",

      /* readable season keys (for key-iterating consumers) */
      name,
      email,
      instagram: g("instagram"),
      locationTimezone: g("location"),
      q1_workLifeNow: g("workLife"),
      q2_dreamtOfStarting: g("dreams"),
      q2b_blockers: [blockers, g("blockersOther")].filter(Boolean).join(" · "),
      q3_december18Vision: g("vision"),
      q4_selfCareRoutines: g("selfCare"),
      q5_timeAndTechReadiness: readiness,
      q6_tuitionReadiness: g("tuition"),
      q7_anythingElse: g("anythingElse"),
      q7_wantsCall: g("wantsCall"),

      /* the retreat form's fixed columns, so a column-reading script
         still captures every answer */
      fullName: name,
      contact: g("instagram"),
      age: "",
      location: g("location"),
      roomTier: "the autumn season · application",
      about: g("workLife"),
      walkAway: g("vision"),
      experience: g("selfCare"),
      dietary: readiness,
      heardFrom: g("tuition"),
      anythingElse: [dreams, closing].filter(Boolean).join("\n\n"),
    };

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error("apply: Apps Script error:", res.status, t);
      return NextResponse.json({ error: "Could not submit" }, { status: 502 });
    }

    await tagInKit(email, name.split(" ")[0] ?? "");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("apply route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
