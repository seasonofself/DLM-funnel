import type { Metadata } from "next";
import SchoolPage from "./SchoolPage";
import { modules } from "@/content/school";

const SITE_URL = "https://seasonofself.co";

const description =
  "Season of Self is a $25/month online school that helps women design lives they love around their soul work. Includes the Dream Life Mapping course, monthly live coaching with Charlotte & Katja, and a community of women in the same season.";

/* Course schema for Dream Life Mapping itself — the curriculum
   taught inside the school. The school-level Course/Service schema
   lives in app/layout.tsx; this one describes the syllabus and is
   built from content/school.ts so it stays in sync with the page. */
const dreamLifeMappingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE_URL}/school#dream-life-mapping`,
  name: "Dream Life Mapping",
  url: `${SITE_URL}/school`,
  description:
    "The six-module curriculum at the heart of the Season of Self school. A step-by-step process for women to assess where they are, visualize the life they want, release what keeps them stuck, align with their zone of genius, create their first real step, and embody the life they designed.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Season of Self",
    url: SITE_URL,
  },
  teaches: modules.map((m) => m.title),
  syllabusSections: modules.map((m, i) => ({
    "@type": "Syllabus",
    position: i + 1,
    name: `${m.verb} · ${m.title}`,
    description: m.description,
  })),
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "self-paced",
  },
  isPartOf: { "@id": `${SITE_URL}/school#school` },
  offers: [
    {
      "@type": "Offer",
      name: "Included with school enrollment",
      price: "25",
      priceCurrency: "USD",
      category: "subscription",
      url: `${SITE_URL}/school`,
    },
  ],
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  title: "Season of Self · The School",
  description,
  alternates: { canonical: "/school" },
  openGraph: {
    title: "Season of Self · The School",
    description,
    url: "/school",
    type: "website",
  },
  twitter: {
    title: "Season of Self · The School",
    description,
  },
};

/* When the Circle calendar is set up, resolve the next live call
   here with getNextLiveCallDate() from lib/circleCalendar.ts
   (add `export const revalidate = 3600` so the date self-advances)
   and pass it into SchoolPage for the notice-board card. */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dreamLifeMappingSchema),
        }}
      />
      <SchoolPage />
    </>
  );
}
