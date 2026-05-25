import type { Metadata } from "next";
import EricieraRetreatPage from "@/components/retreat/EricieraRetreatPage";

export const metadata: Metadata = {
  title: "A Wellness Week in Ericeira, Portugal · October 2026",
  description:
    "Join the waitlist for a small wellness week in Ericeira, Portugal with Charlotte and Katja of Season of Self. Yoga, rest, and dream life workshops for 8 women, October 5 to 11, 2026.",
  alternates: { canonical: "/retreats/ericeira" },
  openGraph: {
    title:
      "A Wellness Week in Ericeira, Portugal · October 2026 — Season of Self",
    description:
      "Yoga, rest, and dream life workshops for 8 women on the Atlantic coast. October 5 to 11, 2026. Hosted by Charlotte and Katja.",
    url: "/retreats/ericeira",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A Wellness Week in Ericeira, Portugal · October 2026 — Season of Self",
    description:
      "Join the waitlist. 8 women only. Hosted by Charlotte and Katja.",
  },
};

export default function EricieraPage() {
  return <EricieraRetreatPage />;
}
