/**
 * Blue — the data schema, onboarding flow, and the deterministic logic
 * (binaural recommendation, listening protocol, distress safety check).
 *
 * This is the single source of truth for WHAT we ask and HOW we store it.
 * The script-writing prompt lives in bluePrompt.ts; the audio bed lives in
 * scripts/generate-soundbed.mjs.
 *
 * Methodology: nervous-system safety before mindset change, contraction →
 * expansion, identity-level transformation, being → doing → having, no
 * spiritual bypassing (fear is acknowledged and released, not skipped).
 */

/* ──────────────────────────────────────────────────────────────────
 *  ANSWER SCHEMA  (keys match the agreed data structure)
 * ────────────────────────────────────────────────────────────────── */
export type BlueAnswers = {
  // Section 1 — Desired Reality
  life_area?: string;
  desired_outcome?: string;
  deeper_why?: string;
  becomes_possible?: string;
  // Section 2 — Current Contraction
  current_fears?: string;
  body_contraction?: string;
  emotions?: string;
  repeating_pattern?: string;
  fear_if_successful?: string;
  // Section 3 — Protective Pattern
  protective_pattern?: string;
  ns_unsafe?: string;
  old_identity?: string;
  // Section 4 — New Identity
  new_identity?: string;
  new_beliefs?: string;
  new_self_behavior?: string;
  success_body?: string;
  desired_feelings?: string[];
  // Section 5 — Future Memory
  future_memory?: string;
  future_senses?: string;
  feels_natural?: string;
  evidence?: string;
  // Section 6 — Tone + Audio
  tone?: string;
  audio_length?: string;
  listening_time?: string;
  binaural_preference?: string;
  [key: string]: string | string[] | undefined;
};

/* ──────────────────────────────────────────────────────────────────
 *  ONBOARDING FLOW
 * ────────────────────────────────────────────────────────────────── */
export type QInput = "text" | "single" | "multi";

export type BlueQuestion = {
  key: keyof BlueAnswers | string;
  type: QInput;
  label: string;
  placeholder?: string;
  options?: string[]; // for single / multi
  examples?: string[]; // tappable suggestions that fill a text field
  optional?: boolean;
};

export type BlueSection = {
  title: string;
  intro: string;
  questions: BlueQuestion[];
};

