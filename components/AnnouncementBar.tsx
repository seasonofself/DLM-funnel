"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

export default function AnnouncementBar() {
  const [mounted, setMounted] = useState(false);
  const [targetDate] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("dlm-countdown-target");
      if (stored) {
        const parsed = new Date(stored);
        if (parsed.getTime() > Date.now()) return parsed;
      }
      const target = new Date(Date.now() + 48 * 60 * 60 * 1000);
      localStorage.setItem("dlm-countdown-target", target.toISOString());
      return target;
    }
    return new Date(Date.now() + 48 * 60 * 60 * 1000);
  });

  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div
      initial={{ y: -44, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-fomo-red"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-11 flex items-center justify-center gap-3 sm:gap-5">
        <p className="text-[11px] sm:text-sm font-sans font-medium text-white tracking-wide truncate">
          ✦ Founding Member Pricing: <strong>$497</strong>
          <span className="hidden sm:inline"> · Save $500</span>
          <span className="text-white/60 mx-1.5">·</span>
          <span className="font-mono text-white tabular-nums" suppressHydrationWarning>
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
          <span className="hidden sm:inline text-white/60 ml-1">left</span>
        </p>
        <a
          href="#pricing"
          className="flex-shrink-0 text-[11px] sm:text-xs font-sans font-semibold tracking-wide bg-white text-fomo-red px-3.5 py-1 rounded-pill hover:bg-cream transition-colors"
        >
          Enroll Now →
        </a>
      </div>
    </motion.div>
  );
}
