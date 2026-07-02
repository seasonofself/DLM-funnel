import type { Metadata } from "next";
import SchoolPage from "./SchoolPage";

const description =
  "Season of Self is a $25/month online school that helps women design lives they love around their soul work. Includes the Dream Life Mapping course, monthly live coaching with Charlotte & Katja, and a community of women in the same season.";

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

export default function Page() {
  return <SchoolPage />;
}
