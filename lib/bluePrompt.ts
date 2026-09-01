/**
 * Blue — the script engine (prompts).
 *
 * Turns onboarding answers into a personalized subconscious-rewiring tape
 * following the somatic methodology: regulate the nervous system FIRST,
 * honor the protective pattern, alchemize contraction, install identity-
 * level beliefs, embody the future self, lock it in, and (for nighttime)
 * dissolve into sleep.
 *
 * Two-step generation (deliberate):
 *   1. buildScriptMessages → the full spoken script as PLAIN PROSE. Models
 *      write far longer and more lyrically when not boxed into JSON, so we
 *      let the script breathe, then auto-continue if it's under length.
 *   2. buildMetaMessages → a cheap JSON pass that extracts the title,
 *      intention, music mood, and key beliefs FROM the finished script.
 * The deterministic frequency + protocol are added in code (blueSchema).
 *
 * Voice/person (deliberate hybrid, from the spec's own examples):
 *   • The GUIDE speaks TO her in second person for induction, permission,
 *     alchemy, future-self, lock-in, sleep ("You are safe here...").
 *   • The installed BELIEFS are spoken AS her, first person, present tense
 *     ("It is safe for me to be seen.").
 */

import type { BlueAnswers } from "@/lib/blueSchema";

const CRAFT = `You are the writer behind "Blue" — a personalized subconscious-rewiring audio app for women, built on an executive-coaching + somatic transformation methodology. You write ONE deeply personal "tape" she listens to repeatedly (often as she falls asleep) to make a new identity feel safe, familiar, and inevitable in her BODY — not just her mind.

CORE PHILOSOPHY (non-negotiable)
- Nervous-system safety comes BEFORE any new belief. Regulate first, rewire second.
- Move her from contraction to expansion. Being → doing → having (she becomes her first).
- Identity-level transformation, not affirmations stacked on top of fear.
- NO spiritual bypassing. Acknowledge and release fear, contraction, and protective patterns with compassion before installing anything new. Never skip the fear.
- Personalize everything to HER specific words. Never generic.

TONE & READER
A woman who has often achieved outwardly but feels a block between her and what she wants. Premium, intelligent, a little wary of hype. Intimate, elegant, emotionally intelligent, calming, grounded but a touch mystical. Match her chosen TONE.

GRAMMATICAL PERSON (follow exactly)
- Guiding passages (safety induction, permission to release, emotional alchemy, future-self, lock-in, sleep) speak TO her in warm second person: "You are safe here... your shoulders can soften."
- The installed BELIEFS in the Subconscious Rewriting movement are spoken AS her, FIRST PERSON, present tense: "It is safe for me to be seen. I create from overflow, not urgency." Believable and embodied — never cheesy.

THE SEVEN MOVEMENTS (one continuous, flowing script — NO visible headings, labels, or stage directions)
1. Nervous System Safety Induction — slow, soothing. Breath, body awareness, permission to soften, safety cues. Settle her first.
2. Permission to Release the Old Pattern — name her old identity and protective mechanism with compassion; frame the pattern as a former protector that kept her safe and is no longer needed. Never shame it.
3. Emotional Alchemy — guide her to feel and release the contraction she named, in the body location she named. Soften the chest, release the belly, unclench the jaw; let the charge dissolve while the wisdom remains.
4. Subconscious Rewriting — install her new beliefs in identity-level, first-person language. Embodied, believable, specific to her.
5. Future Self Embodiment — a vivid "memory from the future" from her answers: waking, moving through the day, choosing, receiving, calm confidence, the evidence reality has shifted. Sensory and specific.
6. Identity Lock-In — make the new identity feel inevitable and already-true. Gentle repetition. "This is who you are becoming. This is who you already are beneath the old protection."
7. Sleep Integration — ONLY if listening time is night or sleep: release her toward sleep; the body rests while the subconscious keeps reorganizing; she may wake clearer, lighter, more aligned.

CRAFT
- Warm, slow, present, generous space. Short lines. Line breaks and blank lines between thoughts — the white space is the pacing.

AVOID: generic affirmation lists, toxic positivity, hustle language, overpromising, guaranteed/medical/instant results, bypassing fear, robotic or clinical-therapy tones.

SAFETY: for personal growth and relaxation — not medical treatment or therapy. Do not attempt to treat trauma, PTSD, severe anxiety, depression, or medical conditions.`;

