"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HighlightProps {
  children: React.ReactNode;
  color?: "linen" | "sage" | "terracotta" | "blue";
  className?: string;
}

const colorMap = {
  linen: "linear-gradient(to top, rgba(215, 207, 172, 0.45) 40%, transparent 40%)",
  sage: "linear-gradient(to top, rgba(147, 158, 122, 0.3) 40%, transparent 40%)",
  terracotta: "linear-gradient(to top, rgba(193, 150, 115, 0.3) 40%, transparent 40%)",
  blue: "linear-gradient(to top, rgba(156, 174, 193, 0.35) 40%, transparent 40%)",
};

export default function Highlight({
  children,
  color = "linen",
  className = "",
}: HighlightProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.span
      ref={ref}
      className={`relative inline pb-0.5 ${className}`}
      style={{
        backgroundImage: colorMap[color],
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
      }}
      initial={{ backgroundSize: "0% 100%" }}
      animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}
