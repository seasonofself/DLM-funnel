"use client";

import { motion } from "framer-motion";
import CTAButton from "./ui/CTAButton";
import SectionDivider from "./ui/SectionDivider";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-cream overflow-hidden pt-14">
      {/* Thick accent bar */}
      <SectionDivider variant="thick" color="terracotta" />

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left — copy (7 cols) */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              {/* Eyebrow */}
              <motion.p variants={item} className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-8">
                Season of Self · Dream Life Mapping
              </motion.p>

              {/* Massive headline */}
              <motion.h1
                variants={item}
                className="font-display text-display-hero text-ink mb-8"
              >
                Get clear on your{" "}
                <span className="text-terracotta">dream life</span>{" "}
                and start actually living it
              </motion.h1>

              {/* Thin line */}
              <motion.div variants={item}>
                <SectionDivider variant="line" color="ink" className="max-w-xs mb-8" />
              </motion.div>

              {/* Subheadline */}
              <motion.p
                variants={item}
                className="font-subtitle text-subtitle-lg text-ink/60 max-w-lg mb-10"
              >
                A step-by-step course + year-long community to help you step into your highest timeline.
              </motion.p>

              {/* CTA row */}
              <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <CTAButton variant="terracotta" size="lg">
                  Join Dream Life Mapping →
                </CTAButton>
                <CTAButton variant="outline" size="lg">
                  See What&rsquo;s Inside
                </CTAButton>
              </motion.div>

              {/* Trust line */}
              <motion.p
                variants={item}
                className="font-sans text-sm text-ink/35 tracking-wide"
              >
                $497 USD · Founding member price · Money-back guarantee
              </motion.p>
            </motion.div>

            {/* Right — photo (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              {/* TODO: Replace with <Image src="/images/charlotte-katja-hero.jpg" ... /> */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, #939e7a 0%, #d7cfac 45%, #c19673 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="font-display text-white/30 text-xl italic">Charlotte & Katja</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SectionDivider variant="thick" color="sage" />
    </section>
  );
}
