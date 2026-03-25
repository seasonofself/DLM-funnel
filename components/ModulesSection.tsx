"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";
import { modules } from "@/lib/data";

const moduleColors = ["text-terracotta", "text-sage", "text-deep-brown", "text-dusty-blue", "text-terracotta", "text-sage"];

function ModuleRow({
  module,
  index,
  isOpen,
  toggle,
}: {
  module: (typeof modules)[0];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={toggle}
        className="w-full text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="grid grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 items-start">
          {/* Number */}
          <div className="col-span-2 sm:col-span-1">
            <span className={`font-display text-display-md ${moduleColors[index]} opacity-50`}>
              {module.number}
            </span>
          </div>

          {/* Keyword */}
          <div className="col-span-4 sm:col-span-3">
            <span className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-ink/40">
              {module.keyword}
            </span>
          </div>

          {/* Title */}
          <div className="col-span-5 sm:col-span-7">
            <h3 className="font-display text-display-sm sm:text-display-md text-ink group-hover:text-terracotta transition-colors duration-200">
              {module.title}
            </h3>
          </div>

          {/* Expand indicator */}
          <div className="col-span-1 flex justify-end">
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-ink/25 group-hover:text-terracotta transition-colors text-xl leading-none"
            >
              +
            </motion.span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-8 pb-8 sm:pb-10">
              <div className="col-span-12 sm:col-start-5 sm:col-span-7 space-y-5">
                <p className="font-sans text-body-lg text-ink/50 leading-relaxed max-w-2xl">
                  {module.description}
                </p>
                <div className="inline-flex items-center gap-3 border-l-2 border-terracotta pl-4">
                  <span className="font-sans text-sm text-ink/60">
                    {module.deliverable}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionDivider variant="line" color="ink" />
    </motion.div>
  );
}

export default function ModulesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="modules" className="bg-cream py-24 sm:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <AnimatedSection className="mb-16 sm:mb-24">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-sage mb-6">
            What&rsquo;s inside
          </p>
          <h2 className="font-display text-display-xl text-ink max-w-3xl mb-5">
            What you&rsquo;ll move through inside Dream Life Mapping
          </h2>
          <p className="font-sans text-body-lg text-ink/45 max-w-2xl">
            This isn&rsquo;t a course you rush through in a weekend. It&rsquo;s
            a process you move through at your own pace.
          </p>
        </AnimatedSection>

        {/* Modules — accordion rows */}
        <SectionDivider variant="line" color="ink" />
        {modules.map((mod, i) => (
          <ModuleRow
            key={mod.number}
            module={mod}
            index={i}
            isOpen={openIndex === i}
            toggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
