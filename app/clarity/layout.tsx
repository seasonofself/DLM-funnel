import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Clarity Workshop — The 3 Secrets to a Life That Feels Like Yours",
  description:
    "A free on-demand workshop from Season of Self with Charlotte and Katja. Learn the 3 secrets to creating a life that actually feels like yours — for women ready to stop overthinking and start moving.",
  alternates: { canonical: "/clarity" },
  openGraph: {
    title: "Free Clarity Workshop — Season of Self",
    description:
      "The 3 Secrets to creating a life that actually feels like yours. A free workshop with Charlotte and Katja.",
    url: "/clarity",
    type: "website",
  },
};

export default function ClarityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
