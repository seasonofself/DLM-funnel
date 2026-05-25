import type { Metadata } from "next";
import VariantA from "../variant-a/page";

export const metadata: Metadata = {
  title: "Dream Life Mapping · Build work you love into a soft life",
  description:
    "A self-paced course and 12-month community for women ready to build work they love into a living, and a soft, free life around it. With Charlotte and Katja.",
  alternates: { canonical: "/dream-life" },
  openGraph: {
    title: "Dream Life Mapping · Season of Self",
    description:
      "A self-paced course and 12-month community for women ready to build work they love into a living, and a soft, free life around it. With Charlotte and Katja.",
    url: "/dream-life",
    type: "website",
  },
  twitter: {
    title: "Dream Life Mapping · Season of Self",
    description:
      "A self-paced course and 12-month community for women ready to build work they love into a living, and a soft, free life around it. With Charlotte and Katja.",
  },
};

export default function DLWebinarSalesPage() {
  return <VariantA />;
}
