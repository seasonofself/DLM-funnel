import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/retreat-waitlist
 * Adds a subscriber to Kit (ConvertKit) with the
 * "ericeira-waitlist-oct-2026" tag, capturing their first name.
 * The retreat moved to Lourinha, but the tag keeps its old name so the
 * existing Kit automation and past subscribers stay intact.
 *
 * Body: { firstName: string, email: string }
 *
 * Requires KIT_API_SECRET in .env.local
 *
 * To wire up a confirmation email in Kit:
 *   Automations → New → Trigger: Tag added "ericeira-waitlist-oct-2026"
 *   → Action: Send a broadcast / sequence with confirmation copy.
 */

const KIT_API_SECRET = process.env.KIT_API_SECRET;
const TAG_NAME = "ericeira-waitlist-oct-2026";

export async function POST(req: NextRequest) {
  try {
    const { firstName, email } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "First name and email are required" },
        { status: 400 }
      );
    }

    if (!KIT_API_SECRET) {
      console.error("KIT_API_SECRET not set");
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      );
    }

    /* ── Step 1: Find or create the tag ── */
    const tagsRes = await fetch(
      `https://api.convertkit.com/v3/tags?api_secret=${KIT_API_SECRET}`
    );
    const tagsData = await tagsRes.json();
    let tag = tagsData.tags?.find(
      (t: { name: string }) => t.name === TAG_NAME
    );

    if (!tag) {
      const createRes = await fetch(`https://api.convertkit.com/v3/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          tag: { name: TAG_NAME },
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

    /* ── Step 2: Subscribe with first_name ── */
    const subRes = await fetch(
      `https://api.convertkit.com/v3/tags/${tag.id}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          email,
          first_name: firstName,
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
    console.error("retreat-waitlist route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
