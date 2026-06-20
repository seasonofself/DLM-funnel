"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionMarquee from "@/components/ui/SectionMarquee";
import FloatingShape from "@/components/ui/FloatingShape";
import Header from "@/components/Header";

/* ─── helpers ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const QUIZ_URL = "https://ikigai.seasonofself.co";

const whatWeFocus = [
  "Get crystal clear on what you actually want, past all the “shoulds”",
  "Find your zone of genius and the path only you could walk",
  "Move through the fear, resistance, and overthinking that keep you circling",
  "Take action that feels aligned and stays sustainable",
  "Build work you love into a life that supports you, softly and fully",
];

/* ─── main component ──────────────────────────────────── */
export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Feeds Kit, tagged by source so the nurture can run. Fire-and-forget:
    // we thank the visitor regardless so the form never feels broken.
    fetch("/api/kit-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "homepage-footer" }),
    }).catch((err) => console.error("Mailing list signup error:", err));
    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          HERO — editorial split. Photo lives as its own
          clean card on the right; copy breathes on the left.
          No overlay on faces. One soft cohesive background.
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
              className="font-display text-[3rem] sm:text-[3.6rem] lg:text-[5rem] xl:text-[6rem] leading-[0.94] text-ink mb-8 tracking-[-0.025em]"
            >
              Build a{" "}
              <span className="italic text-terracotta-dark">soft life</span>{" "}
              around{" "}
              <span className="marker marker--linen">work</span> you{" "}
              <span className="italic">love</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
            >
              A learning and mentorship space for ambitious women who want to
              make real money doing something they love, and build a soft, free
              life around it.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5 sm:gap-6 mb-4"
            >
              <a
                href={QUIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-ink text-cream font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-8 sm:px-9 py-[18px] rounded-full shadow-soft hover:bg-deep-sage hover:shadow-glow-sage transition-all"
              >
                Start here · The Inner Map
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="/dream-life"
                className="font-sans text-sm text-ink/70 hover:text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink/70 transition-colors"
              >
                Or explore Dream Life Mapping
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-[13px] text-ink/50 leading-relaxed max-w-md"
            >
              The Inner Map is free to take and takes about 10 minutes. Unlock
              your full map for $17.
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
                src="/assets/founders_couch_posed.jpg"
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
          INTRO — centered italic serif + editorial collage
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-32 lg:pb-40 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center font-display text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-ink mb-16 sm:mb-20 max-w-4xl mx-auto"
          >
            We help <span className="italic">ambitious women</span> build a
            life of <span className="italic">freedom</span> around work they
            love.
          </motion.h2>

          {/* Editorial collage row */}
          <div className="grid grid-cols-12 gap-3 sm:gap-5 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-3 lg:col-span-2 mt-12 sm:mt-20"
            >
              <div className="relative aspect-[3/4] w-full rounded-[16px] overflow-hidden">
                <Image
                  src="/assets/surfing_palms.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="col-span-6 lg:col-span-5"
            >
              <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden">
                <Image
                  src="/assets/nosara_car.jpg"
                  alt="Charlotte and Katja"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="col-span-3 lg:col-span-2 mt-8 sm:mt-16"
            >
              <div className="relative aspect-square w-full rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/SS_Nosara_11-02-26-242.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:block lg:col-span-3 mt-32"
            >
              <div className="relative aspect-[3/4] w-full rounded-[16px] overflow-hidden">
                <Image
                  src="/assets/founders_smiling_porch.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed mb-5">
              The moment you stop living on autopilot and start asking the
              questions you have been too busy to face.
            </p>
            <p className="font-display italic text-ink/80 text-xl sm:text-2xl leading-snug">
              What do I actually want? What am I here to build? What would my
              life look like if I designed it on purpose?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY "SEASON OF SELF" — light sage band
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6"
            >
              Why “Season of Self”
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-9"
            >
              Creating your dream life takes a{" "}
              <span className="italic marker marker--sage">season</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="space-y-5 font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              <p>
                We say that, and we mean it literally. The kind of life we are
                talking about, a soft life where you make real money doing
                something you love, grows over a real chapter of time.
              </p>
              <p>
                A season where you slow down, turn inward, and get honest with
                yourself about who you are and what you actually want to build.
              </p>
              <p>
                You quiet the noise, you get clear on where you are headed, and
                you show up for the life you are creating.
              </p>
              <p className="font-display italic text-ink/85 text-xl sm:text-2xl pt-2 leading-snug">
                Season of Self is you choosing, on purpose, to give yourself
                that season.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[24px] overflow-hidden">
              <Image
                src="/assets/season_doorway.jpg"
                alt="Charlotte and Katja"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT WE FOCUS ON — compact editorial pill list
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
        <SectionMarquee
          text="What we focus on"
          separator="✦"
          speed={90}
          italic={false}
          textClassName="text-ink"
          className="mb-10 sm:mb-14 lg:mb-16"
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto">
            {whatWeFocus.map((text, i) => {
              const pillColors = [
                "bg-terracotta text-cream",
                "bg-deep-sage text-cream",
                "bg-ink text-cream",
                "bg-terracotta-dark text-cream",
                "bg-sage text-cream",
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex items-center gap-4 sm:gap-5 py-3.5 sm:py-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-6 sm:w-12 sm:h-7 rounded-full font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.08em] shrink-0 ${pillColors[i % pillColors.length]}`}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-ink text-[1.05rem] sm:text-[1.2rem] lg:text-[1.4rem] leading-snug tracking-[-0.015em]">
                      {text}
                    </h3>
                  </div>
                  {i < whatWeFocus.length - 1 && (
                    <div className="border-t border-ink/12" aria-hidden="true" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          GIFTS — "START Your JOURNEY" inspo style
         ════════════════════════════════════════════════ */}
      <section
        id="gifts"
        className="relative paper-texture bg-[#cdd8e1] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 scroll-mt-20 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-4"
          >
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-ink/55">
              Free Gifts
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="text-center font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[5rem] leading-[0.98] text-ink mb-3"
          >
            START <span className="italic">Your</span> JOURNEY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center font-subtitle italic text-ink/65 text-base sm:text-lg max-w-2xl mx-auto mb-16 sm:mb-20"
          >
            “I know I’m meant to do something I love. I just don’t know what.”
            If that lives rent-free in your head, start here.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* PRIMARY — The Inner Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <a
                href={QUIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-white rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <p className="font-sans text-[10px] font-semibold tracking-[0.32em] uppercase text-deep-sage mb-5">
                  Step one · Start here
                </p>
                <h3 className="font-display text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.05] text-ink mb-5">
                  Find the work that is{" "}
                  <span className="italic">actually yours</span>
                </h3>
                <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                  The Inner Map shows you the meeting point of what you love,
                  what you’re great at, what the world needs, and what you can
                  build a living around. It’s free to take, and your full map
                  unlocks for $17.
                </p>
                <span className="inline-flex items-center gap-3 border border-ink/85 rounded-full px-6 sm:px-7 py-3 sm:py-[14px] font-sans font-medium text-[11px] tracking-[0.32em] uppercase text-ink group-hover:bg-ink group-hover:text-cream transition-colors">
                  Take The Inner Map
                  <span aria-hidden="true">→</span>
                </span>
                <p className="mt-4 font-sans text-xs text-ink/45">
                  Free to take · about 10 minutes · voice or text · full map $17.
                </p>
              </a>
            </motion.div>

            {/* SECONDARY — Workshop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              <a
                href="/clarity"
                className="group block h-full bg-white rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <p className="font-sans text-[10px] font-semibold tracking-[0.32em] uppercase text-terracotta-dark mb-5">
                  Optional · Free workshop
                </p>
                <h3 className="font-display text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.05] text-ink mb-5">
                  Prefer to go{" "}
                  <span className="italic">deeper</span> first?
                </h3>
                <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                  Watch our free 27-minute workshop on the 3 secrets to
                  creating a life that actually feels like yours.
                </p>
                <span className="inline-flex items-center gap-3 border border-ink/85 rounded-full px-6 sm:px-7 py-3 sm:py-[14px] font-sans font-medium text-[11px] tracking-[0.32em] uppercase text-ink group-hover:bg-ink group-hover:text-cream transition-colors">
                  Watch the workshop
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          THE PATH — how the three offers work together
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <FloatingShape shape="blob" color="#939e7a" size={120} className="top-16 right-[6%] hidden lg:block" />
        <FloatingShape shape="ring" color="#c19673" size={90} className="bottom-20 left-[5%] hidden lg:block" delay={2} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6"
            >
              How it works together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-ink max-w-3xl mx-auto"
            >
              One path, three <span className="italic">steps</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-ink/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6"
            >
              You do not have to do it all at once. Each step builds on the one
              before it, and you can start wherever you are.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                name: "The Inner Map",
                line: "Find your direction",
                body: "Free to take, about 10 minutes. See the work that is actually yours, with your full map for $17.",
                href: QUIZ_URL,
                external: true,
                cta: "Start here",
              },
              {
                step: "02",
                name: "Dream Life Mapping",
                line: "Build it",
                body: "A self-paced course that turns the direction you found into a real plan you can move on, with the structure and support to follow through.",
                href: "/dream-life",
                external: false,
                cta: "Explore the course",
              },
              {
                step: "03",
                name: "The Dream Life Retreat",
                line: "Live it",
                body: "A week with us in person to embody the life you are building. The full Dream Life Mapping course is included.",
                href: "/retreats/ericeira",
                external: false,
                cta: "See the retreat",
              },
            ].map((s, i) => (
              <motion.a
                key={s.step}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group block bg-white rounded-[24px] p-7 sm:p-8 shadow-soft hover:shadow-[0_30px_60px_-30px_rgba(34,34,34,0.25)] transition-shadow"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-deep-sage">
                  {s.step}
                </span>
                <p className="mt-4 font-sans text-[10px] font-semibold tracking-[0.32em] uppercase text-terracotta-dark">
                  {s.line}
                </p>
                <h3 className="mt-2 font-display text-[1.6rem] sm:text-[1.9rem] leading-[1.1] text-ink">
                  {s.name}
                </h3>
                <p className="mt-4 font-sans text-ink/65 text-[15px] sm:text-base leading-relaxed">
                  {s.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans font-medium text-[11px] tracking-[0.28em] uppercase text-ink group-hover:text-deep-sage transition-colors">
                  {s.cta}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DREAM LIFE MAPPING — secondary CTA section
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto rounded-[24px] overflow-hidden">
              <Image
                src="/assets/founders_laptop.jpg"
                alt="Dream Life Mapping"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-terracotta-dark mb-6"
            >
              When you are ready to go all in
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-7"
            >
              Dream Life <span className="italic">Mapping</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            >
              A guided process that takes what you discover in The Inner Map and
              turns it into a real plan you can move on, with the structure,
              tools, and support to follow through.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <a
                href="/dream-life"
                className="inline-flex items-center gap-3 border border-ink/85 rounded-full px-7 py-[14px] font-sans font-medium text-[11px] tracking-[0.32em] uppercase text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                Explore Dream Life Mapping
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          APPROACH — full-bleed image w/ overlay
         ════════════════════════════════════════════════ */}
      <section className="relative min-h-[60svh] sm:min-h-[70svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/horizontal_heroimage.jpg"
            alt="Charlotte and Katja"
            fill
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 py-24 sm:py-32 min-h-[60svh] sm:min-h-[70svh] flex flex-col justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-cream/70 mb-6"
          >
            Our approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display text-[2.2rem] sm:text-4xl lg:text-[3.2rem] leading-[1.08] text-cream mb-7"
          >
            Where <span className="italic">intuition</span> meets{" "}
            <span className="italic">strategy</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            We do not think success comes from working harder. It comes from
            getting clear on what you actually want, and then building it with
            real structure and real support behind you.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOUNDERS
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6"
            >
              Who we are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Meet the <span className="italic">founders</span>
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
              <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden mb-8">
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
              <div className="font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed space-y-4">
                <p>
                  Charlotte was doing everything she was supposed to do.
                  Business school, work at a startup, a good life in Montreal.
                  From the outside, it all made sense. But she had never
                  actually stopped to ask herself if it was what she wanted.
                </p>
                <p>
                  That changed when something clicked in her body that she
                  couldn’t ignore. She followed it without having a full plan,
                  took messy action, and kept going.
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
                  Today, she lives by the ocean in Costa Rica and helps women
                  get clear on their direction and build lives that feel
                  aligned with who they actually are.
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
              <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden mb-8">
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
              <div className="font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed space-y-4">
                <p>
                  Katja had built a life that looked right on paper. Top-ranked
                  universities, a stable corporate career, a 10-year
                  relationship. But internally, she felt disconnected and numb.
                </p>
                <p>
                  A solo backpacking trip through Latin America shifted
                  something deeper than she expected. She met people living
                  differently, felt something open, and chose to follow it.
                </p>
                <p>
                  She left her job, ended her relationship, sold her
                  belongings, and set off without knowing exactly what came
                  next. From there, she rebuilt her life around what actually
                  felt true.
                </p>
                <p>
                  Today, she’s building a slow life in Portugal and helps women
                  reconnect with their body and intuition, and create lives
                  that feel aligned, grounded, and fully expressed.
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
              Two different starting points, one shared decision: to stop
              performing a life and start building a real one. That is the work
              we now do with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA — split, light blue background
         ════════════════════════════════════════════════ */}
      <section className="bg-[#cdd8e1]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[520px] lg:min-h-[640px]">
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <Image
              src="/assets/founders_vibing.jpg"
              alt="Season of Self"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start justify-center px-8 sm:px-12 lg:px-16 py-20 sm:py-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6"
            >
              Your next step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink mb-7"
            >
              Your Season of Self starts with one{" "}
              <span className="italic">honest question</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
            >
              Find out what you are actually meant to build, and how to make a
              living from it, in about 10 minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <a
                href={QUIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-deep-sage text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase px-9 py-[18px] rounded-full hover:bg-sage transition-colors"
              >
                Take The Inner Map
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════════════ */}
      <footer className="bg-ink py-16 sm:py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div>
              <Image
                src="/assets/green_logo.png"
                alt="Season of Self"
                width={200}
                height={200}
                unoptimized
                className="h-8 w-auto mb-4 brightness-[10]"
              />
              <p className="font-sans text-sm text-cream/40 leading-relaxed">
                An online learning and mentorship space for women ready to make
                money doing what they love and build a soft, free life around
                it.
              </p>
            </div>

            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
                Explore
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    About Us →
                  </a>
                </li>
                <li>
                  <a
                    href={QUIZ_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    The Inner Map →
                  </a>
                </li>
                <li>
                  <a
                    href="/clarity"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Free Workshop →
                  </a>
                </li>
                <li>
                  <a
                    href="/dream-life"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Dream Life Mapping →
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/seasonofself.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Instagram →
                  </a>
                </li>
                <li>
                  <a
                    href="https://substack.com/@seasonofselfco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Season of Self Substack →
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
                Legal
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/terms-of-service"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/disclaimer"
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
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
                    className="w-full bg-white/10 border border-cream/15 rounded-full px-5 py-3 text-sm text-cream placeholder:text-cream/30 font-sans focus:outline-none focus:border-cream/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-deep-sage text-cream font-sans font-medium text-xs tracking-[0.28em] uppercase px-5 py-3 rounded-full hover:bg-sage transition-colors"
                  >
                    Subscribe →
                  </button>
                </form>
              ) : (
                <p className="font-sans text-sm text-cream/60">
                  Thank you. We’ll be in touch.
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-sans text-xs text-cream/25 leading-relaxed">
              Season of Self LLC · 312 W 2nd St, Unit #A8972, Casper, WY 82601
            </p>
            <p className="font-sans text-xs text-cream/20">
              © {new Date().getFullYear()} Season of Self. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