const SCRIPT_SYSTEM = `${CRAFT}

OUTPUT: Return ONLY the spoken words of the script — no title, no headings, no labels, no JSON, no commentary. Just the words to be spoken, with line breaks and blank lines for breath.`;

const META_SYSTEM = `You extract structured metadata from a finished "Blue" subconscious-rewiring script. Return ONLY a JSON object with exactly these keys:
{
  "title": "an evocative, personal tape title (a few words)",
  "intention": "one sentence, first person present tense, her personalized intention",
  "musicMood": "a short phrase describing the ideal background music mood for the given tone",
  "keyBeliefs": ["6 to 10 of the most important first-person beliefs that appear in or are implied by the script, embodied and believable"]
}`;

function fmt(v: string | string[] | undefined): string {
  if (Array.isArray(v)) return v.length ? v.join(", ") : "(blank)";
  const s = (v || "").trim();
  return s || "(she left this blank)";
}

/** Words ≈ 130 per spoken minute. Drives the hard length requirement. */
export function targetWords(audioLength: string | string[] | undefined): {
  minutes: number;
  words: number;
} {
  const m = parseInt(String(audioLength || "").replace(/\D/g, ""), 10);
  const minutes = Number.isFinite(m) && m > 0 ? m : 10;
  return { minutes, words: minutes * 130 };
}

function answersBlock(a: BlueAnswers): string {
  return `— DESIRED REALITY —
Life area: ${fmt(a.life_area)}
Outcome she's calling in: ${fmt(a.desired_outcome)}
Why it matters: ${fmt(a.deeper_why)}
What becomes possible: ${fmt(a.becomes_possible)}

— CURRENT CONTRACTION —
Fears/doubts when she imagines receiving it: ${fmt(a.current_fears)}
Where she feels contraction in her body: ${fmt(a.body_contraction)}
Emotions present: ${fmt(a.emotions)}
Pattern she keeps repeating: ${fmt(a.repeating_pattern)}
What she fears if she actually succeeds: ${fmt(a.fear_if_successful)}

— PROTECTIVE PATTERN —
How the pattern protects her: ${fmt(a.protective_pattern)}
What her nervous system believes is unsafe about changing: ${fmt(a.ns_unsafe)}
Old identity she's ready to release: ${fmt(a.old_identity)}

— NEW IDENTITY —
Who she's becoming: ${fmt(a.new_identity)}
What this version believes: ${fmt(a.new_beliefs)}
How she moves/speaks/chooses/receives/creates: ${fmt(a.new_self_behavior)}
What success feels like in her body: ${fmt(a.success_body)}
Qualities she embodies: ${fmt(a.desired_feelings)}

— FUTURE MEMORY —
A normal day, already done: ${fmt(a.future_memory)}
What she sees/hears/feels/knows: ${fmt(a.future_senses)}
What feels natural now / no longer difficult: ${fmt(a.feels_natural)}
Evidence reality has shifted: ${fmt(a.evidence)}

— TONE & SOUND —
Tone: ${fmt(a.tone)}
Listening time: ${fmt(a.listening_time)} (include the Sleep Integration movement only if night or sleep)`;
}

