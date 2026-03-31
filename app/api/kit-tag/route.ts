import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/kit-tag
 * Adds the "dlm-webinar-watched" tag to a Kit subscriber.
 *
 * Body: { email: string }
 *
 * Requires KIT_API_SECRET in your .env.local
 * (find it in Kit → Settings → Developer → API Secret)
 */

const KIT_API_SECRET = process.env.KIT_API_SECRET;
const TAG_NAME = "dlm-webinar-watched";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

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

    /* ── Step 1: Find or create the tag ── */
    const tagsRes = await fetch(
      `https://api.convertkit.com/v3/tags?api_secret=${KIT_API_SECRET}`
    );
    const tagsData = await tagsRes.json();
    let tag = tagsData.tags?.find(
      (t: { name: string }) => t.name === TAG_NAME
    );

    /* If the tag doesn't exist yet, create it */
    if (!tag) {
      const createRes = await fetch(
        `https://api.convertkit.com/v3/tags`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_secret: KIT_API_SECRET,
            tag: { name: TAG_NAME },
          }),
        }
      );
      const createData = await createRes.json();
      tag = createData.tag;
    }

    if (!tag?.id) {
      return NextResponse.json(
        { error: "Could not find or create tag" },
        { status: 500 }
      );
    }

    /* ── Step 2: Tag the subscriber ── */
    const tagRes = await fetch(
      `https://api.convertkit.com/v3/tags/${tag.id}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_SECRET,
          email,
        }),
      }
    );

    if (!tagRes.ok) {
      const err = await tagRes.text();
      console.error("Kit tag error:", err);
      return NextResponse.json({ error: "Tag failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("kit-tag route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
