"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";
import { whyItWorks } from "@/lib/data";

const accentColors = ["border-terracotta", "border-sage", "border-dusty-blue", "border-linen"];

export default function WhyItWorksSection() {
  return (
    <section className="bg-cream py-24 sm:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <AnimatedSection className="mb-16 sm:mb-24">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-sage mb-6">
            The science
          </p>
          <h2 className="font-display text-display-xl text-ink max-w-3xl mb-5">
            This isn&rsquo;t just reflection. It&rsquo;s{" "}
            <span className="text-terracotta">rewiring</span>.
          </h2>
          <p className="font-sans text-body-lg text-ink/45 max-w-2xl">
            The modalities inside Dream Life Mapping are backed by neuroscience
            and designed to create change at the level of your nervous system.
          </p>
        </AnimatedSection>

        {/* Method cards — 2x2 grid with left accent borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/[0.08]">
          {whyItWorks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream"
            >
              <div className={`p-8 sm:p-12 border-l-2 ${accentColors[i]} h-full`}>
                <h3 className="font-display text-display-sm text-ink mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-ink/45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
