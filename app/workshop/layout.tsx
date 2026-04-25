import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop — Season of Self",
  description:
    "Watch the free Season of Self workshop with Charlotte and Katja. The 3 secrets to creating a life that actually feels like yours.",
  alternates: { canonical: "/workshop" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Workshop — Season of Self",
    description:
      "Watch the free Season of Self workshop with Charlotte and Katja.",
    url: "/workshop",
    type: "website",
  },
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
