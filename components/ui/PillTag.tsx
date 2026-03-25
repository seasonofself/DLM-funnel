"use client";

interface PillTagProps {
  children: React.ReactNode;
  color?: "terracotta" | "sage" | "linen" | "blue" | "brown" | "ink";
  size?: "sm" | "md";
  className?: string;
}

const colorStyles = {
  terracotta: "bg-terracotta/15 text-terracotta-dark",
  sage: "bg-sage/15 text-sage-dark",
  linen: "bg-linen/30 text-ink",
  blue: "bg-dusty-blue/20 text-ink",
  brown: "bg-deep-brown/10 text-deep-brown",
  ink: "bg-ink/10 text-ink",
};

export default function PillTag({
  children,
  color = "terracotta",
  size = "sm",
  className = "",
}: PillTagProps) {
  const sizeClass = size === "sm" ? "text-xs px-3 py-1" : "text-sm px-4 py-1.5";

  return (
    <span
      className={`inline-flex items-center font-display font-medium tracking-wide uppercase rounded-pill ${sizeClass} ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
