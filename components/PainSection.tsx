"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

export default function PainSection() {
  return (
    <>
      <SectionDivider variant="thick" color="terracotta" />
      <section className="bg-deep-brown text-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Massive opening */}
          <AnimatedSection>
            <h2 className="font-display text-display-mega text-cream mb-6">
              You don&rsquo;t hate your life.
            </h2>
            <p className="font-subtitle text-subtitle-lg text-linen/70 max-w-xl">
              That&rsquo;s almost what makes it harder.
            </p>
          </AnimatedSection>

          <SectionDivider variant="line" color="cream" className="my-16 sm:my-24 opacity-15" />

          {/* Two-column editorial layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6 font-sans text-body-lg text-cream/60 leading-relaxed">
                <p>
                  Because nothing is <em className="text-cream font-medium not-italic">wrong</em>.
                  But something isn&rsquo;t right either.
                </p>
                <p>
                  You go through your days, you do what you&rsquo;re supposed to do,
                  you have moments that are good&hellip;
                </p>
                <p className="text-cream/35">
                  &hellip;but underneath it, there&rsquo;s this quiet feeling:
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {/* Pullquote */}
              <div className="border-l-2 border-terracotta pl-8 sm:pl-12 py-4">
                <p className="font-display text-display-lg text-linen leading-snug">
                  &ldquo;Is this really it?&rdquo;
                </p>
              </div>

              <div className="mt-10 space-y-6 font-sans text-body-lg text-cream/60 leading-relaxed">
                <p>And it&rsquo;s not dramatic. It&rsquo;s subtle.</p>
                <p>
                  Like you&rsquo;re living a version of your life that works&hellip;
                  but doesn&rsquo;t fully feel like <em className="text-cream not-italic">you</em>.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <SectionDivider variant="line" color="cream" className="my-16 sm:my-24 opacity-15" />

          {/* The shift — full width */}
          <AnimatedSection delay={0.1}>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-8">
              Here&rsquo;s the shift
            </p>
            <div className="max-w-3xl space-y-6 font-sans text-body-lg text-cream/60 leading-relaxed">
              <p>You&rsquo;ve journaled about it. Thought about it. Tried to &ldquo;figure it out&rdquo;.</p>
              <p>You get clarity for a moment&hellip; and then you lose it again.</p>
              <p className="text-cream font-medium">Why can&rsquo;t I just decide?</p>
              <p>
                It&rsquo;s because you&rsquo;ve been trying to figure out your life from your head&hellip;
              </p>
            </div>
          </AnimatedSection>

          {/* Key line — massive */}
          <AnimatedSection delay={0.15}>
            <div className="mt-20 sm:mt-32 max-w-4xl">
              <p className="font-display text-display-lg sm:text-display-xl text-cream leading-tight">
                You don&rsquo;t need more information. You need to reconnect with the part of you that{" "}
                <span className="text-terracotta">already knows</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <SectionDivider variant="thick" color="sage" />
    </>
  );
}
