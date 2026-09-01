import { NextRequest, NextResponse } from "next/server";
import {
  buildScriptMessages,
  buildContinueMessages,
  buildMetaMessages,
  targetWords,
} from "@/lib/bluePrompt";
import {
  recommendFrequency,
  listeningProtocol,
  detectDistress,
  DISTRESS_MESSAGE,
  type BlueAnswers,
} from "@/lib/blueSchema";

/**
 * POST /api/blue/generate
 * Generates a personalized subconscious-rewiring tape in three steps:
 *   1. Write the script as plain prose (long-form, lyrical).
 *   2. If it's under the length target, continue it once.
 *   3. Extract metadata (title, intention, music mood, key beliefs) as JSON.
 * Then merge in the deterministic frequency recommendation + protocol.
 *
 * If acute distress is detected, we DON'T generate — we return support.
 *
 * Body: { answers: BlueAnswers }   Requires OPENAI_API_KEY in .env.local
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL = "gpt-4o";

export const maxDuration = 180;

type Msg = { role: "system" | "user" | "assistant"; content: string };

async function chat(
  messages: Msg[],
  opts: { json?: boolean; maxTokens?: number } = {}
): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.9,
      max_tokens: opts.maxTokens ?? 8000,
      ...(opts.json ? { response_format: { type: "json_object" } } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    console.error("OpenAI error:", res.status, detail);
    throw new Error("openai");
  }
  const data = await res.json();
  return (data?.choices?.[0]?.message?.content || "").trim();
}

const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

export async function POST(req: NextRequest) {
  try {
    const { answers } = (await req.json()) as { answers?: BlueAnswers };
    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Answers required" }, { status: 400 });
    }

    if (detectDistress(answers)) {
      return NextResponse.json({ distress: true, message: DISTRESS_MESSAGE });
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "The script engine isn't connected yet. Add OPENAI_API_KEY to .env.local and restart.",
        },
        { status: 500 }
      );
    }

    const { words: target } = targetWords(answers.audio_length);

    // Step 1 — write the script.
    let script = await chat(buildScriptMessages(answers));

    // Step 1b — one continuation if it's meaningfully short (< 85%).
    if (wordCount(script) < target * 0.85) {
      const remaining = target - wordCount(script);
      try {
        const more = await chat(
          buildContinueMessages(answers, script, remaining)
        );
        if (more) script = `${script}\n\n${more}`.trim();
      } catch {
        /* keep what we have */
      }
    }

    if (!script) {
      return NextResponse.json(
        { error: "No tape came back. Please try again." },
        { status: 502 }
      );
    }

    // Step 2 — metadata extraction (cheap JSON pass).
    let meta: any = {};
    try {
      const metaRaw = await chat(buildMetaMessages(script, answers), {
        json: true,
        maxTokens: 800,
      });
      meta = JSON.parse(metaRaw);
    } catch {
      meta = {}; // degrade gracefully — script still ships
    }

    const frequency = recommendFrequency(answers);
    const protocol = listeningProtocol(frequency);

    return NextResponse.json({
      title: meta.title || "Your tape",
      intention: meta.intention || "",
      musicMood: meta.musicMood || "",
      script,
      keyBeliefs: Array.isArray(meta.keyBeliefs) ? meta.keyBeliefs : [],
      frequency,
      protocol,
      words: wordCount(script),
    });
  } catch (err) {
    console.error("Blue generate route error:", err);
    return NextResponse.json(
      { error: "The script engine had trouble. Please try again." },
      { status: 502 }
    );
  }
}
