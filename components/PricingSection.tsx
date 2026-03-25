"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import Highlight from "./ui/Highlight";
import SectionDivider from "./ui/SectionDivider";
import { valueStack } from "@/lib/data";

export default function PricingSection() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
  const checkoutUrlPlan = process.env.NEXT_PUBLIC_CHECKOUT_URL_PLAN || "#";

  return (
    <section id="pricing" className="bg-cream py-24 sm:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <AnimatedSection className="mb-16 sm:mb-24">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-6">
            Enroll today
          </p>
          <h2 className="font-display text-display-hero text-ink mb-5">
            Join Dream Life Mapping
          </h2>
          <p className="font-subtitle text-subtitle-lg text-ink/50 max-w-lg">
            Founding member pricing — here for a limited time.
          </p>
        </AnimatedSection>

        {/* Context note */}
        <AnimatedSection delay={0.05}>
          <p className="font-sans text-body-lg text-ink/40 max-w-2xl leading-relaxed mb-16">
            You could spend $497 on a single coaching session. A course that gives you information but
            not transformation. Another year of waiting.{" "}
            <Highlight color="linen">Or you could put it here.</Highlight>
          </p>
        </AnimatedSection>

        {/* Pricing cards — two side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/[0.08] max-w-3xl">
          {/* Full pay — featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream"
          >
            <div className="p-8 sm:p-12 border-t-2 border-terracotta">
              <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-terracotta mb-2">
                Pay in full · Best Value
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-display-xl text-ink">$497</span>
                <span className="font-sans text-sm text-ink/35">USD</span>
              </div>
              <p className="font-sans text-sm text-ink/35 mb-8">
                <span className="line-through">$997</span> · Save $500 as a founding member
              </p>

              <CTAButton href={checkoutUrl} variant="terracotta" size="md" className="w-full mb-4">
                Join Now — $497 →
              </CTAButton>

              <p className="text-center font-sans text-xs text-ink/25">
                One-time payment · Instant access
              </p>
            </div>
          </motion.div>

          {/* Payment plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream"
          >
            <div className="p-8 sm:p-12 border-t-2 border-sage">
              <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-sage mb-2">
                Payment Plan
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-display-xl text-ink">3 × $177</span>
              </div>
              <p className="font-sans text-sm text-ink/35 mb-8">
                Same access, same start date
              </p>

              <CTAButton href={checkoutUrlPlan} variant="ink" size="md" className="w-full mb-4">
                Join Now — 3 × $177 →
              </CTAButton>

              <p className="text-center font-sans text-xs text-ink/25">
                3 monthly payments · Instant access
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value stack */}
        <AnimatedSection delay={0.1}>
          <SectionDivider variant="line" color="ink" className="mt-20 sm:mt-28 mb-10 max-w-3xl" />
          <h3 className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-ink/35 mb-8">
            Everything that&rsquo;s included
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl">
            {valueStack.map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span className="flex-shrink-0 mt-0.5 text-terracotta text-sm">✦</span>
                <span className="font-sans text-sm sm:text-base text-ink/55 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Urgency note */}
        <AnimatedSection delay={0.15}>
          <SectionDivider variant="line" color="ink" className="mt-12 mb-10 max-w-3xl" />
          <p className="font-sans text-base text-ink/40 max-w-lg">
            This founding member price is{" "}
            <Highlight color="linen">$500 off</Highlight> what Dream Life Mapping will be
            once the community is established. This is the best it will ever be to join.
          </p>
          <p className="font-subtitle text-subtitle italic text-terracotta mt-4">
            If you feel the pull — trust it.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
