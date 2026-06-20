"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  modules,
  faqs,
  valueStack,
  resonanceCards,
  testimonials,
  imagineMoments,
} from "@/lib/data";
import Header from "@/components/Header";
import FloatingShape from "@/components/ui/FloatingShape";

/* ─── helpers ──────────────────────────────────────────── */
const checkoutUrl =
  "https://seasonofself.circle.so/checkout/dream-life-mapping";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const insideBullets = [
  "Get clear on what you’re naturally great at",
  "Understand what you actually want to build your life around",
  "Identify the most aligned path forward for you",
  "Work through what’s been keeping you stuck",
  "Turn your ideas into real work that pays you",
];

/* ─── main component ──────────────────────────────────── */
export default function VariantA() {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative overflow-hidden bg-cream">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR — calm, evergreen, no urgency
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-ink text-cream text-center py-2.5 px-4 text-xs sm:text-sm font-sans">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span>
            ✦ Dream Life Mapping ·{" "}
            <strong className="text-linen">$197</strong> one-time · Yours for
            life, join anytime
          </span>
          <a
            href={checkoutUrl}
            className="inline-block bg-cream text-ink font-semibold text-[11px] tracking-[0.18em] uppercase px-4 py-1.5 rounded-full hover:bg-white transition-colors"
          >
            Join →
          </a>
        </div>
      </div>

      {/* spacer for fixed bar */}
      <div className="h-11" />

      <Header sticky={false} />

      {/* ════════════════════════════════════════════════
          2. HERO — editorial split, no copy on faces
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
        {/* Soft floating shapes — brand motif carried over from The Inner Map */}
        <FloatingShape shape="ring" color="#939e7a" size={130} className="top-20 left-[6%] hidden lg:block" />
        <FloatingShape shape="blob" color="#c19673" size={90} className="bottom-10 left-[3%] hidden lg:block" delay={2} />
        <FloatingShape shape="dot" color="#9caec1" size={70} className="top-1/4 right-[5%] hidden xl:block" />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* LEFT — copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7 order-2 lg:order-1 relative z-10"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem] leading-[0.95] text-ink mb-8 tracking-[-0.01em]"
            >
              You know you’re meant for more.{" "}
              <span className="italic text-terracotta-dark">
                This is how you finally build it.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-7"
            >
              A self-paced course for women who are done waiting, ready to build
              work that feels like them and a soft, free life around it. With a
              community alongside you so you’re never doing it alone.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/70 text-[15px] sm:text-base leading-relaxed max-w-xl mb-10 border-l-2 border-sage/50 pl-4"
            >
              The Inner Map showed you your direction. Dream Life Mapping is how
              you build it. New here? You can start with either one.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5 sm:gap-6 mb-8"
            >
              <a
                href={checkoutUrl}
                className="group inline-flex items-center gap-3 bg-ink text-cream font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-8 sm:px-9 py-[18px] rounded-full shadow-soft hover:bg-deep-sage hover:shadow-glow-sage transition-all"
              >
                Join Dream Life Mapping
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#modules"
                className="font-sans text-sm text-ink/70 hover:text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink/70 transition-colors"
              >
                See what’s inside
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-[13px] sm:text-sm leading-relaxed text-ink/55 max-w-md"
            >
              $197 USD · one-time · yours for life · join anytime · 30-day
              money-back guarantee
            </motion.p>
          </motion.div>

          {/* RIGHT — single clean photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.35)]"
            >
              <Image
                src="/assets/season_coconut.jpg"
                alt="Charlotte and Katja"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. PROBLEM
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-32 lg:pb-40 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-10"
          >
            You have a good life. And still,{" "}
            <span className="italic">something is off</span>.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="space-y-5 font-sans text-ink/65 text-base sm:text-lg leading-relaxed text-left max-w-2xl mx-auto"
          >
            <p>
              There is a lot you are genuinely grateful for. But your work does
              not light you up, and it does not fund the life you actually want
              to be living.
            </p>
            <p>
              You can feel that there is more in you. More to build, more to
              earn, a bigger and freer life with your name on it.
            </p>
            <p>
              And right behind that feeling, the quieter voice. Who am I to want
              more. What if I’m not actually good enough. What would I even do.
              That voice is not a sign you’re wrong about wanting more. It’s just
              the part of you that has never been shown the way.
            </p>
            <p>
              You are ready to stop circling the idea of it and start building
              the real thing.
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-12 font-display italic text-ink text-2xl sm:text-3xl max-w-2xl mx-auto leading-snug"
          >
            That is what Dream Life Mapping is for. It helps you find the work
            that is truly yours, and turn it into a living.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          4. INSIDE, YOU'LL — editorial list
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-5"
            >
              Inside, you’ll
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {insideBullets.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <div className="flex items-baseline gap-6 sm:gap-8 py-6 sm:py-7">
                  <span className="font-display italic text-deep-sage text-2xl sm:text-3xl shrink-0 w-10 sm:w-12">
                    0{i + 1}
                  </span>
                  <p className="font-display text-ink text-xl sm:text-2xl lg:text-[1.65rem] leading-snug">
                    {text}
                  </p>
                </div>
                {i < insideBullets.length - 1 && (
                  <div className="border-t border-ink/12" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. THIS IS FOR YOU IF
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <FloatingShape shape="ring" color="#939e7a" size={120} className="top-16 left-[5%] hidden lg:block" />
        <FloatingShape shape="blob" color="#9caec1" size={90} className="bottom-24 right-[5%] hidden lg:block" delay={2} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-14"
          >
            This is for you <span className="italic">if</span>…
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {resonanceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[20px] p-6 sm:p-7 hover:shadow-[0_24px_50px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <span className="font-display italic text-deep-sage/70 text-2xl block mb-3">
                  0{i + 1}
                </span>
                <p className="font-sans text-ink/80 text-base sm:text-[17px] leading-relaxed">
                  {card}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-display italic text-ink text-xl sm:text-2xl mt-14 max-w-2xl mx-auto leading-snug"
          >
            You’re not starting from zero. You’re on the edge of breakthrough,
            you just need clarity and the right support to move forward.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          6. MODULES
         ════════════════════════════════════════════════ */}
      <section id="modules" className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10 scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-5"
            >
              What’s inside
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Six modules to take you from{" "}
              <span className="italic">stuck</span> to{" "}
              <span className="italic">moving</span>.
            </motion.h2>
          </div>

          <div className="space-y-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.number}
                variants={fadeUp}
                className="bg-white rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex items-center gap-5 sm:gap-7 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
                >
                  <span className="font-display italic text-deep-sage/70 text-2xl sm:text-3xl shrink-0 w-10 sm:w-12">
                    {mod.number === "✧" ? "✦" : `0${mod.number}`}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/40 mb-1.5">
                      {mod.number === "✧"
                        ? "Bonus"
                        : `Module ${mod.number}`}{" "}
                      · {mod.keyword}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-ink leading-snug">
                      {mod.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: openModule === i ? 45 : 0 }}
                    className="text-ink/40 text-2xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openModule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-7 pl-[4.5rem] sm:pl-[5rem]">
                        <p className="font-sans text-ink/70 leading-relaxed text-[15px] sm:text-base">
                          {mod.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          7. IMAGINE THIS — full-bleed photo + overlay
         ════════════════════════════════════════════════ */}
      <section className="relative min-h-[70svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/horizontal_heroimage.jpg"
            alt=""
            fill
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-ink/55" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32 min-h-[70svh] flex flex-col justify-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-cream/70 mb-6"
          >
            Imagine this
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.2rem] sm:text-4xl lg:text-[3.2rem] leading-[1.05] text-cream mb-12"
          >
            What if you{" "}
            <span className="italic">actually felt this</span>?
          </motion.h2>

          <motion.ul variants={fadeUp} className="space-y-3 max-w-xl mx-auto text-left mb-10">
            {imagineMoments.map((moment) => (
              <li
                key={moment}
                className="flex items-start gap-3 font-sans text-cream/90 text-base sm:text-lg leading-relaxed"
              >
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cream/60" />
                <span>{moment}</span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="font-display italic text-cream text-2xl sm:text-3xl"
          >
            You feel like you’re finally living your life.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          8. TESTIMONIALS
          NOTE: Placeholder quotes — see lib/data.ts.
          REPLACE WITH REAL CUSTOMER QUOTES BEFORE LAUNCH (FTC).
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-5"
            >
              Real Stories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Women who stopped waiting and{" "}
              <span className="italic">started building</span>.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                className="relative bg-white rounded-[24px] p-7 sm:p-8 shadow-soft hover:shadow-[0_24px_50px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-6 font-display text-7xl text-deep-sage/15 leading-none select-none"
                >
                  “
                </span>
                <blockquote className="relative font-sans text-ink/75 text-[15px] sm:text-base leading-relaxed mb-6 pt-3">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-ink/8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-sage/15 font-display text-deep-sage text-sm">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-base text-ink leading-tight">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-ink/50">
                      {t.location}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          9. MOST PEOPLE STAY
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-10"
          >
            Most people stay in this loop for{" "}
            <span className="italic">years</span>.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed mb-10 space-y-1"
          >
            <p>Thinking about what they want</p>
            <p>Second-guessing every direction</p>
            <p>Starting and stopping</p>
            <p>Waiting to feel ready</p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-ink text-xl sm:text-2xl leading-snug max-w-xl mx-auto"
          >
            What this gives you is clarity, direction, and the ability to move.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          10. FOUNDERS
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-5"
            >
              Your Guides
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Meet Charlotte &amp; <span className="italic">Katja</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[20px] overflow-hidden mb-8">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-ink mb-5">
                Charlotte
              </h3>
              <div className="space-y-4 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
                <p>
                  Charlotte was doing everything she was supposed to do.
                  Business school, work at a startup, a good life in Montreal.
                </p>
                <p>
                  One moment changed that. She heard someone speak about
                  building a life on your own terms and felt something click.
                  She followed it. Took action without having everything
                  figured out. Tried things, failed, kept going.
                </p>
                <div className="my-6 border-l-2 border-terracotta pl-5 py-1">
                  <p className="font-display text-xl sm:text-2xl text-ink leading-snug italic">
                    A multi-million-dollar beauty brand with{" "}
                    <span className="not-italic font-semibold text-terracotta-dark">
                      100,000+ customers
                    </span>{" "}
                    across{" "}
                    <span className="not-italic font-semibold text-terracotta-dark">
                      50+ countries.
                    </span>
                  </p>
                </div>
                <p>
                  Today she lives by the ocean in Costa Rica and helps people
                  get clear on their direction and build lives that feel
                  aligned.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[20px] overflow-hidden mb-8">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-ink mb-5">
                Katja
              </h3>
              <div className="space-y-4 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
                <p>
                  Katja had checked every box. Top universities, corporate
                  career, long-term relationship. From the outside, everything
                  looked right. Inside, she felt disconnected.
                </p>
                <p>
                  A solo backpacking trip through Latin America changed
                  everything. She met people living differently and felt
                  something shift. She quit her job, ended the relationship,
                  sold her belongings, and moved to Nicaragua without knowing
                  exactly what came next.
                </p>
                <p>She rebuilt her life around what actually felt true.</p>
                <p>
                  Today she helps people get clear on their direction and build
                  lives that feel aligned by reconnecting with their body and
                  intuition.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-px bg-ink/25 mx-auto mb-8" />
            <p className="font-display italic text-2xl sm:text-3xl text-ink/75 leading-relaxed">
              Dream Life Mapping is the exact process we used to build work we
              love and lives we would actually choose. It is the thing we wish
              someone had handed us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          11. WHAT'S INCLUDED — value stack
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#cdd8e1] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-5"
            >
              What you get
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-6"
            >
              When you join, you’re not just getting a{" "}
              <span className="italic">course</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            >
              You’re stepping into a full container designed to support you
              through the entire process.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {[
              {
                title: "Dream Life Mapping Course",
                description:
                  "A complete process to help you get clear on your direction and start building it.",
                value: "$797",
                extraNote: null as string | null,
              },
              {
                title: "12-Month Community Access",
                description:
                  "A warm, low-key space to share wins, ask questions, and not do this alone. Think of it as a supportive bonus alongside the work, with async support from your guides when you need a hand.",
                value: "$480",
                extraNote: null as string | null,
              },
              {
                title: "Somatic Toolkit",
                description:
                  "Practices to help you move through fear, regulate your nervous system, and stay connected to your intuition.",
                value: "$97",
                extraNote: null as string | null,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-[24px] p-7 sm:p-8 flex flex-col shadow-soft"
              >
                <h3 className="font-display text-2xl text-ink mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed mb-5 text-[15px] flex-1">
                  {item.description}
                </p>
                {item.extraNote && (
                  <p className="font-sans italic text-sm text-deep-sage leading-relaxed mb-5 border-l-2 border-sage/40 pl-3">
                    {item.extraNote}
                  </p>
                )}
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-deep-sage mt-auto">
                  Value: {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Total value card */}
          <motion.div
            variants={fadeUp}
            className="bg-ink text-cream rounded-[28px] p-8 sm:p-12 text-center"
          >
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-cream/55 mb-3">
              Value Summary
            </p>
            <p className="font-display text-2xl sm:text-3xl text-cream/85 mb-1">
              Total Value: <span className="line-through">$1,374</span>
            </p>
            <p className="font-display text-5xl sm:text-6xl mb-2 italic">
              Today: $197
            </p>
            <p className="font-sans text-base text-cream/65 mb-8">
              or 3 payments of $77
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center gap-3 bg-cream text-ink font-sans font-medium text-[11px] tracking-[0.32em] uppercase px-8 py-[18px] rounded-full hover:bg-white transition-colors"
              >
                Join Now · $197 →
              </a>
              <a
                href={checkoutUrl}
                className="inline-flex items-center justify-center gap-3 border border-cream/60 text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase px-8 py-[18px] rounded-full hover:bg-cream/10 transition-colors"
              >
                3 × $77 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          12. WHY NOW
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6"
          >
            Why now
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-10"
          >
            You already <span className="italic">know</span>.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="space-y-4 font-sans text-ink/65 text-base sm:text-lg leading-relaxed"
          >
            <p>
              If you have been feeling the pull to change something, you
              already know it. You have known it for a while.
            </p>
            <p>
              The real cost is another six months, another year, spent in the
              same place still thinking about it.
            </p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-display italic text-ink text-2xl sm:text-3xl mt-10"
          >
            This is your moment to actually move.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          13. GUARANTEE
         ════════════════════════════════════════════════ */}
      <section className="bg-sage/15 py-20 sm:py-24 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-deep-sage text-cream text-2xl mb-6"
          >
            ✦
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink mb-7"
          >
            We want this to be an easy{" "}
            <span className="italic">yes</span>.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-7 space-y-4"
          >
            <p>Go through the course and do the work.</p>
            <p>
              If you do not walk away with a clear direction and a real next
              step you are excited to move on, email us within 30 days and we
              will refund you in full.
            </p>
            <p className="font-display italic text-lg sm:text-xl text-ink/85">
              We would rather you spend your money on the life you are
              building.
            </p>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage"
          >
            30-day money-back guarantee
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          14. GIVE BACK — moved here per brief
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="inline-flex rounded-full bg-[#dde2d2] px-5 py-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-deep-sage"
            >
              10% donated from every purchase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="mt-7 font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink"
            >
              Your investment creates impact{" "}
              <span className="italic">beyond your own life</span>.
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="https://www.somasurf.org/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
              className="group block bg-white rounded-[24px] overflow-hidden shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/somasurf.jpg"
                  alt="SOMA Surf"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-2xl text-ink mb-3">
                  SOMA Surf · S&atilde;o Tom&eacute;, Africa
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed text-[15px] mb-5">
                  A surf therapy program for girls and women, using the ocean
                  and movement to build confidence, resilience, and a sense of
                  self that no classroom can teach.
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-terracotta-dark">
                  Visit somasurf.org
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://abriendomentes.org/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="group block bg-white rounded-[24px] overflow-hidden shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/abriendomendes.png"
                  alt="Abriendo Mentes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-2xl text-ink mb-3">
                  Abriendo Mentes · Costa Rica
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed text-[15px] mb-5">
                  A local nonprofit providing education, technology, and
                  opportunities for young people in rural communities.
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-terracotta-dark">
                  Visit abriendomentes.org
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          15. PRICING
         ════════════════════════════════════════════════ */}
      <section id="pricing" className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-14"
          >
            Choose your <span className="italic">option</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <motion.div
              variants={fadeUp}
              className="relative bg-white rounded-[28px] p-8 sm:p-10 shadow-soft"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-cream text-[10px] font-semibold tracking-[0.28em] uppercase px-4 py-1 rounded-full">
                Best value
              </span>
              <h3 className="font-display text-xl text-ink mb-1">
                Pay in full
              </h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                One-time payment
              </p>
              <p className="font-display text-6xl text-deep-sage mb-2">$197</p>
              <p className="font-sans text-ink/55 text-sm mb-7">USD</p>
              <a
                href={checkoutUrl}
                className="block text-center bg-ink text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-deep-sage transition-colors"
              >
                Join Now · $197 →
              </a>
              <p className="text-center text-xs text-ink/45 mt-3">
                Instant access · 30-day guarantee
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[28px] p-8 sm:p-10 shadow-soft"
            >
              <h3 className="font-display text-xl text-ink mb-1">
                Payment plan
              </h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                3 monthly payments
              </p>
              <p className="font-display text-6xl text-ink mb-2">3 × $77</p>
              <p className="font-sans text-ink/55 text-sm mb-7">USD</p>
              <a
                href={checkoutUrl}
                className="block text-center border border-ink text-ink font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Join Now · 3 × $77 →
              </a>
              <p className="text-center text-xs text-ink/45 mt-3">
                Same access · Instant start
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="text-center font-sans text-sm text-ink/60 mb-4 max-w-2xl mx-auto"
          >
            $197 one-time. Yours for life, join anytime. 30-day money-back
            guarantee. Instant access.
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="max-w-md mx-auto space-y-2"
          >
            {valueStack.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 font-sans text-ink/70 text-sm justify-center text-center"
              >
                <span className="text-deep-sage flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          16. FAQ
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-14"
          >
            Questions, <span className="italic">answered</span>.
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl text-ink leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="text-ink/40 text-2xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 sm:px-7 pb-7 font-sans text-ink/70 leading-relaxed text-[15px]">
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
          17. FINAL CTA — full-bleed
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/founders_vibing.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-ink/65" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-cream mb-8"
          >
            Stop overthinking. Start{" "}
            <span className="italic">building</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            If you are ready to stop overthinking your life and start building
            work that actually feels like you, this is your next step.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={checkoutUrl}
              className="inline-flex items-center gap-3 bg-cream text-ink font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-10 py-[20px] rounded-full hover:bg-white transition-colors"
            >
              Join Dream Life Mapping · $197 →
            </a>
            <p className="mt-5 text-cream/60 text-xs font-sans">
              Or 3 × $77 · 30-day money-back guarantee · Instant access
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-2 bg-ink" />
    </main>
  );
}
