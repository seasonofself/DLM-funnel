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
  { label: "Status", value: "Waitlist open. Bookings open soon." },
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
    value:
      "Accommodation, pricing, and booking link. Released to the waitlist first.",
  },
];

export default function EricieraRetreatPage() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          HERO - cinematic video banner (no text overlay)
         ════════════════════════════════════════════════ */}
      <section className="relative bg-ink overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[68vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
        >
          <source src="/assets/drone-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* ════════════════════════════════════════════════
          HERO TEXT - spacious, centered, on cream
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 px-6 sm:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-ink bg-linen/80 px-3 py-1.5 rounded-full mb-10"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Waitlist now open · 8 spots, October 2026
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.2rem] sm:text-[2.9rem] lg:text-[3.6rem] xl:text-[4.2rem] leading-[1.05] text-ink mb-10 tracking-[-0.02em] text-balance"
          >
            Dream Life Retreat in Ericeira, Portugal · October 5–11, 2026
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-ink/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A wellness &amp; personal development retreat on the coast of
            Ericeira, Portugal. Yoga, rest, and real clarity on the life you
            actually want, alongside other women who feel the same pull.
            Bookings open soon - join the waitlist to be first in line for
            one of the 8 spots.
          </motion.p>

          <motion.div variants={fadeUp} className="text-left">
            <WaitlistForm />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - What it is
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-28 lg:pb-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-7"
          >
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
              Our signature Dream Life trip. A retreat made for women who
              feel the pull toward something different and want to actually
              live it, for a week on the coast of Ericeira, Portugal. Your
              days hold yoga, breathwork, meditation, ocean hikes, surf, and
              the spaciousness to finally rest. Alongside it: spirituality
              and manifestation work, and honest career coaching that turns
              &ldquo;someday&rdquo; into a real plan. This is more than a
              getaway, it&rsquo;s a full immersion in a different way of
              living. You&rsquo;ll head home clear on where you&rsquo;re
              going, with a sisterhood of seven women walking it beside you.
              Bookings haven&rsquo;t opened yet - the waitlist is how you get
              first access when they do.
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
                src="/assets/yoga-shot.jpg"
                alt="Yoga on the retreat"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - Who it is for
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
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
          SECTION - What the week holds (compact pill list)
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="mt-14 sm:mt-20 max-w-5xl mx-auto"
          >
            <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden">
              <Image
                src="/assets/SS_Nosara_11-02-26-221.jpg"
                alt="Yoga and surf, the rhythm of the week"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - Nourishment
         ════════════════════════════════════════════════ */}
      <section className="bg-[#f1ead8] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="lg:col-span-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] text-ink mb-7 tracking-[-0.02em]"
            >
              Food that&rsquo;s part of the{" "}
              <span className="italic">ritual</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Nourishment is a core part of the retreat experience. Throughout
              the week, you&rsquo;ll be deeply cared for with three delicious
              home-cooked meals a day, prepared by our private Brazilian chef.
              Inspired by Brazilian and Portuguese cuisine, every dish is
              created with fresh, locally sourced, farm-to-table ingredients
              - vibrant, nourishing, and full of flavour. Our menu is entirely
              vegetarian and thoughtfully designed to support your body from
              the inside out: energising breakfasts, wholesome lunches, and
              beautiful three-course dinners, finished with homemade dessert
              each evening. Food at the retreat is more than just meals -
              it&rsquo;s part of the ritual, the connection, and the
              nourishment of coming back to yourself.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[24px] overflow-hidden">
              <Image
                src="/assets/SheFlows-6.jpg"
                alt="Home-cooked, farm-to-table meals at the retreat"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - Where
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
                src="/assets/SheFlows-24.jpg"
                alt="Ericeira, Portugal, Atlantic coast"
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
          SECTION - Your hosts
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
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

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12 max-w-3xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
            >
              <div className="relative aspect-[3/4] w-full rounded-[16px] sm:rounded-[20px] overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/assets/charlotte_founderheadshot.jpg"
                  alt="Charlotte"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg sm:text-2xl lg:text-3xl text-ink mb-1 sm:mb-2">
                Charlotte
              </h3>
              <p className="font-mono text-[9px] sm:text-[11px] tracking-[0.18em] uppercase text-ink/50">
                Co-founder, Season of Self
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <div className="relative aspect-[3/4] w-full rounded-[16px] sm:rounded-[20px] overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/assets/katja_hero.jpeg"
                  alt="Katja"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg sm:text-2xl lg:text-3xl text-ink mb-1 sm:mb-2">
                Katja
              </h3>
              <p className="font-mono text-[9px] sm:text-[11px] tracking-[0.18em] uppercase text-ink/50">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-14 sm:mt-20 grid grid-cols-3 gap-2 sm:gap-4"
          >
            <div className="relative aspect-[3/4] rounded-[16px] sm:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/SS_Nosara_11-02-26-132.jpg"
                alt="Charlotte mapping the week's intentions"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-[16px] sm:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/SS_Nosara_11-02-26-242.jpg"
                alt="Charlotte and Katja, evening on the coast"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-[16px] sm:rounded-[20px] overflow-hidden">
              <Image
                src="/assets/SS_Nosara_11-02-26-138.jpg"
                alt="A quiet moment by the sea"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - Testimonial
         ════════════════════════════════════════════════ */}
      <section className="bg-linen py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="font-display italic text-ink/85 text-xl sm:text-2xl lg:text-[1.7rem] leading-[1.35] tracking-[-0.01em] max-w-3xl mx-auto"
          >
            &ldquo;This retreat truly exceeded all expectations. It was such
            a special experience: a beautiful combination of slowing down,
            reconnecting with yourself, and growing stronger in who you are.
            I was able to reflect, gain new perspectives, and broaden my
            horizon, all while connecting with so many wonderful and
            inspiring women. The atmosphere throughout the entire experience
            felt incredibly genuine, warm, and supportive, and everyone felt
            completely comfortable, seen, and cared for from the very
            beginning. You could truly feel the passion and dedication
            behind every detail. I would book this again in a heartbeat.&rdquo;
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
              <Image
                src="/assets/Sheila-14.jpg"
                alt="Sheila"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55">
              - Sheila
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION - Why the waitlist (inline form)
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
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
            The waitlist hears first, books first, and gets early-bird
            pricing. With only 8 spots, the retreat is expected to sell out
            from the waitlist alone.
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
          SECTION - Good to know
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
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
          FULL-WIDTH BANNER - the retreat at a glance
         ════════════════════════════════════════════════ */}
      <section className="bg-cream">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative w-full"
          style={{ aspectRatio: "1576 / 786" }}
        >
          <Image
            src="/assets/sheflows.jpeg"
            alt="Scenes from the retreat, yoga, food, ocean, gathering"
            fill
            sizes="100vw"
            className="object-contain"
            priority={false}
          />
        </motion.div>
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
