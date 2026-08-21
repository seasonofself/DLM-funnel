"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engraving from "@/components/ui/Engraving";
import {
  season,
  hero,
  letter,
  mirror,
  premise,
  movements,
  receive,
  promise,
  forYou,
  notForYou,
  guides,
  guidesClosingLine,
  tuition,
  faqs,
  finalCall,
  applyForm,
} from "@/content/season";

/* Section-entry reveal: fade + 16px rise, 400ms, staggered, once.
   MotionConfig reducedMotion="user" disables the rise for visitors
   with prefers-reduced-motion. Paper stirring, not an app. */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* Rotating card tints, getoffline-style: muted color blocks from the
   brand palette (pale sage · pale blue · linen wash · terracotta wash).
   Ink text on all of them — the color lives in the surfaces & symbols. */
const TINTS = [
  "bg-[#DDE2D2]",
  "bg-[#CDD8E1]",
  "bg-[#E7DFC5]",
  "bg-[#EAD9C8]",
];

function ApplyButton({
  children,
  accent = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <a
      href={season.applyAnchor}
      className={`btn ${accent ? "btn-accent" : "btn-outline"} ${className}`}
    >
      {children}
    </a>
  );
}

/* Tiny uppercase category label, Offline-style, top-left of cards */
function CardLabel({ children }: { children: React.ReactNode }) {
  return <p className="card-label mb-5">{children}</p>;
}

