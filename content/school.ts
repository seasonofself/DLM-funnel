// ─────────────────────────────────────────────────────────────
//  Season of Self · The School (/school)
//  Single source of truth for everything the page renders.
//  Edit copy, dates, and numbers here — not in the components.
// ─────────────────────────────────────────────────────────────

/* ─── checkout ─────────────────────────────────────────────
   One Circle paywall holds both price options ($25/mo and
   $197/yr); students pick their plan on the checkout page, so
   every "join" button points to the same URL. */
export const checkoutUrl =
  "https://seasonofself.circle.so/checkout/season-of-self";

/* ═══════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════ */

export type SchoolModule = {
  number: string;
  verb: string; // the one-word journey step: ASSESS, VISUALIZE, ...
  title: string;
  description: string;
};

export type WhatsInsideItem = {
  title: string;
  description: string;
  note: string | null;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  label: string;
  sublabel: string;
  price: string;
  per: string;
  cta: string;
  badge: string | null;
};

/* ─── November semester model (NOT RENDERED — do not wire up) ───
   When the school evolves into seasonal cohorts, the switch should
   be a data + copy change, not a rebuild. This is the contract for
   that day. Nothing on the page reads `term` while SEMESTER_MODE
   is false. */
export type Term = {
  name: string; // e.g. "The Winter Term"
  startDate: string; // ISO date, e.g. "2026-11-03"
  applicationUrl: string;
};

export const SEMESTER_MODE = false;
export const term: Term | null = null;

/* ═══════════════════════════════════════════════════════════
   Living calendar — "This month at school"
   ═══════════════════════════════════════════════════════════ */

/* Live call schedule, in order, as ISO dates (YYYY-MM-DD).
   The page shows the first date that hasn't passed yet and moves
   to the next one automatically, so add future calls as they're
   scheduled. If CIRCLE_API_TOKEN is set (see .env.local.example),
   the date comes straight from the Circle events calendar instead
   and this list is only the fallback. */
export const upcomingCalls = ["2026-07-23", "2026-08-31"];

export const thisMonth = {
  nextCallWith: "with Charlotte & Katja",
  officeHours: "Post your question in the community anytime. We answer.",
  /* One-line monthly theme — skipped for now. Set a string here
     whenever you want the row to appear; null keeps it hidden. */
  theme: null as string | null,
};

/* ═══════════════════════════════════════════════════════════
   How the school works — the learn-then-live rhythm
   ═══════════════════════════════════════════════════════════ */

export const howItWorks = [
  {
    step: "01",
    title: "Enroll",
    line: "Join today, start Dream Life Mapping tonight.",
  },
  {
    step: "02",
    title: "Learn",
    line: "Move through the six modules at your pace, with us and the community around you.",
  },
  {
    step: "03",
    title: "Live it",
    line: "Bring your real life to the live calls and let the work leave the page.",
  },
];

/* ═══════════════════════════════════════════════════════════
   The curriculum — Dream Life Mapping
   ═══════════════════════════════════════════════════════════ */

export const modules: SchoolModule[] = [
  {
    number: "01",
    verb: "ASSESS",
    title: "Map what you are actually here to build",
    description:
      "Before you create your future, you get honest about where you are. You step out of autopilot and actually look at your life. How your days feel, where your energy goes, what feels aligned and what doesn’t. You map out the key areas of your life and see the patterns clearly, so you understand what is working and what is quietly asking for change.",
  },
  {
    number: "02",
    verb: "VISUALIZE",
    title: "Get a clear picture of the life and income you want",
    description:
      "This is where you connect to the life you actually want to live. Through breathwork and guided visualization, your mind quiets down and something more intuitive comes forward. You see your future across every layer of your life and your work, so it stops feeling abstract and starts feeling real and familiar. This becomes the reference point you move toward.",
  },
  {
    number: "03",
    verb: "RELEASE",
    title: "Clear the fear and overthinking that keep you stuck",
    description:
      "Once you connect to what you want, everything that says it is not possible shows up. Fear, doubt, resistance, the inner voice that questions everything. In this module, you learn how to work with those responses instead of being stopped by them. You identify limiting beliefs, understand how they show up in your body, and practice moving through them so you can keep building even when fear is present.",
  },
  {
    number: "04",
    verb: "ALIGN",
    title: "Find your zone of genius and the work only you can do",
    description:
      "This is where you answer the question: what direction actually makes sense for me? You explore the intersection of your strengths, your interests, your values, and the kind of life you want to create. You follow what feels alive, instead of trying to force a perfect answer, and begin to see a direction that feels both meaningful and sustainable. You leave with a clear next direction to explore.",
  },
  {
    number: "05",
    verb: "CREATE",
    title: "Build your first real, aligned offer or next step",
    description:
      "Now you begin. Instead of waiting for a perfect plan, you learn how to move through exploration. You follow your curiosity, pay attention to what pulls you, and take action that turns your idea into something real you can put in front of people. You start building momentum, trusting that clarity comes through movement and that your path forms as you go.",
  },
  {
    number: "06",
    verb: "EMBODY",
    title: "Become the woman who already lives this life",
    description:
      "This is where everything integrates. You begin living as the version of you who already inhabits that life. You align your habits, your environment, and your daily choices with your vision so it becomes something you are actively living, not just thinking about. This is what makes the shift real and sustainable.",
  },
];

