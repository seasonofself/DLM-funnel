"use client";

import { useState } from "react";
import Image from "next/image";

type HeaderLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: HeaderLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dream-life", label: "Dream Life Mapping" },
  { href: "https://ikigai.seasonofself.co", label: "Quiz", external: true },
  { href: "/#gifts", label: "Gifts" },
];

export default function Header({ sticky = true }: { sticky?: boolean }) {
  const [open, setOpen] = useState(false);

  const positionClass = sticky ? "sticky top-0" : "relative";

  return (
    <header
      className={`${positionClass} z-30 bg-cream/95 backdrop-blur-sm border-b border-ink/5`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-3.5 sm:py-4">
        <a href="/" aria-label="Season of Self — home" className="flex items-center">
          <Image
            src="/assets/green_logo.png"
            alt="Season of Self"
            width={200}
            height={200}
            unoptimized
            priority
            className="h-7 sm:h-8 w-auto"
          />
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-sans text-sm font-medium text-ink/70 hover:text-ink transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-ink/80 hover:text-ink"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-ink/5 bg-cream">
          <ul className="flex flex-col px-6 py-3">
            {links.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block font-sans text-base font-medium text-ink/80 hover:text-ink py-3 border-b border-ink/5 last:border-b-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
