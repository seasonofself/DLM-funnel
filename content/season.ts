// ─────────────────────────────────────────────────────────────
//  Season of Self · The Season (/cohort)
//  Single source of truth for everything the sales page renders.
//  Copy comes verbatim from the Aug 19 copy doc ("copy · the
//  autumn season — sales page + application"). Edit here, not in
//  the components.
//
//  Voice rules: lowercase headers · calm, no hype · & where it
//  reads naturally · no em dashes in rendered copy · no countdown
//  timers · one CTA sitewide: apply.
// ─────────────────────────────────────────────────────────────

/* ─── key facts ─────────────────────────────────────────── */
export const season = {
  name: "the autumn season",
  dates: "sep 29 – dec 18",
  startLong: "September 29",
  applicationsCloseLong: "September 24",
  banner: "the autumn season · sep 29 – dec 18 · applications now open",
  /* TODO(Charlotte): confirm final call time with Katja. */
  callTime: "Wednesdays at 10am Costa Rica · 4pm Portugal · 5pm Germany · 11am New York",
  price: "$997",
  paymentPlan: "3 × $350",
  applyAnchor: "#apply",
};

/* ─── hero ──────────────────────────────────────────────── */
/* Slimmed Aug 21 per Charlotte: eyebrow, one headline, CTA,
   microline. No outcome line or aside in the hero. */
export const hero = {
  eyebrow: "season of self · the autumn season · sep 29 – dec 18",
  headline:
    "for women who feel unfulfilled in their work & have been dreaming of starting something of their own",
  cta: "apply for the autumn season",
  microline: "live cohort · small group · two founders · twelve weeks",
};

/* ─── the opening letter ────────────────────────────────── */
export const letter = {
  heading: "this is for the woman tired of building someone else's dream.",
  paragraphs: [
    "You did what you were told to do.",
    "School. Degree. A good job in your field.",
    "There's a lot in your life to be grateful for. And still, you have this quiet sense that you're capable of more.",
    "You secretly dream of working for yourself. Making your own schedule. Slow mornings. Work that's actually yours. Earning more & working less, not because you're lazy, but because you've seen that it's possible.",
    "But you feel afraid. Stuck. You have ideas, maybe too many, and no way of knowing which one to move on.",
    "So every day, you keep giving your best hours to building someone else's dream.",
    "Season of Self is for the moment you decide to stop waiting. To finally start listening to yourself & moving in the direction of what's calling you.",
    "Twelve weeks. A small circle of women in the exact same place. Two guides who left the expected path & built their own.",
  ],
  signature: "Charlotte & Katja",
  signatureLine: "season of self",
  cta: "apply now",
};

/* ─── is this you? ──────────────────────────────────────── */
export const mirror = {
  heading: "is this you?",
  quotes: [
    "I'm grateful for my life. So why does it feel like it isn't mine?",
    "I have ideas. Maybe too many. I'm just not moving on any of them.",
    "I keep waiting to feel ready. I've been waiting for a while.",
  ],
  paragraphs: [
    "Sunday night comes with a weight you can't fully explain.",
    "You fantasize about quitting, then talk yourself out of it by Monday morning, because fear is holding you back.",
    "You have a notes app full of ideas. The retreat. The creative studio. The consulting thing. Maybe you want to serve and help other people. You are just craving work that actually feels meaningful and impactful. But then self-doubt creeps in: is this the one? could it actually pay? who am I to do this?",
    "So the idea goes back in the notes app. And you go back to work.",
  ],
  /* the italic inner-voice fragment inside paragraph three */
  italicFragment: "is this the one? could it actually pay? who am I to do this?",
};

