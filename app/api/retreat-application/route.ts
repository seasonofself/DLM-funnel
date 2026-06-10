import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/retreat-application
 * Receives a retreat application, emails it to the team via Resend,
 * and (optionally) appends it to a Google Sheet via an Apps Script webhook.
 *
 * Env vars:
 *   RESEND_API_KEY          required — Resend API key
 *   APPLICATION_TO_EMAIL    optional — defaults to hello@seasonofself.co
 *   APPLICATION_FROM_EMAIL  optional — must be a Resend-verified sender on
 *                           seasonofself.co. Defaults to
 *                           "Season of Self <hello@seasonofself.co>"
 *   GOOGLE_SHEET_WEBHOOK_URL optional — Apps Script web-app URL; if set, each
 *                           submission is POSTed there to append a row.
 *
 * TODO(whatsapp): to also ping WhatsApp, add a Twilio / Meta Cloud API call
 * here after the email send (requires an approved message template).
 */

const TO_EMAIL = process.env.APPLICATION_TO_EMAIL || "hello@seasonofself.co";
const FROM_EMAIL =
  process.env.APPLICATION_FROM_EMAIL ||
  "Season of Self <hello@seasonofself.co>";

type Body = Record<string, string>;

const FIELD_LABELS: [string, string][] = [
  ["fullName", "Full name"],
  ["email", "Email"],
  ["contact", "Phone / Instagram"],
  ["age", "Age"],
  ["location", "Based in"],
  ["roomTier", "Room drawn to"],
  ["about", "About her / what's drawing her"],
  ["walkAway", "Hoping to walk away with"],
  ["experience", "Surf / yoga / meditation experience"],
  ["dietary", "Dietary needs & allergies"],
  ["heardFrom", "How she heard about us"],
  ["anythingElse", "Anything else"],
];

function esc(s: string) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    /* ── spam honeypot: real users never fill this ── */
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({ success: true }); // silently accept, drop
    }

    /* ── minimal validation ── */
    if (!body.fullName?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    /* ── build the email ── */
    const rows = FIELD_LABELS.map(
      ([k, label]) =>
        `<tr><td style="padding:6px 12px;color:#6b7a5a;font-weight:600;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#222">${esc(
          body[k]
        ).replace(/\n/g, "<br/>") || "—"}</td></tr>`
    ).join("");

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto">
        <h2 style="color:#222">New retreat application — Ericeira, Oct 2026</h2>
        <p style="color:#555">${esc(body.fullName)} just applied.</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>
      </div>`;

    const text = FIELD_LABELS.map(
      ([k, label]) => `${label}: ${body[k] || "—"}`
    ).join("\n");

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: body.email,
        subject: `New retreat application — ${body.fullName}`,
        html,
        text,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Could not send" }, { status: 502 });
    }

    /* ── optional: append to Google Sheet (non-blocking failure) ── */
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submittedAt: new Date().toISOString(),
            ...Object.fromEntries(FIELD_LABELS.map(([k]) => [k, body[k] || ""])),
          }),
        });
      } catch (sheetErr) {
        console.error("Sheet webhook error (non-fatal):", sheetErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("retreat-application route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
