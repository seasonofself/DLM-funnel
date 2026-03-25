"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WavyUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function WavyUnderline({
  children,
  color = "#c19673",
  className = "",
}: WavyUnderlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.svg
        viewBox="0 0 200 12"
        className="absolute -bottom-1 left-0 w-full h-[8px]"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.path
          d="M0 8 Q25 2, 50 8 T100 8 T150 8 T200 8"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
      </motion.svg>
    </span>
  );
}
