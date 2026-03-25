"use client";

interface FloatingShapeProps {
  color?: string;
  size?: number;
  shape?: "circle" | "blob" | "dot" | "ring";
  className?: string;
  delay?: number;
}

export default function FloatingShape({
  color = "#FFDCE5",
  size = 80,
  shape = "circle",
  className = "",
  delay = 0,
}: FloatingShapeProps) {
  const animClass = delay > 0 ? "animate-float-delayed" : "animate-float";

  const shapes: Record<string, React.ReactNode> = {
    circle: (
      <div
        className={`rounded-full ${animClass}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity: 0.4,
          animationDelay: `${delay}s`,
        }}
      />
    ),
    blob: (
      <div
        className={`${animClass}`}
        style={{
          width: size,
          height: size * 0.85,
          backgroundColor: color,
          opacity: 0.3,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animationDelay: `${delay}s`,
        }}
      />
    ),
    dot: (
      <div
        className={`rounded-full animate-float-slow`}
        style={{
          width: size * 0.3,
          height: size * 0.3,
          backgroundColor: color,
          opacity: 0.5,
          animationDelay: `${delay}s`,
        }}
      />
    ),
    ring: (
      <div
        className={`rounded-full ${animClass}`}
        style={{
          width: size,
          height: size,
          border: `2px solid ${color}`,
          opacity: 0.25,
          animationDelay: `${delay}s`,
        }}
      />
    ),
  };

  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      {shapes[shape]}
    </div>
  );
}
