"use client";

import AnimatedSection from "./ui/AnimatedSection";
import CTAButton from "./ui/CTAButton";
import SectionDivider from "./ui/SectionDivider";

export default function FinalCTASection() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#pricing";

  return (
    <>
      <SectionDivider variant="thick" color="terracotta" />
      <section className="bg-deep-brown text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <p className="font-display text-display-hero sm:text-display-mega text-cream max-w-4xl mb-8">
              If you&rsquo;ve read this far, something in you already knows.
            </p>
          </AnimatedSection>

          <SectionDivider variant="line" color="cream" className="opacity-15 my-12 sm:my-16 max-w-xl" />

          <AnimatedSection delay={0.1}>
            <div className="max-w-xl mb-12">
              <p className="font-sans text-body-lg text-cream/45 mb-4">
                This isn&rsquo;t random curiosity.
              </p>
              <p className="font-subtitle text-subtitle-lg text-linen/80">
                It&rsquo;s recognition.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <CTAButton href={checkoutUrl} variant="white" size="lg">
              Join Dream Life Mapping — $497 →
            </CTAButton>

            <p className="mt-6 font-sans text-sm text-cream/25">
              Instant access · Founding member price · Full money-back guarantee
            </p>
          </AnimatedSection>

          {/* Footer */}
          <AnimatedSection delay={0.2}>
            <SectionDivider variant="line" color="cream" className="opacity-10 mt-24 sm:mt-36 mb-8" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="font-display text-sm font-medium text-cream/25 tracking-wider">
                Season of Self
              </p>
              <p className="font-sans text-xs text-cream/15">
                &copy; {new Date().getFullYear()} Season of Self. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
