"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

export default function GiveBackSection() {
  return (
    <>
      <SectionDivider variant="thick" color="sage" />
      <section className="bg-deep-brown text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header with massive 10% */}
          <AnimatedSection className="mb-20 sm:mb-28">
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-8">
              Impact
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              <h2 className="font-display text-display-mega text-cream">
                10%
              </h2>
              <div>
                <p className="font-display text-display-md text-cream/90 mb-4">
                  Your investment creates change beyond your own life.
                </p>
                <p className="font-sans text-body-lg text-cream/45 leading-relaxed">
                  We believe that when someone comes home to themselves — really comes home —
                  they change everything around them.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <SectionDivider variant="line" color="cream" className="opacity-15" />

          {/* Organisation rows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-px">
            {/* SOMA Surf */}
            <AnimatedSection delay={0.1}>
              <div className="py-12 sm:py-16 lg:pr-16">
                <h3 className="font-display text-display-md text-cream mb-2">SOMA Surf</h3>
                <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-sage mb-6">
                  S&atilde;o Tom&eacute;, Africa · somasurf.org
                </p>
                <div className="space-y-4 font-sans text-base text-cream/50 leading-relaxed">
                  <p>
                    A surf therapy programme for girls and women — using the ocean, movement, and
                    mental health practices to build confidence, resilience, and self-worth.
                  </p>
                  <p>
                    Katja spent two months there as a volunteer. She came home changed.
                    This organisation is close to us. It&rsquo;s personal.
                  </p>
                  <p className="font-subtitle italic text-terracotta">
                    Your purchase helps keep that work going.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Abriendo Mentes */}
            <AnimatedSection delay={0.2}>
              <div className="py-12 sm:py-16 lg:pl-16 border-t lg:border-t-0 lg:border-l border-cream/10">
                <h3 className="font-display text-display-md text-cream mb-2">Abriendo Mentes</h3>
                <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-sage mb-6">
                  Guanacaste, Costa Rica · abriendomentes.org
                </p>
                <div className="space-y-4 font-sans text-base text-cream/50 leading-relaxed">
                  <p>
                    Since 2009, creating access for rural Costa Rican families: English classes,
                    technology programs, vocational training, and after-school programs for
                    children ages 4 to 20.
                  </p>
                  <p>
                    The specific skills that determine whether a family stays in poverty or builds
                    a different kind of future.
                  </p>
                  <p className="font-subtitle italic text-terracotta">
                    Your purchase funds that future.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <SectionDivider variant="line" color="cream" className="opacity-15 mt-4" />

          {/* Closing */}
          <AnimatedSection delay={0.2}>
            <p className="mt-12 sm:mt-16 font-subtitle text-subtitle-lg text-linen/60 max-w-xl">
              When you invest in your life, you invest in theirs. That&rsquo;s the kind of
              business we&rsquo;re here to build.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <SectionDivider variant="thick" color="terracotta" />
    </>
  );
}
