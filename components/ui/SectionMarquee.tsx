"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  separator?: string;
  speed?: number;
  italic?: boolean;
  className?: string;
  textClassName?: string;
};

/**
 * Giant editorial section title that scrolls horizontally.
 * Used as a section header — the title repeats across the screen
 * like a magazine running head ("Our Process · Our Process · Our Process").
 */
export default function SectionMarquee({
  text,
  separator = "✦",
  speed = 80,
  italic = false,
  className = "",
  textClassName = "",
}: Props) {
  const items = Array(8).fill(text);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-8 px-6 font-display text-[3.5rem] sm:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] leading-[1] tracking-[-0.02em] ${
              italic ? "italic" : ""
            } ${textClassName}`}
          >
            <span>{item}</span>
            <span className="text-[0.5em] opacity-40 translate-y-[-0.1em]">
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