/* ─── the premise ───────────────────────────────────────── */
export const premise = {
  heading: "you can't think your way to the answer. you've tried.",
  intro: "Here's what's actually in the way. It isn't a lack of ideas.",
  blocks: [
    {
      lead: "It's noise.",
      body: "Anxiety & a sense of meaninglessness have risen sharply in the last decade, and one of the strongest links researchers point to is the phone. The scroll, the comparison, the constant stimulation. It fills every quiet moment where an honest answer might have surfaced.",
    },
    {
      lead: "And it's disconnection.",
      body: "Somewhere along the way, you moved into your head & stopped living in your body. But a calling isn't a thought. You feel what's yours: the idea that gives you energy instead of draining it. If you can't feel much of anything right now, no amount of brainstorming will get you there.",
    },
  ],
  orderIntro: "So the Season works in a specific order.",
  order: [
    {
      lead: "First, quiet.",
      body: "A gentle agreement around your phone & social media for the twelve weeks, with a daily meditation and journaling practice in its place.",
      motif: "crescent" as const,
    },
    {
      lead: "Then, the body.",
      body: "Breathwork. Somatic release. Movement & dance. Letting go of the fear & the old stories stored in your system, and letting aliveness come back.",
      motif: "wave" as const,
    },
    {
      lead: "Then, the vision.",
      body: "From that quieter, more connected place, you reconnect with your intuition & get honest about what you actually want your life & work to look like. And which idea is truly yours.",
      motif: "sun" as const,
    },
    {
      lead: "Then, the plan.",
      body: "Direction chosen, action plan built, and a 30-day experiment out in the real world before the season ends.",
      motif: "sprout" as const,
    },
  ],
  close:
    "Quiet, body, vision, plan. In that order. Every program you've seen starts at step four. That's why they haven't worked.",
};

/* ─── the four movements ────────────────────────────────── */
export const movements = {
  heading: "twelve weeks · four movements",
  items: [
    {
      weeks: "weeks 1–3",
      title: "come home",
      body: "the life & work audit · the attention audit · nervous-system regulation · meditation & daily rhythm · the tech agreement begins.",
      closing: "Quiet the noise enough to hear yourself.",
      motif: "crescent" as const,
    },
    {
      weeks: "weeks 4–6",
      title: "remember what matters",
      body: "joy · aliveness · values · what younger-you loved · the conditions where you thrive · breathwork & movement to let the body remember what thinking can't.",
      closing: "Collect the data a real decision needs.",
      motif: "spiral" as const,
    },
    {
      weeks: "weeks 7–9",
      title: "find your direction",
      body: "your gifts · what's yours vs. inherited · releasing the fears & old identities in the way · and choosing: of everything in your notes app, and the things you've never dared write down, which idea is actually yours.",
      closing: "Not your one cosmic purpose. The next direction worth your energy.",
      motif: "sun" as const,
    },
    {
      weeks: "weeks 10–12",
      title: "live it",
      body: "turn the direction into an action plan & a 30-day experiment you run while we hold you: talk to the first potential clients, prototype the offer, test the new rhythm, take the first real step toward working for yourself. We close with a ceremony.",
      closing: "You close already moving.",
      motif: "sprout" as const,
    },
  ],
};

/* ─── what you receive ──────────────────────────────────── */
/* Final list per the copy doc. Confirmed Aug 2026: there are NO
   private sessions in the offer — never mention them anywhere. */
export const receive = {
  heading: "what you receive",
  items: [
    {
      title: "a live call every week",
      body: "Teaching, practice & coaching with both of us. Not a webinar, a room. Every call recorded.",
    },
    {
      title: "the curriculum, yours to keep",
      body: "Guided lessons & practices unlocked week by week. The season ends. The work stays yours.",
    },
    {
      title: "private group chat support",
      body: "This is where you can ask any questions that come up in between live calls and share your experience to receive guidance and support at any point of your journey.",
    },
    {
      title: "sisterhood",
      body: "It is also a space to connect with like-minded sisters from across the globe to create lasting bonds.",
    },
    {
      title: "the digital detox & daily practices",
      body: "The structure underneath everything else: less scrolling, more stillness, every single day.",
    },
    {
      title: "your 30-day experiment",
      body: "The season doesn't end with a journal full of insights. It ends with you taking real steps on the idea you chose, while you still have the circle around you.",
    },
  ],
};

