import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://seasonofself.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Season of Self · Build a soft life around work you love",
    template: "%s · Season of Self",
  },
  description:
    "Season of Self helps women get clear on their direction and build lives that feel aligned with who they are. Start with The Inner Map or go deeper with Your Next Season, a self-paced life-design course from Charlotte and Katja.",
  applicationName: "Season of Self",
  keywords: [
    "Season of Self",
    "season of self cohort",
    "Season of Self Substack",
    "Dream Life Mapping",
    "12-week program for women",
    "start your own business",
    "career change for women",
    "find your path",
    "Charlotte and Katja",
    "The Inner Map",
    "The Inner Map quiz",
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
    title: "Season of Self · Build a soft life around work you love",
    description:
      "Get clear on your direction and build a life that feels aligned with who you are. Explore The Inner Map and Your Next Season from Charlotte and Katja.",
    url: SITE_URL,
    siteName: "Season of Self",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Season of Self · Build a soft life around work you love",
    description:
      "Explore The Inner Map and Your Next Season from Charlotte and Katja to get clear on your direction and begin building what feels aligned.",
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
    "Katja is a German yoga teacher and somatic coach. Her work lives at the intersection of body and mind, helping women reconnect to themselves through breath, movement, and stillness. She guides women navigating life transitions toward more aligned, embodied lives.",
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
    "Season of Self helps women get clear on their direction, reconnect with their intuition, and begin building lives and work that feel aligned with who they are.",
  knowsAbout: [
    "life path guidance",
    "finding your purpose",
    "career and life clarity for women",
    "alignment coaching",
    "intentional living",
    "Dream Life Mapping",
    "The Inner Map",
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
        text: "Season of Self is an online learning space for women who want clarity on their direction, deeper connection to themselves, and support in building lives that feel aligned.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get help finding my life path?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Season of Self offers structured guidance for women navigating questions about direction and purpose: The Inner Map at ikigai.seasonofself.co, and Your Next Season, a self-paced life-design course from Charlotte and Katja.",
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
      name: "What is Your Next Season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Next Season is a self-paced life-design course from Season of Self. It helps you clarify what you want, move through what is keeping you stuck, choose your next direction, and begin bringing it to life.",
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
        {/* ── Meta domain verification (covers the whole seasonofself.co
            apex, including ikigai.seasonofself.co automatically) ── */}
        <meta
          name="facebook-domain-verification"
          content="738xwvwktk44srr9uxqv1zl5ztouns"
        />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* ── Meta Pixel (PageView only on the marketing site) ──
            Pixel id is shared with ikigai.seasonofself.co so Meta sees
            one customer journey across both domains. Lead + Purchase
            events fire on the ikigai quiz subdomain — this site only
            fires PageView so we can retarget visitors who browsed the
            main site but didn't take the quiz. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1529049885442415');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1529049885442415&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
