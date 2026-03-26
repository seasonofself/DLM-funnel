"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { modules, faqs, valueStack, resonanceCards } from "@/lib/data";

/* ─── helpers ──────────────────────────────────────────── */
const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout";

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

function useCountdown(hours: number) {
  const [timeLeft, setTimeLeft] = useState(() => hours * 3600);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ─── icons & colors per module ────────────────────────── */
const moduleEmojis = ["◇", "✦", "△", "○", "→", "∞", "✧"];
const moduleColors = [
  "bg-sage",
  "bg-dusty-blue",
  "bg-terracotta",
  "bg-deep-sage",
  "bg-sage",
  "bg-dusty-blue",
  "bg-terracotta",
];

const resonanceEmojis = ["→", "→", "→", "→", "→", "→"];
const resonanceBorders = [
  "border-l-sage",
  "border-l-dusty-blue",
  "border-l-terracotta",
  "border-l-deep-sage",
  "border-l-sage",
  "border-l-dusty-blue",
];

/* ─── main component ──────────────────────────────────── */
export default function VariantA() {
  const countdown = useCountdown(48);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-fomo-red text-white text-center py-2 px-3 sm:px-4 text-xs sm:text-sm font-sans">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="hidden sm:inline">
            ✦ Founding Member Pricing: <strong>$497</strong> · Save $500 ·
            Pricing available for{" "}
            <span className="font-bold tabular-nums" suppressHydrationWarning>
              {countdown}
            </span>
          </span>
          <span className="sm:hidden flex items-center gap-2">
            <span>✦ <strong>$497</strong></span>
            <span className="text-white/60">·</span>
            <span className="font-bold tabular-nums" suppressHydrationWarning>
              {countdown}
            </span>
          </span>
          <a
            href={checkoutUrl}
            className="inline-block bg-white text-fomo-red font-bold px-3 sm:px-4 py-1 rounded-full text-xs hover:scale-105 transition-transform"
          >
            Enroll Now →
          </a>
        </div>
      </div>

      {/* spacer for fixed bar */}
      <div className="h-14 sm:h-10" />

      {/* ════════════════════════════════════════════════
          2. HERO
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-6 sm:py-10 lg:py-14 px-4 overflow-hidden">
        {/* floating shapes */}
        <div className="absolute top-10 left-6 w-20 h-20 rounded-full bg-sage/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-dusty-blue/15 animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/3 w-14 h-14 rounded-full bg-terracotta/20 animate-float [animation-delay:2s]" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="mb-3 flex justify-start"
            >
              <Image
                src="/assets/green_logo.png"
                alt="Season of Self"
                width={400}
                height={400}
                priority
                unoptimized
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[2rem] leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl text-ink"
            >
              Get clear on your{" "}
              <span className="text-terracotta">{marker("dream life")}</span>{" "}
              and start actually living it
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/70 text-base sm:text-lg max-w-lg mb-4"
            >
              A self-paced course + 12-month community for women on the verge of breakthrough who are ready to step into their full potential.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href={checkoutUrl}
                className="inline-block bg-sage text-white font-bold px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:scale-105 transition-transform shadow-lg shadow-sage/30"
              >
                Join Dream Life Mapping →
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xs text-ink/50 font-sans"
            >
              $497 USD · Founding member price · Full value $997 · Money-back guarantee
            </motion.p>
          </motion.div>

          {/* hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
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
              <span className="text-ink/80">
                Charlotte &amp; Katja — your guides
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. PAIN / RECOGNITION
         ════════════════════════════════════════════════ */}
      <section className="relative bg-sage py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute top-8 right-12 w-24 h-24 rounded-full bg-cream/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/60 uppercase tracking-widest text-xs mb-6 text-center"
          >
            Let&rsquo;s be honest
          </motion.p>

          <div className="space-y-5 text-center">
            <motion.p variants={fadeUp} className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream leading-tight">
              You have a good life. There&rsquo;s a lot you&rsquo;re genuinely grateful for.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              But when it comes to your work&hellip; something&rsquo;s missing.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/70 text-base sm:text-lg leading-relaxed">
              You&rsquo;re going through the motions.<br />
              And it&rsquo;s fine.
            </motion.p>
            <motion.p variants={fadeUp} className="font-display italic text-cream text-xl sm:text-2xl">
              But it&rsquo;s not it.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You feel it:
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You&rsquo;re not connected to your purpose.<br />
              You&rsquo;re not using your full potential.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              And it&rsquo;s frustrating, because you know there&rsquo;s more in you.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/70 text-base sm:text-lg leading-relaxed">
              More impact.<br />
              More expression.<br />
              A bigger life you&rsquo;re meant to be living.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              And time is passing.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You want to step into that next level&hellip;<br />
              you just don&rsquo;t know what it is<br />
              or how to move on it.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          4. DISCOVERY
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-6">
            At this stage, it&rsquo;s not about working harder.
          </motion.p>
          <motion.p variants={fadeUp} className="font-display italic text-xl sm:text-2xl text-terracotta mb-8">
            It&rsquo;s about getting clear.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            Clear on what&rsquo;s actually alive for you.<br />
            Clear on what&rsquo;s worth moving on.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            Because right now everything stays in your head.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            And the shift happens when you see your path clearly, clear what&rsquo;s been holding you back, and start moving while it&rsquo;s still alive.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          5. PIVOT
         ════════════════════════════════════════════════ */}
      <section className="bg-linen/50 py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight mb-8">
            That&rsquo;s what {marker("Dream Life Mapping")} is designed for.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            To help you get clear on what you&rsquo;re actually meant to be doing, what your zone of genius is, and what path makes the most sense for you right now.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            Whether that&rsquo;s building a business, a personal brand, or stepping into a role that actually lights you up.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            And then actually moving on it, with the clarity, structure, and support to follow through.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          6. USP
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-center font-display text-2xl sm:text-3xl text-ink leading-tight mb-8">
            Dream Life Mapping helps you connect your vision, your purpose, and your zone of genius and bring it into reality.
          </motion.p>
          <motion.p variants={fadeUp} className="text-center font-sans text-ink/60 uppercase tracking-widest text-xs mb-6">
            Inside, you&rsquo;ll:
          </motion.p>
          <div className="space-y-4 max-w-xl mx-auto">
            {[
              "Get clear on what you\u2019re naturally great at",
              "Understand what you actually want to build your life around",
              "Identify the most aligned path forward for you",
              "Work through what\u2019s been keeping you stuck",
              "Turn your ideas into something real",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="text-sage mt-0.5 flex-shrink-0">✓</span>
                <p className="font-sans text-ink/80 text-base sm:text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          7. IS THIS YOU
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-12"
          >
            This is for you if&hellip;
          </motion.h2>

          <div className="space-y-4">
            {resonanceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`border-l-4 ${resonanceBorders[i]} bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                <p className="font-sans text-ink text-base sm:text-lg flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 text-ink/30">{resonanceEmojis[i]}</span>
                  {card}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-ink/70 text-base sm:text-lg mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            You&rsquo;re not starting from zero. You&rsquo;re on the edge of breakthrough, you just need clarity and the right support to move forward.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          8. WHAT THIS IS
         ════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ink via-ink to-dusty-blue/30 py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-terracotta/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
          >
            Dream Life Mapping is a process that helps you get clear on what you actually want and start building it.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/70 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl"
          >
            You reconnect to your intuition, identify the path that feels aligned for you, and learn how to move on it without getting stuck in overthinking.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-cream text-xl sm:text-2xl mb-10 max-w-2xl"
          >
            It&rsquo;s where your ideas turn into direction, and your direction turns into action.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight mb-4"
          >
            What&rsquo;s inside:
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
            {[
              "Self-paced",
              "12-month access",
              "6 deep modules",
              "Somatic toolkit",
              "Live coaching",
              "Private community",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-cream/10 text-cream/90 font-sans text-sm px-5 py-2 rounded-full border border-cream/10"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          9. MODULES
         ════════════════════════════════════════════════ */}
      <section id="modules" className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sage/20 hidden sm:block" />

            <div className="space-y-4">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.number}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-sage border-4 border-cream hidden sm:block z-10" />

                  <div
                    className="sm:ml-14 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                    onClick={() =>
                      setOpenModule(openModule === i ? null : i)
                    }
                  >
                    <div className="flex items-center gap-4 p-5 sm:p-6">
                      <span
                        className={`flex-shrink-0 w-12 h-12 rounded-xl ${moduleColors[i]} flex items-center justify-center text-white text-xl`}
                      >
                        {moduleEmojis[i]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs uppercase tracking-wider text-ink/40 mb-1">
                          {mod.number === "✧" ? "Bonus" : `Module ${mod.number}`} · {mod.keyword}
                        </p>
                        <h3 className="font-display text-lg sm:text-xl text-ink">
                          {mod.title}
                        </h3>
                      </div>
                      <motion.span
                        animate={{ rotate: openModule === i ? 180 : 0 }}
                        className="text-ink/40 text-xl flex-shrink-0"
                      >
                        ▾
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {openModule === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 border-t border-ink/5 pt-4">
                            <p className="font-sans text-ink/70 leading-relaxed">
                              {mod.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          10. BENEFITS — "Imagine this"
         ════════════════════════════════════════════════ */}
      <section className="bg-sage py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute top-16 right-8 w-28 h-28 rounded-full bg-cream/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-cream leading-tight mb-10"
          >
            Imagine this:
          </motion.h2>
          <div className="space-y-5">
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You wake up and you&rsquo;re excited for your day.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You&rsquo;re working on something that actually feels like you, in your zone of genius, building something that matters to you.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              You&rsquo;re not stuck in your head anymore. You have a direction and you&rsquo;re moving on it.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              Your energy shifts. You feel more alive, more expressed, more like yourself.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed">
              That spills into everything.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-cream/70 text-base sm:text-lg leading-relaxed">
              Your relationships feel better. You&rsquo;re more present.<br />
              You take better care of yourself. You have more clarity and momentum.
            </motion.p>
            <motion.p variants={fadeUp} className="font-display italic text-cream text-xl sm:text-2xl mt-4">
              You feel like you&rsquo;re finally living your life.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          11. VALUE — "Most people stay in this loop"
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-8"
          >
            Most people stay in this loop for years.
          </motion.h2>
          <motion.div variants={fadeUp} className="font-sans text-ink/60 text-base sm:text-lg leading-relaxed mb-8 space-y-1">
            <p>Thinking about what they want</p>
            <p>Second-guessing every direction</p>
            <p>Starting and stopping</p>
            <p>Waiting to feel ready</p>
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-ink/80 text-base sm:text-lg leading-relaxed mb-4">
            What this gives you is clarity, direction, and the ability to move.
          </motion.p>
          <motion.p variants={fadeUp} className="font-display italic text-ink text-xl sm:text-2xl">
            That&rsquo;s the difference between staying where you are and actually creating a life that feels aligned.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          12. FOUNDERS
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
            Meet Charlotte &amp; Katja
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
                  priority
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">
                Charlotte
              </h3>
              <div className="space-y-3 font-sans text-ink/70 leading-relaxed">
                <p>Charlotte was doing everything she was supposed to do. Business school, work at a startup, a good life in Montreal.</p>
                <p>But she had never stopped to ask herself if it was actually what she wanted.</p>
                <p>One moment changed that. She heard someone speak about building a life on your own terms and felt something click. It wasn&rsquo;t logical, but it was clear.</p>
                <p>She followed it. Took action without having everything figured out. Tried things, failed, kept going.</p>
                <p>That path led her to build a multi-million dollar beauty brand with over 100,000 customers across 50+ countries.</p>
                <p>Today she lives by the ocean in Costa Rica with her wiener dog and helps people get clear on their direction and build lives that feel aligned.</p>
              </div>
            </motion.div>

            {/* Katja */}
            <motion.div variants={fadeUp}>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl mb-6 -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">Katja</h3>
              <div className="space-y-3 font-sans text-ink/70 leading-relaxed">
                <p>Katja had checked every box. Top universities, corporate career, long-term relationship.</p>
                <p>From the outside, everything looked right. Inside, she felt disconnected.</p>
                <p>A solo backpacking trip through Latin America changed everything.</p>
                <p>She met people living differently and felt something shift. She quit her job, ended the relationship, sold her belongings, and moved to Nicaragua without knowing exactly what came next.</p>
                <p>She rebuilt her life around what actually felt true.</p>
                <p>Today she helps people get clear on their direction and build lives that feel aligned by reconnecting with their body and intuition.</p>
              </div>
            </motion.div>
          </div>

          {/* shared line */}
          <motion.div variants={fadeUp} className="mt-14">
            <div className="w-16 h-px bg-ink/20 mx-auto mb-6" />
            <p className="text-center font-display italic text-ink text-xl sm:text-2xl">
              Dream Life Mapping is the process we wish we had.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          13. GIVE BACK
         ════════════════════════════════════════════════ */}
      <section className="bg-terracotta py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-20 h-20 rounded-full bg-cream/5 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream mb-4"
          >
            Your investment creates impact beyond your own life
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 font-medium text-base sm:text-lg mb-12"
          >
            10% of profit from every purchase is donated to:
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div variants={fadeUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/assets/somasurf.jpg"
                  alt="SOMA Surf"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">
                SOMA Surf — S&atilde;o Tom&eacute;, Africa
              </h3>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                A surf therapy program for girls and women, using the ocean and movement to build confidence, resilience, and a sense of self that no classroom can teach.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed">
                Katja spent two months there, in the water and on the ground, documenting what happens when someone reconnects with their body and their power.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/assets/abriendomendes.png"
                  alt="Abriendo Mentes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">
                Abriendo Mentes — Costa Rica
              </h3>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                A local nonprofit providing education, technology, and opportunities for young people in rural communities.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                From English and tech classes, to vocational training, these are the tools that create real change and open up new futures.
              </p>
              <p className="font-sans text-cream/80 leading-relaxed font-medium italic">
                When you invest in your life, you&rsquo;re part of something bigger.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          14. REGULAR PRICE
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-ink/50 uppercase tracking-widest text-xs mb-4"
          >
            What this would normally cost
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-6">
            To get this level of clarity and support, most people invest in multiple programs, coaching, and years of trial and error.
          </motion.p>
          <motion.p variants={fadeUp} className="font-display text-4xl sm:text-5xl text-ink">
            Dream Life Mapping is priced at $997.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          15. PROMOTION — Founding member pricing
         ════════════════════════════════════════════════ */}
      <section className="bg-sage/10 py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink mb-6"
          >
            Founding member pricing
          </motion.h2>
          <motion.p variants={fadeUp} className="font-display text-5xl sm:text-6xl text-sage mb-4">
            $497
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            Right now, you can join as a founding member for $497.<br />
            This is a one-time offer for the first group going through the program.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          16. BONUS STACKING — What else you get
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-10"
          >
            What else you get
          </motion.h2>
          <div className="space-y-6">
            {[
              "Access to the full 12-month community space, where you can share your process, get feedback, and stay in momentum",
              "Ongoing support and accountability so you don\u2019t fall back into old patterns after the initial clarity",
              "A space of people who are also building aligned lives, which makes the process feel a lot less isolating",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white rounded-xl p-5 sm:p-6 shadow-sm"
              >
                <span className="text-sage text-lg mt-0.5 flex-shrink-0">✦</span>
                <p className="font-sans text-ink/80 text-base sm:text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          17. SCARCITY — Why now
         ════════════════════════════════════════════════ */}
      <section className="bg-linen/50 py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink mb-8"
          >
            Why now
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            If you&rsquo;ve been feeling the pull to change something in your life, you already know.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            The hard part isn&rsquo;t deciding you want more.<br />
            It&rsquo;s staying in the same place for another six months, another year, still thinking about it.
          </motion.p>
          <motion.p variants={fadeUp} className="font-display italic text-ink text-xl sm:text-2xl">
            This is your moment to actually move.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          18. REASON WHY
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink mb-6"
          >
            Why we&rsquo;re offering this price
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            This is the first version of Dream Life Mapping.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            We&rsquo;re building this with the founding group, refining it in real time, and making it better as people move through it.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/80 text-base sm:text-lg leading-relaxed">
            In exchange, you get access at a significantly reduced price.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          19. PURCHASE DETAILS — What happens next
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink mb-8"
          >
            What happens next
          </motion.h2>
          <div className="space-y-4 font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            <motion.p variants={fadeUp}>Once you join, you get immediate access to all modules.</motion.p>
            <motion.p variants={fadeUp}>You can move through the course at your own pace and start applying it right away.</motion.p>
            <motion.p variants={fadeUp}>You&rsquo;ll also get access to the community space for the next 12 months, where we host Q&amp;A calls every month.</motion.p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          20. GUARANTEE
         ════════════════════════════════════════════════ */}
      <section className="bg-sage/10 py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/20 text-4xl mb-6"
          >
            ✦
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink mb-6"
          >
            Make it an easy decision
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-6 space-y-4"
          >
            <p>Go through the course. Do the work.</p>
            <p>
              If you don&rsquo;t walk away with more clarity on your direction and your next steps, you can request a full refund.
            </p>
            <p>Simple as that.</p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-sage text-lg"
          >
            30-day money-back guarantee.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          21. PRICING + PAYMENT
         ════════════════════════════════════════════════ */}
      <section id="pricing" className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-14"
          >
            Choose your option
          </motion.h2>

          {/* pricing cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {/* pay in full */}
            <motion.div
              variants={fadeUp}
              className="relative bg-white border-2 border-sage rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-bold px-4 py-1 rounded-full">
                BEST VALUE ✦
              </span>
              <h3 className="font-display text-xl text-ink mb-1">
                Join Dream Life Mapping
              </h3>
              <p className="font-sans text-ink/50 text-sm mb-4 line-through">
                $997
              </p>
              <p className="font-display text-5xl text-sage mb-1">$497</p>
              <p className="font-sans text-sage text-sm font-medium mb-6">
                USD — Save $500
              </p>
              <a
                href={checkoutUrl}
                className="block text-center bg-sage text-white font-bold py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-sage/30"
              >
                Join Now — $497 →
              </a>
              <p className="text-center text-xs text-ink/40 mt-3">
                One-time payment · Instant access
              </p>
            </motion.div>

            {/* payment plan */}
            <motion.div
              variants={fadeUp}
              className="bg-white border border-ink/10 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-xl text-ink mb-1">
                Join Dream Life Mapping
              </h3>
              <p className="font-sans text-ink/50 text-sm mb-4">
                3 monthly payments
              </p>
              <p className="font-display text-5xl text-ink mb-1">
                3 × $177
              </p>
              <p className="font-sans text-ink/50 text-sm mb-6">
                USD
              </p>
              <a
                href={checkoutUrl}
                className="block text-center border-2 border-ink text-ink font-bold py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Join Now — 3 × $177 →
              </a>
              <p className="text-center text-xs text-ink/40 mt-3">
                Same access · Instant start
              </p>
            </motion.div>
          </div>

          {/* trust badges */}
          <motion.div variants={fadeUp} className="text-center font-sans text-sm text-ink/60 mb-4">
            Founding member price · Full value $997 · You save $500 · Full money-back guarantee
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-md mx-auto space-y-2">
            {valueStack.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 font-sans text-ink/70 text-sm justify-center"
              >
                <span className="text-sage flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          22. FAQ
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-12"
          >
            Questions? {marker("Answered.")}
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-sage/5 transition-colors"
                >
                  <span className="font-sans font-medium text-ink text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    className="text-sage text-xl flex-shrink-0"
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 font-sans text-ink/70 leading-relaxed border-t border-ink/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          23. FINAL CTA
         ════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage via-deep-sage to-terracotta" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />

        {/* floating shapes */}
        <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-white/5 animate-float" />
        <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-white/5 animate-float [animation-delay:1.5s]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          >
            If you&rsquo;re ready to stop overthinking your life and start building something that actually feels aligned, this is your next step.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={checkoutUrl}
              className="inline-block bg-white text-sage font-bold px-12 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-2xl shadow-black/20"
            >
              Join Dream Life Mapping — $497 →
            </a>
            <p className="mt-4 text-white/50 text-sm font-sans">
              Or 3 × $177 · 30-day money-back guarantee · Instant access
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* footer spacer */}
      <div className="h-2 bg-ink" />
    </main>
  );
}
