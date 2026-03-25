"use client";

import { useState, useEffect, useRef } from "react";
import Image from \"next/image\";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from \"framer-motion\";
import { modules, faqs, valueStack, resonanceCards, whyItWorks } from \"@/lib/data\";

/* ── helpers ── */
const CTA_URL = \"#pricing\";
const CTA_URL_PAY = \"#pricing\";

function PhotoPlaceholder({ src, className = \"\", alt = \"Image\" }: { src: string; className?: string; alt?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className=\"object-cover\"
      />
    </div>
  );
}

function MarkerHighlight({ children, color = "terracotta" }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    terracotta: "bg-terracotta/20",
    sage: "bg-sage/25",
    "dusty-blue": "bg-dusty-blue/25",
    linen: "bg-linen/40",
  };
  return (
    <span className={`${colors[color] || colors.terracotta} px-1 py-0.5 rounded-sm decoration-clone`}>
      {children}
    </span>
  );
}

function Pill({ children, color = "sage" }: { children: React.ReactNode; color?: string }) {
  const styles: Record<string, string> = {
    sage: "bg-sage/15 text-deep-sage border-sage/30",
    terracotta: "bg-terracotta/15 text-terracotta-dark border-terracotta/30",
    "dusty-blue": "bg-dusty-blue/15 text-dusty-blue border-dusty-blue/40",
  };
  return (
    <span className={`inline-block px-3 py-1 text-xs font-sans font-medium rounded-pill border ${styles[color] || styles.sage}`}>
      {children}
    </span>
  );
}

function SectionDivider({ color = "sage" }: { color?: string }) {
  return <div className={`w-full h-[3px] bg-${color}/20`} />;
}