/* ─── the promise ───────────────────────────────────────── */
export const promise = {
  arriveLabel: "you arrive",
  arrive: [
    "unfulfilled in work that no longer fits",
    "dreaming of something of your own",
    "too many ideas, or none that feel certain",
    "afraid of choosing wrong",
    "running on autopilot",
    "scrolling for answers",
  ],
  leaveLabel: "you leave",
  leave: [
    "calm, clear & confident",
    "back in your body",
    "reconnected to what gives you energy",
    "clear on your values & your gifts",
    "decided on the direction that's yours, already taking the first real steps toward it",
  ],
};

/* ─── this is for you if / not for you if ───────────────── */
export const forYou = [
  "you feel unfulfilled or stuck in work that no longer fits, & you're done pretending otherwise",
  "you've been wanting to start something of your own for a while now. you're just not sure what it is, or which idea to trust",
  "you're willing to trade some scrolling for some stillness, for twelve weeks",
  "you're open to working with your body, not just your head: breathwork, movement, the uncomfortable-then-freeing stuff",
  "you can give this ± 3 hours a week: one live call + the practices",
  "you want a direction to test, not a fantasy to keep collecting",
  "you're ready to be witnessed: a small circle, real names, honest shares",
];

export const notForYou = [
  "you already run an established business & want help scaling it (that's a different conversation, write to us about private work)",
  "you're looking for a job-search service or a resumé polish",
  "you want the answer handed to you",
  "or you're in a season that needs clinical support first: this container is deep, but it is not therapy. If we read your application & believe you need something we're not, we'll tell you with warmth & point you toward it.",
];

/* ─── meet your guides — FINAL bios ─────────────────────── */
export const guides = [
  {
    name: "charlotte",
    credentials: "founder of Suntouched · certified life purpose coach",
    image: "/assets/SS_Nosara_11-03-26-546.jpg",
    paragraphs: [
      "When Charlotte lost her first \"real\" job out of university, she decided to make the most of it and follow her dream of becoming a digital nomad. She bought a one-way ticket to Costa Rica. She became obsessed with figuring out how to make money online. She housesat in various countries to save costs while traveling the world. She freelanced. She tried publishing, an agency, consulting. None of it worked.",
      "Then she launched Suntouched, a beauty brand that's now international, with 100,000+ customers in 50+ countries.",
      "Today she lives in Nosara, spends her free time in the ocean & the jungle, and helps women take the same leap with more support than she had. Her biggest passion is helping people reconnect with their dreams & bridge them into reality.",
    ],
  },
  {
    name: "katja",
    credentials:
      "breathwork facilitator · yoga teacher · creative director & soulful photographer",
    image: "/assets/katja_hero.jpeg",
    paragraphs: [
      "Katja had checked every box. Top universities, a corporate career, a 10-year relationship. From the outside, everything looked right. Inside, she felt disconnected.",
      "A solo backpacking trip through Latin America changed everything. She met people living differently & felt something shift. So she quit the job, ended the relationship, sold her belongings, and rebuilt her life around what felt true.",
      "She built a business in photography and content creation, then pushed past her fear to build a personal brand with one goal: inspiring other women to go after their dreams.",
      "Then came the deeper calling. Breathwork and somatic work entered her life after years of hustle-culture programming led her straight into burnout, and she learned firsthand that you can't build an aligned, sustainable business without balance.",
      "Today, she helps women come back to their bodies and their intuition as they design sustainable, fulfilling lives that feel like their own.",
    ],
  },
];

export const guidesClosingLine =
  "This is the life we designed for ourselves. The Season is how we help you design yours.";