/* The Somatic Toolkit sits alongside the six modules, not inside
   the numbered sequence. It renders as the closing row of the
   curriculum, labeled as woven through every module. */
export const somaticToolkit = {
  verb: "SOMATIC TOOLKIT",
  title: "Stay calm, clear, and moving",
  description:
    "This is where you go when something feels off. When you feel overwhelmed, stuck, or in your head, this toolkit helps you come back into your body and back into clarity. Inside, you’ll find simple somatic practices to process emotions, regulate your nervous system, and soften through resistance so you can move forward from a more grounded place. You don’t need to push through or force decisions. You reset, reconnect, and act from what actually feels right.",
};

/* ═══════════════════════════════════════════════════════════
   The mirror — her inner monologue. First person, like thoughts.
   ═══════════════════════════════════════════════════════════ */

export const mirrorLines = [
  "I’m grateful for my life. So why does it feel like it isn’t mine?",
  "I go through my days doing what I need to do. But my work doesn’t light me up, and I know I’m capable of more.",
  "I have ideas. Maybe too many. I’m just not moving on any of them.",
  "I keep waiting to feel ready. I’ve been waiting for a while.",
];

/* ═══════════════════════════════════════════════════════════
   What’s inside — exact, quantified. Vagueness kills enrollment.
   ═══════════════════════════════════════════════════════════ */

export const whatsInside: WhatsInsideItem[] = [
  {
    title: "The Dream Life Mapping course",
    description:
      "6 modules, self-paced, yours from day one. The step-by-step process for going from something’s missing to living it.",
    note: "Sold alone for $197.",
  },
  {
    title: "Monthly live group coaching with Charlotte & Katja",
    description:
      "Bring your real situation and get coached live by both of us. Every call is recorded, so you never lose it if you can’t make it.",
    note: null,
  },
  {
    title: "Us, between calls",
    description:
      "Async access to both of us inside the community. Post a question anytime. We answer.",
    note: null,
  },
  {
    title: "The Season of Self community",
    description:
      "Women in the same season, sharing wins, stuck points, and next steps. A room of women walking the path alongside you.",
    note: null,
  },
  {
    title: "The Somatic Toolkit",
    description:
      "Nervous-system practices for the fear that shows up when you start moving. Come back to your body, then keep going.",
    note: null,
  },
];

/* ═══════════════════════════════════════════════════════════
   Teachers
   ═══════════════════════════════════════════════════════════ */

export const teacherCredentials = {
  charlotte:
    "Founder of Suntouched (100,000+ customers) · Certified life-purpose coach · Meditator with a twice-daily practice",
  katja: "Yoga teacher · Breathwork facilitator · Somatic practitioner",
};

export const teachersSharedLine =
  "We teach every call ourselves. There is no team of coaches behind the curtain.";

/* ═══════════════════════════════════════════════════════════
   Seasonal narrative — philosophy, not an announcement
   ═══════════════════════════════════════════════════════════ */

export const seasonalManifesto =
  "We believe growth moves in seasons. Some seasons are for planting, some for clearing, some for harvest. The school is where you learn to work with yours.";

/* The six module verbs, in order, for the journey line. */
export const journeyVerbs = modules.map((m) => m.verb);

/* ═══════════════════════════════════════════════════════════
   Pricing — Tuition
   ═══════════════════════════════════════════════════════════ */

export const pricing: { monthly: PricingPlan; annual: PricingPlan } = {
  monthly: {
    label: "Tuition · Monthly",
    sublabel: "Founding 100 rate, locked for as long as you stay",
    price: "$25",
    per: "per month",
    cta: "Join monthly →",
    badge: null,
  },
  annual: {
    label: "Tuition · Annual",
    sublabel: "Same everything, about 4 months free",
    price: "$197",
    per: "per year",
    cta: "Join annual →",
    badge: "What the course alone used to cost",
  },
};

