import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Us · Charlotte & Katja",
  description:
    "Meet Charlotte and Katja, the founders of Season of Self. A French-Canadian life-purpose coach and a German yoga teacher who met in Nicaragua and built an online education space to help women find their life path, get clarity on their direction, and step into their most aligned life.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Season of Self · Charlotte & Katja",
    description:
      "Meet Charlotte and Katja, the founders of Season of Self. Guidance for women navigating life-path questions: purpose, direction, and aligned next steps.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header />

      {/* ════════════════════════════════════════════════
          HERO — editorial split
         ════════════════════════════════════════════════ */}
      <section className="relative bg-cream pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
        <div className="relative max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative z-10">
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-7">
              <span className="inline-block w-8 h-px bg-deep-sage align-middle mr-3" />
              About Us
            </p>

            <h1 className="font-display text-[3rem] sm:text-[3.6rem] lg:text-[5rem] xl:text-[5.8rem] leading-[0.94] text-ink mb-8 tracking-[-0.01em]">
              Two friends, one{" "}
              <span className="italic text-terracotta-dark">mission</span>.
            </h1>

            <p className="font-subtitle italic text-ink/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
              Two friends from opposite sides of the world who met in a tiny
              surf town and built Season of Self together.
            </p>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.35)]">
              <Image
                src="/assets/season_couch.jpg"
                alt="Charlotte and Katja"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          OUR STORY
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6">
            Our story
          </p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-12">
            How Season of Self was{" "}
            <span className="italic">born</span>.
          </h2>

          <div className="space-y-6 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
            <p>
              We&apos;re two friends from opposite sides of the world. Katja is
              from Germany. Charlotte is from Canada. We met in Nicaragua, in
              Popoyo, a tiny surf town, and the universe brought us together.
              Instant best friends.
            </p>
            <p>
              We bonded over surfing, over a shared love of living slowly, and
              over a desire we both kept circling back to: building a life with
              real freedom. The kind where you get to choose where you live,
              how you spend your days, and what you say yes to. Where the work
              is meaningful and the schedule is yours.
            </p>
            <p>
              For a couple of years, we stayed close across continents. And the
              more we talked about our respective work, the more we noticed how
              much our missions overlapped. Almost like we&apos;d been building
              toward the same thing from two different corners of the planet.
            </p>
            <p>
              So we decided to build it together. Katja flew to Costa Rica,
              where Charlotte lives, and Season of Self was born.
            </p>
            <p className="font-display italic text-2xl sm:text-3xl text-ink/85 pt-4 leading-snug">
              This work is really about one thing: uplifting you into your own
              potential.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MEET CHARLOTTE
         ════════════════════════════════════════════════ */}
      <section className="bg-cream py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[24px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.3)]">
              <Image
                src="/assets/charlotte_founderheadshot.jpg"
                alt="Charlotte, co-founder of Season of Self"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-terracotta-dark mb-6">
              Meet Charlotte
            </p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-8">
              Hi, I&apos;m <span className="italic">Charlotte</span>
            </h2>

            <div className="space-y-5 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
              <p>
                I&apos;m french Canadian, currently based in Costa Rica, and I
                built my first brand, Suntouched, while traveling the world,
                growing it to over 100,000 customers along the way. I&apos;m a
                certified life purpose coach, deep into mindset work, and
                transcendental meditation.
              </p>
              <p>
                My work is about helping people bridge the gap between where
                they are and where they wanna be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MEET KATJA
         ════════════════════════════════════════════════ */}
      <section className="bg-cream pb-24 sm:pb-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="font-sans text-[11px] font-semibold tracking-[0.36em] uppercase text-deep-sage mb-6">
              Meet Katja
            </p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] text-ink mb-8">
              Hi, I&apos;m <span className="italic">Katja</span>
            </h2>

            <div className="space-y-5 font-sans text-ink/70 text-base sm:text-[17px] leading-relaxed">
              <p>
                I&apos;m German, a yoga teacher, and most of my work lives at
                the intersection of the body and the mind. I&apos;m big into
                mindset, somatic practice, and helping women reconnect to
                themselves through breath, movement, and stillness.
              </p>
              <p>
                I came to this work because I needed it myself, and what I know
                for sure is that you can&apos;t think your way into a different
                life. At some point you have to feel your way there.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[24px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(34,34,34,0.3)]">
              <Image
                src="/assets/katja_hero.jpeg"
                alt="Katja, co-founder of Season of Self"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SIGN OFF + CTA
         ════════════════════════════════════════════════ */}
      <section className="bg-[#dde2d2] py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl sm:text-3xl text-ink/75 mb-14 leading-snug">
            With love, from the jungle.{" "}
            <span className="text-terracotta-dark not-italic font-semibold">
              Charlotte &amp; Katja
            </span>
          </p>

          <h2 className="font-display text-[2.2rem] sm:text-4xl lg:text-[3rem] leading-[1.05] text-ink mb-7">
            Ready to start your{" "}
            <span className="italic">Season of Self</span>?
          </h2>
          <p className="font-sans text-ink/65 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Start smaller with The Inner Map, or apply for the autumn season
            when you&apos;re ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://ikigai.seasonofself.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              The Inner Map →
            </a>
            <a href="/cohort" className="btn btn-accent">
              Apply for the autumn season →
            </a>
          </div>
        </div>
      </section>

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
