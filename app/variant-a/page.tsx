"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { modules, faqs, valueStack, resonanceCards } from "@/lib/data";
import Header from "@/components/Header";

/* ─── helpers ──────────────────────────────────────────── */
const checkoutUrl =
  "https://seasonofself.circle.so/checkout/dream-life-mapping";

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

const imagineMoments = [
  "You wake up and you’re excited for your day.",
  "You’re working on something that actually feels like you, in your zone of genius, building something that matters to you.",
  "You’re not stuck in your head anymore. You have a direction and you’re moving on it.",
  "Your energy shifts. You feel more alive, more expressed, more like yourself.",
  "That spills into everything.",
  "Your relationships feel better. You’re more present. You take better care of yourself. You have more clarity and momentum.",
];

/* ─── main component ──────────────────────────────────── */
export default function VariantA() {
  const countdown = useCountdown(48);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroShapeY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroImageY = useTransform(scrollYProgress, [0, 0.35], [0, -56]);
  const softGlowY = useTransform(scrollYProgress, [0, 1], [36, -96]);
  const ribbonShift = useTransform(scrollYProgress, [0, 1], [-18, 28]);

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-fomo-red text-white text-center py-2 px-3 sm:px-4 text-xs sm:text-sm font-sans">
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="hidden sm:inline">
            ✦ Founding Member Pricing: <strong>$197</strong> · Save $300 ·
            Pricing available for{" "}
            <span className="font-bold tabular-nums" suppressHydrationWarning>
              {countdown}
            </span>
          </span>
          <span className="sm:hidden flex items-center gap-2">
            <span>✦ <strong>$197</strong></span>
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

      <Header sticky={false} />

      {/* ════════════════════════════════════════════════
          2. HERO
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-6 sm:py-10 lg:py-14 px-4 overflow-hidden">
        {/* floating shapes */}
        <motion.div
          style={{ y: heroShapeY }}
          className="absolute top-10 left-6 h-20 w-20 rounded-full bg-sage/20 animate-float"
        />
        <motion.div
          style={{ y: softGlowY }}
          className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-dusty-blue/15 animate-float [animation-delay:1s]"
        />
        <motion.div
          style={{ x: ribbonShift, y: heroShapeY }}
          className="absolute top-1/2 left-1/3 h-14 w-14 rounded-full bg-terracotta/20 animate-float [animation-delay:2s]"
        />

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
              <a href="/" aria-label="Season of Self — home" className="inline-block">
                <Image
                  src="/assets/green_logo.png"
                  alt="Season of Self"
                  width={400}
                  height={400}
                  priority
                  unoptimized
                  className="h-10 sm:h-12 lg:h-14 w-auto"
                />
              </a>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mb-5 font-display text-[2rem] leading-[0.95] text-ink sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl"
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
              $197 USD · Founding member price · Usually $497 · 30-day money-back guarantee
            </motion.p>
          </motion.div>

          {/* hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: heroImageY }}
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
      <section className="relative overflow-hidden bg-sage px-4 py-16 sm:py-20 lg:py-16">
        <motion.div
          style={{ y: softGlowY }}
          className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)]"
        />
        <motion.div
          style={{ y: ribbonShift }}
          className="absolute right-12 top-10 h-28 w-28 rounded-full bg-cream/10 blur-2xl"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-[32px] border border-white/15 bg-white/8 px-6 py-8 shadow-[0_30px_80px_-40px_rgba(34,34,34,0.55)] backdrop-blur-[2px] sm:p-10 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl leading-tight text-white sm:text-3xl lg:text-4xl"
              >
                You have a good life. There&rsquo;s a lot you&rsquo;re genuinely
                grateful for.
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white sm:text-lg"
              >
                <p>
                  But when it comes to your work&hellip; something&rsquo;s
                  missing.
                </p>
                <p>
                  You&rsquo;re not connected to your purpose.
                  <br />
                  You&rsquo;re not using your full potential.
                </p>
                <p>
                  And it&rsquo;s frustrating, because you know there&rsquo;s
                  more in you.
                </p>
                <p>
                  More impact, more service, a bigger life that you could be
                  living.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          4. DISCOVERY
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream px-4 py-16 sm:py-20 lg:py-16">
        <motion.div
          style={{ y: softGlowY }}
          className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-linen/35 blur-3xl"
        />
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
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-4">
            It&rsquo;s about getting clear on what the most aligned path is for
            you.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            The shift happens when you see your path clearly, clear what&rsquo;s
            been holding you back, and start moving while it&rsquo;s still
            alive.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          5. PIVOT + USP
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-linen/50 px-4 py-16 sm:py-20 lg:py-16">
        <motion.div
          style={{ x: ribbonShift, y: heroShapeY }}
          className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-white/35 blur-3xl"
        />
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
          <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-8">
            To help you connect your vision, your purpose, and your zone of
            genius and bring it into reality.
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
      <section className="bg-offwhite pt-16 pb-8 sm:pt-20 sm:pb-10 px-4">
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
            className="text-center font-sans font-semibold text-ink text-base sm:text-lg mt-8 max-w-2xl mx-auto leading-relaxed underline decoration-sage/50 underline-offset-4"
          >
            You&rsquo;re not starting from zero. You&rsquo;re on the edge of breakthrough, you just need clarity and the right support to move forward.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          9. MODULES
         ════════════════════════════════════════════════ */}
      <section id="modules" className="bg-cream py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              What&rsquo;s inside:
            </h2>
          </motion.div>

          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sage/20 hidden sm:block" />

            <div className="space-y-4">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.number}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
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
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-sage via-sage to-terracotta px-4 py-20 sm:py-24">
        <motion.div
          style={{ y: softGlowY }}
          className="absolute right-8 top-16 h-28 w-28 rounded-full bg-white/10 blur-2xl"
        />
        <motion.div
          style={{ x: ribbonShift }}
          className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cream/10 blur-3xl"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-[32px] border border-white/12 bg-white/6 p-6 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.55)] backdrop-blur-[2px] sm:p-10 lg:p-12">
            <motion.h2
              variants={fadeUp}
              className="text-center font-display text-3xl sm:text-4xl text-white leading-tight mb-10"
            >
              Imagine this:
            </motion.h2>

            <motion.ul
              variants={fadeUp}
              className="mx-auto max-w-3xl space-y-2 text-left"
            >
              {imagineMoments.map((moment) => (
                <li
                  key={moment}
                  className="flex items-start gap-3 font-sans text-base leading-relaxed text-white sm:text-lg"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cream" />
                  <span>{moment}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-center font-display italic text-white text-xl sm:text-2xl"
            >
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
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f4ef_0%,rgba(215,207,172,0.28)_52%,#ede9e0_100%)] px-4 py-20 sm:py-24">
        <motion.div
          style={{ y: softGlowY }}
          className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-sage/15 blur-3xl"
        />
        <motion.div
          style={{ x: ribbonShift, y: heroShapeY }}
          className="absolute right-0 top-10 h-52 w-52 rounded-full bg-terracotta/12 blur-3xl"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="inline-flex rounded-full border border-sage/10 bg-white/75 px-4 py-1.5 font-sans text-[11px] uppercase tracking-[0.28em] text-deep-sage shadow-soft">
              10% donated from every purchase
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl text-ink">
              Your investment creates impact beyond your own life
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
              10% of profit from every purchase is donated to:
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-sage/10 bg-white/90 p-5 shadow-lifted backdrop-blur-sm sm:p-6"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/assets/somasurf.jpg"
                  alt="SOMA Surf"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl text-ink mb-3">
                SOMA Surf — S&atilde;o Tom&eacute;, Africa
              </h3>
              <p className="font-sans text-ink/70 leading-relaxed mb-3">
                A surf therapy program for girls and women, using the ocean and movement to build confidence, resilience, and a sense of self that no classroom can teach.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed">
                Katja spent two months there, in the water and on the ground, documenting what happens when someone reconnects with their body and their power.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-sage/10 bg-white/90 p-5 shadow-lifted backdrop-blur-sm sm:p-6"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/assets/abriendomendes.png"
                  alt="Abriendo Mentes"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl text-ink mb-3">
                Abriendo Mentes — Costa Rica
              </h3>
              <p className="font-sans text-ink/70 leading-relaxed mb-3">
                A local nonprofit providing education, technology, and opportunities for young people in rural communities.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mb-3">
                From English and tech classes, to vocational training, these are the tools that create real change and open up new futures.
              </p>
              <p className="font-sans text-ink/80 leading-relaxed font-medium italic">
                When you invest in your life, you&rsquo;re part of something bigger.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          14. VALUE ANCHOR
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-[32px] border border-sage/10 bg-white/90 p-6 shadow-lifted sm:p-10 lg:p-12">
            <motion.p
              variants={fadeUp}
              className="font-sans text-sage uppercase tracking-[0.28em] text-xs mb-4 text-center"
            >
              Everything inside Dream Life Mapping
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl text-ink text-center mb-6"
            >
              When you join, you&rsquo;re not just getting a course.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="max-w-3xl mx-auto text-center font-sans text-ink/70 text-base sm:text-lg leading-relaxed space-y-4"
            >
              <p>
                You&rsquo;re stepping into a full container designed to support
                you through this entire process.
              </p>
              <p>Here&rsquo;s what&rsquo;s included:</p>
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Dream Life Mapping Course",
                  description:
                    "A complete process to help you get clear on your direction and start building it",
                  value: "$797",
                },
                {
                  title: "12-Month Community Access",
                  description:
                    "A space to stay in momentum, ask questions, and be surrounded by people who are also building aligned lives — with async support from your guides",
                  value: "$480",
                },
                {
                  title: "Somatic Toolkit",
                  description:
                    "Practices to help you move through fear, regulate your nervous system, and stay connected to your intuition",
                  value: "$97",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-[24px] border border-sage/10 bg-[linear-gradient(135deg,rgba(246,244,239,0.95),rgba(237,233,224,0.88))] p-5 sm:p-6"
                >
                  <h3 className="font-display text-2xl text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-ink/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="font-sans text-sm uppercase tracking-[0.22em] text-sage">
                    Value: {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-[28px] bg-gradient-to-br from-deep-sage via-sage to-terracotta p-6 text-center text-white shadow-[0_24px_60px_-36px_rgba(34,34,34,0.55)] sm:p-8"
            >
              <p className="font-sans uppercase tracking-[0.28em] text-xs text-white/70 mb-3">
                Value Summary
              </p>
              <p className="font-display text-3xl sm:text-4xl mb-2">
                Total Value: $1,374
              </p>
              <p className="font-display text-4xl sm:text-5xl mb-2">
                Today: $197
              </p>
              <p className="font-sans text-base sm:text-lg text-white/80">
                or 3 payments of $77
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl mx-auto text-center font-sans text-ink/70 text-base sm:text-lg leading-relaxed"
            >
              This is everything you need to get clear, move forward, and
              actually start building a life that feels aligned.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href={checkoutUrl}
                className="inline-block bg-sage text-white font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-sage/30"
              >
                Join Now — $197 →
              </a>
              <a
                href={checkoutUrl}
                className="inline-block border-2 border-ink text-ink font-bold px-8 py-4 rounded-full text-base hover:bg-ink hover:text-cream transition-colors"
              >
                Choose 3 Payments of $77 →
              </a>
            </motion.div>
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
          19. PURCHASE DETAILS — What happens next
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite pt-16 pb-8 sm:pt-20 sm:pb-10 px-4">
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
            <motion.p variants={fadeUp}>You&rsquo;ll also get access to the community space for the next 12 months, where you can ask questions any time and get async support from us as your guides.</motion.p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          20. GUARANTEE
         ════════════════════════════════════════════════ */}
      <section className="bg-sage/10 pt-8 pb-16 sm:pt-10 sm:pb-20 px-4">
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
            We want to make it an easy decision
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
                $497
              </p>
              <p className="font-display text-5xl text-sage mb-1">$197</p>
              <p className="font-sans text-sage text-sm font-medium mb-6">
                USD — Save $300
              </p>
              <a
                href={checkoutUrl}
                className="block text-center bg-sage text-white font-bold py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-sage/30"
              >
                Join Now — $197 →
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
                3 × $77
              </p>
              <p className="font-sans text-ink/50 text-sm mb-6">
                USD
              </p>
              <a
                href={checkoutUrl}
                className="block text-center border-2 border-ink text-ink font-bold py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Join Now — 3 × $77 →
              </a>
              <p className="text-center text-xs text-ink/40 mt-3">
                Same access · Instant start
              </p>
            </motion.div>
          </div>

          {/* trust badges */}
          <motion.div variants={fadeUp} className="text-center font-sans text-sm text-ink/60 mb-4">
            Founding member price · Usually $497 · You save $300 · 30-day money-back guarantee
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
              Join Dream Life Mapping — $197 →
            </a>
            <p className="mt-4 text-white/50 text-sm font-sans">
              Or 3 × $77 · 30-day money-back guarantee · Instant access
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* footer spacer */}
      <div className="h-2 bg-ink" />
    </main>
  );
}
