"use client";

import { motion } from "framer-motion";
import { resonanceCards } from "@/lib/data";
import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

export default function IsThisYouSection() {
  return (
    <section className="bg-cream py-24 sm:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <AnimatedSection className="mb-16 sm:mb-24">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-dusty-blue mb-6">
            Sound familiar?
          </p>
          <h2 className="font-display text-display-xl text-ink max-w-3xl">
            You&rsquo;ll feel this if it&rsquo;s you.
          </h2>
        </AnimatedSection>

        {/* Resonance list — editorial rows with lines */}
        <div>
          <SectionDivider variant="line" color="ink" />
          {resonanceCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-12 gap-4 py-8 sm:py-10 items-start">
                <div className="col-span-1">
                  <span className="font-display text-display-sm text-terracotta/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-11 sm:col-span-9">
                  <p className="font-sans text-body-lg text-ink/70 leading-relaxed">
                    {card}
                  </p>
                </div>
              </div>
              <SectionDivider variant="line" color="ink" />
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <AnimatedSection delay={0.2} className="mt-16 sm:mt-24">
          <p className="font-display text-display-lg text-ink">
            You&rsquo;re not lost.
          </p>
          <p className="font-subtitle text-subtitle-lg text-ink/40 mt-3">
            You&rsquo;re just not fully expressed yet.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
