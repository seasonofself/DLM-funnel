"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

export default function GuaranteeSection() {
  return (
    <section className="bg-offwhite py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionDivider variant="line" color="ink" className="mb-12 sm:mb-16" />
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left — title */}
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
                Our guarantee
              </p>
              <h3 className="font-display text-display-lg text-ink">
                Risk-free.
              </h3>
            </div>

            {/* Right — copy */}
            <div className="lg:col-span-8 space-y-5 font-sans text-body-lg text-ink/50 leading-relaxed">
              <p>Go through the course. Do the work.</p>
              <p>
                If you don&rsquo;t feel a real shift — in your clarity, your
                direction, or how you relate to your life — we&rsquo;ll refund you.
              </p>
              <p className="font-display font-semibold text-ink/75 text-lg">Simple as that.</p>
            </div>
          </div>
        </AnimatedSection>
        <SectionDivider variant="line" color="ink" className="mt-12 sm:mt-16" />
      </div>
    </section>
  );
}
