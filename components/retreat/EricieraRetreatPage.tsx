"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import SectionMarquee from "@/components/ui/SectionMarquee";
import WaitlistForm from "@/components/retreat/WaitlistForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const weekHolds = [
  {
    title: "Yoga, meditation, and breathwork",
    note: "Daily practice. Gentle, restorative, returning you to your body.",
    color: "bg-terracotta text-cream",
  },
  {
    title: "Coastal hikes, massage, and real rest",
    note: "Slow mornings. Time to do nothing. Time to do everything that matters.",
    color: "bg-deep-sage text-cream",
  },
  {
    title: "Our ikigai and dream life planning workshops",
    note: "The same frameworks we use in Dream Life Mapping. Distilled, in person.",
    color: "bg-ink text-cream",
  },
  {
    title: "Group coaching and evening circles with us",
    note: "Honest conversations. Real momentum. Seven other women in it with you.",
    color: "bg-terracotta-dark text-cream",
  },
];

const goodToKnow = [
  { label: "When", value: "October 5 to 11, 2026" },
  { label: "Where", value: "Ericeira, Portugal" },
  { label: "Who", value: "8 women, hosted by Charlotte and Katja" },
  {
    label: "The week",
    value:
      "Wellness first. Yoga, meditation, breathwork, hiking, rest, and our workshops.",
  },
  {
    label: "Still being finalised",
    value: "Accommodation and details. The waitlist gets them first.",
  },
];

