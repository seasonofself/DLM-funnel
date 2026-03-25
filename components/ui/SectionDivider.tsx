"use client";

interface SectionDividerProps {
  variant?: "line" | "bar" | "thick";
  color?: "terracotta" | "sage" | "blue" | "linen" | "ink" | "cream";
  className?: string;
}

const barColors = {
  terracotta: "bg-terracotta",
  sage: "bg-sage",
  blue: "bg-dusty-blue",
  linen: "bg-linen",
  ink: "bg-ink",
  cream: "bg-cream",
};

const lineColors = {
  terracotta: "border-terracotta/30",
  sage: "border-sage/30",
  blue: "border-dusty-blue/30",
  linen: "border-linen",
  ink: "border-ink/10",
  cream: "border-cream/20",
};

export default function SectionDivider({
  variant = "line",
  color = "ink",
  className = "",
}: SectionDividerProps) {
  if (variant === "bar" || variant === "thick") {
    return (
      <div
        className={`w-full ${variant === "thick" ? "h-2.5" : "h-1.5"} ${barColors[color]} ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`w-full border-t ${lineColors[color]} ${className}`}
      aria-hidden="true"
    />
  );
}
