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
    "Season of Self is an online learning and mentorship space for women looking for guidance on their life path. Get clarity on your purpose, your direction, and your most aligned next step. Founded by Charlotte and Katja, Season of Self offers Dream Life Mapping (a self-paced course + community), a free Ikigai quiz, free clarity workshops, and the Season of Self Substack.",
  applicationName: "Season of Self",
  keywords: [
    "Season of Self",
    "Season of Self Substack",
    "Dream Life Mapping",
    "Charlotte and Katja",
    "ikigai quiz",
    "life path guidance",
    "find your purpose",
    "purpose coaching for women",
    "life direction coaching",
    "alignment coaching",
    "women entrepreneurs mentorship",
    "intentional living",
    "clarity workshop",
    "how to find your life path",
    "what should I do with my life",
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

const charlotteSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#charlotte`,
  name: "Charlotte",
  jobTitle: "Co-founder & Life Purpose Coach",
  description:
    "Charlotte is a French-Canadian entrepreneur and certified life purpose coach. She built her first brand, Suntouched, growing it to 100,000+ customers in 50+ countries. Now based in Costa Rica, she helps women get clarity on their life path and build aligned, intentional lives.",
  knowsAbout: [
    "life purpose coaching",
    "finding your life path",
    "mindset work",
    "transcendental meditation",
    "entrepreneurship for women",
    "intentional living",
  ],
  worksFor: { "@type": "Organization", name: "Season of Self" },
  image: `${SITE_URL}/assets/charlotte_founderheadshot.jpg`,
  url: `${SITE_URL}/about`,
};

const katjaSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#katja`,
  name: "Katja",
  jobTitle: "Co-founder, Yoga Teacher & Somatic Coach",
  description:
    "Katja is a German yoga teacher and somatic coach. Her work lives at the intersection of body and mind — helping women reconnect to themselves through breath, movement, and stillness. She guides women navigating life transitions toward more aligned, embodied lives.",
  knowsAbout: [
    "somatic practice",
    "yoga",
    "breathwork",
    "mind-body connection",
    "life transitions",
    "intuition and embodiment",
  ],
  worksFor: { "@type": "Organization", name: "Season of Self" },
  image: `${SITE_URL}/assets/katja_hero.jpeg`,
  url: `${SITE_URL}/about`,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Season of Self",
  alternateName: "Season of Self LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/green_logo.png`,
  description:
    "Season of Self is an online learning and mentorship space for women seeking guidance on their life path — clarity on their purpose, their direction, and how to build a life that feels aligned with who they actually are.",
  knowsAbout: [
    "life path guidance",
    "finding your purpose",
    "career and life clarity for women",
    "alignment coaching",
    "intentional living",
    "Dream Life Mapping",
    "ikigai",
    "somatic practice",
    "mindset and meditation",
  ],
  founder: [
    { "@id": `${SITE_URL}/about#charlotte` },
    { "@id": `${SITE_URL}/about#katja` },
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
  "@id": `${SITE_URL}#website`,
  name: "Season of Self",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
};

const dreamLifeMappingSchema = {
  "@context": "https://schema.org",
  "@type": ["Course", "Service"],
  "@id": `${SITE_URL}/dream-life#course`,
  name: "Dream Life Mapping",
  url: `${SITE_URL}/dream-life`,
  description:
    "A self-paced course and 12-month community for women on the verge of breakthrough — designed to help you get clear on your direction, identify your zone of genius, work through what's keeping you stuck, and start building a life that actually feels like yours.",
  provider: { "@id": `${SITE_URL}#organization` },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Women seeking life-path clarity, purpose, and aligned direction",
  },
  about: [
    "finding your life path",
    "identifying your purpose and zone of genius",
    "moving past fear, resistance, and overthinking",
    "building a life aligned with your values",
  ],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "self-paced",
  },
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Season of Self?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Season of Self is an online learning and mentorship space, founded by Charlotte and Katja, for women looking for guidance on their life path. It helps you get clear on what you actually want, identify your most aligned direction, and start building a life that feels true to you.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get help finding my life path?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Season of Self offers structured guidance for women navigating questions about their direction and purpose: a free Ikigai quiz at ikigai.seasonofself.co, a free Clarity workshop, and Dream Life Mapping — a self-paced course and 12-month community designed to take you from feeling stuck to having clear direction and momentum.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Season of Self for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's designed for women who feel they're meant for more, who are tired of overthinking and second-guessing every direction, and who want a structured way to reconnect with their intuition, find their purpose, and build a life and work aligned with who they actually are.",
      },
    },
    {
      "@type": "Question",
      name: "What is Dream Life Mapping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dream Life Mapping is Season of Self's flagship offering — a self-paced online course paired with a 12-month community. It helps you get clear on your zone of genius, your most aligned path, and the next steps to start building it. It includes a somatic toolkit and async coaching support from Charlotte and Katja.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the founders of Season of Self?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charlotte (a French-Canadian entrepreneur and certified life purpose coach who built a multi-million dollar beauty brand) and Katja (a German yoga teacher and somatic coach). They met in Nicaragua and built Season of Self together to help women bridge the gap between where they are and where they want to be.",
      },
    },
  ],
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

        {/* ── Structured data — Organization, WebSite, Founders, Course, FAQ ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(charlotteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(katjaSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dreamLifeMappingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
