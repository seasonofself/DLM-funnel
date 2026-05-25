"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const learnings = [
  {
    title: "Inner GPS",
    description:
      "Why you already know what to do but keep second-guessing it, and how to start trusting your decisions.",
  },
  {
    title: "Signals",
    description:
      "How to recognize what your body is already telling you so you stop overthinking every move.",
  },
  {
    title: "Pull",
    description:
      "Why some people actually change their lives and others stay stuck, even when they know what they want.",
  },
];

const KIT_FORM_ID = "9217328";

export default function ClarityPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email_address: email,
            first_name: firstName,
          }),
        }
      );
    } catch (err) {
      console.error("Kit subscription error:", err);
    }

    router.push(`/workshop?e=${encodeURIComponent(email)}`);
  };

  return (
    <main className="relative overflow-hidden bg-cream">
      {/* ════════════════════════════════════════════════
          ANNOUNCEMENT BAR
         ════════════════════════════════════════════════ */}
      <div className="sticky top-0 inset-x-0 z-50 bg-ink px-4 py-2.5 text-cream">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 text-center font-sans text-[11px] sm:flex-row sm:gap-3 sm:text-sm">
          <span>✦ Free Workshop · Watch Instantly</span>
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-cream px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink hover:bg-white transition-colors"
          >
            Watch Now →
          </a>
        </div>
      </div>

      <Header sticky={false} />

      {/* ════════════════════════════════════════════════
          HERO — editorial split
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 font-display italic text-[14rem] sm:text-[22rem] lg:text-[28rem] xl:text-[34rem] leading-none text-ink/[0.035] select-none whitespace-nowrap"
        >
          clarity
        </div>

        <div className="relative max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7 order-2 lg:order-1 relative z-10"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-7"
            >
              <span className="inline-block w-8 h-px bg-deep-sage align-middle mr-3" />
              Free Workshop · 27 min
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem] leading-[0.95] text-ink mb-8 tracking-[-0.01em]"
            >
              The 3 secrets to creating a life that actually{" "}
              <span className="italic text-terracotta-dark">
                feels like yours
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-ink/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
            >
              A free workshop for women who know they’re meant for more and
              are ready to stop overthinking and actually move on it.
            </motion.p>

            <motion.form
              id="signup"
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-3 max-w-md"
            >
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-full border border-ink/12 bg-white font-sans text-base text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-deep-sage/40 focus:border-deep-sage transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-full border border-ink/12 bg-white font-sans text-base text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-deep-sage/40 focus:border-deep-sage transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ink text-cream font-sans font-medium text-[11px] tracking-[0.32em] uppercase px-8 py-[18px] rounded-full hover:bg-deep-sage transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Taking you there…" : "Watch the free workshop →"}
              </button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-xs text-ink/50 font-sans max-w-md"
            >
              ✦ Free. No fluff. Just the things that actually changed our
              lives.
            </motion.p>
          </motion.div>

          {/* photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.35)]"
            >
              <Image
                src="/assets/founders_couch_casual.jpg"
                alt="Charlotte and Katja"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-6 bg-white rounded-full shadow-[0_12px_30px_-12px_rgba(34,34,34,0.3)] px-4 py-2.5 flex items-center gap-2.5"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-sage" />
              <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-ink/70">
                Free · 27 min · Watch instantly
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT THE HOSTS
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-5"
            >
              Your Guides
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              Who&apos;s <span className="italic">teaching</span> this?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeUp} className="bg-white rounded-[24px] p-7 sm:p-8">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[18px] overflow-hidden mb-6">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">
                Charlotte
              </h3>
              <p className="font-sans text-ink/70 leading-relaxed text-[15px]">
                Charlotte left a business school path in Montreal and followed
                an unclear pull she couldn&apos;t explain. That pull led her to
                build a multi-million dollar beauty brand with 100,000+
                customers across 50+ countries. Today she lives by the ocean in
                Costa Rica, designing life on her own terms.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-[24px] p-7 sm:p-8">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-[18px] overflow-hidden mb-6">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">Katja</h3>
              <p className="font-sans text-ink/70 leading-relaxed text-[15px]">
                Katja had every box checked: a stable corporate career, a
                loving 10-year relationship. But inside, something felt off.
                Numb. Disconnected. A solo trip through Latin America changed
                everything. She chose to leave everything behind and created a
                life that once felt impossible. Now living a slow life in
                Portugal.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-center font-display italic text-ink/75 text-xl sm:text-2xl mt-12 max-w-2xl mx-auto leading-snug"
          >
            We&apos;re not here to tell you what your dream life looks like.
            We&apos;re here to help you{" "}
            <span className="text-terracotta-dark not-italic font-semibold">
              remember
            </span>
            .
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          WHAT YOU'LL LEARN
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-terracotta-dark mb-5"
            >
              In this workshop
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink"
            >
              You&apos;ll <span className="italic">discover</span>:
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {learnings.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[24px] p-7 sm:p-8"
              >
                <span className="font-display italic text-deep-sage/70 text-3xl block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-ink/70 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
         ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/founders_porch.jpg"
            alt=""
            fill
            className="object-cover object-[55%_30%]"
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
            className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-cream mb-7"
          >
            Ready to start <span className="italic">listening</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-cream/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            This workshop is your first step. No commitment, no pressure, just
            the insights that changed everything for us.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#signup"
              className="inline-flex items-center gap-3 bg-cream text-ink font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-10 py-[20px] rounded-full hover:bg-white transition-colors"
            >
              Watch the free workshop →
            </a>
            <p className="mt-5 text-xs text-cream/60 font-sans">
              ✦ Free. Watch at your own pace.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-2 bg-ink" />
    </main>
  );
}
