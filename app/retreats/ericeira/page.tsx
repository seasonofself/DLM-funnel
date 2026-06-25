import type { Metadata } from "next";
import EricieraRetreatPage from "@/components/retreat/EricieraRetreatPage";

export const metadata: Metadata = {
  title: "Season of Self · Ericeira · Ericeira, Portugal · October 2026",
  description:
    "A week for yourself on the Atlantic coast in Ericeira, Portugal, with Charlotte and Katja of Season of Self. Wellness, true sisterhood, and the full Dream Life Mapping course included. Application-based, 6 to 10 women. October 5 to 11, 2026.",
  alternates: { canonical: "/retreats/ericeira" },
  openGraph: {
    title:
      "Season of Self · Ericeira · Ericeira, Portugal · October 2026 · Season of Self",
    description:
      "A week for yourself on the Atlantic coast. Wellness, true sisterhood, and the full Dream Life Mapping course included. Application-based. October 5 to 11, 2026.",
    url: "/retreats/ericeira",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Season of Self · Ericeira · Ericeira, Portugal · October 2026 · Season of Self",
    description:
      "A week for yourself. Application-based, 6 to 10 women. Hosted by Charlotte and Katja.",
  },
};

export default function EricieraPage() {
  return <EricieraRetreatPage />;
}
