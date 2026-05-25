"use client";

import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  separator?: string;
  speed?: number; // seconds for one full loop
  className?: string;
  textClassName?: string;
};

/**
 * Bold marquee strip in the Astrid Jade style:
 * uppercase, heavy letter-spacing, sans-serif weight.
 */
export default function Marquee({
  items,
  separator = "✦",
  speed = 60,
  className = "",
  textClassName = "",
}: MarqueeProps) {
  const loop = [...items, ...items, ...items, ...items];

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
        {loop.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-8 px-8 font-sans font-semibold text-sm sm:text-base tracking-[0.32em] uppercase ${textClassName}`}
          >
            <span>{item}</span>
            <span className="text-base opacity-50">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
