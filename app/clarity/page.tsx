"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";

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
    title: "Inner GPS",
    description:
      "Why you already know what to do but keep second-guessing it, and how to start trusting your decisions",
    border: "border-l-sage",
  },
  {
    emoji: "◈",
    title: "Signals",
    description:
      "How to recognize what your body is already telling you so you stop overthinking every move",
    border: "border-l-dusty-blue",
  },
  {
    emoji: "↗",
    title: "Pull",
    description:
      "Why some people actually change their lives and others stay stuck, even when they know what they want",
    border: "border-l-terracotta",
  },
];

/* ─── Kit form config ────────────────────────────────── */
const KIT_FORM_ID = "9217328";
const KIT_FORM_UID = "6063fa4338";

/* ─── main component ─────────────────────────────────── */
export default function ClarityPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      /* Submit to Kit form — this subscribes them and enters
         the DLM Webinar Funnel automation (Sequence 1). */
      await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email_address: email,
            first_name: firstName,
          }),
        }
      );
    } catch (err) {
      /* Don't block the redirect if Kit call fails —
         the user should still see the workshop. */
      console.error("Kit subscription error:", err);
    }

    /* Redirect to workshop, passing email so we can tag
       them as "watched" when the page loads. */
    router.push(`/workshop?e=${encodeURIComponent(email)}`);
  };

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════
          ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="sticky top-0 inset-x-0 z-50 bg-fomo-red px-4 py-2.5 text-white shadow-sm">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 text-center font-sans text-[11px] sm:flex-row sm:gap-3 sm:text-sm">
          <span>✦ Free Workshop — Watch Instantly</span>
          <a
            href="#signup"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-bold text-fomo-red hover:scale-105 sm:min-h-0 sm:py-1"
          >
            Watch Now →
          </a>
        </div>
      </div>

      <Header sticky={false} />

      {/* ════════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream px-4 py-8 sm:py-10 lg:py-14">
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
              <a href="/" aria-label="Season of Self — home" className="inline-block">
                <Image
                  src="/assets/green_logo.png"
                  alt="Season of Self"
                  width={96}
                  height={96}
                  priority
                  className="h-10 sm:h-12 lg:h-14 w-auto"
                />
              </a>
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
              A free workshop for women who know they&rsquo;re meant for more
              and are ready to stop overthinking and actually move on it
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
                disabled={isSubmitting}
                className="min-h-14 w-full rounded-full bg-deep-sage px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-deep-sage/30 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                {isSubmitting ? "Taking you there…" : "Watch the Free Workshop →"}
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
                src="/assets/founders_vibing.jpg"
                alt="Dream Life Mapping"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 0px"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 text-xs font-sans">
              <span className="text-lg">✦</span>
              <span className="text-ink/80">Free · 27 min · Watch instantly</span>
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
src="/assets/katja_hero.jpeg"
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
                    <p className="font-sans text-ink/75 leading-relaxed text-base sm:text-lg">
                      <span className="font-display text-xl sm:text-2xl text-ink">
                        {item.title}
                      </span>{" "}
                      - {item.description}
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
