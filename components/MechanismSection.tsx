"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

const steps = [
  {
    num: "01",
    label: "See clearly",
    text: "Understand where you actually are — honestly, gently, completely.",
  },
  {
    num: "02",
    label: "Feel deeply",
    text: "Reconnect to what you truly want through breathwork, visualization, and your body's wisdom.",
  },
  {
    num: "03",
    label: "Move forward",
    text: "Take aligned action from a place of clarity — not pressure, not fear, not other people's timelines.",
  },
];

export default function MechanismSection() {
  return (
    <section className="bg-cream py-24 sm:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 sm:mb-28">
          <AnimatedSection>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-sage mb-6">
              How it works
            </p>
            <h2 className="font-display text-display-xl text-ink">
              You build your dream life from the inside out
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:pt-12">
            <p className="font-sans text-body-lg text-ink/50 leading-relaxed max-w-md">
              Not by planning harder. Not by consuming more content. By reconnecting to the part of you that already knows.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps — editorial list with lines */}
        <div>
          <SectionDivider variant="line" color="ink" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-8 py-10 sm:py-14">
                {/* Number */}
                <div className="col-span-3 sm:col-span-2">
                  <span className="font-display text-display-xl text-terracotta/30">
                    {step.num}
                  </span>
                </div>

                {/* Label */}
                <div className="col-span-9 sm:col-span-4">
                  <h3 className="font-display text-display-md text-ink">
                    {step.label}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 sm:col-span-6">
                  <p className="font-sans text-body-lg text-ink/50 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
              <SectionDivider variant="line" color="ink" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
