"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  modules,
  faqs,
  valueStack,
  resonanceCards,
  whyItWorks,
} from "@/lib/data";

/* ─── helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    return {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return t;
}

const CTA_LINK = "#pricing";

function GlowButton({
  children,
  className = "",
  large = false,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <a
      href={CTA_LINK}
      className={`inline-block font-sans font-bold tracking-wide uppercase rounded-pill
        bg-gradient-to-r from-terracotta to-linen text-ink
        shadow-glow hover:shadow-[0_0_40px_-4px_rgba(193,150,115,0.7)]
        transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]
        ${large ? "px-10 py-5 text-lg" : "px-8 py-4 text-sm"}
        ${className}`}
    >
      {children}
    </a>
  );
}

/* ─── PAGE ─── */
export default function VariantC() {
  const deadline = new Date(Date.now() + 48 * 3600000);
  const { hours, minutes, seconds } = useCountdown(deadline);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pad = (n: number) => String(n).padStart(2, "0");

  const moduleColors = [
    "border-terracotta",
    "border-sage",
    "border-dusty-blue",
    "border-linen",
    "border-terracotta",
    "border-sage",
  ];

  const moduleGradients = [
    "from-terracotta/20 to-transparent",
    "from-sage/20 to-transparent",
    "from-dusty-blue/20 to-transparent",
    "from-linen/20 to-transparent",
    "from-terracotta/20 to-transparent",
    "from-sage/20 to-transparent",
  ];

  return (
    <main className="overflow-x-hidden font-sans text-ink">
      {/* ═══════════════════════════════════════════
          1. ANNOUNCEMENT BAR
      ═══════════════════════════════════════════ */}
      <div
        className="fixed top-0 inset-x-0 z-50 bg-fomo-red text-white text-center
          py-2.5 px-4 text-sm md:text-base font-bold tracking-wide"
        suppressHydrationWarning
      >
        <span className="inline-flex items-center gap-3 flex-wrap justify-center">
          <span>&#10022; Founding Member Pricing: $497 &middot; Save $500</span>
          <span className="inline-flex gap-1 font-mono tabular-nums">
            <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(hours)}</span>:
            <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(minutes)}</span>:
            <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(seconds)}</span>
          </span>
          <span className="hidden sm:inline">&middot; 48 hours</span>
        </span>
      </div>

      {/* ═══════════════════════════════════════════
          2. HERO — dark, bold, sells
      ═══════════════════════════════════════════ */}
      <section className="relative bg-deep-sage pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] max-w-4xl mx-auto"
          >
            Get clear on your<br />
            <span className="bg-gradient-to-r from-terracotta via-linen to-terracotta bg-clip-text text-transparent">
              dream life
            </span>
            <br />
            and start actually living it
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-body-lg text-cream/80 max-w-2xl mx-auto font-sans"
          >
            A step-by-step course + year-long community to help you step into your highest timeline
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowButton large>Join Dream Life Mapping →</GlowButton>
          </motion.div>

          {/* trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-cream/60 text-xs
              uppercase tracking-widest font-sans"
          >
            {["$497 USD", "Founding member price", "Full value $997", "Money-back guarantee"].map(
              (badge, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-cream/40">·</span>}
                  {badge}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. PAIN SECTION — cream bg
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            You don&rsquo;t hate your life.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-body-lg text-ink/70 text-center leading-relaxed"
          >
            That&rsquo;s almost what makes it harder.<br /><br />
            Because nothing is wrong.<br />
            But something isn&rsquo;t right either.<br /><br />
            You go through your days, you do what you&rsquo;re supposed to do, you have moments that are good…<br /><br />
            …but underneath it, there&rsquo;s this quiet feeling:<br />
            <em>&ldquo;Is this really it?&rdquo;</em><br /><br />
            And it&rsquo;s not dramatic. It&rsquo;s subtle.<br /><br />
            It&rsquo;s in the way you feel slightly disconnected from your own life.<br />
            Like you&rsquo;re in it — but not fully in it.<br />
            Like you&rsquo;re living a version of your life that works… but doesn&rsquo;t fully feel like you.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 bg-terracotta/10 text-ink rounded-card-lg p-8 md:p-10
              border-l-4 border-terracotta"
          >
            <p className="text-body-lg leading-relaxed mb-4">
              And you&rsquo;ve tried to address it.
            </p>
            <p className="text-body-lg leading-relaxed mb-4">
              You&rsquo;ve journaled about it. Thought about it. Tried to &ldquo;figure it out&rdquo;.
            </p>
            <p className="text-body-lg leading-relaxed mb-4">
              You get clarity for a moment…<br />
              and then you lose it again.
            </p>
            <p className="text-body-lg leading-relaxed">
              So part of you wonders:<br />
              <em>Why can&rsquo;t I just decide?<br />
              Why does something that feels so true<br />
              also feel so hard to actually move on?</em>
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-10 text-body-lg text-ink/70 text-center leading-relaxed"
          >
            <strong className="text-ink text-lg block mb-4">Here&rsquo;s the shift:</strong>
            This isn&rsquo;t because you&rsquo;re confused. Or lazy. Or not ready.<br /><br />
            It&rsquo;s because you&rsquo;ve been trying to figure out your life from your head…<br />
            instead of from the part of you that already knows.<br /><br />
            <strong className="text-ink">You don&rsquo;t need more clarity.<br />
            You need to trust what you&rsquo;re already feeling — and act on it.</strong>
          </motion.p>
        </motion.div>
      </section>



      {/* ═══════════════════════════════════════════
          4. IS THIS YOU — offwhite bg
      ═══════════════════════════════════════════ */}
      <section className="bg-offwhite py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center mb-6"
          >
            Is this you?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-center text-body-lg font-semibold text-ink mb-8"
          >
            You&rsquo;ll feel this in your body if it&rsquo;s you.
          </motion.p>

          <div className="mt-10 space-y-4">
            {[
              "Your life looks fine — but it doesn't fully feel like yours",
              "You keep overthinking decisions you already feel the answer to",
              "You get clear… and then second-guess yourself out of it",
              "You feel your potential, but you're not fully living it",
              "You're tired of being 'almost there'"
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-4 bg-cream rounded-card p-5
                  shadow-soft border border-sage/20"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-deep-sage
                  flex items-center justify-center text-cream text-sm font-bold mt-0.5">
                  →
                </span>
                <p className="text-body-lg text-ink/80 font-sans">{card}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            custom={6}
            className="mt-10 text-center text-body-lg font-semibold text-deep-sage"
          >
            You&rsquo;re not lost.<br />
            <span className="text-ink">You&rsquo;re just not fully expressed yet.</span>
          </motion.p>
        </motion.div>
      </section>



      {/* ═══════════════════════════════════════════
          5. MECHANISM — gradient bg
      ═══════════════════════════════════════════ */}
      <section id="mechanism" className="bg-gradient-to-br from-sage/20 via-offwhite to-dusty-blue/20 py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            How Dream Life Mapping works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-ink/60 text-center max-w-2xl mx-auto"
          >
            Three phases. One transformation. No fluff.
          </motion.p>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Assess",
                desc: "Understanding Your Current Reality",
              },
              {
                num: "02",
                title: "Visualize",
                desc: "Your Highest Timeline - Felt, Not Just Imagined",
              },
              {
                num: "03",
                title: "Release",
                desc: "Move Through Fear and Contraction",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="relative bg-white/70 backdrop-blur-sm border border-white/40 rounded-card-lg p-8
                  hover:bg-white/85 transition-colors duration-300 group"
              >
                <span className="font-display text-6xl leading-none font-bold text-ink/10">
                  {step.num}
                </span>
                <h3 className="mt-4 font-display text-display-md text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink/60 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          6. WHAT THIS IS — cream bg
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-display-lg text-ink">
              Dream Life Mapping is where you stop circling your life…and actually step into it.
            </h2>
            <p className="mt-6 text-body-lg text-ink/70 leading-relaxed">
              You can't expect different results from the same mindset. Dream Life Mapping works at the level of the body, the nervous system, and identity—where real, lasting change actually happens.
            </p>
            <p className="mt-4 text-body-lg text-ink/70 leading-relaxed">
              It's a comprehensive system, not another 8-minute meditation app. In 6 modules over 12 weeks, you'll assess your current reality, access your highest timeline through somatic work, and then rewire your nervous system to step into it with clarity and ease.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <ul className="space-y-4">
              {[
                "6 modules of video training + somatic practices",
                "Visualization & breathwork recordings",
                "A step-by-step roadmap (not vague theory)",
                "Live expert group coaching for 12 months",
                "Private community and direct coach access",
                "Everything you need to step fully into your life",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-terracotta text-lg mt-0.5">&#10022;</span>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <GlowButton>Start Your Transformation &rarr;</GlowButton>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          7. MODULES — cream bg, 2x3 grid
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            What&rsquo;s inside
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-center text-ink/60 max-w-xl mx-auto"
          >
            6 modules designed to take you from stuck to in motion — all visual, somatic, and tested
          </motion.p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.number}
                variants={fadeUp}
                custom={i + 2}
                className={`rounded-card-lg bg-white border-t-4 ${moduleColors[i]}
                  p-6 shadow-soft hover:shadow-lifted transition-shadow duration-300
                  bg-gradient-to-b ${moduleGradients[i]}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-3xl font-bold text-ink/20">
                    {mod.number}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest font-bold px-3 py-1
                      rounded-pill bg-ink/5 text-ink/60`}
                  >
                    {mod.keyword}
                  </span>
                </div>
                <h3 className="font-display text-display-sm text-ink leading-snug">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed line-clamp-4">
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CTA BREAK — gradient bg
      ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-sage to-terracotta py-16 md:py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-white"
          >
            Ready to stop thinking about it and start living it?
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="mt-8">
            <a
              href={CTA_LINK}
              className="inline-block px-10 py-5 rounded-pill bg-white text-ink
                font-bold text-lg uppercase tracking-wide
                shadow-[0_0_30px_rgba(255,255,255,0.4)]
                hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]
                hover:scale-[1.03] active:scale-[0.98]
                transition-all duration-300"
            >
              Join Dream Life Mapping &rarr;
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-white/70 text-sm"
          >
            Founding price closes in {pad(hours)}h {pad(minutes)}m. Instant access.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          9. COMMUNITY — offwhite bg
      ═══════════════════════════════════════════ */}
      <section className="bg-offwhite py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            You won&rsquo;t do this alone
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-center text-ink/60 max-w-xl mx-auto"
          >
            The Season of Self community is where the course comes alive
          </motion.p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "&#128172;",
                title: "Private Community",
                desc: "A curated space of women doing the same inner work. Share wins, ask questions, get real support.",
              },
              {
                icon: "&#127908;",
                title: "Monthly Live Calls",
                desc: "12 live group Q&A coaching calls with Charlotte and Katja. Bring your questions, leave with clarity.",
              },
              {
                icon: "&#9889;",
                title: "Direct Coach Access",
                desc: "No gatekeeping. Post in the community and get a thoughtful response from your coaches.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 2}
                className="bg-white rounded-card-lg p-8 shadow-soft text-center
                  hover:shadow-lifted transition-shadow duration-300"
              >
                <span
                  className="text-4xl"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3 className="mt-4 font-display text-display-sm text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-ink/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          10. WHY IT WORKS — ink bg
      ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ink via-ink to-dusty-blue/30 py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-cream text-center"
          >
            The science behind the shift
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 text-cream/50 text-center max-w-xl mx-auto"
          >
            This isn&rsquo;t wishful thinking. Every method is grounded in neuroscience.
          </motion.p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItWorks.map((method, i) => {
              const icons = ["\u2728", "\u{1F9E0}", "\u{1F50A}", "\u{1F4AA}"];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 2}
                  className="bg-cream/5 border border-cream/10 rounded-card-lg p-6
                    hover:bg-cream/10 transition-colors duration-300"
                >
                  <span className="text-3xl">{icons[i]}</span>
                  <h3 className="mt-4 font-display text-display-sm text-cream">
                    {method.title}
                  </h3>
                  <p className="mt-3 text-cream/50 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          11. FOUNDERS — cream bg
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            Meet your coaches
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Charlotte",
                img: "/assets/charlotte_founderheadshot.jpg",
                bio: "After a decade climbing the corporate ladder, Charlotte realized success ≠ fulfillment. She went on a quest to understand how we actually shift from stuck to living fully expressed. She found the answer through somatic work and nervous system science. Now she teaches it.",
              },
              {
                name: "Katja",
                img: "/assets/katja_founderheadshot.jpg",
                bio: "Katja has built multiple 7-figure businesses and still felt empty. Through identity work and somatic practices, she cracked the code of alignment—and discovered that your life is only as big as your sense of self. That realization changed everything.",
              },
            ].map((founder, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="flex flex-col items-center text-center"
              >
                {/* founder headshot */}
                <div
                  className="relative w-48 h-48 rounded-full shadow-lifted overflow-hidden"
                >
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="mt-6 font-display text-display-md text-ink">
                  {founder.name}
                </h3>
                <p className="mt-3 text-ink/60 leading-relaxed max-w-md">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          12. GIVE BACK — deep-sage bg
      ═══════════════════════════════════════════ */}
      <section className="bg-deep-sage py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-terracotta font-bold uppercase tracking-[0.2em] text-sm"
          >
            Impact built in
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 font-display text-display-lg text-cream"
          >
            10% of every purchase goes back
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-cream/60 max-w-xl mx-auto"
          >
            When you invest in yourself, you invest in something bigger. Every founding
            membership directly supports two organizations doing real work.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                name: "SOMA Surf",
                img: "/assets/somasurf.jpg",
                desc: "A community-led healing center in São Tomé, Africa offering surf therapy and somatic practices to support mental health and build resilience.",
              },
              {
                name: "Abriendo Mentes",
                img: "/assets/abriendomendes.png",
                desc: "Community programs in Guanacaste, Costa Rica providing educational workshops, mentorship, and opportunities to children and families in underserved areas.",
              },
            ].map((org, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="bg-white/10 backdrop-blur-sm border border-cream/10
                  rounded-card-lg p-8 text-left"
              >
                <div
                  className="relative w-full h-36 rounded-card mb-6 overflow-hidden"
                >
                  <Image
                    src={org.img}
                    alt={org.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-display-sm text-cream">
                  {org.name}
                </h3>
                <p className="mt-2 text-cream/50 text-sm leading-relaxed">
                  {org.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          13. PRICING — cream bg
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            The investment that changes everything
          </motion.h2>

          {/* pricing card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="relative mt-12 bg-white rounded-card-lg shadow-lifted
              border-2 border-terracotta overflow-hidden"
          >
            {/* badge */}
            <div className="bg-fomo-red text-white text-center py-2 text-xs
              font-bold uppercase tracking-widest">
              &#10022; Best Value &mdash; Founding Member Pricing &#10022;
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-baseline gap-3 justify-center">
                <span className="text-ink/40 line-through text-2xl font-sans">$997</span>
                <span className="font-display text-display-hero text-ink">$497</span>
              </div>
              <p className="text-center text-ink/50 text-sm mt-1">
                or 3 &times; $177 &middot; same access either way
              </p>

              {/* comparisons */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs
                uppercase tracking-wider text-ink/50">
                <span className="bg-offwhite rounded-pill px-4 py-2">
                  Less than $2/day
                </span>
                <span className="bg-offwhite rounded-pill px-4 py-2">
                  1 coaching session = $300+
                </span>
                <span className="bg-offwhite rounded-pill px-4 py-2">
                  12 months of access
                </span>
              </div>

              {/* value stack */}
              <div className="mt-8 space-y-3">
                <p className="font-bold text-sm uppercase tracking-wider text-ink/40 text-center">
                  Everything included
                </p>
                {valueStack.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-deep-sage font-bold mt-0.5">
                      &#10003;
                    </span>
                    <span className="text-sm text-ink/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <GlowButton large className="w-full sm:w-auto">
                  Join Dream Life Mapping &rarr;
                </GlowButton>
              </div>

              <p className="mt-4 text-center text-xs text-ink/40">
                Instant access &middot; 30-day money-back guarantee &middot; Secure
                payment
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          14. GUARANTEE — offwhite bg
      ═══════════════════════════════════════════ */}
      <section className="bg-offwhite py-16 md:py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mx-auto w-20 h-20 rounded-full bg-deep-sage/10
            flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-deep-sage"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0
                  013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29
                  9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571
                  -.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <h2 className="font-display text-display-md text-ink">
            30-Day Money-Back Guarantee
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed max-w-lg mx-auto">
            Try Dream Life Mapping for a full 30 days. If it doesn&rsquo;t feel right,
            email us and we&rsquo;ll refund every cent. No hoops, no awkward
            conversations. We built this to change lives &mdash; and we stand behind
            that completely.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          15. FAQ — cream bg, accordion
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-ink text-center"
          >
            Common questions
          </motion.h2>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="bg-white rounded-card shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center
                    justify-between gap-4 group"
                >
                  <span className="font-display text-base md:text-lg text-ink
                    group-hover:text-deep-sage transition-colors">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="flex-shrink-0 text-xl text-ink/40"
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
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-ink/60 leading-relaxed">
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

      {/* ═══════════════════════════════════════════
          16. FINAL CTA — deep-sage bg
      ═══════════════════════════════════════════ */}
      <section className="bg-deep-sage py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-cream"
          >
            If you've read this far, something in you already knows.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-cream/70 text-body-lg max-w-xl mx-auto leading-relaxed"
          >
            This isn't random curiosity. It's recognition. You came across this page because something inside you was ready to hear it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-6 inline-flex items-center gap-2 bg-fomo-red/20
              text-cream rounded-pill px-5 py-2 text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-fomo-red animate-pulse" />
            Founding pricing closes in {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="mt-8">
            <a
              href={CTA_LINK}
              className="inline-block px-12 py-6 rounded-pill
                bg-gradient-to-r from-terracotta to-linen text-ink
                font-bold text-lg uppercase tracking-wide
                shadow-[0_0_40px_-4px_rgba(193,150,115,0.5)]
                hover:shadow-[0_0_60px_-4px_rgba(193,150,115,0.8)]
                hover:scale-[1.04] active:scale-[0.97]
                transition-all duration-300"
            >
              Claim Your Spot - Join Dream Life Mapping &rarr;
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="mt-6 text-cream/40 text-xs"
          >
            Instant access &middot; 30-day money-back guarantee &middot; 12 months of
            coaching &amp; community
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={5}
            className="mt-12 text-cream/30 text-xs"
          >
            &copy; {new Date().getFullYear()} Season of Self. All rights reserved.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}