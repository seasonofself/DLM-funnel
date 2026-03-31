"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTAButton from "@/components/ui/CTAButton";
import Highlight from "@/components/ui/Highlight";
import PillTag from "@/components/ui/PillTag";

/* ─── helpers ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const whatWeFocus = [
  { icon: "◎", text: "Helping you get clear on what you actually want" },
  { icon: "◈", text: "Helping you identify your zone of genius and most aligned path" },
  { icon: "△", text: "Helping you move through fear, resistance, and overthinking" },
  { icon: "→", text: "Helping you take action that feels aligned and sustainable" },
  { icon: "✦", text: "Helping you build a life and work that reflects who you are" },
];

/* ─── main component ──────────────────────────────────── */
export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Kit (ConvertKit) when ready
    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════
          NAV
         ════════════════════════════════════════════════ */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5">
          <a href="/" className="flex items-center">
            <Image
              src="/assets/green_logo.png"
              alt="Season of Self"
              width={200}
              height={200}
              priority
              unoptimized
              className="h-8 sm:h-9 w-auto brightness-[10] drop-shadow-md"
            />
          </a>
          <a
            href="/dream-life"
            className="font-sans text-xs sm:text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors drop-shadow-sm"
          >
            Dream Life Mapping →
          </a>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════
          HERO — stacked on mobile, full-bleed overlay on desktop
         ════════════════════════════════════════════════ */}

      {/* ── MOBILE hero (palm trees bg with white text overlay) ── */}
      <section className="sm:hidden relative overflow-hidden">
        <Image
          src="/assets/homepage_header.jpg"
          alt=""
          fill
          className="object-cover object-[50%_15%]"
          priority
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-ink/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 px-6 pt-20 pb-12"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-white/60 mb-4"
          >
            Season of Self
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-4 font-display text-[2.5rem] leading-[0.9] text-white"
          >
            Build a life that feels
            <br />
            <span className="italic text-terracotta">true to you</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-subtitle italic text-white/70 text-[15px] leading-relaxed mb-7"
          >
            An online learning and mentorship space for women ready to step into
            their full potential and create lives that feel aligned, abundant, and free.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/dream-life"
              className="inline-flex items-center gap-2 font-display font-semibold text-base bg-white text-ink px-7 py-3.5 rounded-full whitespace-nowrap hover:scale-[1.02] transition-transform"
            >
              Explore Dream Life Mapping <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── DESKTOP hero (full-bleed, shorter) ── */}
      <section className="relative hidden sm:block h-[75svh] min-h-[500px] overflow-hidden">
        <Image
          src="/assets/homepage_header.jpg"
          alt="Charlotte and Katja with surfboards"
          fill
          className="object-cover object-[50%_35%]"
          priority
        />

        {/* gradient — strong at bottom-center for text, transparent at top/sides for faces */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

        {/* content centered at bottom — between the two people */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-end items-center text-center max-w-5xl mx-auto px-10 pb-20 lg:pb-24"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4"
          >
            Season of Self
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-5 font-display text-5xl leading-[0.92] text-white lg:text-6xl xl:text-7xl"
          >
            Build a life that feels
            <br />
            <span className="italic text-terracotta">true to you</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-subtitle italic text-white/50 text-base lg:text-lg max-w-lg mb-8 leading-relaxed"
          >
            An online learning and mentorship space for women ready to step into
            their full potential and create lives that feel aligned, abundant, and free.
          </motion.p>

          <motion.div variants={fadeUp}>
            <CTAButton href="/dream-life" variant="white" size="md">
              Explore Dream Life Mapping →
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider variant="thick" color="sage" />

      {/* ════════════════════════════════════════════════
          A SPECIFIC MOMENT
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-display-lg text-ink mb-8">
              Season of Self is a space for a very{" "}
              <Highlight color="terracotta">specific moment</Highlight> in your
              life.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-6">
              The moment where you stop living on autopilot and start asking:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-4 mb-10 pl-4 border-l-2 border-terracotta/30">
              {["What do I actually want?", "What am I here to build?", "What does my most aligned life look like?"].map(
                (q, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display italic text-xl sm:text-2xl text-ink/70"
                  >
                    {q}
                  </motion.p>
                )
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-sans text-body-lg text-ink/55 leading-relaxed">
              It&apos;s where you reconnect to your intuition, your desires, and your
              natural way of moving through the world, and begin creating from
              that place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="thick" color="terracotta" />

      {/* ════════════════════════════════════════════════
          WHY "SEASON OF SELF"
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-32 lg:py-40 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* copy */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-5">
                Why &ldquo;Season of Self&rdquo;
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-display-xl text-ink mb-8">
                Creating your dream life requires a{" "}
                <Highlight color="linen">season</Highlight>.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-6">
                A devoted chapter where you turn inward and get clear on who you
                are, what you want, and the kind of life you&apos;re here to build.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-6">
                A season of reconnecting with your gifts, your desires, your
                intuition. A season of tuning out the noise, grounding into your
                vision, and showing up for the future you&apos;re creating.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-6">
                It&apos;s both a relationship with yourself (your truth, your
                expansion, your potential) and with something greater. A sense
                that life is supporting you when you move in alignment.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="font-sans text-body-lg text-ink/70 leading-relaxed font-medium mb-2">
                Season of Self represents that commitment.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 font-display text-lg sm:text-xl text-ink/50 italic">
                <span>To clarity.</span>
                <span>To alignment.</span>
                <span>To intentional creation.</span>
              </div>
            </AnimatedSection>
          </div>

          {/* image */}
          <AnimatedSection direction="right" className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/assets/founders_smiling.jpg"
                alt="Charlotte and Katja"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="thick" color="sage" />

      {/* ════════════════════════════════════════════════
          WHAT WE FOCUS ON
         ════════════════════════════════════════════════ */}
      <section className="bg-sage py-16 sm:py-20 lg:py-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-4">
              What we focus on
            </p>
            <h2 className="font-display text-display-xl text-white mb-8 sm:mb-10">
              Clarity, alignment, and{" "}
              <span className="italic text-linen">action</span>.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {whatWeFocus.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-4 py-4 sm:py-5">
                  <span className="font-display text-lg text-linen/60 shrink-0">
                    {item.icon}
                  </span>
                  <p className="font-sans text-body-lg text-white leading-relaxed">
                    {item.text}
                  </p>
                </div>
                {i < whatWeFocus.length - 1 && (
                  <div className="border-t border-white/15" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          START HERE — DREAM LIFE MAPPING
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* image */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/assets/founders_working.jpg"
                alt="Dream Life Mapping"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          {/* copy */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <PillTag color="terracotta" size="md" className="mb-5">
                Start Here
              </PillTag>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-display-lg text-ink mb-6">
                Dream Life Mapping
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-4">
                A guided process to help you get clear on your direction and
                start building it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-4">
                You move from feeling stuck or uncertain to knowing what you&apos;re
                doing, and actually moving on it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-8">
                With structure, tools, and support to follow through.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <CTAButton href="/dream-life" variant="terracotta" size="lg">
                Explore Dream Life Mapping →
              </CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="thick" color="blue" />

      {/* ════════════════════════════════════════════════
          OUR APPROACH
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-5">
              Our approach
            </p>
            <h2 className="font-display text-display-xl text-ink mb-8">
              Where <Highlight color="sage">intuition</Highlight> meets{" "}
              <Highlight color="blue">strategy</Highlight>.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-4">
              We don&apos;t believe success comes from working harder.
            </p>
            <p className="font-sans text-body-lg text-ink/55 leading-relaxed">
              It comes from coming home to yourself and taking aligned action
              from there.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} className="mt-16 sm:mt-20">
          <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lifted">
            <Image
              src="/assets/horizontal_heroimage.jpg"
              alt="Charlotte and Katja"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </section>

      <SectionDivider variant="thick" color="blue" />

      {/* ════════════════════════════════════════════════
          FOUNDERS
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-5">
              Who we are
            </p>
            <h2 className="font-display text-display-xl text-ink">
              Meet the founders
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Charlotte */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lifted mb-8">
                <Image
                  src="/assets/wienermom.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-display-md text-ink mb-4">
                Charlotte
              </h3>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed">
                Charlotte was doing everything she was supposed to do. Business
                school, work at a startup, a good life in Montreal. From the
                outside, it all made sense. But she had never actually stopped to
                ask herself if it was what she wanted. That changed when something
                clicked in her body that she couldn&apos;t ignore. Not logical, just
                clear. She followed it without having a full plan, took messy
                action, tried things that didn&apos;t work, and kept going. That path
                led her to build a multi-million dollar beauty brand with over
                100,000 customers across 50+ countries. Today, she lives by the
                ocean in Costa Rica and helps women get clear on their direction
                and build lives that feel aligned with who they actually are.
              </p>
            </AnimatedSection>

            {/* Katja */}
            <AnimatedSection direction="right">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lifted mb-8">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-display-md text-ink mb-4">
                Katja
              </h3>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed">
                Katja had built a life that looked right on paper. Top-ranked
                universities, a stable corporate career, a 10-year relationship.
                But internally, she felt disconnected and numb. A solo
                backpacking trip through Latin America shifted something deeper
                than she expected. She met people living differently, felt
                something open, and chose to follow it. She left her job, ended
                her relationship, sold her belongings, and set off without
                knowing exactly what came next. From there, she rebuilt
                her life around what actually felt true. Today, she&apos;s building a
                slow life in Portugal and helps women reconnect with their body
                and intuition, and create lives that feel aligned, grounded,
                and fully expressed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA — modern split
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
          {/* left — photo */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <Image
              src="/assets/founders_vibing.jpg"
              alt="Season of Self"
              fill
              className="object-cover"
            />
          </div>

          {/* right — CTA content */}
          <div className="flex flex-col items-center justify-center text-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
            <AnimatedSection>
              <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-5">
                Your next step
              </p>
              <h2 className="font-display text-display-xl text-ink mb-6 leading-tight">
                If you&apos;re ready for your{" "}
                <span className="italic text-terracotta">Season of Self</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-10">
                Get clear on what you actually want and start building it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <CTAButton href="/dream-life" variant="terracotta" size="lg">
                Start with Dream Life Mapping →
              </CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════════════ */}
      <footer className="bg-ink py-16 sm:py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* col 1 — brand */}
            <div>
              <Image
                src="/assets/green_logo.png"
                alt="Season of Self"
                width={200}
                height={200}
                unoptimized
                className="h-8 w-auto mb-4 brightness-[10]"
              />
              <p className="font-sans text-sm text-cream/30 leading-relaxed">
                An online learning and mentorship space for women ready to build
                lives that feel aligned, abundant, and free.
              </p>
            </div>

            {/* col 2 — links */}
            <div>
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/seasonofself.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Instagram →
                  </a>
                </li>
                <li>
                  <a
                    href="https://substack.com/@seasonofselfco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Substack →
                  </a>
                </li>
                <li>
                  <a
                    href="/dream-life"
                    className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Dream Life Mapping →
                  </a>
                </li>
              </ul>
            </div>

            {/* col 3 — mailing list */}
            <div>
              <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
                Join the mailing list
              </p>
              {!submitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-cream/15 rounded-full px-5 py-3 text-sm text-cream placeholder:text-cream/25 font-sans focus:outline-none focus:border-cream/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-terracotta text-white font-sans font-medium text-sm px-5 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    Subscribe →
                  </button>
                </form>
              ) : (
                <p className="font-sans text-sm text-cream/50">
                  Thank you! We&apos;ll be in touch.
                </p>
              )}
            </div>
          </div>

          {/* bottom bar */}
          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-sans text-xs text-cream/20 leading-relaxed">
              Season of Self LLC · 312 W 2nd St, Unit #A8972, Casper, WY 82601
            </p>
            <p className="font-sans text-xs text-cream/15">
              © {new Date().getFullYear()} Season of Self. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
