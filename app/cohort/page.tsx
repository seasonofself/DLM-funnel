import type { Metadata } from "next";
import CohortPage from "./CohortPage";
import { faqs } from "@/content/season";

const SITE_URL = "https://seasonofself.co";

const description =
  "Season of Self is a 12-week guided season for women who feel unfulfilled in their work & dream of starting something of their own. Small group, live calls with Charlotte & Katja, and a 30-day experiment in the real world. Applications open for the autumn season, September 29 to December 18.";

/* Course schema for the Season — the 12-week guided container.
   Built from content/season.ts so it stays in sync with the page. */
const seasonSchema = {
  "@context": "https://schema.org",
  "@type": ["Course", "Service"],
  "@id": `${SITE_URL}/cohort#season`,
  name: "Season of Self · The Season",
  url: `${SITE_URL}/cohort`,
  description,
  provider: { "@id": `${SITE_URL}#organization` },
  audience: {
    "@type": "PeopleAudience",
    audienceType:
      "Women who feel unfulfilled in their work and dream of starting something of their own",
  },
  about: [
    "finding your direction",
    "starting your own business",
    "career change for women",
    "nervous-system regulation and somatic work",
    "digital detox and daily practice",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    startDate: "2026-09-29",
    endDate: "2026-12-18",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Founding tuition",
      price: "997",
      priceCurrency: "USD",
      url: `${SITE_URL}/cohort`,
    },
  ],
  inLanguage: "en-US",
};

const seasonFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/cohort#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export const metadata: Metadata = {
  title: "The Season · a 12-week guided container",
  description,
  alternates: { canonical: "/cohort" },
  keywords: [
    "Season of Self",
    "season of self cohort",
    "12-week program for women",
    "start your own business",
    "career change for women",
    "find your path",
    "Charlotte and Katja",
  ],
  openGraph: {
    title: "Season of Self · The Season",
    description,
    url: "/cohort",
    type: "website",
  },
  twitter: {
    title: "Season of Self · The Season",
    description,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seasonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seasonFaqSchema) }}
      />
      <CohortPage />
    </>
  );
}
