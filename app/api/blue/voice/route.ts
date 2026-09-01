import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

/**
 * POST /api/blue/voice
 * Blue — Phase 1 (voice). Narrates a script with one calm OpenAI TTS
 * voice and saves it as an mp3 the player can load. The theta bed is
 * NOT mixed in here — the player layers the bed underneath at playback,
 * so we avoid heavy audio mixing and keep the bed independently loopable.
 *
 * Body: { script: string, voice?: string }
 * Returns: { ok: true, path: "/blue/her-track.mp3", bytes, chunks }
 *
 * Requires OPENAI_API_KEY in .env.local
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Steerable TTS model — lets us direct the delivery in plain English.
const TTS_MODEL = "gpt-4o-mini-tts";
const DEFAULT_VOICE = "shimmer"; // soft, feminine. Try: nova, coral, sage.

// How we want her to sound. This is the voice-direction knob.
const VOICE_INSTRUCTIONS =
  "Voice: warm, feminine, intimate. Tone: slow, soft, soothing, unhurried — like gently guiding a woman to sleep. Leave natural breathing pauses between sentences. Never rushed. Tender, reassuring, and fully present.";

const MAX_CHARS = 3500; // safe per-request input size; we chunk above this.

export const maxDuration = 300; // long scripts can take a while to synthesize

/** Split a script into TTS-sized chunks at paragraph, then sentence, breaks. */
function chunk(script: string): string[] {
  const paras = script.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const chunks: string[] = [];
  let buf = "";
  const push = () => {
    if (buf.trim()) chunks.push(buf.trim());
    buf = "";
  };
  for (const para of paras) {
    if (para.length > MAX_CHARS) {
      push();
      const sentences = para.match(/[^.!?]+[.!?]*\s*/g) || [para];
      for (const s of sentences) {
        if ((buf + s).length > MAX_CHARS) push();
        buf += s;
      }
      push();
    } else if ((buf + "\n\n" + para).length > MAX_CHARS) {
      push();
      buf = para;
    } else {
      buf = buf ? buf + "\n\n" + para : para;
    }
  }
  push();
  return chunks;
}

export async function POST(req: NextRequest) {
  try {
    const { script, voice } = (await req.json()) as {
      script?: string;
      voice?: string;
    };

    if (!script || !script.trim()) {
      return NextResponse.json({ error: "Script required" }, { status: 400 });
    }
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Add OPENAI_API_KEY to .env.local and restart." },
        { status: 500 }
      );
    }

    const parts = chunk(script);
    const buffers: Buffer[] = [];

    for (const part of parts) {
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: TTS_MODEL,
          voice: voice || DEFAULT_VOICE,
          input: part,
          instructions: VOICE_INSTRUCTIONS,
          response_format: "mp3",
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("OpenAI TTS error:", res.status, detail);
        return NextResponse.json(
          { error: "The voice engine had trouble. Please try again." },
          { status: 502 }
        );
      }
      buffers.push(Buffer.from(await res.arrayBuffer()));
    }

    const audio = Buffer.concat(buffers);
    const dir = join(process.cwd(), "public", "blue");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "her-track.mp3"), audio);

    return NextResponse.json({
      ok: true,
      path: "/blue/her-track.mp3",
      bytes: audio.length,
      chunks: parts.length,
    });
  } catch (err) {
    console.error("Blue voice route error:", err);
    return NextResponse.json(
      { error: "Something went wrong generating the voice." },
      { status: 500 }
    );
  }
}