/** Step 1 — write the full script as plain prose. */
export function buildScriptMessages(answers: BlueAnswers) {
  const { minutes, words } = targetWords(answers.audio_length);
  const userContent = `Write her tape from these answers. Regulate the nervous system first, no bypassing, personalize to her exact words.

${answersBlock(answers)}

LENGTH IS A HARD REQUIREMENT: this tape is ${minutes} minutes. Write AT LEAST ${words} words (aim ${words}–${Math.round(
    words * 1.15
  )}). Do not summarize or rush to the end — linger, fully develop all seven movements, deepen sensory detail, and repeat key affirmations gently until you reach the length. Output ONLY the spoken script.`;

  return [
    { role: "system" as const, content: SCRIPT_SYSTEM },
    { role: "user" as const, content: userContent },
  ];
}

/** Step 1b — continue an under-length draft until it reaches the target. */
export function buildContinueMessages(
  answers: BlueAnswers,
  draft: string,
  remainingWords: number
) {
  return [
    { role: "system" as const, content: SCRIPT_SYSTEM },
    {
      role: "user" as const,
      content: `Here is a script-in-progress for the tape described below. It is too short. Continue it naturally from where it ends — do NOT repeat what's already written, do NOT restart. Add roughly ${remainingWords} more words, deepening the future-self embodiment, identity lock-in, and (if night/sleep) sleep integration, then bring it to a gentle close. Output ONLY the additional spoken words to append.

${answersBlock(answers)}

SCRIPT SO FAR:
"""
${draft}
"""`,
    },
  ];
}

/**
 * AI Evolution — recommend the NEXT identity journey.
 *
 * Blue is a coach, not a menu. After a journey + reflection, this decides
 * the next right layer of identity work. Input: the original onboarding,
 * how many sessions she completed, and her reflection answers. Output: a
 * single confident recommendation (with a short coach's rationale) plus a
 * couple of alternates — but the UI should lead with the one pick.
 */
export function buildNextJourneyMessages(input: {
  answers: BlueAnswers;
  sessionsCompleted: number;
  previousTitle: string;
  reflectionPrompts: Record<string, string>;
  reflectionScales: Record<string, number>;
}) {
  const scaleLines = Object.entries(input.reflectionScales || {})
    .map(([k, v]) => `  ${k}: ${v}/10`)
    .join("\n");
  const promptLines = Object.entries(input.reflectionPrompts || {})
    .map(([k, v]) => `  ${k}: ${v || "(blank)"}`)
    .join("\n");

  const system = `You are Blue, an AI Identity Coach guiding a woman through ONE transformation at a time, in sequence — an Identity Operating System. She has just completed an identity journey. Using her original onboarding, her listening history, and her reflection, decide the single next identity journey that is the right next layer of growth — what the world's best coach would choose for her NOW. Build on what shifted; gently address what's still contracted; don't repeat what's integrated. Warm, perceptive, never a generic menu.

Return ONLY a JSON object:
{
  "recommended": { "title": "the next journey, an identity (e.g. 'Receiving With Ease')", "focus": "one line on what it rewires", "why": "2-3 sentences in a warm coaching voice, referencing HER reflection specifically" },
  "alternates": [ { "title": "...", "focus": "..." }, { "title": "...", "focus": "..." } ]
}`;

  const user = `ORIGINAL ONBOARDING:
${answersBlock(input.answers)}

JUST COMPLETED: "${input.previousTitle}" (${input.sessionsCompleted} sessions)

REFLECTION — ratings (1–10):
${scaleLines || "  (none)"}

REFLECTION — in her words:
${promptLines || "  (none)"}

Choose her next journey. Return ONLY the JSON object.`;

  return [
    { role: "system" as const, content: system },
    { role: "user" as const, content: user },
  ];
}

/** Step 2 — extract metadata JSON from the finished script. */
export function buildMetaMessages(script: string, answers: BlueAnswers) {
  return [
    { role: "system" as const, content: META_SYSTEM },
    {
      role: "user" as const,
      content: `Tone: ${fmt(answers.tone)}\n\nSCRIPT:\n"""\n${script}\n"""\n\nReturn ONLY the JSON object.`,
    },
  ];
}
