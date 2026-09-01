/**
 * Blue — the Reflection Interview.
 *
 * Triggered when a journey reaches ~21 sessions. Its purpose is to capture
 * what genuinely shifted, so the AI can choose the NEXT identity journey
 * (see buildNextJourneyMessages in bluePrompt.ts).
 *
 * This is the data definition; the /blue/reflection flow renders it. Kept
 * separate so the questions are easy to tune without touching UI.
 */

export type ReflectionScale = {
  key: string;
  statement: string; // rated 1–10
};

export type ReflectionPrompt = {
  key: string;
  label: string;
  placeholder?: string;
};

export const REFLECTION_PROMPTS: ReflectionPrompt[] = [
  {
    key: "how_different",
    label: "How different do you feel compared to three weeks ago?",
    placeholder: "Even subtle shifts count...",
  },
  {
    key: "feels_natural",
    label: "What now feels natural that didn't before?",
  },
  {
    key: "still_difficult",
    label: "What still feels difficult?",
  },
  {
    key: "still_contracted",
    label: "Where do you still notice contraction?",
    placeholder: "In your body, or in which situations...",
  },
  {
    key: "surprised",
    label: "What surprised you?",
  },
];

export const REFLECTION_SCALES: ReflectionScale[] = [
  { key: "trust_self", statement: "I trust myself." },
  { key: "safe_seen", statement: "I feel safe being seen." },
  { key: "can_receive", statement: "I believe I can receive what I want." },
];

export type ReflectionAnswers = {
  prompts: Record<string, string>;
  scales: Record<string, number>; // 1–10
};