/* TODO(Charlotte): if a real seats-remaining count for the
   Founding 100 can be wired to live Circle data later, surface it
   near this note. Never render a hardcoded or estimated number. */
export const foundingHundredNote =
  "We’re opening the school with The Founding 100. The first 100 students lock in $25/mo (or $197/yr) for as long as they stay, even when tuition goes up.";

/* ═══════════════════════════════════════════════════════════
   Student stories
   NOTE: Believable placeholder testimonials.
   TODO: REPLACE WITH REAL STUDENT QUOTES BEFORE LAUNCH.
   Publishing fabricated testimonials as real customer
   endorsements violates FTC Endorsement Guides. Swap each entry
   with a verified quote and the person's real first name + city
   (with consent).
   ═══════════════════════════════════════════════════════════ */

export const testimonials: Testimonial[] = [
  {
    quote:
      "I came in foggy and burnt out from a job I knew wasn’t mine. I left with a real direction and the first paying client of the thing I actually wanted to build. The biggest shift was finally trusting myself enough to move.",
    name: "Marina",
    location: "Lisbon, Portugal",
  },
  {
    quote:
      "I’d done every journal, read every book, taken every quiz. Nothing made me actually do the thing. This did. Within three months I had quit my role and replaced two-thirds of my income with my own work.",
    name: "Sienna",
    location: "Austin, TX",
  },
  {
    quote:
      "I thought I needed another course. I needed permission and a plan. The community is what kept me from quitting on myself. I finally feel like I’m building a life that’s mine.",
    name: "Hannah",
    location: "Melbourne, Australia",
  },
];

/* ═══════════════════════════════════════════════════════════
   FAQ — objections in her voice, soft micro-CTA endings
   ═══════════════════════════════════════════════════════════ */

export const schoolFaqs: FaqItem[] = [
  {
    question: "What if I don’t know what I want at all?",
    answer:
      "That’s exactly where we start. The first stage of Dream Life Mapping, Assess, meets you there and helps you reconnect to what feels true for you. You don’t need to arrive with answers. You just need to be willing to look. Join and start with stage one tonight.",
  },
  {
    question: "How much time does this take?",
    answer:
      "About 1 to 2 hours a week, and it’s fully self-paced. The course is yours to move through at your own speed, the live calls are recorded, and there’s no schedule to keep up with. You move as your season allows.",
  },
  {
    question: "What exactly happens on the monthly calls?",
    answer:
      "Live group coaching with Charlotte and Katja. You bring your real situation, and we coach you through it, right there on the call. Every call is recorded and posted, so you can watch back or catch up anytime. Come to the next one and bring your question.",
  },
  {
    question: "What if I’m shy about sharing in a community?",
    answer:
      "You’re welcome to lurk. You can read, take what you need, and write instead of speak. There’s no performance here and no pressure to show up a certain way. Come in quietly and move at your own pace.",
  },
  {
    question: "Can I really cancel anytime?",
    answer:
      "Yes. Two clicks, no email needed, no hoops. You stay because it’s helping, not because you’re locked in. Join today and see how it feels.",
  },
  {
    question: "I already bought Dream Life Mapping. What happens to me?",
    answer:
      "Your access continues exactly as promised, and you’re being upgraded to full enrollment in the school at no extra cost. We’ll email you the details. Nothing you paid for goes away.",
  },
  {
    question: "Is this a business course?",
    answer:
      "It’s a life-direction school. Building your own thing is one path we support, not a requirement. Whatever your soul work turns out to be, this helps you design a life around it. Join and find your direction first.",
  },
  {
    question: "What if I fall behind?",
    answer:
      "There’s no behind. This is a season, not a sprint. The course, the calls, and the community are all here whenever you come back to them. Start where you are.",
  },
];

/* ═══════════════════════════════════════════════════════════
   This is for you if — contradictions, not demographics
   ═══════════════════════════════════════════════════════════ */

export const schoolForYou = [
  "You have a job that looks good on paper, and a quiet voice that keeps asking “is this really it?”",
  "You’ve done the inner work, read the books, and you’re still circling the same decision",
  "You have ideas, maybe several, but you’re overthinking instead of moving",
  "You want work that feels like you, and pays you, without a life of nonstop pushing to get it",
  "You don’t need more information. You need direction, support, and momentum",
];

export const schoolNotForYou = [
  "You want a get-rich-quick promise",
  "You want someone to hand you the answer instead of walking with you",
  "You’re not willing to actually do the work",
];
