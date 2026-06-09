"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

/* ── Little hand-drawn-feeling spiral, used as the list bullet.
      An Archimedean spiral generated once at module load. ── */
const SPIRAL_D = (() => {
  const turns = 2.15;
  const steps = 64;
  const a = 0.4;
  const b = 0.62;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * 2 * Math.PI;
    const r = a + b * t;
    const x = (12 + r * Math.cos(t)).toFixed(2);
    const y = (12 + r * Math.sin(t)).toFixed(2);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return d.trim();
})();

function Spiral({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={SPIRAL_D}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   STRIPE PAYMENT LINKS — pay in full per room
     bunk         €1,750  (Single bed, shared bunk room)
     sharedQueen  €1,950  (Shared queen, two guests)
     privateQueen €2,550  (Private queen room)
   ════════════════════════════════════════════════════════════ */
const RESERVE_LINKS = {
  bunk: "https://buy.stripe.com/aFacMY6WE5uAfd0e6u2sM00",
  sharedQueen: "https://buy.stripe.com/dRmfZadl21ekd4S2nM2sM01",
  privateQueen: "https://buy.stripe.com/bJe4gsgxe3msfd04vU2sM02",
};

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

/* ── A general "Reserve your spot" button. Anchors to the
      Investment section, where the real per-room Stripe links live. ── */
function ReserveButton({
  label = "Reserve your spot",
  href = "#investment",
  dark = false,
  external = false,
}: {
  label?: string;
  href?: string;
  dark?: boolean;
  external?: boolean;
}) {
  const cls = dark
    ? "bg-cream text-ink hover:bg-linen"
    : "bg-ink text-cream hover:bg-deep-sage";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 sm:px-11 py-[18px] sm:py-[20px] rounded-full transition-colors ${cls}`}
    >
      {label}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

const movements = [
  {
    verb: "Assess",
    body: "Arrive, exhale, and get honest about where you actually are.",
  },
  {
    verb: "Visualize",
    body: "Drop beneath the noise and get a clear picture of the life, and the work, you actually want.",
  },
  {
    verb: "Release",
    body: "Move out the fear, doubt, and overthinking that have kept you stuck.",
  },
  {
    verb: "Align",
    body: "Find your zone of genius and the work only you can do, then choose your path.",
  },
  {
    verb: "Create",
    body: "Turn that path into a real map and a first aligned step, coached and witnessed.",
  },
  {
    verb: "Embody",
    body: "Become the woman who already lives this life, and leave with a 30-day plan to keep walking it.",
  },
];

const dayShape = [
  { time: "7:30", note: "optional morning meditation" },
  { time: "8:00", note: "yoga as the day opens" },
  { time: "9:00", note: "a slow, nourishing breakfast" },
  { time: "Late morning", note: "the day's workshop" },
  {
    time: "1:00",
    note: "lunch, then a long, open afternoon to surf, hike the cliffs, swim, journal, nap, or book a massage",
  },
  {
    time: "Evening",
    note: "an optional sunset sit, dinner, and a fire, a sauna, or a circle",
  },
];

const wovenWork = [
  <>
    The full <span className="marker marker--sage">six-part Dream Life journey</span>, facilitated in person
  </>,
  <>
    Our <span className="marker marker--sage">Ikigai experience</span>, done live with you in the room
  </>,
  <>
    A <span className="marker marker--sage">mapping and strategy session</span>, plus hot seat coaching in a small, intimate pod
  </>,
  <>
    <span className="marker marker--sage">Lifetime access</span> to the Dream Life Mapping course, yours to complete before you arrive
  </>,
  <>
    A welcome gift, your own retreat journal, and a <span className="marker marker--sage">sisterhood of seven other women</span>
  </>,
];

const wovenWellness = [
  <>
    <span className="marker marker--sage">Daily yoga</span> and optional morning meditation
  </>,
  <>
    Dream life envisioning <span className="marker marker--sage">breathwork</span>
  </>,
  <>
    <span className="marker marker--sage">Somatic release</span> and movement
  </>,
  <>
    <span className="marker marker--sage">Surf on the Atlantic</span> when the waves are kind
  </>,
  <>
    Sauna, a <span className="marker marker--sage">bonfire release ceremony</span>, and a massage to restore
  </>,
  <>
    Three home-cooked, <span className="marker marker--sage">farm-to-table meals</span> a day from our private chef
  </>,
  <>
    <span className="marker marker--sage">Six nights</span> in a beautiful shared home on the coast
  </>,
];

const stayGallery = [
  { src: "/assets/IMG_2401-1.jpg", alt: "The big open kitchen" },
  { src: "/assets/DSC02695.jpg", alt: "The rooftop terrace, set up for practice" },
  { src: "/assets/DSC03964.jpg", alt: "Yoga on the terrace" },
  { src: "/assets/DJI_0037.jpg", alt: "The surf house from above" },
];

const rooms = [
  {
    name: "Single bed in shared bunk room",
    price: "€1,750",
    unit: "per person",
    img: "/assets/farendsurfhouse-kerttukruusla_107.jpg",
    link: RESERVE_LINKS.bunk,
  },
  {
    name: "Shared queen room (two guests)",
    price: "€1,950",
    unit: "per person",
    img: "/assets/double-room-far-end-surf-house.jpg",
    link: RESERVE_LINKS.sharedQueen,
  },
  {
    name: "Private queen room",
    price: "€2,550",
    unit: "per room",
    img: "/assets/double-room-far-end-surf-house-2.jpg",
    link: RESERVE_LINKS.privateQueen,
    featured: true,
  },
];

const faqs = [
  {
    q: "Do I need experience in yoga or meditation?",
    a: "No. Every practice meets you exactly where you are.",
  },
  {
    q: "Do I really need to finish the course first?",
    a: "Yes, it is highly recommended to watch the Dream Life Mapping course before the start of the retreat. Doing it beforehand is what lets us go deep in person instead of starting from scratch. It is included with the purchase of the retreat.",
  },
  {
    q: "How do I get there?",
    a: "Fly into Lisbon. Ericeira is about a 45-minute drive from the airport. We will send full travel details once you book.",
  },
  {
    q: "What if I have never surfed?",
    a: "Surf is an optional, conditions-permitting bonus, never a requirement.",
  },
  {
    q: "Do you cater to dietary needs?",
    a: "The menu is vegetarian, and we happily accommodate allergies and preferences. Just tell us.",
  },
  {
    q: "Is this a wellness retreat or a work retreat?",
    a: "Both, by design. Wellness first, so the clarity can actually land.",
  },
  {
    q: "Can I come on my own?",
    a: "Almost everyone does. You will leave with seven new friends.",
  },
];

const goodToKnow = [
  { label: "When", value: "October 5 to 11, 2026" },
  { label: "Where", value: "Ericeira, Portugal" },
  { label: "Who", value: "8 women, hosted by Charlotte and Katja" },
  {
    label: "Included",
    value:
      "6 nights, all meals, all practices and workshops, the Dream Life Mapping course, and the Ikigai",
  },
  { label: "Investment", value: "from €1,750 per person" },
  { label: "Payment", value: "paid in full to reserve your spot" },
  { label: "Getting there", value: "fly to Lisbon, around 45 minutes to Ericeira" },
];

function FaqItem({
  faq,
  isOpen,
  toggle,
  index,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  toggle: () => void;
  index: number;
}) {
  return (
    <div className="border-t border-ink/12">
      <button
        onClick={toggle}
        className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-8 cursor-pointer group"
        aria-expanded={isOpen}
      >
        <h3 className="font-display text-ink text-lg sm:text-xl lg:text-[1.4rem] leading-snug tracking-[-0.015em] group-hover:text-terracotta transition-colors">
          {faq.q}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1 text-ink/30 group-hover:text-terracotta transition-colors text-2xl leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed max-w-2xl pb-7">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EricieraRetreatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          1 · HERO — full-screen video, dark gradient
         ════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-ink overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/drone-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70"
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 text-center text-cream py-28"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-cream/85 mb-7"
          >
            Ericeira, Portugal · October 5–11, 2026 · 8 women only
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.8rem] sm:text-[4.2rem] lg:text-[5.4rem] leading-[1.0] tracking-[-0.02em] text-balance"
          >
            The Dream Life Retreat
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-[12px] sm:text-[14px] tracking-[0.42em] uppercase text-cream/80"
          >
            Dream. Map. Leap.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-sans text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            A week on the Atlantic coast to slow all the way down, get clear on
            the work that actually feels like you, and leave with a real plan to
            start building it.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-11">
            <ReserveButton dark />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          2 · THE INVITATION
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.9rem] lg:text-[3.6rem] leading-[1.05] text-ink mb-10 tracking-[-0.02em] text-balance"
          >
            Do you crave a life of more{" "}
            <span className="italic text-terracotta-dark">freedom</span>, more{" "}
            <span className="italic text-terracotta-dark">impact</span> &amp;
            more <span className="italic text-terracotta-dark">fulfillment</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-subtitle italic text-ink/70 text-xl sm:text-2xl leading-snug max-w-2xl mx-auto"
          >
            This week is dedicated to taking a leap towards the life and work
            you actually want to live.
          </motion.p>
        </div>
      </section>

      {/* full-bleed band */}
      <div className="relative w-full h-[55vh] sm:h-[70vh]">
        <Image
          src="/assets/SS_Nosara_11-02-26-221.jpg"
          alt="Women together on the coast"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ════════════════════════════════════════════════
          3 · THIS IS FOR YOU IF
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 lg:py-36 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.05] text-ink mb-12 tracking-[-0.02em] text-center"
          >
            This is for <span className="italic">you</span> if
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-6 max-w-2xl mx-auto"
          >
            {[
              <>
                On paper your life works, but your{" "}
                <span className="marker marker--terracotta">work does not feel fully like you</span>.
              </>,
              <>
                You have done the inner work and read the books, and you know
                you are <span className="marker marker--terracotta">capable of more</span>.
              </>,
              <>
                You keep overthinking a decision you can already{" "}
                <span className="marker marker--terracotta">feel in your body</span>.
              </>,
              <>
                You are tired in a way a holiday does not fix, and you want{" "}
                <span className="marker marker--terracotta">real rest and real clarity</span> in the same week.
              </>,
              <>
                You are ready to{" "}
                <span className="marker marker--terracotta">take your dreams seriously</span>, in a room of women doing the same.
              </>,
            ].map((line, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex gap-4 font-sans text-ink/80 text-base sm:text-lg leading-relaxed"
              >
                <Spiral className="w-6 h-6 text-terracotta-dark shrink-0 mt-0.5" />
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-16 max-w-2xl mx-auto text-center font-display italic text-ink/90 text-xl sm:text-2xl lg:text-[1.8rem] leading-snug"
          >
            You are not starting from zero. You are on the edge of something. You
            just need the space, and the support, to move.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4 · THE WEEK, EMBODIED — six movements
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.9rem] lg:text-[3.6rem] leading-[1.04] text-ink tracking-[-0.02em] text-balance"
          >
            The Dream Life Mapping{" "}
            <span className="italic marker marker--sage">methodology</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {movements.map((m, i) => (
            <motion.div
              key={m.verb}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className="rounded-card-lg bg-linen/35 border border-ink/8 p-8 sm:p-9"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink/35">
                0{i + 1}
              </span>
              <h3 className="font-display text-terracotta-dark text-2xl sm:text-[1.7rem] tracking-[-0.015em] mt-3 mb-3">
                {m.verb}.
              </h3>
              <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-relaxed">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ════════════════════════════════════════════════
          5 · THE SHAPE OF A DAY
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
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]"
            >
              The shape of a <span className="italic">day</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            >
              Spacious on purpose. One workshop in the morning, long open
              afternoons to rest, explore, and let it all land, and soft
              gatherings at night.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-0">
              {dayShape.map((d, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="grid grid-cols-12 gap-4 py-4 border-t border-ink/12"
                >
                  <span className="col-span-4 sm:col-span-3 font-mono text-[11px] sm:text-xs tracking-[0.12em] uppercase text-terracotta-dark pt-1">
                    {d.time}
                  </span>
                  <span className="col-span-8 sm:col-span-9 font-sans text-ink/80 text-[15px] sm:text-base leading-relaxed">
                    {d.note}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="mt-10 font-display italic text-ink/85 text-lg sm:text-xl leading-snug"
            >
              Three home-cooked meals a day. Yoga every morning. Endless ocean.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-card-lg overflow-hidden">
              <Image
                src="/assets/DSC03964.jpg"
                alt="Yoga on the terrace as the day opens"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6 · WHAT'S WOVEN INTO YOUR WEEK
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-14 sm:mb-16 tracking-[-0.02em] text-center"
          >
            What&rsquo;s woven into your <span className="italic">week</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-terracotta-dark mb-6">
                The work
              </p>
              <ul className="space-y-4">
                {wovenWork.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 font-sans text-ink/75 text-[15px] sm:text-base leading-relaxed"
                  >
                    <Spiral className="w-5 h-5 text-sage-dark shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-terracotta-dark mb-6">
                The wellness
              </p>
              <ul className="space-y-4">
                {wovenWellness.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 font-sans text-ink/75 text-[15px] sm:text-base leading-relaxed"
                  >
                    <Spiral className="w-5 h-5 text-sage-dark shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          7 · FOOD THAT'S PART OF THE RITUAL
         ════════════════════════════════════════════════ */}
      <section className="bg-[#f1ead8] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-card-lg overflow-hidden">
              <Image
                src="/assets/yoga-shot.jpg"
                alt="Slowing down and nourishing yourself through the week"
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
              className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]"
            >
              Food that&rsquo;s part of the <span className="italic">ritual</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-ink/75 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              You will be deeply cared for with three home-cooked meals a day
              from our private chef. Inspired by Portuguese cooking, every dish
              is fresh, local, and farm-to-table. The menu
              is vegetarian and built to nourish you from the inside out: bright
              breakfasts, wholesome lunches, and slow three-course dinners with
              something sweet to finish. Here, eating is connection, ritual, and
              a way of coming back to yourself.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          8 · ERICEIRA, PORTUGAL
         ════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/assets/SheFlows-24.jpg"
          alt="Ericeira, Portugal, on the Atlantic coast"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 pb-16 sm:pb-20"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-cream text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] mb-5 tracking-[-0.02em]">
              <span className="italic">Ericeira</span>, Portugal
            </h2>
            <p className="font-sans text-cream/85 text-base sm:text-lg leading-relaxed">
              A whitewashed surf town on the Atlantic coast. Slow mornings,
              clean waves, salt in the air, an easy pace. Katja lives in
              Portugal, so this is a place we know and genuinely love. It is the
              kind of place that does half the work for you. The rest, the
              perspective, the room to breathe, comes from the week itself.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════
          8b · WHERE YOU'LL STAY — Far End Surf House
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]"
          >
            Your home for the <span className="italic">week</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed"
          >
            Home base is a whitewashed surf house tucked into green hills a few
            minutes from the Ericeira coast. Sun-filled
            rooms, a big open kitchen, a rooftop terrace where we practice yoga
            and hold the workshops, a pool to cool off in, and quiet corners
            everywhere to journal, nap, and breathe. It is the kind of house
            that makes it easy to exhale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-card-lg overflow-hidden mb-5 sm:mb-6"
        >
          <Image
            src="/assets/The_Far_End_Surf_House_heropool.jpg"
            alt="The pool at the surf house"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {stayGallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
              className="relative aspect-[4/3] rounded-card overflow-hidden"
            >
              <Image src={g.src} alt={g.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          9 · YOUR GUIDES
         ════════════════════════════════════════════════ */}
      <section className="bg-[#cdd8e1] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-14 sm:mb-16 tracking-[-0.02em] text-center"
          >
            Your guides, Charlotte <span className="italic">and</span> Katja
          </motion.h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12 max-w-3xl mx-auto items-start">
            {[
              {
                src: "/assets/charlotte_founderheadshot.jpg",
                name: "Charlotte",
                pos: "object-center",
              },
              {
                src: "/assets/katja_hero.jpeg",
                name: "Katja",
                pos: "object-top",
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: i * 0.1 }}
              >
                <div className="relative aspect-[3/4] w-full rounded-card sm:rounded-card-lg overflow-hidden mb-4 sm:mb-5">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className={`object-cover ${p.pos}`}
                  />
                </div>
                <h3 className="font-display text-lg sm:text-2xl lg:text-3xl text-ink mb-1 sm:mb-2">
                  {p.name}
                </h3>
                <p className="font-mono text-[9px] sm:text-[11px] tracking-[0.18em] uppercase text-ink/50">
                  Co-founder, Season of Self
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-14 max-w-2xl mx-auto text-center space-y-5 font-sans text-ink/75 text-base sm:text-lg leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              We are the two behind Season of Self. We both rebuilt our lives
              around what actually felt true, and now we help other women do the
              same.
            </motion.p>
            <motion.p variants={fadeUp}>
              Katja holds the body of the week: the yoga, breath, and somatic
              practices that bring you back into yourself.
            </motion.p>
            <motion.p variants={fadeUp}>
              Charlotte holds the clarity: the Ikigai, the mapping, and the
              strategy that turn a feeling into a plan.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-card-lg overflow-hidden mt-16 sm:mt-20"
          >
            <Image
              src="/assets/SS_Nosara_11-02-26-242.jpg"
              alt="Charlotte and Katja on the coast"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          10 · MORE THAN A GETAWAY
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-9 tracking-[-0.02em]"
          >
            More than a <span className="italic">getaway</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="font-sans text-ink/75 text-base sm:text-lg leading-relaxed"
          >
            This is the part most retreats skip. You will not just feel good for
            a week and slide back into your old life on Monday. You complete
            Dream Life Mapping before you come, so you arrive already clear on
            the shape of it. The week is where that clarity drops out of your
            head and into your body, gets witnessed by your circle, and turns
            into something real. You leave with a direction, the first steps
            already taken, and seven women who watched you decide.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          11 · TESTIMONIAL
         ════════════════════════════════════════════════ */}
      <section className="bg-linen py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mx-auto mb-10"
          >
            <Image src="/assets/Sheila-14.jpg" alt="Sheila" fill className="object-cover" />
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="font-sans text-ink/80 text-lg sm:text-xl lg:text-[1.4rem] leading-[1.6] max-w-3xl mx-auto"
          >
            &ldquo;This retreat truly exceeded all expectations. It was such a
            special experience: a beautiful combination of slowing down,
            reconnecting with yourself, and growing stronger in who you are. I
            was able to reflect, gain new perspectives, and broaden my horizon,
            all while connecting with so many wonderful and inspiring women. The
            atmosphere felt incredibly genuine, warm, and supportive, and
            everyone felt completely comfortable, seen, and cared for from the
            very beginning. You could truly feel the passion and dedication
            behind every detail. I would book this again in a heartbeat.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-9 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55"
          >
            Sheila
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          12 · YOUR INVESTMENT
         ════════════════════════════════════════════════ */}
      <section id="investment" className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]"
          >
            Your <span className="italic">investment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed"
          >
            Six nights, three home-cooked meals a day, every practice and
            workshop, and the full Dream Life journey. Pick the room that feels
            right for you:
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 sm:gap-6 items-end">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`flex flex-col rounded-card-lg overflow-hidden border ${
                room.featured
                  ? "border-terracotta/60 shadow-lifted"
                  : "border-ink/10 shadow-soft"
              } bg-offwhite`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={room.img} alt={room.name} fill className="object-cover" />
                {room.featured && (
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase bg-terracotta text-cream px-3 py-1.5 rounded-full">
                    Most private
                  </span>
                )}
              </div>
              <div className="flex flex-col flex-1 p-7 sm:p-8">
                <h3 className="font-display text-ink text-xl sm:text-[1.4rem] leading-snug tracking-[-0.015em] mb-4 min-h-[3.2rem]">
                  {room.name}
                </h3>
                <div className="mb-7">
                  <span className="font-display text-ink text-3xl sm:text-[2.4rem] tracking-[-0.02em]">
                    {room.price}
                  </span>
                  <span className="font-sans text-ink/55 text-sm ml-2">
                    {room.unit}
                  </span>
                </div>
                <a
                  href={room.link || "#investment"}
                  {...(room.link
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`mt-auto inline-flex items-center justify-center gap-3 whitespace-nowrap font-mono text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase px-8 py-[18px] rounded-full transition-colors ${
                    room.featured
                      ? "bg-terracotta text-cream hover:bg-terracotta-dark"
                      : "bg-ink text-cream hover:bg-deep-sage"
                  }`}
                >
                  Reserve your spot
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 text-center font-sans text-ink/65 text-[15px] sm:text-base leading-relaxed max-w-2xl mx-auto"
        >
          Pay in full to reserve your spot. Your room is confirmed the moment
          you book.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-12 text-center font-display italic text-ink text-2xl sm:text-3xl leading-snug"
        >
          Only 8 spots, and they go quickly.
        </motion.p>
      </section>

      {/* ════════════════════════════════════════════════
          13 · QUESTIONS, ANSWERED
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-12 sm:mb-14 tracking-[-0.02em] text-center"
          >
            Questions, <span className="italic">answered</span>
          </motion.h2>

          <div className="border-b border-ink/12">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="mt-16 sm:mt-20 text-center"
          >
            <p className="font-display text-ink text-2xl sm:text-3xl leading-snug tracking-[-0.015em] mb-5">
              Have any questions?
            </p>
            <p className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">
              Feel free to email us or book a short call. We would love to hear
              from you.
            </p>
            <a
              href="mailto:hello@seasonofself.co?subject=The%20Dream%20Life%20Retreat%2C%20Ericeira"
              className="group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 sm:px-11 py-[18px] sm:py-[20px] rounded-full transition-colors bg-ink text-cream hover:bg-deep-sage"
            >
              hello@seasonofself.co
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          15 · GOOD TO KNOW
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85 }}
            className="font-display text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] text-ink mb-12 sm:mb-14 tracking-[-0.02em] text-center"
          >
            Good to <span className="italic">know</span>
          </motion.h2>

          <div className="rounded-card-lg border border-ink/10 bg-offwhite px-7 sm:px-10 py-3 sm:py-4">
            {goodToKnow.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-4 sm:gap-6 py-5 ${
                  i < goodToKnow.length - 1 ? "border-b border-ink/10" : ""
                }`}
              >
                <p className="col-span-12 sm:col-span-3 font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-ink/50 pt-1">
                  {item.label}
                </p>
                <p className="col-span-12 sm:col-span-9 font-sans text-ink/80 text-[15px] sm:text-base leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
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
              The Dream Life Retreat · Ericeira 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-cream/55">
            <a href="/" className="font-sans text-sm hover:text-cream transition-colors">
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
            © {new Date().getFullYear()} Season of Self LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
