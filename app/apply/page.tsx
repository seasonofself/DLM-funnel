import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engraving from "@/components/ui/Engraving";
import { applyPage, season } from "@/content/season";

const description =
  "Apply for the autumn season of Season of Self. The application takes about ten minutes, and one of us replies personally within 48 hours.";

export const metadata: Metadata = {
  title: "Apply · the autumn season",
  description,
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply · Season of Self",
    description,
    url: "/apply",
    type: "website",
  },
  twitter: {
    title: "Apply · Season of Self",
    description,
  },
};

export default function ApplyPage() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <Header banner={false} />

      <section className="bg-cream pt-16 sm:pt-24 pb-20 sm:pb-28 px-6 sm:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Engraving
                motif="arc"
                className="w-16 text-sage-dark engraving-drift"
              />
            </div>
            <h1 className="font-display lowercase text-[2.2rem] sm:text-[3rem] leading-[1.1] text-ink mb-8">
              {applyPage.heading}
            </h1>
            <p className="font-sans text-ink/70 text-base sm:text-[17px] leading-[1.7] max-w-xl mx-auto">
              {applyPage.intro}
            </p>
          </div>

          {applyPage.tallyUrl ? (
            <div className="card-editorial card-editorial--filled overflow-hidden">
              <iframe
                src={applyPage.tallyUrl}
                title="Season of Self · autumn season application"
                className="w-full min-h-[70vh] border-0"
                loading="lazy"
              />
            </div>
          ) : (
            /* The application is open, by email, until the Tally form URL
               is set in content/season.ts (applyPage.tallyUrl). The mailto
               prefills the application questions so writing in IS applying. */
            <div className="card-editorial bg-[#DDE2D2] p-8 sm:p-12 text-center">
              <p className="font-display lowercase text-xl text-ink mb-5">
                the application is open. it happens over email.
              </p>
              <p className="font-sans text-ink/75 text-[15px] sm:text-base leading-[1.7] mb-8">
                Write to us at{" "}
                <a
                  href="mailto:hello@seasonofself.co"
                  className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink/70"
                >
                  hello@seasonofself.co
                </a>
                . Tell us where you are in your work life, what you&rsquo;ve
                been dreaming of starting, &amp; anything else you want us to
                know. The button below starts the email with our questions
                already in it.
              </p>
              <a
                href={
                  "mailto:hello@seasonofself.co" +
                  "?subject=" +
                  encodeURIComponent("the autumn season · application") +
                  "&body=" +
                  encodeURIComponent(
                    [
                      "hi Charlotte & Katja,",
                      "",
                      "1 · where I am in my work life right now, & what's no longer fitting:",
                      "",
                      "2 · what I've dreamt of starting (even the half-formed ideas count):",
                      "",
                      "3 · imagine it's december 18 & the season went beautifully. what's different:",
                      "",
                      "4 · anything else I want you to know · & would I like a 20-minute call before deciding?",
                      "",
                    ].join("\n")
                  )
                }
                className="btn btn-accent"
              >
                apply by email →
              </a>
            </div>
          )}

          <p className="text-center font-display italic text-ink/70 text-lg mt-10">
            {applyPage.reassurance}
          </p>
          <p className="text-center card-label mt-6 normal-case tracking-[0.04em]">
            applications close {season.applicationsCloseLong} · the season runs{" "}
            {season.dates}
          </p>
        </div>
      </section>

      <Footer source="apply-footer" />
    </main>
  );
}