export default function CohortPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    // Tag in Kit, then send her straight to the application. The
    // redirect happens regardless so the form never feels broken.
    try {
      await fetch("/api/kit-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, tag: applyForm.kitTag }),
      });
    } catch (err) {
      console.error("Application signup error:", err);
    }
    // Carry name & email to the /apply form (sessionStorage, never URL
    // params) so she doesn't type them twice.
    try {
      sessionStorage.setItem(
        "sos-applicant",
        JSON.stringify({ firstName, email })
      );
    } catch {
      /* prefill is a nicety, never a requirement */
    }
    router.push(applyForm.redirect);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-cream">
        <Header banner={false} />

        {/* ── banner ─────────────────────────────────────── */}
        <a
          href={season.applyAnchor}
          className="block bg-ink text-cream text-center py-2.5 px-4 font-sans text-xs sm:text-[13px] tracking-[0.06em] hover:bg-sage-dark transition-colors"
        >
          ✦ {season.banner}
        </a>

        {/* ══════════════════════════════════════════════════
            HERO — golden hour, boards under the palms.
            Art-directed crops: cinematic band on desktop with
            the copy over the dark palms at right; tall crop on
            mobile with the copy anchored over the sand below.
           ══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-ink">
          {/* desktop crop */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/assets/season-hero-desktop.jpg"
              alt="Charlotte and Katja carrying longboards at golden hour in Nosara"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-ink/70 via-ink/25 to-transparent" />
          </div>
          {/* mobile crop */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/assets/season-hero-mobile.jpg"
              alt="Charlotte and Katja carrying longboards at golden hour in Nosara"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/15" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 min-h-[86svh] flex flex-col justify-end md:justify-center md:items-end pb-12 sm:pb-16 md:pb-0 pt-24"
          >
            <div className="max-w-xl">
              <motion.p
                variants={fadeUp}
                className="font-sans text-[11px] sm:text-xs font-medium tracking-[0.1em] uppercase text-cream/90 mb-6"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="font-display lowercase text-[2.3rem] sm:text-[3.1rem] lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.12] text-cream mb-9 tracking-[-0.01em]"
              >
                {hero.headline}
              </motion.h1>

              <motion.div variants={fadeUp} className="mb-5">
                <ApplyButton accent className="w-full sm:w-auto">
                  {hero.cta}
                </ApplyButton>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-cream/90"
              >
                {hero.microline}
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            THE OPENING LETTER
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="group card-editorial bg-[#DDE2D2] p-8 sm:p-12 lg:p-14"
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                <CardLabel>a letter from us</CardLabel>
                <Engraving
                  motif="spiral"
                  className="w-14 sm:w-16 text-sage-dark engraving -mt-2"
                />
              </div>

              <h2 className="font-display lowercase text-[1.9rem] sm:text-[2.4rem] leading-[1.15] text-ink mb-10">
                {letter.heading}
              </h2>

              <div className="space-y-5 font-sans text-ink/75 text-base sm:text-[17px] leading-[1.7]">
                {letter.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="mt-10">
                <p className="font-display italic text-xl text-ink">
                  {letter.signature}
                </p>
                <p className="card-label mt-1">{letter.signatureLine}</p>
              </div>

              <div className="mt-10">
                <ApplyButton>{letter.cta}</ApplyButton>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            IS THIS YOU? — pale blue band
           ══════════════════════════════════════════════════ */}
        <section className="bg-[#CDD8E1] py-20 sm:py-28 px-6 sm:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-14"
            >
              {mirror.heading}
            </motion.h2>

            <div className="space-y-6 mb-14">
              {mirror.quotes.map((line) => (
                <motion.p
                  key={line}
                  variants={fadeUp}
                  className="font-display text-ink text-xl sm:text-2xl lg:text-[1.7rem] leading-[1.45] text-center"
                >
                  &ldquo;{line}&rdquo;
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 font-sans text-ink/75 text-base sm:text-[17px] leading-[1.7] max-w-2xl mx-auto"
            >
              <p>{mirror.paragraphs[0]}</p>
              <p>{mirror.paragraphs[1]}</p>
              <p>
                You have a notes app full of ideas. The retreat. The creative
                studio. The consulting thing. Maybe you want to serve and help
                other people. You are just craving work that actually feels
                meaningful and impactful. But then self-doubt creeps in:{" "}
                <em className="font-display">{mirror.italicFragment}</em>
              </p>
              <p>{mirror.paragraphs[3]}</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            THE PREMISE — quiet, body, vision, plan
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={fadeUp} className="card-label text-center mb-6">
              the premise
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] leading-[1.08] text-ink mb-12 max-w-3xl mx-auto"
            >
              {premise.heading}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-6 font-sans text-ink/75 text-base sm:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-16"
            >
              <p>{premise.intro}</p>
              {premise.blocks.map((b) => (
                <p key={b.lead}>
                  <strong className="text-ink font-medium">{b.lead}</strong>{" "}
                  {b.body}
                </p>
              ))}
              <p>{premise.orderIntro}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-14">
              {premise.order.map((step, i) => (
                <motion.div
                  key={step.lead}
                  variants={fadeUp}
                  className={`group card-editorial ${TINTS[i % TINTS.length]} p-7 sm:p-9`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <CardLabel>{`0${i + 1}`}</CardLabel>
                    <Engraving
                      motif={step.motif}
                      className="w-14 sm:w-16 text-ink/60 engraving"
                    />
                  </div>
                  <h3 className="font-display lowercase text-2xl sm:text-[1.7rem] text-ink mb-4">
                    {step.lead}
                  </h3>
                  <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-[1.7]">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="relative aspect-[16/10] w-full max-w-3xl mx-auto rounded-[8px] overflow-hidden mb-14"
            >
              <Image
                src="/assets/SheFlows-8.jpg"
                alt="Katja leading a somatic sound practice"
                fill
                sizes="(max-width: 832px) 100vw, 768px"
                className="object-cover"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-center font-display text-xl sm:text-2xl text-ink leading-[1.5] max-w-2xl mx-auto"
            >
              {premise.close}
            </motion.p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            THE FOUR MOVEMENTS
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={fadeUp} className="card-label text-center mb-6">
              the curriculum
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-12"
            >
              {movements.heading}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="relative aspect-[16/10] w-full rounded-[8px] overflow-hidden mb-12"
            >
              <Image
                src="/assets/SS_Nosara_11-03-26-67.jpg"
                alt="Charlotte and Katja mapping the Season's curriculum"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-5">
              {movements.items.map((mv, i) => (
                <motion.div
                  key={mv.weeks}
                  variants={fadeUp}
                  className={`group card-editorial ${TINTS[i % TINTS.length]} p-7 sm:p-10 sm:flex sm:gap-10 items-start`}
                >
                  <div className="sm:w-40 shrink-0 mb-5 sm:mb-0">
                    <p className="card-label">{mv.weeks}</p>
                    <Engraving
                      motif={mv.motif}
                      className="w-16 text-ink/60 engraving mt-4 hidden sm:block"
                    />
                  </div>
                  <div>
                    <h3 className="font-display lowercase text-2xl sm:text-[1.8rem] text-ink mb-3">
                      {mv.title}
                    </h3>
                    <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-[1.7] mb-4">
                      {mv.body}
                    </p>
                    <p className="font-display italic text-ink/80 text-base sm:text-lg">
                      {mv.closing}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHAT YOU RECEIVE — pale sage band, cream tiles
           ══════════════════════════════════════════════════ */}
        <section className="bg-[#DDE2D2] py-20 sm:py-28 px-6 sm:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-16"
            >
              {receive.heading}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
              {receive.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-editorial card-editorial--filled p-7 sm:p-8 flex flex-col"
                >
                  <CardLabel>{`0${i + 1}`}</CardLabel>
                  <h3 className="font-display lowercase text-xl sm:text-[1.4rem] leading-snug text-ink mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-ink/70 text-[15px] leading-[1.7]">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <ApplyButton accent>apply for the autumn season</ApplyButton>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            THE PROMISE — you arrive / you leave
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.p variants={fadeUp} className="card-label text-center mb-14">
              the promise
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
              <motion.div
                variants={fadeUp}
                className="card-editorial bg-[#CDD8E1] p-8 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4 mb-7">
                  <h3 className="font-display lowercase text-2xl text-ink">
                    {promise.arriveLabel}
                  </h3>
                  <Engraving motif="crescent" className="w-11 text-ink/55" />
                </div>
                <ul className="space-y-3">
                  {promise.arrive.map((line) => (
                    <li
                      key={line}
                      className="font-sans text-ink/65 text-[15px] sm:text-base leading-[1.6] flex gap-3"
                    >
                      <span aria-hidden="true" className="text-ink/35">
                        ·
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="card-editorial p-8 sm:p-10 bg-sage/50"
              >
                <div className="flex items-start justify-between gap-4 mb-7">
                  <h3 className="font-display lowercase text-2xl text-ink">
                    {promise.leaveLabel}
                  </h3>
                  <Engraving motif="sun" className="w-12 text-sage-dark" />
                </div>
                <ul className="space-y-3">
                  {promise.leave.map((line, i) => (
                    <li
                      key={line}
                      className="font-sans text-ink/80 text-[15px] sm:text-base leading-[1.6] flex gap-3"
                    >
                      <span aria-hidden="true" className="text-ink/45">
                        ·
                      </span>
                      {i === promise.leave.length - 1 ? (
                        <span>
                          decided on the direction that&rsquo;s yours,{" "}
                          <em className="font-display">
                            already taking the first real steps toward it
                          </em>
                        </span>
                      ) : (
                        line
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            FOR YOU / NOT FOR YOU
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-14"
            >
              this is for you if
            </motion.h2>

            <div className="space-y-0 mb-20">
              {forYou.map((line, i) => (
                <motion.div key={line} variants={fadeUp}>
                  <div className="flex gap-5 py-4">
                    <span className="card-label pt-1 shrink-0 w-8">{`0${
                      i + 1
                    }`}</span>
                    <p className="font-sans text-ink/80 text-base sm:text-[17px] leading-[1.65]">
                      {line}
                    </p>
                  </div>
                  {i < forYou.length - 1 && (
                    <div className="border-t border-ink/10" aria-hidden="true" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="card-editorial p-8 sm:p-10">
              <CardLabel>this is not for you if</CardLabel>
              <ul className="space-y-4">
                {notForYou.map((line) => (
                  <li
                    key={line.slice(0, 24)}
                    className="font-sans text-ink/65 text-[15px] sm:text-base leading-[1.65] flex gap-3"
                  >
                    <span aria-hidden="true" className="text-ink/35">
                      ·
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            FULL-BLEED — the life we designed
           ══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/SS_Nosara_11-02-26-222.jpg"
              alt="Charlotte and Katja on the beach with surfboards"
              fill
              sizes="100vw"
              className="object-cover object-[50%_52%]"
            />
          </div>
          <div className="absolute inset-0 bg-ink/45" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-28 sm:py-40 min-h-[50svh] flex flex-col justify-center text-center"
          >
            <motion.p
              variants={fadeUp}
              className="font-display italic text-cream text-2xl sm:text-4xl lg:text-[2.6rem] leading-snug"
            >
              {guidesClosingLine}
            </motion.p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            MEET YOUR GUIDES
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-16 sm:mb-20"
            >
              meet your guides
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {guides.map((g) => (
                <motion.div
                  key={g.name}
                  variants={fadeUp}
                  className="card-editorial card-editorial--filled p-7 sm:p-9"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[6px] mb-8">
                    <Image
                      src={g.image}
                      alt={g.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display lowercase text-3xl text-ink mb-2">
                    {g.name}
                  </h3>
                  <p className="card-label mb-6 normal-case tracking-[0.04em]">
                    {g.credentials}
                  </p>
                  <div className="space-y-4 font-sans text-ink/70 text-[15px] sm:text-base leading-[1.7]">
                    {g.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            TUITION
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="group card-editorial bg-[#E7DFC5] p-10 sm:p-14 text-center"
            >
              <CardLabel>tuition</CardLabel>
              <h2 className="font-display lowercase text-[2rem] sm:text-[2.6rem] text-ink mb-8">
                {tuition.heading}
              </h2>
              <div className="flex justify-center mb-8">
                <Engraving motif="shell" className="w-24 text-terracotta engraving" />
              </div>
              <p className="font-display text-6xl sm:text-7xl text-ink mb-2">
                {tuition.price}
              </p>
              <p className="font-sans text-ink/70 text-base mb-8">
                {tuition.plan}
              </p>
              <p className="font-sans text-ink/70 text-[15px] sm:text-base leading-[1.7] mb-10">
                {tuition.note}
              </p>
              <ApplyButton accent className="w-full sm:w-auto">
                apply for the autumn season
              </ApplyButton>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ
           ══════════════════════════════════════════════════ */}
        <section className="bg-cream py-20 sm:py-28 px-6 sm:px-10 border-t border-ink/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.05] text-ink mb-14"
            >
              questions, answered
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  className="card-editorial card-editorial--filled overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left hover:bg-ink/[0.03] transition-colors"
                  >
                    <span className="font-display lowercase text-lg sm:text-xl text-ink leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-terracotta text-2xl shrink-0 leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 sm:px-7 pb-7 font-sans text-ink/70 leading-[1.7] text-[15px]">
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

        {/* ══════════════════════════════════════════════════
            FINAL CALL — photo, dark overlay
           ══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24 sm:py-32 px-6 sm:px-10">
          <div className="absolute inset-0">
            <Image
              src="/assets/founders_vibing.jpg"
              alt="Charlotte and Katja"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-ink/65" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <Engraving
                motif="starburst"
                className="w-16 text-linen engraving-drift"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display lowercase text-[2rem] sm:text-[2.8rem] leading-[1.15] text-cream mb-8"
            >
              {finalCall.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-cream/75 text-base sm:text-lg leading-[1.7] mb-12 max-w-2xl mx-auto"
            >
              {finalCall.body}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={season.applyAnchor} className="btn btn-light">
                {finalCall.cta}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════
            THE TWO-STEP FORM — every apply button lands here
           ══════════════════════════════════════════════════ */}
        <section
          id="apply"
          className="bg-cream py-24 sm:py-32 px-6 sm:px-10 scroll-mt-16"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-lg mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="group card-editorial bg-[#DDE2D2] p-8 sm:p-12"
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                <CardLabel>the application</CardLabel>
                <Engraving
                  motif="arc"
                  className="w-14 text-sage-dark engraving -mt-1"
                />
              </div>

              <h2 className="font-display lowercase text-[1.8rem] sm:text-[2.2rem] leading-[1.15] text-ink mb-8">
                {applyForm.heading}
              </h2>

              <form onSubmit={handleApplySubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-transparent border border-ink/25 rounded-[8px] px-5 py-4 text-base text-ink placeholder:text-ink/35 font-sans focus:outline-none focus:border-ink/60 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-ink/25 rounded-[8px] px-5 py-4 text-base text-ink placeholder:text-ink/35 font-sans focus:outline-none focus:border-ink/60 transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-accent w-full disabled:opacity-60"
                >
                  {submitting ? "one moment…" : applyForm.cta}
                </button>
              </form>

              <p className="mt-6 font-sans text-[13px] text-ink/70 leading-relaxed">
                {applyForm.note}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-center card-label mt-10 normal-case tracking-[0.04em]"
            >
              applications close {season.applicationsCloseLong} · the season runs{" "}
              {season.dates}
            </motion.p>
          </motion.div>
        </section>

        <Footer source="cohort-footer" />
      </main>
    </MotionConfig>
  );
}
