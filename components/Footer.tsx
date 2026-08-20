"use client";

import { useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Shared site footer. One source of truth for the nav links,
   the one-liner, and the mailing-list capture (Kit).
───────────────────────────────────────────────────────────── */

const QUIZ_URL = "https://ikigai.seasonofself.co";

export default function Footer({
  source = "site-footer",
}: {
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Feeds Kit, tagged by source so the nurture can run. Fire-and-forget:
    // we thank the visitor regardless so the form never feels broken.
    fetch("/api/kit-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    }).catch((err) => console.error("Mailing list signup error:", err));
    setSubmitted(true);
  };

  return (
    <footer className="bg-ink py-16 sm:py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <Image
              src="/assets/green_logo.png"
              alt="Season of Self"
              width={200}
              height={200}
              unoptimized
              className="h-8 w-auto mb-4 brightness-[10]"
            />
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              A guided season for women designing lives they love around work
              that&rsquo;s actually theirs.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  About Us →
                </a>
              </li>
              <li>
                <a
                  href={QUIZ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  The Inner Map →
                </a>
              </li>
              <li>
                <a
                  href="/cohort"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  The Season →
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/seasonofself.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a
                  href="https://substack.com/@seasonofselfco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Season of Self Substack →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms-of-service"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  className="font-sans text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.28em] uppercase text-cream/50 mb-5">
              Join the mailing list
            </p>
            {!submitted ? (
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cream/10 border border-cream/20 rounded-[8px] px-5 py-3 text-sm text-cream placeholder:text-cream/30 font-sans focus:outline-none focus:border-cream/40 transition-colors"
                />
                <button
                  type="submit"
                  className="btn btn-light w-full !py-3.5"
                >
                  Subscribe →
                </button>
              </form>
            ) : (
              <p className="font-sans text-sm text-cream/60">
                Thank you. We&rsquo;ll be in touch.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-sans text-xs text-cream/25 leading-relaxed">
            Season of Self LLC · 312 W 2nd St, Unit #A8972, Casper, WY 82601
          </p>
          <p className="font-sans text-xs text-cream/20">
            © {new Date().getFullYear()} Season of Self. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
