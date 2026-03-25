"use client";

import AnimatedSection from "./ui/AnimatedSection";
import Highlight from "./ui/Highlight";
import SectionDivider from "./ui/SectionDivider";

export default function FoundersSection() {
  return (
    <>
      <SectionDivider variant="thick" color="terracotta" />
      <section className="bg-cream py-24 sm:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <AnimatedSection className="mb-20 sm:mb-32">
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-6">
              Meet the founders
            </p>
            <h2 className="font-display text-display-hero text-ink mb-5">
              Charlotte & Katja
            </h2>
            <p className="font-subtitle text-subtitle-lg text-ink/50 max-w-2xl">
              Two people who left everything that looked right — and followed the pull that felt right.
            </p>
          </AnimatedSection>

          {/* Charlotte */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 sm:mb-36">
            {/* Photo */}
            <AnimatedSection direction="left" className="lg:col-span-5">
              {/* TODO: Replace with <Image src="/images/charlotte.jpg" alt="Charlotte" fill className="object-cover" /> */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/70 via-linen to-sage/50" />
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="font-display text-white/30 text-xl italic">Charlotte</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-7 lg:pt-12">
              <h3 className="font-display text-display-lg text-ink mb-8">Charlotte</h3>
              <SectionDivider variant="line" color="ink" className="mb-8" />
              <div className="space-y-5 font-sans text-body-lg text-ink/55 leading-relaxed">
                <p>
                  Charlotte was doing everything right — business school, startups, a good life in Montreal.
                  But she&rsquo;d never once stopped to ask herself:{" "}
                  <Highlight color="linen">is this actually what I want?</Highlight>
                </p>
                <p>
                  One afternoon she walked into a room, heard a woman talk about building a life on her own
                  terms, and felt something light up that she couldn&rsquo;t explain or ignore. She followed it.
                  Took messy action. Failed at things. Kept going. That pull led her to build a{" "}
                  <Highlight color="blue">multi-million dollar beauty brand</Highlight> —
                  100,000+ customers across 50+ countries.
                </p>
                <p>
                  Today she&rsquo;s a certified life purpose coach and life design educator,
                  a deep student of Transcendental Meditation — living by the ocean in Costa Rica.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Katja — reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Story */}
            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-7 order-2 lg:order-1 lg:pt-12">
              <h3 className="font-display text-display-lg text-ink mb-8">Katja</h3>
              <SectionDivider variant="line" color="ink" className="mb-8" />
              <div className="space-y-5 font-sans text-body-lg text-ink/55 leading-relaxed">
                <p>
                  Katja had checked every box: top-ranked university degrees, corporate career,
                  10-year relationship. From the outside, everything looked right.{" "}
                  <Highlight color="sage">Inside, she felt completely numb.</Highlight>
                </p>
                <p>
                  A solo backpacking trip through Latin America cracked everything open. She met people
                  creating lives on their own terms. Something shifted at a level deeper than thought.
                  She quit the corporate job, ended the relationship, sold her belongings, and moved to
                  Nicaragua with nothing but a pull she couldn&rsquo;t yet explain.
                </p>
                <p>
                  She&rsquo;s now a 200-hour yoga teacher, sound healing facilitator, and dancer — with deep
                  immersion in embodiment, nervous system work, and movement as a pathway back to yourself.
                </p>
              </div>
            </AnimatedSection>

            {/* Photo */}
            <AnimatedSection direction="right" className="lg:col-span-5 order-1 lg:order-2">
              {/* TODO: Replace with <Image src="/images/katja.jpg" alt="Katja" fill className="object-cover" /> */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/70 via-dusty-blue/40 to-linen/50" />
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="font-display text-white/30 text-xl italic">Katja</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Shared closing */}
          <AnimatedSection delay={0.1}>
            <SectionDivider variant="line" color="ink" className="mt-20 sm:mt-32 mb-10" />
            <p className="font-sans text-body-lg text-ink/45 max-w-lg">
              Together, we bring both sides of this work:{" "}
              <span className="text-ink/70">Clarity & Action · Structure & Intuition · Strategy & Embodiment</span>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
