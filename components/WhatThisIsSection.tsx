"use client";

import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import SectionDivider from "./ui/SectionDivider";

const bullets = [
  "Get clear on what you actually want (not what you should want)",
  "Learn how to trust your decisions without overthinking them",
  "Move through the fear that keeps you stuck in place",
  "Start taking action that actually feels aligned — and works",
];

export default function WhatThisIsSection() {
  return (
    <>
      <SectionDivider variant="thick" color="terracotta" />
      <section className="bg-ink text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Big headline */}
          <AnimatedSection>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-8">
              What this is
            </p>
            <h2 className="font-display text-display-hero text-cream max-w-4xl mb-4">
              Dream Life Mapping is where you stop circling your life&hellip;
            </h2>
            <p className="font-subtitle text-subtitle-lg text-linen/70 max-w-lg">
              and actually step into it.
            </p>
          </AnimatedSection>

          <SectionDivider variant="line" color="cream" className="my-16 sm:my-24 opacity-15" />

          {/* Two-column: copy + bullet list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <AnimatedSection delay={0.1}>
              <div className="space-y-5 font-sans text-body-lg text-cream/50 leading-relaxed">
                <p>Not by forcing clarity. Not by over-planning.</p>
                <p className="text-cream/80">
                  But by reconnecting to yourself — and learning how to move from that place.
                </p>
              </div>

              <div className="mt-10">
                <CTAButton variant="white" size="lg">
                  Join Dream Life Mapping →
                </CTAButton>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                {bullets.map((b, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <span className="flex-shrink-0 font-display text-sm text-terracotta mt-1">✦</span>
                      <p className="font-sans text-body-lg text-cream/65 leading-relaxed">
                        {b}
                      </p>
                    </div>
                    {i < bullets.length - 1 && (
                      <SectionDivider variant="line" color="cream" className="opacity-10" />
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider variant="thick" color="sage" />
    </>
  );
}
