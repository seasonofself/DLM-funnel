import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/kit-subscribe
 * Adds an email to Kit (ConvertKit) and tags them by source so the
 * right nurture sequence can run. Used by the site-wide email-capture
 * forms (mailing list, etc.).
 *
 * Subscribing an email to a tag in Kit both CREATES the subscriber (if
 * new) and applies the tag, so one call handles signup + segmentation.
 *
 * Body: { email: string, source?: string, firstName?: string, tag?: string }
 *  - source becomes the tag, e.g. "homepage-footer" -> tag "source-homepage-footer"
 *  - tag (when provided) is used verbatim instead, e.g. "autumn-applicant"
 *    for the Season application two-step form
 *
 * Requires KIT_API_SECRET in your .env.local
 * (find it in Kit -> Settings -> Developer -> API Secret)
 */

const KIT_API_SECRET = process.env.KIT_API_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { email, source, firstName, tag: explicitTag } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    if (!KIT_API_SECRET) {
      console.error("KIT_API_SECRET not set in environment variables");
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      );
    }

    const tagName =
      typeof explicitTag === "string" && explicitTag.trim()
        ? explicitTag.trim()
        : `source-${source || "site"}`;

    /* ── Step 1: Find or create the source tag ── */
    const tagsRes = await fetch(
      `https://api.convertkit.com/v3/tags?api_secret=${KIT_API_SECRET}`
    );
    const tagsData = await tagsRes.json();
    let tag = tagsData.tags?.find((t: { name: string }) => t.name === tagName);

    if (!tag) {
      const createRes = await fetch(`https://api.convertkit.com/v3/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          tag: { name: tagName },
        }),
      });
      const createData = await createRes.json();
      tag = createData.tag;
    }

    if (!tag?.id) {
      return NextResponse.json(
        { error: "Could not find or create tag" },
        { status: 500 }
      );
    }

    /* ── Step 2: Subscribe + tag the email (creates the subscriber too) ── */
    const subRes = await fetch(
      `https://api.convertkit.com/v3/tags/${tag.id}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          email,
          ...(firstName ? { first_name: firstName } : {}),
        }),
      }
    );

    if (!subRes.ok) {
      const err = await subRes.text();
      console.error("Kit subscribe error:", err);
      return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("kit-subscribe route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