export const BLUE_SECTIONS: BlueSection[] = [
  {
    title: "Desired reality",
    intro: "Let's begin with what you're calling in. There are no wrong answers — just be honest with yourself.",
    questions: [
      {
        key: "life_area",
        type: "single",
        label: "What area of life do you want to rewire?",
        options: [
          "Business",
          "Money",
          "Love",
          "Confidence",
          "Visibility",
          "Health",
          "Purpose",
          "Creativity",
          "Relationships",
        ],
      },
      {
        key: "desired_outcome",
        type: "text",
        label: "What specific outcome are you calling in?",
        placeholder: "Say it as if you're allowed to want it fully...",
      },
      {
        key: "deeper_why",
        type: "text",
        label: "Why does this matter to you?",
        placeholder: "The real reason, underneath the obvious one...",
      },
      {
        key: "becomes_possible",
        type: "text",
        label: "What would become possible if this changed?",
        placeholder: "For you, and for the people around you...",
      },
    ],
  },
  {
    title: "Current contraction",
    intro: "Now we gently turn toward what tightens when you imagine receiving this. We're not fixing it — just noticing it with kindness.",
    questions: [
      {
        key: "current_fears",
        type: "text",
        label: "What thoughts, fears, or doubts come up when you imagine receiving this?",
        placeholder: "Let them speak without editing them...",
      },
      {
        key: "body_contraction",
        type: "text",
        label: "Where do you feel that contraction in your body?",
        placeholder: "Chest, throat, belly, jaw, shoulders...",
      },
      {
        key: "emotions",
        type: "text",
        label: "What emotions are present?",
        placeholder: "Fear, grief, shame, doubt, anger, numbness...",
      },
      {
        key: "repeating_pattern",
        type: "text",
        label: "What pattern do you keep repeating?",
        placeholder: "The loop you've watched yourself run before...",
      },
      {
        key: "fear_if_successful",
        type: "text",
        label: "What are you afraid might happen if you actually get what you want?",
        placeholder: "Even if it sounds irrational, name it...",
      },
    ],
  },
  {
    title: "Protective pattern",
    intro: "These patterns aren't flaws — they're old protections. Let's find what yours has been keeping you safe from.",
    questions: [
      {
        key: "protective_pattern",
        type: "text",
        label: "How might this current pattern be trying to protect you?",
        placeholder: "What has it spared you from feeling or risking?",
      },
      {
        key: "ns_unsafe",
        type: "text",
        label: "What does your nervous system believe would be unsafe about changing?",
        placeholder: "If I changed, then...",
      },
      {
        key: "old_identity",
        type: "text",
        label: "What old identity are you ready to release?",
        placeholder: "Tap one below, or write your own...",
        examples: [
          "I have to prove myself",
          "Visibility is unsafe",
          "Success requires exhaustion",
          "I'm too much",
          "I'll be abandoned if I shine",
          "Money is hard to receive",
          "I need to be perfect before I begin",
        ],
      },
    ],
  },
  {
    title: "New identity",
    intro: "Now we meet her — the version of you on the other side of this. Speak from her, not about her.",
    questions: [
      {
        key: "new_identity",
        type: "text",
        label: "Who are you becoming?",
        placeholder: "Describe her like someone you already know...",
      },
      {
        key: "new_beliefs",
        type: "text",
        label: "What does this version of you believe?",
        placeholder: "About herself, money, love, what's possible...",
      },
      {
        key: "new_self_behavior",
        type: "text",
        label: "How does this version of you move, speak, choose, receive, and create?",
        placeholder: "Her pace, her yes and her no, how she lets things in...",
      },
      {
        key: "success_body",
        type: "text",
        label: "What does success feel like in her body?",
        placeholder: "Warm, spacious, steady, light, grounded...",
      },
      {
        key: "desired_feelings",
        type: "multi",
        label: "What qualities does she embody?",
        options: [
          "Safe",
          "Magnetic",
          "Wealthy",
          "Relaxed",
          "Powerful",
          "Visible",
          "Loved",
          "Chosen",
          "Free",
          "Creative",
          "Devoted",
          "Trusting",
        ],
      },
    ],
  },
  {
    title: "Future memory",
    intro: "Imagine it's already done. We're not hoping — we're remembering forward.",
    questions: [
      {
        key: "future_memory",
        type: "text",
        label: "It's already done. What does a normal day look like?",
        placeholder: "Walk through it, morning to night...",
      },
      {
        key: "future_senses",
        type: "text",
        label: "What do you see, hear, feel, and know?",
        placeholder: "The textures of this life, up close...",
      },
      {
        key: "feels_natural",
        type: "text",
        label: "What no longer feels difficult — and what feels natural now?",
        placeholder: "What used to take effort and simply doesn't anymore...",
      },
      {
        key: "evidence",
        type: "text",
        label: "What evidence shows that reality has shifted?",
        placeholder: "The proof you'd point to...",
      },
    ],
  },
  {
    title: "Tone & sound",
    intro: "Finally, let's shape how your tape sounds and when you'll listen.",
    questions: [
      {
        key: "tone",
        type: "single",
        label: "What tone do you want?",
        options: [
          "Soft",
          "Powerful",
          "Sensual",
          "Spiritual",
          "Grounded",
          "Luxurious",
          "Motherly",
          "Direct",
          "Mystical",
        ],
      },
      {
        key: "audio_length",
        type: "single",
        label: "How long would you like it?",
        options: ["5 min", "10 min", "15 min", "20 min", "30 min"],
      },
      {
        key: "listening_time",
        type: "single",
        label: "When will you listen?",
        options: ["Morning", "Night", "Sleep", "Meditation"],
      },
      {
        key: "binaural_preference",
        type: "single",
        label: "Optional sound bed underneath the voice",
        options: [
          "Alpha — relaxed focus & receptivity",
          "Theta — subconscious rewriting",
          "Delta — sleep & restoration",
          "No sound bed",
        ],
      },
    ],
  },
];

