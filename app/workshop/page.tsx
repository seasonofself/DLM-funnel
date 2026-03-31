"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─── helpers (same as /dream-life) ──────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "/dream-life#checkout";

/* ─── countdown hook ─────────────────────────────────── */
function useCountdown(minutes: number) {
  const [timeLeft, setTimeLeft] = useState(() => minutes * 60);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ─── offer panel items ──────────────────────────────── */
const included = [
  "Full 6-module Dream Life Mapping course",
  "40-min guided breathwork session",
  "Personal subconscious audio creation",
  "12 months in the Season of Self community",
  "12 monthly live Q&A calls with Charlotte & Katja",
  "Direct access to both coaches",
  "10% donated to SOMA Surf + Abriendo Mentes",
];

/* ─── main component ─────────────────────────────────── */
function WorkshopPageContent() {
  const searchParams = useSearchParams();
  const [showOffer, setShowOffer] = useState(false);
  const countdown = useCountdown(60);
  const offerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const taggedRef = useRef(false);

  /* ── Tag subscriber as "webinar watched" on page load ── */
  useEffect(() => {
    const email = searchParams.get("e");
    if (!email || taggedRef.current) return;
    taggedRef.current = true;

    fetch("/api/kit-tag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch((err) => console.error("Tag error:", err));
  }, [searchParams]);

  const openOffer = useCallback((shouldScroll = false) => {
    setShowOffer(true);

    if (shouldScroll) {
      window.setTimeout(() => {
        offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, []);

  const subscribeToVimeo = useCallback(() => {
    const playerWindow = iframeRef.current?.contentWindow;

    if (!playerWindow) {
      return;
    }

    playerWindow.postMessage(
      JSON.stringify({ method: "addEventListener", value: "timeupdate" }),
      "https://player.vimeo.com",
    );
  }, []);

  /* ── listen for Vimeo Player events via postMessage ── */
  const handleMessage = useCallback((e: MessageEvent) => {
    let data = e.data;

    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        return;
      }
    }

    if (
      typeof data === "object" &&
      data !== null &&
      "event" in data &&
      data.event === "timeupdate" &&
      typeof data.data?.seconds === "number" &&
      data.data.seconds >= 22 * 60
    ) {
      openOffer();
    }
  }, [openOffer]);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  useEffect(() => {
    subscribeToVimeo();

    const timer = window.setTimeout(() => {
      subscribeToVimeo();
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [subscribeToVimeo]);

  /* ── also allow manual reveal after 22 min on page ── */
  useEffect(() => {
    const timer = window.setTimeout(() => openOffer(), 22 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [openOffer]);

  return (
    <main className="relative overflow-hidden pb-24 sm:pb-28">
      {/* ════════════════════════════════════════════════
          ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 bg-fomo-red text-white text-center py-2.5 px-4 text-xs sm:text-sm font-sans flex items-center justify-center gap-3 flex-wrap">
        <span>
          ✦ Dream Life Mapping — Founding Member Pricing:{" "}
          <strong>$497</strong>
        </span>
        <a
          href="/dream-life"
          className="inline-block bg-white text-fomo-red font-bold px-4 py-1 rounded-full text-xs hover:scale-105 transition-transform"
        >
          Learn More →
        </a>
      </div>

      {/* spacer for fixed bar */}
      <div className="h-8" />

      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-6 sm:w-[23rem]">
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          whileHover={{ y: -2 }}
          onClick={() => openOffer(true)}
          className="pointer-events-auto w-full rounded-[26px] border border-white/10 bg-deep-sage px-5 py-4 text-left text-white shadow-2xl shadow-deep-sage/25"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-white/60">
            Dream Life Mapping offer
          </p>
          <p className="mt-1 font-display text-xl leading-tight">
            Click here to view offer
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-white/75">
            Jump to the Dream Life Mapping details anytime.
          </p>
        </motion.button>
      </div>

      {/* ════════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-10 sm:py-16 px-4 overflow-hidden">
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-sage/20 animate-float" />
        <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-dusty-blue/15 animate-float [animation-delay:1s]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <Image
              src="/assets/green_logo.png"
              alt="Season of Self"
              width={96}
              height={96}
              priority
              className="h-10 sm:h-12 w-auto"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-sans text-sage uppercase tracking-widest text-xs mb-4"
          >
            Free Workshop with Charlotte &amp; Katja
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-4"
          >
            The 3 Secrets to Creating a Life That Actually{" "}
            <span className="text-terracotta">Feels Like Yours</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-subtitle italic text-ink/60 text-base sm:text-lg max-w-xl mx-auto"
          >
            Press play when you&rsquo;re ready. Take what resonates.
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          VIDEO
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pb-12 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* ── video ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-ink/5">
              <iframe
                ref={iframeRef}
                onLoad={subscribeToVimeo}
                src="https://player.vimeo.com/video/1177071654?badge=0&amp;autopause=0&amp;player_id=season-of-self-workshop&amp;app_id=58479&amp;api=1"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Free Workshop — Season of Self"
              />
            </div>
          </motion.div>
        </div>

        {/* ── offer panel (reveals below video at ~22 min) ── */}
        <AnimatePresence>
          {showOffer && (
            <motion.div
              id="offer"
              ref={offerRef}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-xl border border-ink/5 overflow-hidden"
            >
              {/* countdown header */}
              <div className="bg-fomo-red text-white text-center py-3 px-4">
                <p className="font-sans text-xs uppercase tracking-wider mb-0.5">
                  Founding Member Price — Limited Time
                </p>
                <p
                  className="font-bold text-lg tabular-nums"
                  suppressHydrationWarning
                >
                  {countdown}
                </p>
              </div>

              {/* offer body */}
              <div className="p-6 sm:p-8">
                <p className="font-sans text-sage uppercase tracking-widest text-[10px] mb-2 text-center">
                  Introducing
                </p>

                <div className="flex justify-center mb-4">
                  <Image
                    src="/assets/green_logo.png"
                    alt="Season of Self"
                    width={64}
                    height={64}
                    className="h-8 w-auto"
                  />
                </div>

                <h3 className="font-display text-2xl text-ink text-center mb-1">
                  Dream Life Mapping
                </h3>
                <p className="font-sans text-ink/40 text-xs text-center mb-5">
                  Course + Community + Coaching
                </p>

                {/* what's included — two-column on larger screens */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-sage mt-0.5 text-sm flex-shrink-0">
                        ✓
                      </span>
                      <span className="font-sans text-ink/70 text-sm leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* divider */}
                <div className="border-t border-ink/5 my-5" />

                {/* pricing */}
                <div className="text-center mb-5">
                  <p className="font-sans text-ink/35 text-sm line-through mb-1">
                    $997
                  </p>
                  <p className="font-display text-3xl text-deep-sage font-bold">
                    $497
                  </p>
                  <p className="font-sans text-ink/40 text-xs mt-1">
                    Founding member price · Save $500
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="/dream-life"
                  className="block max-w-sm mx-auto bg-deep-sage text-white font-bold py-4 rounded-full text-center text-base hover:scale-[1.02] transition-transform shadow-lg shadow-deep-sage/30"
                >
                  Join Now →
                </a>

                <p className="text-center font-sans text-ink/30 text-[10px] mt-3">
                  ✦ Instant access · 30-day guarantee · Payment plan available
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* ════════════════════════════════════════════════
          CTA — Next Step
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-20 sm:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-6"
          >
            If you&rsquo;re feeling that &ldquo;this is me&rdquo;&hellip;
            here&rsquo;s your next step
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-ink/60 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          >
            We&rsquo;ve built a process to help you get clear on your direction
            and actually start moving on it
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/dream-life"
              className="inline-block bg-deep-sage text-white font-bold px-10 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-deep-sage/30"
            >
              Learn About Dream Life Mapping →
            </a>
            <p className="mt-4 font-sans text-sm text-ink/50 max-w-md mx-auto leading-relaxed">
              The course, community + coaching Charlotte &amp; Katja created to
              walk you through this, step by step.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          TRUST / REMINDER
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-ink/50 text-sm leading-relaxed">
            ✦ Watch at your own pace. Come back anytime.
          </p>
          <p className="font-subtitle italic text-ink/40 text-sm mt-2">
            When you&rsquo;re ready, the full course is waiting for you.
          </p>
        </div>
      </section>

      {/* footer bar */}
      <div className="h-2 bg-ink" />
    </main>
  );
}

export default function WorkshopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <WorkshopPageContent />
    </Suspense>
  );
}
