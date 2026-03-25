"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

/* ─── helpers (same as /dream-life) ──────────────────── */
const marker = (text: string) => (
  <span
    style={{
      background:
        "linear-gradient(to top, rgba(193,150,115,0.3) 40%, transparent 40%)",
    }}
  >
    {text}
  </span>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── data ───────────────────────────────────────────── */
const learnings = [
  {
    emoji: "◎",
    title: "Your Inner GPS",
    description:
      "Why you keep second-guessing yourself, and how to start making decisions from a place of deep inner knowing instead of fear or outside opinions.",
    border: "border-l-sage",
  },
  {
    emoji: "◈",
    title: "Your Signals",
    description:
      "How to read the subtle cues your body is already sending you, and use them to navigate your life with more clarity and less overthinking.",
    border: "border-l-dusty-blue",
  },
  {
    emoji: "↗",
    title: "Your Pull",
    description:
      "The thing that separates people who actually change their lives from those who keep planning and never starting. (It\u2019s not willpower. It\u2019s not a perfect plan. It\u2019s this.)",
    border: "border-l-terracotta",
  },
];

/* ─── main component ─────────────────────────────────── */
export default function ClarityPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Kit (ConvertKit) when ready
    router.push("/workshop");
  };

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════
          ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-fomo-red text-white text-center py-2.5 px-4 text-xs sm:text-sm font-sans flex items-center justify-center gap-3 flex-wrap">
        <span>✦ Free Workshop — Watch Instantly</span>
        <a
          href="#signup"
          className="inline-block bg-white text-fomo-red font-bold px-4 py-1 rounded-full text-xs hover:scale-105 transition-transform"
        >
          Watch Now →
        </a>
      </div>

      {/* spacer for fixed bar */}
      <div className="h-8" />

      {/* ════════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-6 sm:py-10 lg:py-14 px-4 overflow-hidden">
        {/* floating shapes */}
        <div className="absolute top-10 left-6 w-20 h-20 rounded-full bg-sage/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-dusty-blue/15 animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/3 w-14 h-14 rounded-full bg-terracotta/20 animate-float [animation-delay:2s]" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* left — copy + form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div variants={fadeUp} className="mb-3 flex justify-start">
              <Image
                src="/assets/green_logo.png"
                alt="Season of Self"
                width={96}
                height={96}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-sage uppercase tracking-widest text-xs mb-4"
            >
              Free Workshop with Charlotte &amp; Katja
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2rem] leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl text-ink mb-4"
            >
              The 3 Secrets to Creating a Life That Actually{" "}
              <span className="text-terracotta">
                {marker("Feels Like Yours")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/70 text-base sm:text-lg max-w-lg mb-6"
            >
              A free workshop for anyone who suspects they&rsquo;re meant for
              something more — but keeps waiting for the right moment to
              actually go after it.
            </motion.p>

            {/* ── form ── */}
            <motion.form
              id="signup"
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-3 max-w-md"
            >
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl border border-ink/10 bg-white font-sans text-base text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 rounded-xl border border-ink/10 bg-white font-sans text-base text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-all"
              />
              <button
                type="submit"
                className="w-full bg-deep-sage text-white font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-deep-sage/30"
              >
                Watch the Free Workshop →
              </button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xs text-ink/50 font-sans max-w-md"
            >
              ✦ Free. No fluff. Just the things that actually changed our
              lives.
            </motion.p>
          </motion.div>

          {/* right — hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/assets/vertical_hero.jpg"
                alt="Dream Life Mapping"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 text-xs font-sans">
              <span className="text-lg">✦</span>
              <span className="text-ink/80">Free · 45 min · Watch instantly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT THE HOSTS
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-sage/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-terracotta uppercase tracking-widest text-xs mb-4"
          >
            Your Guides
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-14"
          >
            Who&rsquo;s teaching this?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Charlotte */}
            <motion.div variants={fadeUp}>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl mb-6 rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-2">
                Charlotte
              </h3>
              <p className="font-sans text-ink/70 leading-relaxed">
                Charlotte left a business school path in Montreal and followed
                an unclear pull she couldn&rsquo;t explain. That pull led her to
                build a multi-million dollar beauty brand — 100,000+ customers
                across 50+ countries. Today she lives by the ocean in Costa
                Rica, designing life on her own terms.
              </p>
            </motion.div>

            {/* Katja */}
            <motion.div variants={fadeUp}>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl mb-6 -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/assets/katja_headshot_new.jpg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-2">Katja</h3>
              <p className="font-sans text-ink/70 leading-relaxed">
                Katja had every box checked: a stable corporate career, a
                loving 10-year relationship. But inside, something felt off.
                Numb. Disconnected. A solo trip through Latin America changed
                everything. She chose to leave everything behind and created a
                life that once felt impossible. Now living a slow life in
                Portugal.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-subtitle italic text-ink/60 text-lg sm:text-xl mt-12 max-w-2xl mx-auto"
          >
            We&rsquo;re not here to tell you what your dream life looks like.
            We&rsquo;re here to help you {marker("remember.")}
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT YOU'LL LEARN
         ════════════════════════════════════════════════ */}
      <section className="bg-linen/50 py-20 sm:py-28 px-4 overflow-hidden relative">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sage/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-terracotta uppercase tracking-widest text-xs mb-4"
          >
            What You&rsquo;ll Discover
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-14"
          >
            In this workshop, you&rsquo;ll discover:
          </motion.h2>

          <div className="space-y-4">
            {learnings.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`border-l-4 ${item.border} bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl text-ink/25 flex-shrink-0 mt-1">
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-ink/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
         ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-sage via-deep-sage to-terracotta py-20 sm:py-28 px-4 overflow-hidden">
        {/* floating shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-cream/10 animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-cream/5 animate-float [animation-delay:2s]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            Ready to start listening?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg mb-8 max-w-xl mx-auto"
          >
            This workshop is your first step. No commitment, no pressure — just
            the insights that changed everything for us.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#signup"
              className="inline-block bg-white text-deep-sage font-bold px-10 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg"
            >
              Watch the Free Workshop →
            </a>
            <p className="mt-4 text-xs text-cream/50 font-sans">
              ✦ Free. Watch at your own pace.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* footer bar */}
      <div className="h-2 bg-ink" />
    </main>
  );
}