/** Flattened list of questions, each tagged with its section, for the UI. */
export const BLUE_FLAT = BLUE_SECTIONS.flatMap((s, si) =>
  s.questions.map((q, qi) => ({
    ...q,
    sectionTitle: s.title,
    sectionIntro: s.intro,
    sectionIndex: si,
    firstInSection: qi === 0,
  }))
);

/* ──────────────────────────────────────────────────────────────────
 *  BINAURAL / FREQUENCY RECOMMENDATION  (deterministic — not the model)
 *  Presented as optional ambient support. No medical claims.
 * ────────────────────────────────────────────────────────────────── */
export type FrequencyRec = {
  label: string;
  detail: string;
  headphones: boolean;
};

// SPEAKER-FIRST (product philosophy v2): the spoken script is the hero;
// a cinematic ambient bed with gentle isochronic pulses sits underneath.
// Isochronic pulses work on a phone or bedside speaker — NO headphones
// required, and we deliberately do NOT rely on binaural beats.
export function recommendFrequency(answers: BlueAnswers): FrequencyRec {
  const when = (answers.listening_time || "").toLowerCase();
  const pref = (answers.binaural_preference || "").toLowerCase();

  if (pref.startsWith("no sound bed")) {
    return {
      label: "Voice only",
      detail: "Just the narration, no ambient bed underneath.",
      headphones: false,
    };
  }

  if (when.includes("night") || when.includes("sleep")) {
    return {
      label: "Theta drifting toward delta",
      detail:
        "Ambient soundscape with gentle isochronic pulses easing from a theta (~6 Hz) feel toward delta-deep calm for sleep. Plays on any speaker — headphones optional. Ambient support, not medical treatment.",
      headphones: false,
    };
  }
  if (when.includes("meditation")) {
    return {
      label: "Theta (~6 Hz feel)",
      detail:
        "Ambient bed with soft isochronic theta pulses for deep inner work. Plays on any speaker — headphones optional.",
      headphones: false,
    };
  }
  if (when.includes("morning")) {
    return {
      label: "Alpha (~10 Hz feel)",
      detail:
        "Brighter ambient bed with alpha-range pulses for relaxed focus and receptivity. Plays on any speaker.",
      headphones: false,
    };
  }
  return {
    label: "Theta (~7 Hz feel)",
    detail:
      "Ambient bed with soft isochronic theta pulses for subconscious receptivity. Plays on any speaker — headphones optional.",
    headphones: false,
  };
}

/** The listening protocol — static guidance. Speaker-first by design. */
export function listeningProtocol(_rec: FrequencyRec): string[] {
  return [
    "Listen nightly toward 21 sessions — missing a night never sets you back.",
    "Plays on your phone or bedside speaker; let yourself drift off to it.",
    "Let any emotional release move through you; journal what surfaces.",
    "Please don't listen while driving or operating anything.",
  ];
}

/* ──────────────────────────────────────────────────────────────────
 *  SAFETY — light distress screen.
 *  Coaching context mentions "fear", "anxiety", "trauma" constantly, so
 *  we flag ONLY high-signal acute-risk phrases to avoid false positives.
 * ────────────────────────────────────────────────────────────────── */
const ACUTE_PHRASES = [
  "suicid",
  "kill myself",
  "end my life",
  "want to die",
  "don't want to be alive",
  "self-harm",
  "self harm",
  "hurt myself",
  "harm myself",
  "cutting myself",
];

export function detectDistress(answers: BlueAnswers): boolean {
  const text = Object.values(answers)
    .flatMap((v) => (Array.isArray(v) ? v : [v]))
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return ACUTE_PHRASES.some((p) => text.includes(p));
}

export const DISTRESS_MESSAGE =
  "Some of what you shared sounds really heavy, and you deserve real support with it — more than an app can give. Blue is for relaxation and personal growth, not a substitute for mental health care. If you're in crisis, please reach out to a qualified professional or a local crisis line right now. You can come back to this anytime.";
