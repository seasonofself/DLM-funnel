import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Season of Self — Build a life that feels true to you",
  description:
    "Season of Self is an online learning and mentorship space for women who are ready to step into their full potential and create lives that feel aligned, abundant, and free.",
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
