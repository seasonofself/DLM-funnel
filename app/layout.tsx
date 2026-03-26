import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Life Mapping — Season of Self",
  description:
    "Get clear on your dream life and start actually living it. A step-by-step course + year-long community to help you step into your highest timeline.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dream Life Mapping — Season of Self",
    description:
      "Get clear on your dream life and start actually living it.",
    type: "website",
    // TODO: Add og:image once brand assets are ready
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ──────────────────────────────────────────────
            ANALYTICS — paste your tracking scripts here

            Meta Pixel example:
            <script dangerouslySetInnerHTML={{ __html: `
              !function(f,b,e,v,n,t,s){...}('YOUR_PIXEL_ID');
            `}} />

            Google Analytics example:
            <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID" />
        ────────────────────────────────────────────── */}
      </head>
      <body>{children}</body>
    </html>
  );
}