/* ─── tuition ───────────────────────────────────────────── */
/* No testimonials section on this page (none exist yet; fabricated
   ones were removed sitewide & must never return), and no
   giving-back/donation line anywhere (removed Aug 2026). */
export const tuition = {
  heading: "the founding season",
  price: "$997",
  plan: "or 3 × $350",
  note: "This is founding tuition: the first circle, the smallest group we will ever run, & the lowest this Season will ever be priced.",
};

/* ─── faq ───────────────────────────────────────────────── */
/* TODO(Charlotte): confirm the call time & the refund terms
   with Katja before launch (both marked in the copy doc). */
export const faqs = [
  {
    question: "how much time does it take?",
    answer:
      "One 90-minute live call a week + about 60 to 90 minutes of practices. ± 3 hours.",
  },
  {
    question: "when are the calls?",
    answer:
      "Wednesdays at 10am Costa Rica · 4pm Portugal · 5pm Germany · 11am New York. Every call is recorded. The practices work even when you can't join live.",
  },
  {
    question: "is this a business course?",
    answer:
      "No. Most women here dream of working for themselves someday, that's who we built this for. But this season is about finding what's yours & taking the first real steps, not funnels & marketing plans. And if your honest answer turns out to be a new role, a creative practice, or a braver version of your current path, that counts. We help you find your direction. We don't push you toward ours.",
  },
  {
    question: "what does the tech agreement actually mean?",
    answer:
      "Gentle, chosen boundaries, not a monastery. We design yours together in week one. Most women describe it as the biggest relief of the season.",
  },
  {
    question: "is this therapy?",
    answer:
      "No. It's a guided season of reconnection & direction. If we believe you'd be better served by clinical support, we'll say so with care.",
  },
  {
    question: "what if it's not for me?",
    answer:
      "Join fully. If by the end of week two the Season isn't right for you, write to us & we'll refund your tuition in full. After that, no refunds, but you can defer your seat to the next season.",
  },
  {
    question: "when does it start?",
    answer:
      "Monday, September 29. Applications close September 24, or when the circle is full. We keep it small on purpose.",
  },
];

/* ─── final call ────────────────────────────────────────── */
export const finalCall = {
  heading: "another year of building someone else's dream is always available to you.",
  body: "So is this: twelve held weeks, a quieter mind, a small circle of women, and the first real steps toward the thing that's yours. Before Christmas.",
  cta: "apply for the autumn season",
};

/* ─── the two-step form (footer) ────────────────────────── */
export const applyForm = {
  heading: "first, let us know who you are.",
  note: "Once you submit, you'll be taken straight to the application. (This also joins you to our letters. Unsubscribe anytime.)",
  cta: "go to application →",
  kitTag: "autumn-applicant",
  redirect: "/apply",
};

/* ─── /apply page ───────────────────────────────────────── */
export const applyPage = {
  heading: "the autumn season · application",
  intro:
    "This takes about ten minutes, and honest beats polished. Many women tell us the application was the first place they'd ever said these things. One of us will reply personally within 48 hours.",
  /* Optional: if a Tally form is ever created, paste its share URL
     here and the embed replaces the built-in form below. */
  tallyUrl: "",
  reassurance: "Applying isn't committing. It's a conversation.",
};

/* ─── the application form questions ────────────────────── */
export const application = {
  blockers: [
    "self-doubt",
    "fear of judgment",
    "“who am I to do this?”",
    "no structure or accountability",
    "doing it all alone",
    "not enough time or energy",
    "something else",
  ],
  readiness: [
    "yes, that's exactly what I need",
    "nervous, but willing",
    "that might be hard for me",
  ],
  tuitionReadiness: ["yes, ready", "yes, on the payment plan", "I have questions first"],
  callOptions: ["yes, I'd love that", "no, I'm good"],
  afterSubmit:
    "Received. One of us will be in your inbox (or your voice notes) within 48 hours. Until then, maybe don't open the scroll. Consider it practice.",
};
