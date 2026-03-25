"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { modules, faqs, valueStack, resonanceCards, whyItWorks } from "@/lib/data";

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

/* ─── emojis per module ────────────────────────────────── */
const moduleEmojis = ["◇", "✦", "△", "○", "→", "∞"];
const moduleColors = [
  "bg-sage",
  "bg-dusty-blue",
  "bg-terracotta",
  "bg-deep-sage",
  "bg-sage",
  "bg-dusty-blue",
];

const resonanceEmojis = ["—", "—", "—", "—", "—"];
const resonanceBorders = [
  "border-l-sage",
  "border-l-dusty-blue",
  "border-l-terracotta",
  "border-l-deep-sage",
  "border-l-sage",
];

const whyColors = [
  "bg-sage/15",
  "bg-dusty-blue/15",
  "bg-terracotta/15",
  "bg-linen",
];
const whyAccents = [
  "text-deep-sage",
  "text-dusty-blue",
  "text-terracotta",
  "text-ink",
];
const whyIcons = ["◯", "▷", "◈", "◉"];

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
      <div className="h-24 sm:h-10" />

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
  alt="Dream Life Mapping"
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
              A step-by-step course + year-long community to help you step into your highest timeline
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3 sm:gap-4">
              <a
                href={checkoutUrl}
                className="bg-sage text-white font-bold px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:scale-105 transition-transform shadow-lg shadow-sage/30"
              >
                Join for $497 →
              </a>
              <a
                href="#modules"
                className="border-2 border-ink text-ink font-bold px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-ink hover:text-cream transition-colors"
              >
                See What&rsquo;s Inside
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xs text-ink/50 font-sans"
            >
              ✦ 30-day money-back guarantee · Instant access · Payment plan available
            </motion.p>
          </motion.div>

          {/* hero photo placeholder */}
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
          3. PAIN SECTION
         ════════════════════════════════════════════════ */}
      <section className="relative bg-sage py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute top-8 right-12 w-24 h-24 rounded-full bg-cream/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/60 uppercase tracking-widest text-xs mb-6"
          >
            Let&rsquo;s be honest
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight mb-8"
          >
            You don&rsquo;t hate your life.
            <br />
            <span className="text-terracotta">
              That&rsquo;s almost what makes it harder.
            </span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-8 border border-cream/10"
          >
            <p className="font-display italic text-cream text-2xl sm:text-3xl lg:text-4xl">
              &ldquo;Is this really it?&rdquo;
            </p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            You have things to be grateful for, and you are. But there&rsquo;s this quiet hum, a whisper that something is missing. That there&rsquo;s more depth, more aliveness, more of you waiting to be lived.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          4. IS THIS YOU
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-sage uppercase tracking-widest text-xs mb-4"
          >
            Sound familiar?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-12"
          >
            Is this you?
          </motion.h2>

          <div className="space-y-4">
            {resonanceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`border-l-4 ${resonanceBorders[i]} bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                <p className="font-sans text-ink text-base sm:text-lg flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{resonanceEmojis[i]}</span>
                  {card}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-display italic text-xl sm:text-2xl text-ink mt-12"
          >
            You&rsquo;re not lost. You&rsquo;ve just {marker("outgrown the life you're in.")}
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          5. MECHANISM — How It Works
         ════════════════════════════════════════════════ */}
      <section className="bg-linen/50 py-20 sm:py-28 px-4 overflow-hidden relative">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sage/10 animate-float" />
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
            The Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl lg:text-5xl text-ink mb-16"
          >
            Three shifts. {marker("One transformation.")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "See Clearly",
                desc: "Map where you actually are — honestly. No performance, no pretending. Just truth.",
                color: "bg-sage",
              },
              {
                num: "02",
                title: "Feel Deeply",
                desc: "Use breathwork and visualization to access what your analytical mind can't reach.",
                color: "bg-dusty-blue",
              },
              {
                num: "03",
                title: "Move Forward",
                desc: "Convert clarity into consistent, embodied action — one brave step at a time.",
                color: "bg-terracotta",
              },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-rotate-1 transition-all duration-300"
              >
                <div className={`${step.color} py-4 px-6`}>
                  <span className="font-display text-5xl text-white/30 font-bold">
                    {step.num}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-ink/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA break
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-12 px-4 text-center">
        <a
          href={checkoutUrl}
          className="inline-block bg-sage text-white font-bold px-10 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-sage/30"
        >
          I&rsquo;m Ready — Join for $497 →
        </a>
        <p className="mt-3 text-xs text-ink/50 font-sans">
          Or 3 × $177 · 30-day guarantee
        </p>
      </section>

      {/* ════════════════════════════════════════════════
          10. FOUNDERS
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
            We didn&rsquo;t just build this. {marker("We lived it.")}
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
              <h3 className="font-display text-2xl text-ink mb-2">
                Charlotte
              </h3>
              <p className="font-sans text-ink/70 leading-relaxed">
                Charlotte followed the path that looked right—business school, startups, a life that worked on paper. But something in her kept asking: is this actually mine?
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                That question changed everything.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                What began as a quiet pull turned into bold, messy action—building a multi-million dollar beauty brand with 100,000+ customers across 50+ countries. Not from certainty, but from trusting what she couldn't ignore.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                Today, she's a life purpose coach and life design educator, guiding others to create lives that feel like theirs. Living by the ocean in Costa Rica, she blends strategy, spirituality, and deep inner work to help you choose more—even when everything looks "fine" from the outside.
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
                  priority
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-2">Katja</h3>
              <p className="font-sans text-ink/70 leading-relaxed">
                Katja did everything she was supposed to—top degrees, corporate career, long-term relationship. From the outside, it all made sense. Inside, she felt nothing.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                A solo trip through Latin America cracked that numbness open. Surrounded by people living differently, something deeper than logic woke up—and she chose to follow it.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                She left the career, the relationship, the life she had built, and started again from intuition.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mt-3">
                Now a yoga teacher, sound healer, and embodiment guide, Katja helps you reconnect to your body, your truth, and your aliveness—bringing grounded structure and a gentle push forward when you feel stuck.
              </p>
            </motion.div>
          </div>

          {/* shared photo */}
          <motion.div variants={fadeUp} className="mt-12">
            <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/founders_working.jpg"
                alt="Charlotte and Katja working together"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center font-subtitle italic text-ink/50 text-sm mt-4">
              Building Season of Self from the coast — laptops, palm trees, and
              a shared mission.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          6. WHAT THIS IS
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
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight mb-6"
          >
            Dream Life Mapping is where you stop{" "}
            <span className="text-terracotta">circling</span> your life…
            <br className="hidden sm:block" /> and actually{" "}
            <span className="text-sage">step into it.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            This isn&rsquo;t a course that tells you to write goals and manifest
            harder. It&rsquo;s a somatic, immersive experience that meets you
            where you are and moves you — in your body, not just your mind.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {[
              "Self-paced",
              "12-month access",
              "6 deep modules",
              "Breathwork",
              "Somatic tools",
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
          7. MODULES
         ════════════════════════════════════════════════ */}
      <section id="modules" className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-sage uppercase tracking-widest text-xs mb-4"
          >
            The Curriculum
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-14"
          >
            6 modules. {marker("One complete shift.")}
          </motion.h2>

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
                          Module {mod.number} · {mod.keyword}
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
                            <p className="font-sans text-ink/70 leading-relaxed mb-3">
                              {mod.description}
                            </p>
                            <p className="font-sans text-sm text-sage font-medium">
                              ✦ {mod.deliverable}
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
          8. COMMUNITY + COACHING
         ════════════════════════════════════════════════ */}
      <section className="bg-sage py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute top-16 right-8 w-28 h-28 rounded-full bg-cream/10 animate-float" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-cream/60 uppercase tracking-widest text-xs mb-4"
          >
            You&rsquo;re Not Doing This Alone
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight mb-14"
          >
            Community + Live Coaching
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "◇",
                title: "12 Monthly Live Q&A",
                desc: "Real-time coaching with Charlotte & Katja. Bring your questions, get direct support.",
              },
              {
                icon: "○",
                title: "Private Community",
                desc: "A curated space of individuals doing this work alongside you. Real conversations. Real support.",
              },
              {
                icon: "△",
                title: "Direct Access",
                desc: "Both coaches are active inside the community. You can reach us when you need us.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-cream/10 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 text-center hover:bg-cream/15 transition-colors"
              >
                <span className="text-4xl mb-4 block text-cream">{item.icon}</span>
                <h3 className="font-display text-xl text-cream mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-cream/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA break 2
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-12 px-4 text-center">
        <p className="font-subtitle italic text-ink/60 text-base mb-4">
          This isn&rsquo;t information. It&rsquo;s transformation.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-terracotta text-white font-bold px-10 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-terracotta/30"
        >
          Claim Your Founding Spot →
        </a>
      </section>

      {/* ════════════════════════════════════════════════
          9. WHY IT WORKS
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-dusty-blue uppercase tracking-widest text-xs mb-4"
          >
            The Science
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-14"
          >
            Why this {marker("actually works")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyItWorks.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`${whyColors[i]} rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <span className="text-3xl mb-3 block">{whyIcons[i]}</span>
                <h3
                  className={`font-display text-xl sm:text-2xl ${whyAccents[i]} mb-3`}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          11. GIVE BACK
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
          <motion.p
            variants={fadeUp}
            className="font-display text-2xl sm:text-3xl text-cream mb-6"
          >
            Your investment creates change beyond your own life.
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 leading-relaxed mb-12"
          >
            We built Season of Self on a simple belief:<br />
            when someone truly comes home to themselves, everything changes.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mb-12">
            <p className="font-sans text-cream/70 leading-relaxed mb-3">Their relationships.</p>
            <p className="font-sans text-cream/70 leading-relaxed mb-3">Their standards.</p>
            <p className="font-sans text-cream/70 leading-relaxed mb-8">The way they show up in the world—and the people who are shaped by that.</p>
            <p className="font-sans text-cream/70 leading-relaxed mb-3">This work doesn't stop with you.</p>
            <p className="font-sans text-cream/70 leading-relaxed">10% of every Dream Life Mapping purchase goes to organizations creating that same kind of change—at the level of community, access, and opportunity.</p>
          </motion.div>

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
                SOMA Surf — São Tomé, Africa
              </h3>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                SOMA Surf is a surf therapy program for girls and women in São Tomé—using the ocean as a space for healing, confidence, and self-trust.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Because some things can't be taught. They have to be felt.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                In the water, these girls learn what it means to take up space. To trust their bodies. To move through fear and come out stronger on the other side.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Katja spent two months on the ground with SOMA Surf—documenting, supporting, and witnessing what happens when someone reconnects with their power in a way that changes them.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                This isn't just an organization we support. It's one we've been inside.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed italic">
                Your purchase helps that work continue.
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
                Abriendo Mentes — Guanacaste, Costa Rica
              </h3>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Right where Charlotte lives and works.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Since 2009, Abriendo Mentes has been creating access for families in rural Costa Rica—through education, technology, and opportunity.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                English programs. Digital skills. After-school education for children and young adults.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Not abstract support—but the exact tools that shape someone's future.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed mb-3">
                Because access changes what's possible.
              </p>
              <p className="font-sans text-cream/70 leading-relaxed italic">
                Your purchase helps fund that access—supporting children and families in building a future that expands beyond their current circumstances.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          12. PRICING
         ════════════════════════════════════════════════ */}
      <section id="pricing" className="bg-cream py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-sage uppercase tracking-widest text-xs mb-4"
          >
            Founding Member Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl sm:text-4xl text-ink mb-4"
          >
            Choose your path in
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center font-subtitle italic text-ink/60 text-base mb-14"
          >
            Same access, same start date, either way.
          </motion.p>

          {/* pricing cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {/* pay in full — featured */}
            <motion.div
              variants={fadeUp}
              className="relative bg-white border-2 border-sage rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-bold px-4 py-1 rounded-full">
                BEST VALUE ✦
              </span>
              <h3 className="font-display text-xl text-ink mb-1">
                Pay in Full
              </h3>
              <p className="font-sans text-ink/50 text-sm mb-4 line-through">
                $997
              </p>
              <p className="font-display text-5xl text-sage mb-1">$497</p>
              <p className="font-sans text-sage text-sm font-medium mb-6">
                Save $500 — founding price
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
                Payment Plan
              </h3>
              <p className="font-sans text-ink/50 text-sm mb-4">
                3 monthly payments
              </p>
              <p className="font-display text-5xl text-ink mb-1">
                3 × $177
              </p>
              <p className="font-sans text-ink/50 text-sm mb-6">
                $531 total
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

          {/* value stack */}
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-ink text-center mb-8">
              Everything included:
            </h3>
            <div className="space-y-3">
              {valueStack.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 font-sans text-ink/80 text-sm sm:text-base"
                >
                  <span className="text-sage mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          13. GUARANTEE
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
            Risk-free.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-6 space-y-4"
          >
            <p>
              Go through the course. Do the exercises. Actually meet the process.
            </p>
            <p>
              If you don&rsquo;t come out of it with real clarity — on what you want,
              where you&rsquo;re going, and what your next steps are —
              we&rsquo;ll refund you.
            </p>
            <p>
              No back-and-forth. No friction.
            </p>
            <p>
              You either get clarity, or you don&rsquo;t pay.
            </p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-sage text-lg"
          >
            30-day money-back guarantee. Full stop.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          14. FAQ
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
          15. FINAL CTA
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
            className="font-subtitle italic text-white/70 text-lg sm:text-xl mb-6"
          >
            If you&rsquo;ve read this far, something in you already knows.
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8"
          >
            Your dream life isn&rsquo;t a fantasy.
            <br />
            It&rsquo;s a direction.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Stop circling. Stop waiting for permission. The version of you who
            already lives this life is waiting for you to say yes.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={checkoutUrl}
              className="inline-block bg-white text-sage font-bold px-12 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-2xl shadow-black/20"
            >
              Begin Your Dream Life — $497 →
            </a>
            <p className="mt-4 text-white/50 text-sm font-sans">
              Or 3 × $177 · 30-day money-back guarantee · Instant access
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* footer spacer for fixed bar on mobile */}
      <div className="h-2 bg-ink" />
    </main>
  );
}