/* ── countdown hook ── */
function useCountdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, end.getTime() - now.getTime());
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ── FAQ Item ── */
function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      className="border-b border-sage/20"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-display text-lg text-ink">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl text-terracotta shrink-0">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-ink/70 font-sans leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function VariantD() {
  const countdown = useCountdown();
  const [showFloat, setShowFloat] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowFloat(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepColors = ["terracotta", "sage", "dusty-blue"] as const;
  const steps = [
    { title: "See Clearly", icon: "👁", desc: "Map where you actually are. No filters, no performance. Just an honest look at your life across every area that matters." },
    { title: "Feel Deeply", icon: "💫", desc: "Through breathwork and visualization, drop beneath the noise and reconnect with what you truly want — at a body level, not just a head level." },
    { title: "Move Forward", icon: "🚀", desc: "Turn clarity into real, consistent action. Build rituals, rewrite beliefs, and start living as the version of you who already has it." },
  ];

  const moduleColors = ["terracotta", "sage", "dusty-blue", "linen", "terracotta", "sage"];
  const moduleColorClasses: Record<string, { stripe: string; hover: string }> = {
    terracotta: { stripe: "bg-terracotta", hover: "hover:border-terracotta" },
    sage: { stripe: "bg-sage", hover: "hover:border-sage" },
    "dusty-blue": { stripe: "bg-dusty-blue", hover: "hover:border-dusty-blue" },
    linen: { stripe: "bg-linen", hover: "hover:border-linen" },
  };

  return (
    <main className="min-h-screen bg-cream text-ink font-sans overflow-x-hidden">

      {/* ─── 1. ANNOUNCEMENT BAR ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-fomo-red text-white py-2.5 text-center font-sans text-sm" suppressHydrationWarning>
        <div className="flex items-center justify-center gap-3 flex-wrap px-4">
          <span className="tracking-wide">✦ Founding Member Pricing: <strong>$497</strong> · Save $500</span>
          <span className="hidden sm:inline text-white/60">|</span>
          <span suppressHydrationWarning className="tabular-nums font-medium">
            {String(countdown.hours).padStart(2, "0")}h {String(countdown.minutes).padStart(2, "0")}m {String(countdown.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>

      {/* ─── 2. HERO ─── */}
      <section ref={heroRef} className="pt-20 sm:pt-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 flex items-start">
                <Image
                  src="/assets/logo.png"
                  alt="Season of Self"
                  width={50}
                  height={50}
                  priority
                  className="h-14 w-auto"
                />
              </div>
              <div className="flex gap-2 flex-wrap mb-6">
                <Pill color="sage">Self-paced</Pill>
                <Pill color="dusty-blue">12-month community</Pill>
                <Pill color="terracotta">Live coaching</Pill>
              </div>
              <h1 className="font-display text-display-hero text-ink mb-6 leading-[0.95]">
                Get clear on your <MarkerHighlight color="terracotta">dream life</MarkerHighlight> and start actually <MarkerHighlight color="sage">living it</MarkerHighlight>
              </h1>
              <p className="text-body-lg text-ink/70 mb-8 max-w-lg">
                A 6-module course + year-long community to help you stop overthinking and start moving toward the life that actually feels like yours.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={CTA_URL} className="inline-block bg-terracotta text-white font-sans font-semibold px-8 py-4 rounded-pill shadow-glow hover:scale-105 transition-transform">
                  Join Dream Life Mapping →
                </a>
                <a href="#mechanism" className="inline-block border-2 border-ink/20 text-ink font-sans font-medium px-8 py-4 rounded-pill hover:border-sage hover:text-sage transition-colors">
                  See How It Works
                </a>
              </div>
            </motion.div>

            {/* Right — overlapping photo collage */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
              <PhotoPlaceholder
                src="/assets/founders_vibing.jpg"
                alt="Charlotte and Katja vibing together"
                className="absolute top-0 right-0 w-[65%] h-[60%] rounded-card-lg shadow-lifted z-10 rotate-2"
              />
              <PhotoPlaceholder
                src="/assets/charlotte_founderheadshot.jpg"
                alt="Charlotte"
                className="absolute bottom-8 left-0 w-[55%] h-[50%] rounded-card-lg shadow-lifted z-20 -rotate-3"
              />
              <PhotoPlaceholder
                src="/assets/vertical_hero.jpg"
                alt="Dream Life Mapping"
                className="absolute bottom-0 right-8 w-[40%] h-[35%] rounded-card shadow-lifted z-30 rotate-1"
              />
              {/* decorative dot */}
              <div className="absolute top-4 left-8 w-16 h-16 rounded-full bg-terracotta/20 animate-float-slow z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider color="terracotta" />

      {/* ─── 3. PAIN SECTION ─── */}
      <section className="relative">
        <PhotoPlaceholder
          src="/assets/horizontal_heroimage.jpg"
          alt="Dream Life Mapping hero"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-20 sm:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-display-xl text-white mb-6">
              You don&rsquo;t hate your life.
            </h2>
            <p className="text-body-lg text-white/80 mb-4 leading-relaxed">
              That&rsquo;s what makes it so confusing. On paper, things are fine. Maybe even good. But there&rsquo;s this quiet feeling underneath it all — like you&rsquo;re living someone else&rsquo;s version of &ldquo;right.&rdquo;
            </p>
            <p className="text-body-lg text-white/70 leading-relaxed">
              You&rsquo;re not broken. You&rsquo;re not ungrateful. You&rsquo;re just ready for something that actually feels like <em className="text-terracotta font-medium">you</em>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. IS THIS YOU ─── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="terracotta">Sound familiar?</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">
              Is this you?
            </h2>
          </motion.div>
          {/* Masonry-style staggered grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {resonanceCards.map((card, i) => {
              const accents = ["border-l-terracotta", "border-l-sage", "border-l-dusty-blue", "border-l-linen", "border-l-terracotta"];
              const bgTints = ["bg-terracotta/5", "bg-sage/5", "bg-dusty-blue/5", "bg-linen/10", "bg-terracotta/5"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, rotate: i % 2 === 0 ? 1 : -1 }}
                  className={`break-inside-avoid border-l-4 ${accents[i]} ${bgTints[i]} rounded-card p-6 shadow-soft`}
                  style={{ minHeight: `${120 + (i % 3) * 30}px` }}
                >
                  <span className="text-3xl text-terracotta/40 font-display leading-none">&ldquo;</span>
                  <p className="font-sans text-ink/80 text-lg leading-relaxed mt-1">{card}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider color="sage" />

      {/* ─── 5. MECHANISM ─── */}
      <section id="mechanism" className="bg-offwhite py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="dusty-blue">The method</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">Three shifts. One transformation.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const colors = ["bg-terracotta/10 border-terracotta/30", "bg-sage/10 border-sage/30", "bg-dusty-blue/10 border-dusty-blue/30"];
              const iconBgs = ["bg-terracotta/20", "bg-sage/20", "bg-dusty-blue/20"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 30 : 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-card-lg border-2 ${colors[i]} p-8 transition-shadow hover:shadow-lifted`}
                >
                  <div className={`w-14 h-14 rounded-full ${iconBgs[i]} flex items-center justify-center text-2xl mb-4`}>
                    {step.icon}
                  </div>
                  <span className="text-xs font-sans font-bold tracking-widest text-ink/40 uppercase">Step {i + 1}</span>
                  <h3 className="font-display text-display-sm text-ink mt-1 mb-3">{step.title}</h3>
                  <p className="font-sans text-ink/70 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. WHAT THIS IS ─── */}
      <section className="bg-dusty-blue/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Pill color="dusty-blue">Introducing</Pill>
              <h2 className="font-display text-display-xl text-ink mt-4 mb-2">
                Dream Life<br />Mapping
              </h2>
              <p className="font-display text-subtitle-lg text-ink/50 italic">by Season of Self</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-body-lg text-ink/70 leading-relaxed mb-6">
                This is a 6-module, self-paced course with a year-long community container. It combines neuroscience-backed tools — breathwork, visualization, somatic release, and subconscious reprogramming — with practical frameworks to help you get clear on what you actually want and start moving toward it.
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill color="sage">6 deep-dive modules</Pill>
                <Pill color="terracotta">Monthly live coaching</Pill>
                <Pill color="dusty-blue">12-month community</Pill>
                <Pill color="sage">Breathwork + somatic tools</Pill>
                <Pill color="terracotta">AI Thought Partner</Pill>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider color="dusty-blue" />

      {/* ─── 7. MODULES ─── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="sage">The curriculum</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">6 modules to your dream life</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => {
              const c = moduleColorClasses[moduleColors[i]];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`bg-white rounded-card-lg overflow-hidden border-2 border-transparent ${c.hover} shadow-soft hover:shadow-lifted transition-all`}
                >
                  <div className={`h-2 ${c.stripe}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-sans font-bold tracking-widest text-ink/30">MODULE</span>
                      <span className="font-display text-display-sm text-ink/20">{mod.number}</span>
                    </div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-terracotta uppercase">{mod.keyword}</span>
                    <h3 className="font-display text-lg text-ink mt-1 mb-3 leading-snug">{mod.title}</h3>
                    <p className="font-sans text-sm text-ink/60 leading-relaxed line-clamp-3">{mod.description}</p>
                    <div className="mt-4 pt-3 border-t border-ink/5">
                      <p className="text-xs text-sage font-medium font-sans">✦ {mod.deliverable}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. FULL-WIDTH PHOTO BREAK ─── */}
      <section className="relative h-[50vh] sm:h-[60vh]">
        <PhotoPlaceholder
          src="/assets/horizontal_heroimage.jpg"
          alt="Dream Life Mapping"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <p className="font-display text-display-md text-white leading-snug">
              &ldquo;The life you want is closer than you think. You just have to stop waiting for permission to go get it.&rdquo;
            </p>
            <span className="block mt-4 text-white/60 font-sans text-sm">— Charlotte & Katja</span>
          </motion.blockquote>
        </div>
      </section>

      {/* ─── 9. COMMUNITY ─── */}
      <section className="bg-sage/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Pill color="sage">Community</Pill>
              <h2 className="font-display text-display-lg text-ink mt-4 mb-6">
                You&rsquo;re not doing this alone.
              </h2>
              <div className="space-y-5">
                {[
                  { icon: "🎙", title: "Monthly Live Q&A", desc: "12 live coaching calls with Charlotte & Katja over the year. Bring your real questions." },
                  { icon: "💬", title: "Private Community", desc: "A Circle community of like-minded women. Share wins, ask for support, stay accountable." },
                  { icon: "📬", title: "Direct Coach Access", desc: "Message Charlotte & Katja directly inside the community. Real support, not a chatbot." },
                  { icon: "🤝", title: "Accountability Partners", desc: "Get matched with someone walking the same path. Growth is easier when it's shared." },
                ].map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center shrink-0 text-lg">{feat.icon}</div>
                    <div>
                      <h4 className="font-sans font-semibold text-ink">{feat.title}</h4>
                      <p className="text-sm text-ink/60 font-sans">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <PhotoPlaceholder
                src="/assets/founders_working.jpg"
                alt="Charlotte and Katja working together"
                className="w-full h-[360px] sm:h-[420px] rounded-card-lg shadow-lifted"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider color="sage" />

      {/* ─── 10. WHY IT WORKS ─── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="dusty-blue">The science</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">Why it actually works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyItWorks.map((item, i) => {
              const bgs = ["bg-terracotta/8", "bg-sage/10", "bg-dusty-blue/10", "bg-linen/20"];
              const borders = ["border-terracotta/20", "border-sage/20", "border-dusty-blue/20", "border-linen/30"];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`${bgs[i]} border ${borders[i]} rounded-card-lg p-7 transition-all hover:shadow-soft`}
                >
                  <h3 className="font-display text-display-sm text-ink mb-3">{item.title}</h3>
                  <p className="font-sans text-ink/65 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 11. FOUNDERS ─── */}
      <section className="bg-offwhite py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <Pill color="terracotta">Meet your coaches</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">Built by two women who walked this path first.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Charlotte */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 border-2 border-terracotta rounded-card-lg -rotate-2 translate-x-2 translate-y-2" />
                <PhotoPlaceholder
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  className="relative w-full h-[350px] rounded-card-lg shadow-lifted -rotate-1"
                />
              </div>
              <h3 className="font-display text-display-sm text-ink mb-2">Charlotte</h3>
              <p className="font-sans text-ink/70 leading-relaxed text-sm">
                Former corporate overachiever who looked &ldquo;successful&rdquo; but felt completely disconnected from her own life. Left a 6-figure job, moved to Costa Rica, and rebuilt everything around what actually matters to her. Now she helps other women do the same — through <MarkerHighlight color="terracotta">breathwork, somatic practices, and subconscious reprogramming</MarkerHighlight>.
              </p>
            </motion.div>
            {/* Katja */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 border-2 border-sage rounded-card-lg rotate-2 -translate-x-2 translate-y-2" />
                <PhotoPlaceholder
                  src="/assets/katja_founderheadshot.jpg"
                  alt="Katja"
                  className="relative w-full h-[350px] rounded-card-lg shadow-lifted rotate-1"
                />
              </div>
              <h3 className="font-display text-display-sm text-ink mb-2">Katja</h3>
              <p className="font-sans text-ink/70 leading-relaxed text-sm">
                Spent years chasing external markers of success — degrees, promotions, relationships that looked right. Hit a wall when she realized none of it felt like her. Stripped it all back, explored what was actually true, and <MarkerHighlight color="sage">now guides women through purpose discovery, Ikigai mapping, and identity-level transformation</MarkerHighlight>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider color="terracotta" />

      {/* ─── 12. GIVE BACK ─── */}
      <section className="bg-deep-sage py-16 sm:py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="font-display text-display-mega text-white/15 leading-none block">10%</span>
            <h2 className="font-display text-display-md text-white -mt-6 relative z-10">
              Every purchase gives back.
            </h2>
            <p className="text-white/70 font-sans mt-4 max-w-lg mx-auto">
              10% of your enrollment is donated directly to two Costa Rica-based organizations creating real change in their communities.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white/10 backdrop-blur rounded-card-lg overflow-hidden border border-white/10 transition-all hover:border-white/20">
              <PhotoPlaceholder src="/assets/somasurf.jpg" alt="SOMA Surf" className="h-40 w-full" />
              <div className="p-6">
                <h3 className="font-display text-lg text-white mb-2">SOMA Surf</h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed">Using surf therapy to support mental health and empowerment for local youth in Nosara, Costa Rica.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -4 }} className="bg-white/10 backdrop-blur rounded-card-lg overflow-hidden border border-white/10 transition-all hover:border-white/20">
              <PhotoPlaceholder src="/assets/abriendomendes.png" alt="Abriendo Mentes" className="h-40 w-full" />
              <div className="p-6">
                <h3 className="font-display text-lg text-white mb-2">Abriendo Mentes</h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed">Providing education, mentorship, and opportunity to underserved communities across Costa Rica.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 13. PRICING ─── */}
      <section id="pricing" className="bg-cream py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="terracotta">Join today</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">Choose your path in.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Featured — Pay in full */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="relative bg-white rounded-card-lg border-2 border-terracotta shadow-lifted p-8">
              <span className="absolute -top-3 left-6 bg-terracotta text-white text-xs font-sans font-bold px-3 py-1 rounded-pill">Most popular</span>
              <h3 className="font-display text-display-sm text-ink mb-1">Pay in Full</h3>
              <p className="text-ink/50 font-sans text-sm mb-4">One-time payment</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-display-xl text-ink">$497</span>
                <span className="text-ink/40 font-sans line-through text-lg">$997</span>
              </div>
              <p className="text-fomo-red font-sans text-sm font-medium mb-6">Founding member — save $500</p>
              <a href={CTA_URL_PAY} className="block w-full bg-terracotta text-white text-center font-sans font-semibold py-4 rounded-pill shadow-glow hover:scale-[1.02] transition-transform">
                Join Now — $497 →
              </a>
            </motion.div>
            {/* Payment plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -6 }} className="bg-white rounded-card-lg border-2 border-sage p-8">
              <h3 className="font-display text-display-sm text-ink mb-1">3-Month Plan</h3>
              <p className="text-ink/50 font-sans text-sm mb-4">3 monthly payments</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-display-xl text-ink">$177</span>
                <span className="text-ink/40 font-sans text-lg">/month</span>
              </div>
              <p className="text-ink/50 font-sans text-sm mb-6">$531 total · same access</p>
              <a href={CTA_URL_PAY} className="block w-full bg-sage text-white text-center font-sans font-semibold py-4 rounded-pill shadow-glow-sage hover:scale-[1.02] transition-transform">
                Join Now — $177/mo →
              </a>
            </motion.div>
          </div>

          {/* Value stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-card-lg border border-sage/20 p-8 sm:p-10">
            <h3 className="font-display text-display-sm text-ink mb-6 text-center">Everything included:</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {valueStack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-terracotta shrink-0 mt-0.5">✦</span>
                  <span className="font-sans text-sm text-ink/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 14. GUARANTEE ─── */}
      <section className="bg-linen/30 py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center text-3xl mx-auto mb-6">🛡</div>
            <h2 className="font-display text-display-md text-ink mb-4">14-Day Money-Back Guarantee</h2>
            <p className="font-sans text-ink/70 leading-relaxed">
              Try Dream Life Mapping for two full weeks. Go through the first module, explore the community, attend a live call. If it&rsquo;s not what you expected — email us and we&rsquo;ll refund you completely. No questions, no awkwardness.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="sage" />

      {/* ─── 15. FAQ ─── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Pill color="sage">Questions?</Pill>
            <h2 className="font-display text-display-lg text-ink mt-4">Frequently asked</h2>
          </motion.div>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.question} a={faq.answer} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 16. FINAL CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage via-sage/80 to-dusty-blue" />
        {/* Background photo collage — faded */}
        <div className="absolute inset-0 opacity-10">
          <PhotoPlaceholder src="/assets/founders_working.jpg" alt="Charlotte and Katja working together" className="w-full h-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-20 sm:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-display-xl text-white mb-6 leading-tight">
              If you&rsquo;ve read this far, something in here is speaking to you.
            </h2>
            <p className="text-white/80 font-sans text-body-lg mb-10 max-w-xl mx-auto leading-relaxed">
              That quiet pull? That&rsquo;s not restlessness. It&rsquo;s readiness. You don&rsquo;t need to have it figured out — you just need to start. We&rsquo;ll meet you where you are.
            </p>
            <a href={CTA_URL} className="inline-block bg-white text-deep-sage font-sans font-bold px-10 py-5 rounded-pill text-lg shadow-lifted hover:scale-105 transition-transform">
              Join Dream Life Mapping — $497 →
            </a>
            <p className="text-white/50 font-sans text-sm mt-4">or 3 × $177 · 14-day money-back guarantee</p>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-ink text-white/40 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <p className="font-sans text-sm">© {new Date().getFullYear()} Season of Self. All rights reserved.</p>
        </div>
      </footer>

      {/* ─── FLOATING CTA ─── */}
      <AnimatePresence>
        {showFloat && (
          <motion.a
            href={CTA_URL}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-terracotta text-white font-sans font-bold px-6 py-3.5 rounded-pill shadow-glow hover:scale-105 transition-transform animate-pulse"
          >
            Join Now →
          </motion.a>
        )}
      </AnimatePresence>
    </main>
  );
}
