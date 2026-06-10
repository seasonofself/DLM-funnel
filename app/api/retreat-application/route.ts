import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/retreat-application
 * Forwards the application to a Google Apps Script web app that
 *   1. appends a row to the "Applications" Google Sheet, and
 *   2. emails hello@seasonofself.co from the team's Google account.
 *
 * No external API keys or domain verification needed.
 * Paste the deployed Apps Script /exec URL into APPS_SCRIPT_URL below.
 */

// Google Apps Script web-app /exec URL (writes to the Sheet + emails hello@seasonofself.co).
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxyjI6zlu1mJrN_5GFfPuI97pzXBfPQpl978ULp0VEwWk6QEIsT7Ww44asSz8Rp3W8/exec";

const FIELDS = [
  "fullName",
  "email",
  "contact",
  "age",
  "location",
  "roomTier",
  "about",
  "walkAway",
  "experience",
  "dietary",
  "heardFrom",
  "anythingElse",
];

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, string>;

    /* spam honeypot: real users never fill this */
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (!body.fullName?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      console.error("APPS_SCRIPT_URL not set");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const payload: Record<string, string> = {
      submittedAt: new Date().toISOString(),
    };
    FIELDS.forEach((f) => {
      payload[f] = (body[f] ?? "").toString();
    });

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error("Apps Script error:", res.status, t);
      return NextResponse.json({ error: "Could not submit" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("retreat-application route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
