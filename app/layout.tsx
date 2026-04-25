import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://seasonofself.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Season of Self — Build a life that feels true to you",
    template: "%s · Season of Self",
  },
  description:
    "Season of Self is an online learning and mentorship space for women ready to step into their full potential and build lives that feel aligned, abundant, and free. Join Charlotte and Katja for Dream Life Mapping, free workshops, and the Season of Self Substack.",
  applicationName: "Season of Self",
  keywords: [
    "Season of Self",
    "Season of Self Substack",
    "Dream Life Mapping",
    "Charlotte and Katja",
    "ikigai quiz",
    "purpose coaching for women",
    "alignment coaching",
    "women entrepreneurs mentorship",
    "intentional living",
    "clarity workshop",
  ],
  authors: [{ name: "Charlotte & Katja" }, { name: "Season of Self" }],
  creator: "Season of Self",
  publisher: "Season of Self",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Season of Self — Build a life that feels true to you",
    description:
      "An online learning and mentorship space for women ready to build lives that feel aligned, abundant, and free.",
    url: SITE_URL,
    siteName: "Season of Self",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Season of Self — Build a life that feels true to you",
    description:
      "An online learning and mentorship space for women ready to build lives that feel aligned, abundant, and free.",
    creator: "@seasonofselfco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Season of Self",
  alternateName: "Season of Self LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/green_logo.png`,
  description:
    "An online learning and mentorship space for women ready to step into their full potential and build lives that feel aligned, abundant, and free.",
  founder: [
    { "@type": "Person", name: "Charlotte" },
    { "@type": "Person", name: "Katja" },
  ],
  sameAs: [
    "https://www.instagram.com/seasonofself.co",
    "https://substack.com/@seasonofselfco",
    "https://ikigai.seasonofself.co",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "312 W 2nd St, Unit #A8972",
    addressLocality: "Casper",
    addressRegion: "WY",
    postalCode: "82601",
    addressCountry: "US",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Season of Self",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Season of Self" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Analytics (GA4) ── */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P4L88WXR3S"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4L88WXR3S');
            `,
          }}
        />

        {/* ── Structured data — Organization + WebSite ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ──────────────────────────────────────────────
            META PIXEL — uncomment and add your Pixel ID when ready

            <script dangerouslySetInnerHTML={{ __html: `
              !function(f,b,e,v,n,t,s){...}('YOUR_PIXEL_ID');
            `}} />
        ────────────────────────────────────────────── */}
      </head>
      <body>{children}</body>
    </html>
  );
}
