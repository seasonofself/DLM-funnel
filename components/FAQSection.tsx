"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";
import { faqs } from "@/lib/data";

function FAQItem({
  faq,
  isOpen,
  toggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  toggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={toggle}
        className="w-full text-left py-7 sm:py-9 flex items-start justify-between gap-8 cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 sm:gap-8">
          <span className="font-display text-sm text-ink/20 mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-lg sm:text-xl font-medium text-ink leading-snug group-hover:text-terracotta transition-colors duration-200">
            {faq.question}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1 text-ink/25 group-hover:text-terracotta transition-colors text-xl leading-none"
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
            <div className="pl-8 sm:pl-16 pb-8">
              <p className="font-sans text-base text-ink/45 leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionDivider variant="line" color="ink" />
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-24 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimatedSection className="mb-12 sm:mb-16">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-ink/40 mb-6">
            Questions
          </p>
          <h2 className="font-display text-display-xl text-ink">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <SectionDivider variant="line" color="ink" />
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            index={i}
            isOpen={openIndex === i}
            toggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
