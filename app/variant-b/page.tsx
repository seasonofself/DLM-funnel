"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  modules,
  faqs,
  valueStack,
  resonanceCards,
  whyItWorks,
} from "@/lib/data";

// ─── Animation Variants ───────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// ─── Countdown Hook ───────────────────────────────────
function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ h: 47, m: 59, s: 59 });

  useEffect(() => {
    const end = Date.now() + 48 * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

// ─── Page Component ───────────────────────────────────
export default function VariantB() {
  const countdown = useCountdown();
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-cream text-ink font-sans antialiased">
      {/* ════════════════════════════════════════════════
          1. ANNOUNCEMENT BAR
          ════════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-fomo-red text-white text-center py-2.5 px-4">
        <p className="text-xs sm:text-sm tracking-wide font-medium">
          <span className="opacity-80">✦</span> Founding Member Pricing: $497 · Save $500 —{" "}
          <span suppressHydrationWarning className="font-semibold tabular-nums">
            {String(countdown.h).padStart(2, "0")}:{String(countdown.m).padStart(2, "0")}:
            {String(countdown.s).padStart(2, "0")}
          </span>{" "}
          left
        </p>
      </div>

      {/* ════════════════════════════════════════════════
          2. HERO
          ════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center mt-10">
        {/* Full-bleed photo placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/40 via-cream to-dusty-blue/30" />
        <div className="absolute inset-0 bg-ink/20" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            className="mb-6 flex justify-center"
          >
            <Image
              src="/assets/logo.png"
              alt="Season of Self"
              width={50}
              height={50}
              priority
              className="h-14 w-auto"
            />
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-offwhite/80 font-subtitle italic text-sm sm:text-base tracking-widest uppercase mb-8"
          >
            Season of Self
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8"
          >
            Get clear on your dream life
            <br className="hidden sm:block" />
            <span className="italic font-subtitle"> and start actually living it</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            A 6-module journey combining breathwork, visualization, and somatic
            practices to help you stop overthinking and start moving toward what
            actually feels like yours.
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={scrollToPricing}
            className="border border-white/40 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition-all duration-700"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          3. PAIN SECTION
          ════════════════════════════════════════════════ */}
      <section className="bg-deep-sage text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-16"
          >
            You don&apos;t hate your life.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              You&apos;ve done a lot right. From the outside, things look good. But
              there&apos;s a quiet distance between the life you have and the life you
              know is possible. Not dramatic. Just... there.
            </p>
            <p className="text-cream/70 text-lg leading-relaxed mb-16">
              You can feel it in the moments between — when everything slows
              down and a question surfaces that you keep pushing aside.
            </p>
          </motion.div>

          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-center text-cream/90 py-12 border-t border-b border-cream/15 max-w-3xl mx-auto"
          >
            &ldquo;Is this really it?&rdquo;
          </motion.blockquote>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-cream/50 text-lg text-center mt-16 max-w-xl mx-auto"
          >
            That question isn&apos;t weakness. It&apos;s the most honest thing
            you&apos;ve let yourself feel in a while.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. IS THIS YOU
          ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6"
          >
            Is this you?
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-20 leading-tight"
          >
            Something in you already knows
            <br className="hidden sm:block" />
            <span className="italic font-subtitle"> there&apos;s more.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {resonanceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-l-2 border-sage/40 pl-8 py-3"
              >
                <p className="text-ink/75 text-lg sm:text-xl leading-relaxed">
                  {card}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-2xl sm:text-3xl mt-20 text-center"
          >
            You&apos;re not lost.
            <span className="text-sage"> You&apos;re ready.</span>
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. MECHANISM — 3 Steps
          ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6"
          >
            How it works
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-24 leading-tight"
          >
            Three shifts that change everything.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-20"
          >
            {[
              {
                num: "01",
                title: "See clearly where you are",
                desc: "Before anything changes, you need an honest picture. Not the curated version — the real one. We start by mapping your life as it actually is.",
              },
              {
                num: "02",
                title: "Feel what you actually want",
                desc: "Through breathwork and guided visualization, you drop beneath the noise of your analytical mind into a state where your real desires can surface.",
              },
              {
                num: "03",
                title: "Move toward it — consistently",
                desc: "Clarity without action stays a fantasy. You build a simple framework for daily movement toward the life that already feels like yours.",
              },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="flex gap-8 items-start">
                <span className="font-display text-5xl sm:text-6xl text-terracotta/40 leading-none shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl mb-4">{step.title}</h3>
                  <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6. WHAT THIS IS
          ════════════════════════════════════════════════ */}
      <section className="bg-ink text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue/70 text-sm tracking-widest uppercase mb-6"
          >
            Dream Life Mapping
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight"
          >
            This isn&apos;t another course
            <br className="hidden sm:block" />
            <span className="italic font-subtitle"> that sits in your inbox.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-cream/60 text-lg leading-relaxed mb-16 max-w-2xl"
          >
            It&apos;s a self-paced, body-based experience that combines
            breathwork, visualization, somatic tools, and practical frameworks
            to help you stop thinking about your life and start shaping it.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="border-t border-cream/10 pt-12"
          >
            <div className="grid gap-4">
              {valueStack.slice(0, 10).map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 py-3"
                >
                  <span className="text-sage/60 text-xs mt-1.5">—</span>
                  <p className="text-cream/70 text-base sm:text-lg leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          7. MODULES — Accordion
          ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6"
          >
            The Journey
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-20 leading-tight"
          >
            Six modules. One transformation.
          </motion.h2>

          <div className="divide-y divide-ink/10">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-2xl text-terracotta/40">
                      {mod.number}
                    </span>
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-sage/70 block mb-1">
                        {mod.keyword}
                      </span>
                      <span className="font-display text-xl sm:text-2xl group-hover:text-sage transition-colors duration-500">
                        {mod.title}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-2xl text-ink/30 transition-transform duration-500 ${
                      openModule === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openModule === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-16 sm:pl-20 max-w-xl">
                        <p className="text-ink/60 text-base leading-relaxed mb-4">
                          {mod.description}
                        </p>
                        <p className="text-sage text-sm">
                          <span className="font-medium">You&apos;ll create:</span>{" "}
                          {mod.deliverable}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          8. COMMUNITY
          ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-36 lg:py-44">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <p className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6">
                You&apos;re not in this alone
              </p>
              <h2 className="font-display text-3xl sm:text-4xl mb-8 leading-tight">
                A community that holds space
                <span className="italic font-subtitle"> without pressure.</span>
              </h2>
              <div className="space-y-6 text-ink/60 text-base sm:text-lg leading-relaxed">
                <p>
                  Inside the Season of Self community, you&apos;ll find others on the
                  same quiet journey — women who are done performing
                  &ldquo;fine&rdquo; and ready to get real about what they want.
                </p>
                <p>
                  12 monthly live Q&amp;A calls with Charlotte and Katja. Direct
                  access to both coaches. A space to share wins, ask questions,
                  and be witnessed in your becoming.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-gradient-to-br from-sage/25 via-cream to-dusty-blue/20"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          9. WHY IT WORKS
          ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6"
          >
            The Science
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-20 leading-tight"
          >
            Why this works when
            <br className="hidden sm:block" />
            <span className="italic font-subtitle"> thinking alone doesn&apos;t.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-8"
          >
            {whyItWorks.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-sage/20 rounded-sm p-8 sm:p-10"
              >
                <h3 className="font-display text-xl sm:text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-ink/55 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          10. FOUNDERS
          ════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 lg:py-44 bg-cream">
        {/* Full-width photo moment */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative aspect-[21/9] w-full overflow-hidden mb-24 sm:mb-36"
        >
          <Image
            src="/assets/horizontal_heroimage.jpg"
            alt="Dream Life Mapping"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6"
          >
            Your Guides
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-20 leading-tight"
          >
            Built by two women who
            <br className="hidden sm:block" />
            <span className="italic font-subtitle"> lived this journey first.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Charlotte */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-8">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="font-display text-2xl mb-4">Charlotte</h3>
              <p className="text-ink/55 text-base leading-relaxed">
                Left the corporate path to build a life that actually felt like
                hers. Now a certified breathwork facilitator and coach, she
                specializes in helping women move through the gap between
                &ldquo;knowing something needs to change&rdquo; and actually changing it.
              </p>
            </motion.div>

            {/* Katja */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden mb-8">
                <Image
                  src="/assets/katja_founderheadshot.jpg"
                  alt="Katja"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="font-display text-2xl mb-4">Katja</h3>
              <p className="text-ink/55 text-base leading-relaxed">
                Walked away from a successful career in tech to explore what
                fulfillment actually looks like. A somatic practitioner and
                community builder, she brings the grounding energy that helps
                big visions become daily reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          11. GIVE BACK
          ════════════════════════════════════════════════ */}
      <section className="bg-deep-sage text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="font-display text-8xl sm:text-9xl text-cream/15 mb-8">10%</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">
              Your growth creates opportunity.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              10% of every purchase is donated directly to organizations making
              change at the root — because transformation shouldn&apos;t be a privilege.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="border border-cream/15 rounded-sm p-8">
                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-6">
                  <Image
                    src="/assets/somasurf.jpg"
                    alt="SOMA Surf"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">SOMA Surf</h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  Empowering underserved youth through ocean therapy, surf, and
                  mindfulness in Central America.
                </p>
              </div>

              <div className="border border-cream/15 rounded-sm p-8">
                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden mb-6">
                  <Image
                    src="/assets/abriendomendes.png"
                    alt="Abriendo Mentes"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">Abriendo Mentes</h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  Providing education and mentorship to young people in rural
                  communities across Latin America.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          12. PRICING
          ════════════════════════════════════════════════ */}
      <section id="pricing" className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6">
              Join Dream Life Mapping
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
              Choose your path in.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* Pay in Full */}
            <motion.div
              variants={fadeUp}
              className="border border-ink/10 rounded-sm p-10 sm:p-12 relative"
            >
              <span className="absolute top-6 right-6 text-xs tracking-[0.15em] uppercase text-sage font-medium">
                Best Value
              </span>
              <p className="font-subtitle italic text-dusty-blue text-sm mb-6">
                Pay in full
              </p>
              <div className="mb-2">
                <span className="text-ink/30 line-through text-lg">$997</span>
              </div>
              <p className="font-display text-5xl mb-2">$497</p>
              <p className="text-ink/40 text-sm mb-8">One-time payment</p>

              <ul className="space-y-3 mb-10 text-ink/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Full course access for 12 months
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Community + monthly live calls
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Direct access to Charlotte &amp; Katja
                </li>
              </ul>

              <button
                onClick={() => window.open("#", "_blank")}
                className="w-full bg-ink text-cream py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink/90 transition-colors duration-500"
              >
                Join Now — $497
              </button>
            </motion.div>

            {/* Payment Plan */}
            <motion.div
              variants={fadeUp}
              className="border border-ink/10 rounded-sm p-10 sm:p-12"
            >
              <p className="font-subtitle italic text-dusty-blue text-sm mb-6">
                Payment plan
              </p>
              <div className="mb-2">
                <span className="text-ink/30 line-through text-lg">$997</span>
              </div>
              <p className="font-display text-5xl mb-2">
                3 × $177
              </p>
              <p className="text-ink/40 text-sm mb-8">$531 total</p>

              <ul className="space-y-3 mb-10 text-ink/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Full course access for 12 months
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Community + monthly live calls
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">—</span>
                  Direct access to Charlotte &amp; Katja
                </li>
              </ul>

              <button
                onClick={() => window.open("#", "_blank")}
                className="w-full border border-ink text-ink py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-cream transition-colors duration-500"
              >
                Join Now — 3 × $177
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          13. GUARANTEE
          ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="border border-ink/10 rounded-sm py-16 px-10 sm:px-16"
          >
            <p className="font-subtitle italic text-dusty-blue text-sm tracking-widest uppercase mb-6">
              Our Promise
            </p>
            <h3 className="font-display text-2xl sm:text-3xl mb-6">
              14-Day Peace-of-Mind Guarantee
            </h3>
            <p className="text-ink/55 text-base sm:text-lg leading-relaxed">
              If you begin the course and feel it&apos;s not right for you within
              14 days, reach out. We&apos;ll refund you in full — no questions, no
              friction. We only want you here if it genuinely serves you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          14. FAQ
          ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl mb-20 text-center"
          >
            Questions you might have.
          </motion.h2>

          <div className="divide-y divide-ink/10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className="font-display text-lg sm:text-xl pr-8 group-hover:text-sage transition-colors duration-500">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl text-ink/30 transition-transform duration-500 shrink-0 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-ink/55 text-base leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          15. FINAL CTA
          ════════════════════════════════════════════════ */}
      <section className="bg-sage py-24 sm:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeIn}
              className="font-subtitle italic text-cream/60 text-sm tracking-widest uppercase mb-8"
            >
              One more thing
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight mb-8"
            >
              If you&apos;ve read this far,
              <br />
              <span className="italic font-subtitle">
                something in you already knows.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-cream/60 text-lg leading-relaxed max-w-xl mx-auto mb-12"
            >
              You don&apos;t need more time to decide. You need permission to
              trust what you already feel. This is it. You&apos;re ready.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={scrollToPricing}
              className="border border-cream/40 text-cream px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-cream hover:text-ink transition-all duration-700"
            >
              Begin Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════ */}
      <footer className="bg-ink text-cream/30 py-12 px-6 text-center text-xs tracking-wide">
        <p>&copy; 2026 Season of Self. All rights reserved.</p>
      </footer>
    </main>
  );
}
