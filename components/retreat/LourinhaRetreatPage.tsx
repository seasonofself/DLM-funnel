"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Carousel from "@/components/retreat/Carousel";
import ApplicationForm from "@/components/retreat/ApplicationForm";

/* ── Little spiral, used as the list bullet (Archimedean, built once) ── */
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
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d={SPIRAL_D} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };

const eur = (n: number) => "€" + n.toLocaleString("en-US");

/* ── Every CTA applies — booking is application-gated, no instant checkout ── */
function ApplyButton({
  label = "Apply for your spot",
  dark = false,
}: {
  label?: string;
  dark?: boolean;
}) {
  const cls = dark ? "bg-cream text-ink hover:bg-linen" : "bg-ink text-cream hover:bg-deep-brown";
  return (
    <a
      href="#apply"
      className={`group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 sm:px-11 py-[18px] sm:py-[20px] rounded-full transition-colors ${cls}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

/* ────────────────── content ────────────────── */

const carouselSlides = [
  { src: "/assets/SS_Nosara_11-02-26-221.jpg", alt: "Women together at the last retreat" },
  { src: "/assets/SheFlows-2.jpg", alt: "A moment from the last retreat" },
  { src: "/assets/SheFlows-24.jpg", alt: "The Atlantic coast" },
  { src: "/assets/SS_Nosara_11-02-26-242.jpg", alt: "On the coast" },
  { src: "/assets/SheFlows-6.jpg", alt: "Farm-to-table meals" },
  { src: "/assets/SS_Nosara_11-02-26-138.jpg", alt: "A quiet morning by the sea" },
  { src: "/assets/sheflows.jpeg", alt: "Scenes from the last retreat" },
];

const venueSlides = [
  { src: "/assets/The_Far_End_Surf_House_heropool.jpg", alt: "The pool at the surf house" },
  { src: "/assets/DJI_0037.jpg", alt: "The surf house from above" },
  { src: "/assets/IMG_2401-1.jpg", alt: "The big open kitchen" },
  { src: "/assets/DSC02695.jpg", alt: "The rooftop terrace set up for practice" },
  { src: "/assets/DSC03964.jpg", alt: "Yoga on the terrace" },
];

const theWork = [
  { icon: "✍️", title: "Daily workshops on dharma & purpose", desc: "A guided workshop every day to get honest about what you actually want, and what your work in the world might be." },
  { icon: "💬", title: "Group & hot-seat coaching", desc: "Live coaching in a small, intimate circle. Be seen, be guided, be cheered on." },
  { icon: "🌬️", title: "Breathwork & journaling", desc: "Guided practices to move what words cannot, and put language to what surfaces." },
];

const theWellness = [
  { icon: "🧘‍♀️", title: "Daily yoga & meditation classes", desc: "Gentle daily practice to drop in and settle before the day’s work." },
  { icon: "🏄‍♀️", title: "One surf session", desc: "A guided session with the surf coach when the waves are kind. Every level, total beginners welcome." },
  { icon: "🍫", title: "A cacao ceremony", desc: "An evening cacao ceremony to open the heart, connect, and arrive fully in the circle." },
  { icon: "💆‍♀️", title: "A 60-minute massage", desc: "Tailored to how you feel that day. One is included, with the option to add a second." },
  { icon: "🥗", title: "Three meals a day", desc: "Fresh, vegetarian, farm-to-table meals, lovingly prepared by the private chef." },
  { icon: "🎁", title: "A welcome gift", desc: "A goodie bag full of little surprises, waiting for you when you arrive." },
];

const dayShape = [
  { time: "7:30", note: "optional morning meditation" },
  { time: "8:00", note: "yoga as the day opens" },
  { time: "9:00", note: "a slow, nourishing breakfast" },
  { time: "Late morning", note: "the day’s workshop" },
  { time: "1:00", note: "lunch, then a long, open afternoon to surf, hike the cliffs, swim, journal, nap, or book a massage" },
  { time: "Evening", note: "an optional sunset sit, dinner, and a fire, a cacao ceremony, or a circle" },
];

/* Private shown first as the anchor, so Shared reads as the smart buy.
   `was` is the original price, struck through beside the last-spots price. */
const rooms = [
  { name: "Private room", was: 2950, price: 2490, desc: "Your own private queen room. The deepest rest, entirely your own.", img: "/assets/double-room-far-end-surf-house-2.jpg", featured: true },
  { name: "Shared room", was: 2400, price: 1990, desc: "A queen, shared with a friend. The smart buy, come together.", img: "/assets/double-room-far-end-surf-house.jpg" },
  { name: "Bunk bed", was: 2200, price: 1850, desc: "A single bed in a shared room. The bring-a-friend option.", img: "/assets/farendsurfhouse-kerttukruusla_107.jpg" },
  { name: "Glamping · private", was: 2500, price: 2090, desc: "Your own glamping unit, sole occupancy. Outdoors, under the stars.", img: "/assets/glamping-beds-far-end-surf-house-7.jpg" },
  { name: "Glamping · shared", was: 1950, price: 1650, desc: "A romantic double or twin glamping setup. Linens and towels included. A cosy October hideaway.", img: "/assets/farendsurfhouse-kerttukruusla_18-1024x1536.jpg" },
];

const steps = [
  { n: "01", title: "Apply", desc: "Submit the short application below. It only takes a few minutes." },
  { n: "02", title: "Connect", desc: "A short video call with Katja to talk through the retreat, your goals, and what’s drawing you here." },
  { n: "03", title: "Invite", desc: "If it feels like a fit, you’ll be invited to book your spot." },
  { n: "04", title: "Book", desc: "You’ll receive your booking link to choose your room. Your spot is confirmed with full payment at booking." },
];

const faqs = [
  { q: "Do I need experience in yoga or meditation?", a: "No, not at all. Whether you’ve never rolled out a mat or you practice every morning, every session meets you exactly where you are. This is a safe space to slow down and try new tools, with zero pressure to get anything “right.”" },
  { q: "What if I have never surfed?", a: "That’s completely okay. If the conditions are right and you feel called to paddle out, the surf coach will guide you every step of the way, so you feel comfortable and safe even on your very first wave. And if you’d rather stay on the sand, that’s just as welcome. Surf is always a bonus, never a must." },
  { q: "Do you cater to dietary needs?", a: "Absolutely. The menu is fresh, nourishing, and vegetarian, and I’m so happy to work around any allergies or preferences you have. Just let me know when you book, and I’ll take care of the rest." },
  { q: "Is it a wellness or work retreat?", a: "A little of both, woven together on purpose. The somatic and restful side isn’t separate from the work, it’s what makes the work possible. We soften and settle first, so the clarity has somewhere to take root." },
  { q: "How does payment work?", a: "Your spot is confirmed with full payment at booking. These are the last spots for October, priced for late booking, so there’s no deposit split this time around." },
];

const goodToKnow = [
  { label: "When", value: "October 5 to 11, 2026" },
  { label: "Where", value: "Lourinhã, Portugal" },
  { label: "Who", value: "6 to 10 women, hosted by Katja" },
  { label: "Included", value: "6 nights, three meals a day, all practices and workshops, surf, a cacao ceremony, and a massage" },
  { label: "Investment", value: "from €1,650 per person, last spots pricing" },
  { label: "Booking", value: "application-based, confirmed with full payment at booking" },
  { label: "Getting there", value: "fly to Lisbon, around an hour up the coast to Lourinhã" },
];

/* Sheila first, then Kristin. TODO(charlotte): drop kristin.jpg into
   public/assets and it will replace the monogram automatically. */
const testimonials = [
  {
    name: "Sheila",
    img: "/assets/Sheila-14.jpg",
    quote:
      "This retreat truly exceeded all expectations. It was such a special experience: a beautiful combination of slowing down, reconnecting with yourself, and growing stronger in who you are. I was able to reflect, gain new perspectives, and broaden my horizon, all while connecting with so many wonderful and inspiring women. The atmosphere throughout the entire experience felt incredibly genuine, warm, and supportive, and everyone felt completely comfortable, seen, and cared for from the very beginning. You could truly feel the passion and dedication behind every detail. I would book this again in a heartbeat.",
  },
  {
    name: "Kristin",
    img: "/assets/kristin-1.jpeg",
    quote:
      "This week felt like a gentle journey home, back to myself. The small group, the warm, intimate atmosphere, and the lovingly prepared farm-to-table meals created a real sense of belonging. I left with deep gratitude for my body as my home, and the feeling of having arrived a little closer to myself again, a beautiful gift for any woman longing to slow down, connect with like-minded women, and create space for what truly matters.",
  },
];

/* Small round avatar that falls back to a monogram if the photo is missing. */
function TestiAvatar({ t }: { t: { name: string; img?: string } }) {
  const [failed, setFailed] = useState(false);
  if (t.img && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={t.img}
        alt={t.name}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-sage/30 text-ink/60 font-display text-3xl">
      {t.name.charAt(0)}
    </div>
  );
}

function FaqItem({ faq, isOpen, toggle }: { faq: { q: string; a: string }; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-t border-ink/12">
      <button onClick={toggle} className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-8 cursor-pointer group" aria-expanded={isOpen}>
        <h3 className="font-display text-ink text-lg sm:text-xl lg:text-[1.4rem] leading-snug tracking-[-0.015em] group-hover:text-terracotta transition-colors">
          {faq.q}
        </h3>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mt-1 text-ink/30 group-hover:text-terracotta transition-colors text-2xl leading-none">
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed max-w-2xl pb-7">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LourinhaRetreatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testiIndex, setTestiIndex] = useState(0);
  /* gently auto-advance the testimonials */
  useEffect(() => {
    const id = setInterval(
      () => setTestiIndex((i) => (i + 1) % testimonials.length),
      9000
    );
    return () => clearInterval(id);
  }, []);
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════ 1 · HERO ════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-ink overflow-hidden">
        <video autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/drone-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" aria-hidden="true" />
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 text-center text-cream py-28">
          <motion.p variants={fadeUp} className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-cream/85 mb-7">
            Lourinhã, Portugal · October 5–11, 2026 · 6–10 women only
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-[2.8rem] sm:text-[4.2rem] lg:text-[5.4rem] leading-[1.0] tracking-[-0.02em] text-balance">
            A week for yourself
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 font-sans text-cream/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Six days on the Atlantic coast to slow all the way down, feel true sisterhood, and leave knowing anything is possible, with the clarity and guidance to go after what’s meant for you.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-11">
            <ApplyButton dark />
          </motion.div>
        </motion.div>
      </section>

      {/* ════ 2 · THIS IS FOR YOU IF ════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 lg:py-36 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.05] text-ink mb-12 tracking-[-0.02em] text-center">
            This is for <span className="italic">you</span> if
          </motion.h2>
          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="space-y-7 max-w-2xl mx-auto">
            {[
              <>Your life looks good on paper, but lately you feel a deep longing for <span className="marker marker--terracotta">more</span>: more connection, more community, more freedom. And you don’t yet know what it could be or where to start.</>,
              <>You’ve been living on autopilot and crave a <span className="marker marker--terracotta">real pause</span>: time to disconnect, immerse yourself in nature and community, and put the focus back on you.</>,
              <>You’ve been hustling and grinding for so long that a week just for yourself feels like a gift you keep putting off. This is you <span className="marker marker--terracotta">finally giving it to yourself</span>.</>,
              <>You feel a pull to <span className="marker marker--terracotta">dream bigger again</span>, to step outside the life you’ve carefully built. Not because anything is wrong, but because you can feel there’s so much more to experience, to feel the magic again, and to create something of your own.</>,
              <>You want to <span className="marker marker--terracotta">reconnect with your intuition</span> and get clear on what you truly want in life. You’re open to learning spiritual tools like breathwork, journaling, yoga and meditation that you can take home with you, so you feel grounded when life gets busy again after the retreat.</>,
              <>You’re ready to <span className="marker marker--terracotta">take your dreams seriously</span>, in a room of women doing the same.</>,
            ].map((line, i) => (
              <motion.li key={i} variants={fadeUp} className="flex gap-4 font-sans text-ink/80 text-base sm:text-lg leading-relaxed">
                <Spiral className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, delay: 0.1 }} className="text-center mt-14">
            <ApplyButton />
          </motion.div>
        </div>
      </section>

      {/* ════ 3 · CAROUSEL ════ */}
      <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <Carousel slides={carouselSlides} />
        </div>
      </section>

      {/* ════ 4 · EVERYTHING INCLUDED ════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-14 sm:mb-16 tracking-[-0.02em] text-center">
            Everything that’s <span className="italic">included</span>
          </motion.h2>

          {/* The Wellness — lead with it */}
          <div className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-terracotta mb-2">The Wellness</p>
            <p className="font-display italic text-ink/80 text-lg sm:text-xl mb-8">First and foremost, this is a true wellness retreat.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {theWellness.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} className="rounded-card-lg bg-[#dde2d2]/50 border border-ink/8 p-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-4 shadow-soft" aria-hidden="true"><Spiral className="w-6 h-6 text-terracotta" /></span>
                  <h3 className="font-display text-ink text-lg sm:text-xl tracking-[-0.015em] mb-2">{item.title}</h3>
                  <p className="font-sans text-ink/70 text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Work */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-terracotta mb-8">The Work</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {theWork.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} className="rounded-card-lg bg-linen/40 border border-ink/8 p-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream mb-4 shadow-soft" aria-hidden="true"><Spiral className="w-6 h-6 text-terracotta" /></span>
                  <h3 className="font-display text-ink text-lg sm:text-xl tracking-[-0.015em] mb-2">{item.title}</h3>
                  <p className="font-sans text-ink/70 text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ 5 · ADD-ON · PHOTOSHOOT WITH KATJA ════
          TODO(charlotte): swap in Katja's own shoot images (the grid she sent)
          and drop the real price into the microline below. */}
      <section className="bg-[#cdd8e1] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-card-lg overflow-hidden">
              <Image src="/assets/SS_Nosara_11-02-26-222.jpg" alt="Golden hour on the coast" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="lg:col-span-7 order-1 lg:order-2">
            <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[0.24em] uppercase text-terracotta mb-6">
              Optional add-on
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]">
              A self-love <span className="italic marker marker--sage">photoshoot</span> with Katja
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-ink/75 text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
              During the retreat you can book a photoshoot with me. Choose a self-love session that captures your essence, truly alive, your beauty inside and out.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-ink/75 text-base sm:text-lg leading-relaxed max-w-xl">
              Or personal branding images for your next chapter, shot in the golden light of the Portuguese coast.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-8 font-mono text-[11px] tracking-[0.18em] uppercase text-ink/50">
              Booked separately during the week · pricing and session options shared once your spot is confirmed
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════ 6 · WHAT A DAY LOOKS LIKE ════ */}
      <section className="bg-[#f1ead8] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="lg:col-span-6">
            <motion.h2 variants={fadeUp} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]">
              What a day <span className="italic">looks like</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Spacious on purpose. One workshop in the morning, long open afternoons to rest, explore, and let it all land, and soft gatherings at night.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-0">
              {dayShape.map((d, i) => (
                <motion.li key={i} variants={fadeUp} className="grid grid-cols-12 gap-4 py-4 border-t border-ink/12">
                  <span className="col-span-4 sm:col-span-3 font-mono text-[11px] sm:text-xs tracking-[0.12em] uppercase text-terracotta pt-1">{d.time}</span>
                  <span className="col-span-8 sm:col-span-9 font-sans text-ink/80 text-[15px] sm:text-base leading-relaxed">{d.note}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }} className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-card-lg overflow-hidden">
              <Image src="/assets/DSC03964.jpg" alt="Yoga on the terrace as the day opens" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════ 7 · LOURINHÃ ════ */}
      <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden">
        <Image src="/assets/SheFlows-24.jpg" alt="The Atlantic coast in Portugal" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }} className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 pb-16 sm:pb-20">
          <div className="max-w-xl">
            <h2 className="font-display text-cream text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.02] mb-5 tracking-[-0.02em]"><span className="italic">Lourinhã</span>, Portugal</h2>
            <p className="font-sans text-cream/85 text-base sm:text-lg leading-relaxed">
              A quiet stretch of the Atlantic coast, an hour north of Lisbon. Whitewashed streets, wide open beaches, cliffs to walk at sunset, and hardly a crowd in October. I live in Portugal, so this is a coast I know and genuinely love. It is the kind of place that does half the work for you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ════ 8 · YOUR HOME ════ */}
      <section className="bg-cream pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]">
            Your home for the <span className="italic">week</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85, delay: 0.06 }} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            A whitewashed surf house tucked into green hills a few minutes from the coast. Sun-filled rooms, a big open kitchen, a rooftop terrace for yoga and workshops, a pool to cool off in, and quiet corners everywhere to journal, nap, and breathe.
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Carousel slides={venueSlides} aspect="aspect-[4/3] sm:aspect-[16/9]" />
        </div>
      </section>

      {/* ════ 9 · YOUR GUIDE ════ */}
      <section className="bg-[#cdd8e1] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-14 sm:mb-16 tracking-[-0.02em] text-center">
            Your guide, <span className="italic">Katja</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="max-w-sm mx-auto text-center">
            <div className="relative aspect-[3/4] w-full rounded-card sm:rounded-card-lg overflow-hidden mb-4 sm:mb-5">
              <Image src="/assets/katja_hero.jpeg" alt="Katja" fill className="object-cover object-top" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-ink mb-1 sm:mb-2">Katja</h3>
            <p className="font-mono text-[9px] sm:text-[11px] tracking-[0.18em] uppercase text-ink/50">Co-founder, Season of Self</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="mt-14 max-w-2xl mx-auto text-center space-y-5 font-sans text-ink/75 text-base sm:text-lg leading-relaxed">
            <motion.p variants={fadeUp}>I rebuilt my life around what actually felt true, and now I help other women do the same.</motion.p>
            <motion.p variants={fadeUp}>I hold the whole week: the yoga, breath, and somatic practices that bring you back into your body, the daily workshops on dharma and purpose, and the coaching that turns a feeling into a first real step.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════ 10 · FOOD (lighter, moved lower) ════ */}
      <section className="bg-cream py-16 sm:py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="sm:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-card-lg overflow-hidden">
              <Image src="/assets/SheFlows-6.jpg" alt="Farm-to-table meals" fill className="object-cover" />
            </div>
          </div>
          <div className="sm:col-span-7">
            <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] leading-[1.06] text-ink mb-4 tracking-[-0.02em]">Food as part of the <span className="italic">ritual</span></h2>
            <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-relaxed">
              Three home-cooked, farm-to-table meals a day from the private chef. Fresh, local, and vegetarian, built to nourish you from the inside out. Here, eating is connection and a way of coming back to yourself.
            </p>
          </div>
        </div>
      </section>

      {/* ════ 11 · TESTIMONIALS (carousel) ════ */}
      <section className="bg-linen py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink/45 mb-10">
            Feedback from previous retreats
          </p>
          <div className="relative min-h-[360px] sm:min-h-[320px]">
            <motion.div
              key={testiIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-7">
                <TestiAvatar t={testimonials[testiIndex]} />
              </div>
              <blockquote className="font-sans text-ink/85 text-base sm:text-lg lg:text-[1.35rem] leading-[1.6] max-w-2xl mx-auto">
                &ldquo;{testimonials[testiIndex].quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/55">
                {testimonials[testiIndex].name}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setTestiIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-ink/20 text-ink/60 hover:bg-ink hover:text-cream transition-colors text-lg leading-none"
            >
              &#8249;
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setTestiIndex(i)}
                  className={`h-2 rounded-full transition-all ${testiIndex === i ? "w-6 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/40"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setTestiIndex((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-ink/20 text-ink/60 hover:bg-ink hover:text-cream transition-colors text-lg leading-none"
            >
              &#8250;
            </button>
          </div>

          <p className="mt-12 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-terracotta">
            ✦ Only the last spots remain for October 2026
          </p>
        </div>
      </section>

      {/* ════ 12 · ACCOMMODATION & LAST SPOTS PRICING ════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[10px] tracking-[0.24em] uppercase text-terracotta mb-6">
            Last spots pricing
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]">
            Choose your <span className="italic">room</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85, delay: 0.06 }} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
            Six nights, three home-cooked meals a day, every practice and workshop, surf, a cacao ceremony, and a massage. These are the last spots for October, priced for late booking. Your spot is confirmed with full payment at booking.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {rooms.map((room, i) => (
            <motion.div key={room.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: (i % 3) * 0.06 }} className={`flex flex-col rounded-card-lg overflow-hidden border ${room.featured ? "border-terracotta/60 shadow-lifted" : "border-ink/10 shadow-soft"} bg-offwhite`}>
              <div className="relative aspect-[4/3] w-full">
                <Image src={room.img} alt={room.name} fill className="object-cover" />
                {room.featured && (
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase bg-terracotta text-cream px-3 py-1.5 rounded-full">Most private</span>
                )}
              </div>
              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-display text-ink text-xl sm:text-[1.4rem] leading-snug tracking-[-0.015em] mb-2">{room.name}</h3>
                <div className="mb-3 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-sans text-ink/40 text-lg line-through decoration-ink/40">{eur(room.was)}</span>
                  <span className="font-display text-ink text-3xl sm:text-[2.2rem] tracking-[-0.02em]">{eur(room.price)}</span>
                  <span className="font-sans text-ink/55 text-sm">per person</span>
                </div>
                <p className="font-sans text-ink/65 text-[14px] leading-relaxed mb-7">{room.desc}</p>
                <a href="#apply" className={`mt-auto inline-flex items-center justify-center gap-3 font-mono text-[12px] font-medium tracking-[0.2em] uppercase px-8 py-[16px] rounded-full transition-colors ${room.featured ? "bg-terracotta text-cream hover:bg-deep-brown" : "bg-ink text-cream hover:bg-deep-brown"}`}>
                  Apply
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center font-display italic text-ink text-2xl sm:text-3xl leading-snug">Only 6 to 10 spots, and they go quickly.</p>
      </section>

      {/* ════ 13 · HOW IT WORKS ════ */}
      <section className="bg-[#dde2d2] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-7 tracking-[-0.02em]">
              How it <span className="italic">works</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85, delay: 0.06 }} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
              Spots are by application. I keep this to a small group of 6 to 10 women and meet each of you first. It’s how I protect what makes it special: a small, safe circle where real sisterhood can happen, and everyone feels seen from the moment they arrive.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.55, delay: i * 0.06 }} className="rounded-card-lg bg-cream/70 border border-ink/8 p-6 sm:p-7">
                <span className="font-mono text-[11px] tracking-[0.2em] text-terracotta">{s.n}</span>
                <h3 className="font-display text-ink text-xl sm:text-[1.4rem] tracking-[-0.015em] mt-2 mb-2">{s.title}</h3>
                <p className="font-sans text-ink/70 text-[15px] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 14 · APPLICATION FORM ════ */}
      <section id="apply" className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-6 tracking-[-0.02em]">
              Apply for your <span className="italic">spot</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85, delay: 0.06 }} className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed">
              Tell me a little about you. I read every application and will be in touch within 48 hours to find a time to connect.
            </motion.p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* ════ 15 · FAQ ════ */}
      <section className="bg-[#f1ead8] py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] leading-[1.04] text-ink mb-12 sm:mb-14 tracking-[-0.02em] text-center">
            Questions, <span className="italic">answered</span>
          </motion.h2>
          <div className="border-b border-ink/12">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} isOpen={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7 }} className="mt-16 sm:mt-20 text-center">
            <p className="font-display text-ink text-2xl sm:text-3xl leading-snug tracking-[-0.015em] mb-5">Have any questions?</p>
            <p className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">Feel free to email me or book a short call. I would love to hear from you.</p>
            <a href="mailto:hello@seasonofself.co?subject=Season%20of%20Self%20%C2%B7%20Lourinh%C3%A3" className="group inline-flex items-center justify-center gap-3 font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 sm:px-11 py-[18px] sm:py-[20px] rounded-full bg-ink text-cream hover:bg-deep-brown transition-colors">
              hello@seasonofself.co
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════ 16 · GOOD TO KNOW ════ */}
      <section className="bg-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.85 }} className="font-display text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.04] text-ink mb-12 sm:mb-14 tracking-[-0.02em] text-center">
            Good to <span className="italic">know</span>
          </motion.h2>
          <div className="rounded-card-lg border border-ink/10 bg-offwhite px-7 sm:px-10 py-3 sm:py-4">
            {goodToKnow.map((item, i) => (
              <div key={i} className={`grid grid-cols-12 gap-4 sm:gap-6 py-5 ${i < goodToKnow.length - 1 ? "border-b border-ink/10" : ""}`}>
                <p className="col-span-12 sm:col-span-3 font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-ink/50 pt-1">{item.label}</p>
                <p className="col-span-12 sm:col-span-9 font-sans text-ink/80 text-[15px] sm:text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ApplyButton />
          </div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer className="bg-ink py-12 sm:py-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <Image src="/assets/green_logo.png" alt="Season of Self" width={200} height={200} unoptimized className="h-7 w-auto mb-3 brightness-[10]" />
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream/45">Season of Self · Lourinhã 2026</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-cream/55">
            <a href="/" className="font-sans text-sm hover:text-cream transition-colors">Home</a>
            <a href="/cohort" className="font-sans text-sm hover:text-cream transition-colors">The Season</a>
            <a href="/about" className="font-sans text-sm hover:text-cream transition-colors">About</a>
            <a href="/privacy-policy" className="font-sans text-sm hover:text-cream transition-colors">Privacy</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-cream/10">
          <p className="font-sans text-xs text-cream/30">© {new Date().getFullYear()} Season of Self LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
