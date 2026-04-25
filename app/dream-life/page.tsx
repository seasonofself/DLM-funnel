import type { Metadata } from "next";
import VariantA from "../variant-a/page";

export const metadata: Metadata = {
  title: "Dream Life Mapping — Get clear on your dream life",
  description:
    "Dream Life Mapping by Season of Self: a self-paced course and 12-month community for women on the verge of breakthrough. Get clear on what you actually want and start building it with Charlotte and Katja.",
  alternates: { canonical: "/dream-life" },
  openGraph: {
    title: "Dream Life Mapping — Season of Self",
    description:
      "A self-paced course and 12-month community for women ready to step into their full potential.",
    url: "/dream-life",
    type: "website",
  },
};

export default function DLWebinarSalesPage() {
  return <VariantA />;
}
