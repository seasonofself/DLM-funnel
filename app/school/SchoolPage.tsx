"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  modules,
  mirrorLines,
  whatsInside,
  schoolFaqs,
  schoolForYou,
  schoolNotForYou,
  testimonials,
} from "@/lib/data";
import Header from "@/components/Header";

/* ─── checkout ─────────────────────────────────────────────
   One Circle paywall holds both price options ($25/mo and
   $197/yr); members pick their plan on the checkout page, so
   every "join" button points to the same URL. */
const checkoutUrl = "https://seasonofself.circle.so/checkout/season-of-self";
const checkoutMonthly = checkoutUrl;
const checkoutAnnual = checkoutUrl;

/* Next live group coaching call. Update this by hand each month. */
const nextCall = "July 23, 2026";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

/* ─── main component ──────────────────────────────────── */
export default function SchoolPage() {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative overflow-hidden bg-cream">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR — founder rate, real scarcity
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-ink text-cream text-center py-2.5 px-4 text-xs sm:text-sm font-sans">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span>
            ✦ Founder rate: first 100 members lock in{" "}
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
              The method
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
                  className="w-full flex items-center gap-5 sm:gap-7 p-6 sm:p-7 text-left hover:bg-cream/40 transition-colors"
                >
                  <span className="font-display italic text-terracotta/70 text-2xl sm:text-3xl shrink-0 w-10 sm:w-12">
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
              Everything your membership{" "}
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
            grows. Your membership includes everything we ever add.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="max-w-md mx-auto bg-ink text-cream rounded-full px-7 py-4 text-center"
          >
            <span className="font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-cream/55">
              Next live call
            </span>
            <span className="block font-display text-xl mt-0.5">
              {nextCall}
            </span>
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
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55 mb-5"
            >
              Your guides
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
            {/* Charlotte */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[20px] overflow-hidden mb-8">
                <Image
                  src="/assets/SS_Nosara_11-03-26-546.jpg"
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-px bg-ink/25 mx-auto mb-8" />
            <p className="font-display italic text-2xl sm:text-3xl text-ink/75 leading-relaxed">
              Dream Life Mapping is the exact process we used. The school is the
              support we wish we’d had.
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
              Real stories
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
              className="bg-white rounded-[28px] p-8 sm:p-10 shadow-soft"
            >
              <h3 className="font-display text-xl text-ink mb-1">Monthly</h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                Founder rate, locked for as long as you stay
              </p>
              <p className="font-display text-6xl text-ink mb-2">$25</p>
              <p className="font-sans text-ink/55 text-sm mb-7">per month</p>
              <a
                href={checkoutMonthly}
                className="block text-center border border-ink text-ink font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-ink hover:text-cream transition-colors"
              >
                Join monthly →
              </a>
              <p className="text-center text-xs text-ink/45 mt-3">
                Cancel anytime
              </p>
            </motion.div>

            {/* Annual */}
            <motion.div
              variants={fadeUp}
              className="relative bg-white rounded-[28px] p-8 sm:p-10 shadow-soft"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-cream text-[10px] font-semibold tracking-[0.28em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                What the course alone used to cost
              </span>
              <h3 className="font-display text-xl text-ink mb-1">Annual</h3>
              <p className="font-sans text-ink/55 text-sm mb-5">
                Same everything, about 4 months free
              </p>
              <p className="font-display text-6xl text-ink mb-2">$197</p>
              <p className="font-sans text-ink/55 text-sm mb-7">per year</p>
              <a
                href={checkoutAnnual}
                className="block text-center bg-ink text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase py-4 rounded-full hover:bg-deep-brown transition-colors"
              >
                Join annual →
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
              We’re opening the school with a founder rate for the first 100
              members. Join now and $25/mo (or $197/yr) is your price for as long
              as you’re a member, even when the price goes up.
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
              transition={{ duration: 0.7 }}
              className="inline-flex rounded-full bg-[#dde2d2] px-5 py-2 font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/55"
            >
              10% of profit donated
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="mt-7 font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink"
            >
              Your membership creates impact{" "}
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
          13. FINAL CTA — full-bleed
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
            Your next season is the one where you{" "}
            <span className="italic">design it</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Join Season of Self today. Lock in the founder rate, start Dream Life
            Mapping tonight, and be on the next live call with us.
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
  );
}
