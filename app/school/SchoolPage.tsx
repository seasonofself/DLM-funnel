"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
  checkoutUrl,
  modules,
  somaticToolkit,
  mirrorLines,
  whatsInside,
  howItWorks,
  thisMonth,
  pricing,
  foundingHundredNote,
  teacherCredentials,
  teachersSharedLine,
  seasonalManifesto,
  journeyVerbs,
  schoolFaqs,
  schoolForYou,
  schoolNotForYou,
  testimonials,
} from "@/content/school";
import Header from "@/components/Header";

const checkoutMonthly = checkoutUrl;
const checkoutAnnual = checkoutUrl;

/* Section-entry reveal: fade + 16px rise, 400ms, once per section.
   MotionConfig reducedMotion="user" (below) disables the rise for
   visitors with prefers-reduced-motion. */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

/* ─── main component ──────────────────────────────────── */
export default function SchoolPage() {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <MotionConfig reducedMotion="user">
    <main className="relative overflow-hidden bg-cream">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR — founder rate, real scarcity
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-ink text-cream text-center py-2.5 px-4 text-xs sm:text-sm font-sans">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span>
            ✦ The Founding 100: first 100 students lock in{" "}
            <strong className="text-linen">$25/mo</strong> for as long as they
            stay
          </span>
          <a
            href={checkoutMonthly}
            className="inline-block bg-cream text-ink font-semibold text-[11px] tracking-[0.18em] uppercase px-4 py-1.5 rounded-full hover:bg-white transition-colors"
          >
            Join the school →
          </a>
        </div>
      </div>

      {/* spacer for fixed bar */}
      <div className="h-11" />

      <Header sticky={false} />

      {/* ════════════════════════════════════════════════
          2. HERO
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* LEFT — copy (first on mobile so the CTA lands above the fold) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7 order-1 relative z-10"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-6"
            >
              Season of Self · The School
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem] leading-[0.95] text-ink mb-8 tracking-[-0.01em]"
            >
              Design a life you love around your{" "}
              <span className="italic">soul work</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-9"
            >
              For women who feel unfulfilled in their work and ready for
              something more. One course, monthly coaching with us, and a
              community of women in the same season.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5 sm:gap-6 mb-8"
            >
              <a
                href={checkoutMonthly}
                className="group inline-flex items-center gap-3 bg-ink text-cream font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-8 sm:px-9 py-[18px] rounded-full shadow-soft hover:bg-deep-brown hover:shadow-glow-sage transition-all"
              >
                Join the school · $25/mo
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#inside"
                className="font-sans text-sm text-ink/70 hover:text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink/70 transition-colors"
              >
                See what’s inside
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-[13px] sm:text-sm leading-relaxed text-ink/55 max-w-md"
            >
              $25/month or $197/year · cancel anytime · first live call inside
              this month
            </motion.p>
          </motion.div>

          {/* RIGHT — founders together */}
          <div className="lg:col-span-5 order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-[15rem] sm:max-w-sm lg:max-w-md mx-auto rounded-[28px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.35)]"
            >
              <Image
                src="/assets/season_coconut.jpg"
                alt="Charlotte and Katja"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 384px, 448px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. THE MIRROR — her inner monologue
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-32 lg:pb-40 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-5 sm:space-y-6 mb-12">
            {mirrorLines.map((line) => (
              <motion.p
                key={line}
                variants={fadeUp}
                className="font-display text-ink text-xl sm:text-2xl lg:text-[1.7rem] leading-relaxed text-center"
              >
                “{line}”
              </motion.p>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="font-display text-ink text-xl sm:text-2xl lg:text-[1.7rem] leading-relaxed text-center max-w-2xl mx-auto"
          >
            You’re not ungrateful. You’re not lost. You’re in a{" "}
            <span className="italic">season of change</span>, and you’re not
            supposed to walk through it alone.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          3b. HOW THE SCHOOL WORKS — the learn-then-live rhythm
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pb-24 sm:pb-32 lg:pb-40 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-12 sm:mb-16"
          >
            How the school works
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
            {howItWorks.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="text-center sm:text-left"
              >
                <span className="font-display italic text-terracotta/70 text-3xl block mb-3">
                  {s.step}
                </span>
                <h3 className="font-display text-2xl sm:text-[1.7rem] text-ink mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-relaxed">
                  {s.line}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          4. WHY THE OTHER THINGS HAVEN'T WORKED
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[24px] overflow-hidden order-1"
          >
            <Image
              src="/assets/SheFlows-8.jpg"
              alt="Katja leading a somatic sound practice"
              fill
              sizes="(max-width: 512px) 100vw, 448px"
              className="object-cover"
            />
          </motion.div>

          <div className="order-2">
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-ink mb-8"
            >
              Information was never the{" "}
              <span className="italic">missing piece</span>.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 font-sans text-ink/80 text-base sm:text-lg leading-relaxed"
            >
              <p>
                You’ve read the books. Saved the podcasts. Journaled the
                prompts. Maybe even bought the course you never finished.
              </p>
              <p>
                What’s been missing is a structured path, real support, and a
                room of women walking it with you. That’s what makes you
                actually follow through.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          5. THE METHOD — Dream Life Mapping
         ════════════════════════════════════════════════ */}
      <section id="method" className="bg-cream py-24 sm:py-32 px-6 sm:px-10 scroll-mt-20">
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
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-5"
            >
              The curriculum
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-6"
            >
              Inside the school, you’ll move through{" "}
              <span className="italic">Dream Life Mapping</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            >
              Our step-by-step process for going from something’s missing to
              living it.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden mb-12 shadow-soft"
          >
            <Image
              src="/assets/SS_Nosara_11-03-26-67.jpg"
              alt="Charlotte and Katja mapping the Dream Life Mapping framework"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.number}
                variants={fadeUp}
                className="bg-white rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  aria-expanded={openModule === i}
                  aria-controls={`module-panel-${i}`}
                  className="w-full flex items-center gap-5 sm:gap-7 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
                >
                  <span className="font-display italic text-terracotta/70 text-2xl sm:text-3xl shrink-0 w-10 sm:w-12">
                    {mod.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/40 mb-1.5">
                      Module {mod.number} · {mod.verb}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-ink leading-snug">
                      {mod.title}
                    </h3>
                  </div>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: openModule === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-ink/40 text-2xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openModule === i && (
                    <motion.div
                      id={`module-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

            {/* The Somatic Toolkit — woven through every module */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[20px] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenModule(
                    openModule === modules.length ? null : modules.length
                  )
                }
                aria-expanded={openModule === modules.length}
                aria-controls="module-panel-toolkit"
                className="w-full flex items-center gap-5 sm:gap-7 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
              >
                <span className="font-display italic text-terracotta/70 text-2xl sm:text-3xl shrink-0 w-10 sm:w-12">
                  ✦
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/40 mb-1.5">
                    {somaticToolkit.verb} · woven through every module
                  </p>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-ink leading-snug">
                    {somaticToolkit.title}
                  </h3>
                </div>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: openModule === modules.length ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-ink/40 text-2xl shrink-0 leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openModule === modules.length && (
                  <motion.div
                    id="module-panel-toolkit"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-7 pl-[4.5rem] sm:pl-[5rem]">
                      <p className="font-sans text-ink/70 leading-relaxed text-[15px] sm:text-base">
                        {somaticToolkit.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          6. WHAT'S INSIDE — quantified card grid
         ════════════════════════════════════════════════ */}
      <section id="inside" className="paper-texture bg-[#cdd8e1] py-24 sm:py-32 px-6 sm:px-10 scroll-mt-20">
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
              What’s inside
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Everything your enrollment{" "}
              <span className="italic">includes</span>.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {whatsInside.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`bg-white rounded-[24px] p-7 sm:p-8 flex flex-col shadow-soft ${
                  i === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <span className="font-display italic text-terracotta/70 text-2xl block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-ink mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed text-[15px] flex-1">
                  {item.description}
                </p>
                {item.note && (
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/55 mt-5">
                    {item.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            New workshops, practices, and trainings get added as the school
            grows. Your enrollment includes everything we ever add.
          </motion.p>

          {/* This month at school — the living notice board.
              All values come from content/school.ts (thisMonth). */}
          <motion.div
            variants={fadeUp}
            className="max-w-md mx-auto bg-white rounded-[24px] shadow-soft overflow-hidden"
          >
            <div className="bg-ink text-center py-3.5 px-6">
              <p className="font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-cream">
                ✦ This month at school
              </p>
            </div>
            <div className="p-7 sm:p-8 space-y-6">
              {/* Next-live-call row removed for now — bring it back
                  once the Circle calendar wiring is set up (see
                  lib/circleCalendar.ts). */}
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/45 mb-1">
                  Office hours
                </p>
                <p className="font-sans text-[15px] text-ink/75 leading-relaxed">
                  {thisMonth.officeHours}
                </p>
              </div>
              {thisMonth.theme && (
                <div className="border-t border-ink/10 pt-6">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/45 mb-1">
                    This month in the school
                  </p>
                  <p className="font-sans text-[15px] text-ink/75 leading-relaxed">
                    {thisMonth.theme}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          FULL-BLEED — us
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/SS_Nosara_11-02-26-242.jpg"
            alt="Charlotte and Katja at golden hour"
            fill
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
        <div className="absolute inset-0 bg-ink/45" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-28 sm:py-40 min-h-[55svh] flex flex-col justify-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-display italic text-cream text-2xl sm:text-4xl lg:text-[2.6rem] leading-snug"
          >
            This is the life we designed for ourselves. The school is how we
            help you design yours.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          7. MEET YOUR GUIDES — founders
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-5"
            >
              Your teachers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Meet Charlotte &amp; <span className="italic">Katja</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Charlotte */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[20px] overflow-hidden mb-8">
                <Image
                  src="/assets/SS_Nosara_11-03-26-546.jpg"
                  alt="Charlotte"
                  fill
                  sizes="(max-width: 448px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-ink mb-2">
                Charlotte
              </h3>
              <p className="font-sans text-[13px] text-ink/55 leading-relaxed mb-5">
                {teacherCredentials.charlotte}
              </p>
              <div className="space-y-4 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
                <p>
                  Charlotte grew up moving constantly. Twelve schools before
                  university. She did everything she was supposed to do.
                  Business school, a startup job, a good life in Montreal.
                </p>
                <p>
                  When the aligned nonprofit job she wanted disappeared, she had
                  two options. The corporate offer on the table, or the life
                  she’d been dreaming about since backpacking in Indonesia. She
                  bought a one-way ticket to Costa Rica.
                </p>
                <p>
                  She freelanced, tried publishing, an agency, consulting. None
                  of it worked. Then Suntouched.
                </p>
                <div className="my-6 border-l-2 border-terracotta pl-5 py-1">
                  <p className="font-display text-xl sm:text-2xl text-ink leading-snug italic">
                    A beauty brand that’s now international with{" "}
                    <span className="not-italic text-terracotta">
                      100,000+ customers
                    </span>{" "}
                    in{" "}
                    <span className="not-italic text-terracotta">
                      50+ countries.
                    </span>
                  </p>
                </div>
                <p>
                  Today she lives in Nosara, spends her free time in the ocean
                  and the jungle, and helps women take the same leap with more
                  support than she had.
                </p>
              </div>
            </motion.div>

            {/* Katja */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[20px] overflow-hidden mb-8">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  sizes="(max-width: 448px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-ink mb-2">
                Katja
              </h3>
              <p className="font-sans text-[13px] text-ink/55 leading-relaxed mb-5">
                {teacherCredentials.katja}
              </p>
              <div className="space-y-4 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
                <p>
                  Katja had checked every box. Top universities, corporate
                  career, a 10-year relationship. From the outside, everything
                  looked right. Inside, she felt disconnected.
                </p>
                <p>
                  A solo backpacking trip through Latin America changed
                  everything. She met people living differently and felt
                  something shift. She quit her job, ended the relationship,
                  sold her belongings, and rebuilt her life around what felt
                  true.
                </p>
                <p>
                  Today her breathwork facilitation is a living part of the
                  school, and she helps women reconnect with their body and
                  intuition as they design lives that feel like theirs.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-px bg-ink/25 mx-auto mb-8" />
            <p className="font-display italic text-2xl sm:text-3xl text-ink/75 leading-relaxed">
              Dream Life Mapping is the exact process we used. The school is the
              support we wish we’d had.
            </p>
            <p className="mt-6 font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
              {teachersSharedLine}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          8. TESTIMONIALS
          NOTE: Placeholder quotes — see lib/data.ts.
          REPLACE WITH REAL MEMBER QUOTES BEFORE LAUNCH (FTC).
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
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
              Student stories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Women who stopped waiting and{" "}
              <span className="italic">started designing</span>.
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative aspect-[3/2] w-full max-w-3xl mx-auto rounded-[24px] overflow-hidden shadow-soft mb-14"
          >
            <Image
              src="/assets/SS_Nosara_11-02-26-222.jpg"
              alt="Charlotte and Katja on the beach with surfboards"
              fill
              sizes="(max-width: 832px) 100vw, 768px"
              className="object-cover object-[50%_52%]"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                className="relative bg-white rounded-[24px] p-7 sm:p-8 shadow-soft hover:shadow-[0_24px_50px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-6 font-display text-7xl text-ink/10 leading-none select-none"
                >
                  “
                </span>
                <blockquote className="relative font-sans text-ink/80 text-[17px] sm:text-lg leading-relaxed mb-6 pt-3">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-ink/8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 font-display text-ink/55 text-sm">
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
          8b. SEASONAL NARRATIVE — philosophy band
         ════════════════════════════════════════════════ */}
      <section className="bg-ink py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-display italic text-cream text-2xl sm:text-3xl lg:text-[2.4rem] leading-snug max-w-3xl mx-auto"
          >
            {seasonalManifesto}
          </motion.p>

          <motion.div
            variants={stagger}
            aria-label="The Dream Life Mapping journey"
            className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-5"
          >
            {journeyVerbs.map((verb, i) => (
              <motion.span
                key={verb}
                variants={fadeUp}
                className="flex items-center gap-3 sm:gap-5"
              >
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-cream/55">
                  {verb}
                </span>
                {i < journeyVerbs.length - 1 && (
                  <span aria-hidden="true" className="text-cream/30 text-sm">
                    →
                  </span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          9. PRICING (mid-page)
         ════════════════════════════════════════════════ */}
      <section id="pricing" className="bg-cream py-24 sm:py-32 px-6 sm:px-10 scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-8"
          >
            Join the <span className="italic">school</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
          >
            One hour of 1:1 coaching runs $150 to $300. The Dream Life Mapping
            course alone was $197. The school, with the course, monthly coaching
            with both of us, the community, and everything we add, is $25 a
            month.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {/* Monthly */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-[28px] p-8 sm:p-10 shadow-soft hover:shadow-lifted transition-shadow"
            >
              <h3 className="font-display text-xl text-ink mb-1">
                {pricing.monthly.label}
              </h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                {pricing.monthly.sublabel}
              </p>
              <p className="font-display text-6xl text-ink mb-2">
                {pricing.monthly.price}
              </p>
              <p className="font-sans text-ink/55 text-sm mb-7">
                {pricing.monthly.per}
              </p>
              <a
                href={checkoutMonthly}
                className="block text-center border border-ink text-ink font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                {pricing.monthly.cta}
              </a>
              <p className="text-center text-xs text-ink/45 mt-3">
                Cancel anytime
              </p>
            </motion.div>

            {/* Annual */}
            <motion.div
              variants={fadeUp}
              className="relative bg-white rounded-[28px] p-8 sm:p-10 shadow-soft hover:shadow-lifted transition-shadow"
            >
              {pricing.annual.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-cream text-[10px] font-semibold tracking-[0.28em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  {pricing.annual.badge}
                </span>
              )}
              <h3 className="font-display text-xl text-ink mb-1">
                {pricing.annual.label}
              </h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                {pricing.annual.sublabel}
              </p>
              <p className="font-display text-6xl text-ink mb-2">
                {pricing.annual.price}
              </p>
              <p className="font-sans text-ink/55 text-sm mb-7">
                {pricing.annual.per}
              </p>
              <a
                href={checkoutAnnual}
                className="block text-center bg-ink text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-deep-brown transition-colors"
              >
                {pricing.annual.cta}
              </a>
              <p className="text-center text-xs text-ink/45 mt-3">
                Cancel anytime
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="max-w-2xl mx-auto bg-[#dde2d2] rounded-[24px] p-7 sm:p-8 text-center mb-8"
          >
            <p className="font-sans text-ink/75 text-[15px] sm:text-base leading-relaxed">
              {foundingHundredNote}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-center font-sans text-sm text-ink/60 max-w-2xl mx-auto"
          >
            Cancel anytime, in two clicks · 10% of profit donated to SOMA Surf +
            Abriendo Mentes
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          10. THIS IS FOR YOU IF
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-14"
          >
            This is for you <span className="italic">if</span>…
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {schoolForYou.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`bg-white rounded-[20px] p-6 sm:p-7 hover:shadow-[0_24px_50px_-30px_rgba(34,34,34,0.25)] transition-shadow ${
                  i === schoolForYou.length - 1 && schoolForYou.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <span className="font-display italic text-terracotta/70 text-2xl block mb-3">
                  0{i + 1}
                </span>
                <p className="font-sans text-ink/80 text-base sm:text-[17px] leading-relaxed">
                  {card}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/45 mb-6">
              This isn’t for you if
            </p>
            <ul className="space-y-2.5">
              {schoolNotForYou.map((line) => (
                <li
                  key={line}
                  className="font-sans text-ink/60 text-base sm:text-[17px] leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          11. GIVE BACK
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="inline-flex rounded-full bg-[#dde2d2] px-5 py-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/55"
            >
              10% of profit donated
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-7 font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink"
            >
              Your enrollment creates impact{" "}
              <span className="italic">beyond your own life</span>.
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="https://www.somasurf.org/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="group block bg-white rounded-[24px] overflow-hidden shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/somasurf.jpg"
                  alt="SOMA Surf"
                  fill
                  sizes="(max-width: 640px) 100vw, 496px"
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
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-terracotta">
                  Visit somasurf.org
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://abriendomentes.org/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group block bg-white rounded-[24px] overflow-hidden shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/assets/abriendomendes.png"
                  alt="Abriendo Mentes"
                  fill
                  sizes="(max-width: 640px) 100vw, 496px"
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
                <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-terracotta">
                  Visit abriendomentes.org
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          12. FAQ
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
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
            {schoolFaqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl text-ink leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-ink/40 text-2xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
          13. FINAL CTA — full-bleed
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/founders_vibing.jpg"
            alt=""
            fill
            sizes="100vw"
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
            Your next season is the one where you{" "}
            <span className="italic">design it</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Join Season of Self today. Claim your place in the Founding 100,
            start Dream Life Mapping tonight, and be on the next live call with
            us.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={checkoutMonthly}
              className="inline-flex items-center gap-3 bg-cream text-ink font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-10 py-[20px] rounded-full hover:bg-white transition-colors"
            >
              Join the school · $25/mo →
            </a>
            <p className="mt-5 text-cream/60 text-xs font-sans">
              $25/month or $197/year · cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-2 bg-ink" />
    </main>
    </MotionConfig>
  );
}
