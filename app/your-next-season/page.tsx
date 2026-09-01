import type { Metadata } from "next";
import CohortPage from "../cohort/CohortPage";
import { faqs, season } from "@/content/season";

const SITE_URL = "https://seasonofself.co";

const description =
  "Your Next Season is a self-paced life-design course from Season of Self to help you clarify what you want, move through what's keeping you stuck, choose your next direction, and begin bringing it to life.";

const courseSchema = {
  "@context": "https://schema.org",
  "@type": ["Course", "Service"],
  "@id": `${SITE_URL}/your-next-season#course`,
  name: `Season of Self · ${season.name}`,
  url: `${SITE_URL}/your-next-season`,
  description,
  provider: { "@id": `${SITE_URL}#organization` },
  audience: {
    "@type": "PeopleAudience",
    audienceType:
      "Women who feel unfulfilled in their work and want clarity on their next direction",
  },
  about: [
    "life design",
    "finding your direction",
    "career change for women",
    "somatic practices",
    "self-paced personal growth course",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
  },
  offers: [
    {
      "@type": "Offer",
      name: "One-time payment",
      price: "197",
      priceCurrency: "USD",
      url: season.checkoutUrl,
    },
    {
      "@type": "Offer",
      name: "Installments",
      price: "77",
      priceCurrency: "USD",
      billingIncrement: "1",
      url: season.installmentUrl,
    },
  ],
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/your-next-season#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: "Your Next Season · self-paced life-design course",
  description,
  alternates: { canonical: "/your-next-season" },
  keywords: [
    "Season of Self",
    "Your Next Season",
    "life design course",
    "find your path",
    "career clarity for women",
    "somatic personal growth course",
    "Charlotte and Katja",
  ],
  openGraph: {
    title: "Season of Self · Your Next Season",
    description,
    url: "/your-next-season",
    type: "website",
  },
  twitter: {
    title: "Season of Self · Your Next Season",
    description,
  },
};

export default function YourNextSeasonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CohortPage />
    </>
  );
}
