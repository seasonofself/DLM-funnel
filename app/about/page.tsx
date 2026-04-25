import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import Highlight from "@/components/ui/Highlight";
import PillTag from "@/components/ui/PillTag";
import CTAButton from "@/components/ui/CTAButton";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Us — Charlotte & Katja",
  description:
    "Two friends from opposite sides of the world: Katja from Germany, Charlotte from Canada. We met in Nicaragua and built Season of Self together to help women bridge the gap between where they are and where they want to be.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Season of Self — Charlotte & Katja",
    description:
      "Meet Charlotte and Katja, the founders of Season of Self. An online education space for women ready to take the leap toward their wildest dreams.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════════ */}
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        <Image
          src="/assets/founders_smiling.jpg"
          alt="Charlotte and Katja, founders of Season of Self"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/30" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center max-w-4xl mx-auto px-6 sm:px-10 pb-16 sm:pb-20">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-white/60 mb-4">
            About Us
          </p>
          <h1 className="mb-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-white">
            Two friends, one <span className="italic text-terracotta">mission</span>
          </h1>
          <p className="font-subtitle italic text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            Two friends from opposite sides of the world who met in a tiny surf town and
            built Season of Self together.
          </p>
        </div>
      </section>

      <SectionDivider variant="thick" color="sage" />

      {/* ════════════════════════════════════════════════
          OUR STORY
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-5">
              Our story
            </p>
            <h2 className="font-display text-display-lg text-ink mb-10">
              How <Highlight color="sage">Season of Self</Highlight> was born
            </h2>
          </AnimatedSection>

          <div className="space-y-6 font-sans text-body-lg text-ink/65 leading-relaxed">
            <AnimatedSection delay={0.05}>
              <p>
                We&apos;re two friends from opposite sides of the world. Katja
                is from Germany. Charlotte is from Canada. We met in Nicaragua
                — in Popoyo, a tiny surf town — and the universe brought us
                together. Instant best friends.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p>
                We bonded over surfing, over a shared love of living slowly,
                and over a desire we both kept circling back to: building a
                life with real freedom. The kind where you get to choose where
                you live, how you spend your days, and what you say yes to.
                Where the work is meaningful and the schedule is yours.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p>
                For a couple of years, we stayed close across continents. And
                the more we talked about our respective work, the more we
                noticed how much our missions overlapped — almost like we&apos;d
                been building toward the same thing from two different corners
                of the planet.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p>
                So we decided to build it together. Katja flew to Costa Rica,
                where Charlotte lives, and Season of Self was born.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p>
                It&apos;s an online education space designed to help women
                bridge the gap between where they are and where they want to
                be. We&apos;re here to encourage you to take the leap toward
                your wildest dreams, support you on your highest timeline, and
                remind you that the life you want is closer than you think.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-display italic text-2xl sm:text-3xl text-ink/80 pt-4">
                This work is really about one thing: uplifting you into your
                own potential.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="thick" color="terracotta" />

      {/* ════════════════════════════════════════════════
          MEET CHARLOTTE
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/assets/charlotte_founderheadshot.jpg"
                alt="Charlotte, co-founder of Season of Self"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="lg:col-span-7">
            <AnimatedSection>
              <PillTag color="terracotta" size="md" className="mb-5">
                Meet Charlotte
              </PillTag>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-display-lg text-ink mb-6">
                Hi, I&apos;m <span className="italic">Charlotte</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-5 font-sans text-body-lg text-ink/65 leading-relaxed">
              <AnimatedSection delay={0.1}>
                <p>
                  I&apos;m french Canadian, currently based in Costa Rica, and
                  I built my first brand, Suntouched, while traveling the world
                  — growing it to over 100,000 customers along the way. I&apos;m
                  a certified life purpose coach, deep into mindset work, and
                  transcendental meditation.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p>
                  My work is about helping people bridge the gap between where
                  they are and where they wanna be.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MEET KATJA
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2">
            <AnimatedSection>
              <PillTag color="sage" size="md" className="mb-5">
                Meet Katja
              </PillTag>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-display-lg text-ink mb-6">
                Hi, I&apos;m <span className="italic">Katja</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-5 font-sans text-body-lg text-ink/65 leading-relaxed">
              <AnimatedSection delay={0.1}>
                <p>
                  I&apos;m German, a yoga teacher, and most of my work lives
                  at the intersection of the body and the mind. I&apos;m big
                  into mindset, somatic practice, and helping women reconnect
                  to themselves through breath, movement, and stillness.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p>
                  I came to this work because I needed it myself, and what I
                  know for sure is that you can&apos;t think your way into a
                  different life. At some point you have to feel your way
                  there.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection direction="right" className="lg:col-span-5 lg:order-2 order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/assets/katja_hero.jpeg"
                alt="Katja, co-founder of Season of Self"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          BOTH SIDES
         ════════════════════════════════════════════════ */}
      <section className="bg-sage py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed">
              Together, we hold both sides of the work. The strategy and the
              somatics. The doing and the being. The dream and the woman
              who&apos;s already becoming her.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          GIVING BACK
         ════════════════════════════════════════════════ */}
      <section className="bg-offwhite py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lifted">
              <Image
                src="/assets/founders_vibing.jpg"
                alt="Charlotte and Katja in Costa Rica"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="lg:col-span-7">
            <AnimatedSection>
              <PillTag color="sage" size="md" className="mb-5">
                Giving back
              </PillTag>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h2 className="font-display text-display-lg text-ink mb-6">
                10% of every purchase goes to{" "}
                <Highlight color="terracotta">education</Highlight>
              </h2>
            </AnimatedSection>

            <div className="space-y-5 font-sans text-body-lg text-ink/65 leading-relaxed">
              <AnimatedSection delay={0.1}>
                <p>
                  A huge part of this work, for us, is being able to give back.
                  We both really care about education, and 10% of every Season
                  of Self purchase goes to two organizations doing meaningful
                  work in our local Costa Rican community:
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-2 flex-shrink-0">✦</span>
                    <span>
                      <strong className="text-ink/80">SOMA Surf</strong> — a
                      surf therapy program for girls and women.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-2 flex-shrink-0">✦</span>
                    <span>
                      <strong className="text-ink/80">Abriendo Mentes</strong>{" "}
                      — education and opportunities for young people in rural
                      communities.
                    </span>
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SIGN OFF + CTA
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-display italic text-2xl sm:text-3xl text-ink/70 mb-12">
              With love, from the jungle —{" "}
              <span className="text-terracotta">Charlotte &amp; Katja</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-display-md text-ink mb-6">
              Ready to start your <span className="italic">Season of Self</span>?
            </h2>
            <p className="font-sans text-body-lg text-ink/55 leading-relaxed mb-10">
              Take a free gift to start, or step into Dream Life Mapping when
              you&apos;re ready.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href="/#gifts" variant="ink" size="lg">
                Free Gifts →
              </CTAButton>
              <CTAButton href="/dream-life" variant="terracotta" size="lg">
                Dream Life Mapping →
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER (mini)
         ════════════════════════════════════════════════ */}
      <footer className="bg-ink py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <a
            href="/"
            className="font-sans text-sm text-cream/40 hover:text-cream/70 transition-colors"
          >
            ← Back to Season of Self
          </a>
          <p className="font-sans text-xs text-cream/20">
            © {new Date().getFullYear()} Season of Self LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
