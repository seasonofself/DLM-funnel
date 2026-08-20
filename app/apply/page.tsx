import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engraving from "@/components/ui/Engraving";
import ApplicationForm from "./ApplicationForm";
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
            <ApplicationForm />
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
