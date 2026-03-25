"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "terracotta" | "ink" | "white" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  children,
  href = "#pricing",
  variant = "terracotta",
  className = "",
  size = "md",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-300 cursor-pointer rounded-pill";

  const sizes = {
    sm: "text-sm px-6 py-3",
    md: "text-base px-8 py-4",
    lg: "text-lg px-10 py-5",
  };

  const variants = {
    terracotta:
      "bg-terracotta text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
    ink:
      "bg-ink text-cream hover:bg-charcoal hover:shadow-lifted active:scale-[0.98]",
    white:
      "bg-white text-ink hover:shadow-lifted hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border-2 border-current text-ink hover:bg-ink hover:text-cream active:scale-[0.98]",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