export default function EricieraRetreatPage() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          HERO — full-bleed drone video, copy on left, no overlay
         ════════════════════════════════════════════════ */}
      <section className="relative bg-ink overflow-hidden min-h-[88vh] lg:min-h-[92vh] flex items-center">
        {/* Full-bleed drone video — shifted right so faces sit on
            the right half, away from the text column on the left */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ objectPosition: "85% center" }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/drone-video.mp4" type="video/mp4" />
        </video>

        {/* Soft left-side darkening only — gives just enough contrast
            for the cream text. Fully transparent on the right so the
            video and the two of you stay visible. */}
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-ink/55 lg:via-ink/25 lg:via-35% lg:to-transparent lg:to-60% bg-ink/35" />

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 py-20 sm:py-24 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl lg:max-w-[600px]"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-linen mb-7"
            >
              <span className="inline-block w-8 h-px bg-linen align-middle mr-3" />
              Ericeira, Portugal · October 5–11, 2026
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.4rem] sm:text-[3.2rem] lg:text-[4.2rem] xl:text-[4.8rem] leading-[0.96] text-cream mb-7 tracking-[-0.025em] [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]"
            >
              You know you want a{" "}
              <span className="italic text-linen">different life</span>.
              This is where you{" "}
              <span className="italic">start</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-subtitle italic text-cream/85 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-9 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]"
            >
              A small wellness week in Ericeira, Portugal. Yoga, rest, and
              honest work on what you actually want, with seven other women
              who feel the same pull.
            </motion.p>

            <motion.div variants={fadeUp}>
              <WaitlistForm
                variant="dark"
                microline="8 spots only · The waitlist hears everything first"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MARQUEE divider — editorial running head
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-10 sm:py-12 border-y border-ink/10">
        <SectionMarquee
          text="A week to come home to yourself"
          separator="✦"
          speed={95}
          italic={true}
          textClassName="text-ink"
        />
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 1 — What it is
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-terracotta-dark mb-6"
            >
              Section 01 · The Week
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink mb-8 tracking-[-0.02em]"
            >
              A week to get clear and{" "}
              <span className="italic">get going</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              A slow week by the ocean for women who know they want something
              different and are not sure where to begin. Yoga, meditation,
              breathwork, hikes, and proper rest. Plus the part we love most:
              getting honest about the life you want and the first real steps
              to build it. You will leave knowing where you are headed, with
              seven women walking it with you.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[24px] overflow-hidden">
              <Image
                src="/assets/vertical_hero.jpg"
                alt="Charlotte and Katja with surfboards"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2 — Who it is for
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-deep-sage mb-6"
          >
            Section 02 · For you
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink mb-9 tracking-[-0.02em]"
          >
            This is for <span className="italic">you</span> if
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-display italic text-ink/85 text-xl sm:text-2xl lg:text-[1.7rem] leading-snug max-w-2xl mx-auto"
          >
            You feel the pull toward a different kind of life. Different work,
            a slower pace, maybe a different country. You do not need it
            figured out. You just need to be ready to start.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 3 — What the week holds (compact pill list)
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
        <SectionMarquee
          text="What the week holds"
          separator="✦"
          speed={90}
          textClassName="text-ink"
          className="mb-10 sm:mb-14 lg:mb-16"
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto">
            {weekHolds.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-4 sm:gap-5 py-3.5 sm:py-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-6 sm:w-12 sm:h-7 rounded-full font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.08em] shrink-0 ${item.color}`}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-ink text-[1.05rem] sm:text-[1.2rem] lg:text-[1.4rem] leading-snug tracking-[-0.015em]">
                    {item.title}
                  </h3>
                </div>
                {i < weekHolds.length - 1 && (
                  <div className="border-t border-ink/12" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl mx-auto mt-10 sm:mt-14 font-subtitle italic text-ink/65 text-base sm:text-lg leading-relaxed text-center"
          >
            At its heart this is a wellness week. If the ocean is good, a surf
            session is a happy bonus.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 4 — Where
         ════════════════════════════════════════════════ */}
      <section className="bg-[#cdd8e1] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[24px] overflow-hidden">
              <Image
                src="/assets/ericeira.jpg"
                alt="Ericeira, Portugal — Atlantic coast"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-deep-sage mb-6"
            >
              Section 04 · Location
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink mb-7 tracking-[-0.02em]"
            >
              <span className="italic">Ericeira</span>, Portugal
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              A whitewashed surf town on the Atlantic coast. Slow mornings,
              good waves, an easy pace. Katja lives in Portugal, so this is a
              place we genuinely love and know.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5 — Your hosts
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-terracotta-dark mb-6"
            >
              Section 05 · Your hosts
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink tracking-[-0.02em]"
            >
              Charlotte <span className="italic">and</span> Katja
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
            >
              <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden mb-6">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-2">
                Charlotte
              </h3>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/50">
                Co-founder, Season of Self
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden mb-6">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-2">
                Katja
              </h3>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/50">
                Co-founder, Season of Self
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="mt-14 max-w-2xl mx-auto text-center font-display italic text-xl sm:text-2xl text-ink/80 leading-snug"
          >
            The two behind Season of Self. We both rebuilt our lives around
            what actually felt true. Now we help other women do the same. This
            week, in person.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 6 — Why the waitlist (inline form)
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-deep-sage mb-6"
          >
            Section 06 · Why the waitlist
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink mb-8 tracking-[-0.02em]"
          >
            Why the <span className="italic">waitlist</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="font-sans text-ink/75 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Be the first to know when the retreat is live. We only have 8
            spots, so spots will fill fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 7 — Good to know
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-terracotta-dark mb-6 text-center"
          >
            Section 07 · Logistics
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.02] text-ink mb-14 sm:mb-16 text-center tracking-[-0.02em]"
          >
            Good to <span className="italic">know</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {goodToKnow.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 py-5 sm:py-6">
                  <p className="col-span-12 sm:col-span-3 font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-ink/55 pt-1.5">
                    {item.label}
                  </p>
                  <p className="col-span-12 sm:col-span-9 font-display text-ink text-lg sm:text-xl lg:text-[1.4rem] leading-[1.3] tracking-[-0.015em]">
                    {item.value}
                  </p>
                </div>
                {i < goodToKnow.length - 1 && (
                  <div className="border-t border-ink/12" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA — sage brand color with paper texture
         ════════════════════════════════════════════════ */}
      <section className="paper-texture bg-sage text-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.32em] uppercase text-linen mb-7"
          >
            Final word
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[4rem] leading-[1.02] text-cream mb-10 tracking-[-0.02em]"
          >
            You know you want something different.{" "}
            <span className="italic">Start here.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl mx-auto text-left"
          >
            <WaitlistForm
              variant="dark"
              microline="October 5–11, 2026 · Ericeira, Portugal · 8 women"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER (minimal)
         ════════════════════════════════════════════════ */}
      <footer className="bg-ink py-12 sm:py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <Image
              src="/assets/green_logo.png"
              alt="Season of Self"
              width={200}
              height={200}
              unoptimized
              className="h-7 w-auto mb-3 brightness-[10]"
            />
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream/45">
              Dream Life Retreats · Ericeira 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-cream/55">
            <a
              href="/"
              className="font-sans text-sm hover:text-cream transition-colors"
            >
              Home
            </a>
            <a
              href="/dream-life"
              className="font-sans text-sm hover:text-cream transition-colors"
            >
              Dream Life Mapping
            </a>
            <a
              href="/about"
              className="font-sans text-sm hover:text-cream transition-colors"
            >
              About
            </a>
            <a
              href="/privacy-policy"
              className="font-sans text-sm hover:text-cream transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cream/10">
          <p className="font-sans text-xs text-cream/30">
            © {new Date().getFullYear()} Season of Self LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
