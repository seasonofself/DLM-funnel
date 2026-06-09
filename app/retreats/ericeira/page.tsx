import type { Metadata } from "next";
import EricieraRetreatPage from "@/components/retreat/EricieraRetreatPage";

export const metadata: Metadata = {
  title: "The Dream Life Retreat · Ericeira, Portugal · October 2026",
  description:
    "A week on the Atlantic coast in Ericeira, Portugal for 8 women, with Charlotte and Katja of Season of Self. Yoga, breathwork, the full Dream Life journey, and a real plan to build the work that feels like you. October 5 to 11, 2026.",
  alternates: { canonical: "/retreats/ericeira" },
  openGraph: {
    title:
      "The Dream Life Retreat · Ericeira, Portugal · October 2026 — Season of Self",
    description:
      "Six days, six movements, one life brought into focus. Yoga, breathwork, and the full Dream Life journey for 8 women on the Atlantic coast. October 5 to 11, 2026.",
    url: "/retreats/ericeira",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Dream Life Retreat · Ericeira, Portugal · October 2026 — Season of Self",
    description:
      "A week to dream, map, and leap. 8 women only. Hosted by Charlotte and Katja.",
  },
};

export default function EricieraPage() {
  return <EricieraRetreatPage />;
}
