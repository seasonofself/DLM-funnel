import type { Metadata } from "next";
import LourinhaRetreatPage from "@/components/retreat/LourinhaRetreatPage";

export const metadata: Metadata = {
  title: "Season of Self · Lourinhã, Portugal · October 2026",
  description:
    "A week for yourself on the Atlantic coast in Lourinhã, Portugal, with Katja of Season of Self. Wellness, true sisterhood, daily workshops on dharma and purpose. Application-based, 6 to 10 women. October 5 to 11, 2026.",
  alternates: { canonical: "/retreats/lourinha" },
  openGraph: {
    title: "Season of Self · Lourinhã, Portugal · October 2026",
    description:
      "A week for yourself on the Atlantic coast. Wellness, true sisterhood, and the clarity to go after what is meant for you. Application-based. October 5 to 11, 2026.",
    url: "/retreats/lourinha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Season of Self · Lourinhã, Portugal · October 2026",
    description:
      "A week for yourself. Application-based, 6 to 10 women. Hosted by Katja.",
  },
};

export default function LourinhaPage() {
  return <LourinhaRetreatPage />;
}
