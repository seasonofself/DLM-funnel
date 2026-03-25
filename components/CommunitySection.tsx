"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SectionDivider from "./ui/SectionDivider";

const features = [
  {
    title: "12 Monthly Live Q&A Calls",
    description: "With Charlotte & Katja — real coaching, real questions, real support. Every month for a full year.",
  },
  {
    title: "Private Community",
    description: "12 months inside the Season of Self community on Circle.",
  },
  {
    title: "Direct Access",
    description: "Connect with both coaches inside the community — not just during calls.",
  },
];

export default function CommunitySection() {
  return (
    <>
      <SectionDivider variant="thick" color="blue" />
      <section className="bg-offwhite py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left — copy */}
            <AnimatedSection>
              <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-dusty-blue mb-6">
                Community + Coaching
              </p>
              <h2 className="font-display text-display-xl text-ink mb-8">
                Doing this alone is where people get stuck.
              </h2>
              <div className="space-y-5 font-sans text-body-lg text-ink/50 leading-relaxed">
                <p>
                  You start to question yourself. You lose clarity. You fall back
                  into old patterns.
                </p>
                <p>
                  Inside the community, you&rsquo;re surrounded by people in the same
                  process — asking the same questions, navigating the same shifts.
                </p>
                <p className="text-ink/75 font-medium">
                  And every month, we&rsquo;re there with you — coaching you
                  through whatever comes up.
                </p>
              </div>
            </AnimatedSection>

            {/* Right — feature list */}
            <AnimatedSection delay={0.15} className="lg:pt-16">
              <SectionDivider variant="line" color="ink" />
              {features.map((feature, i) => (
                <div key={i}>
                  <div className="py-8 sm:py-10">
                    <h3 className="font-display text-display-sm text-ink mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-base text-ink/45 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <SectionDivider variant="line" color="ink" />
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
