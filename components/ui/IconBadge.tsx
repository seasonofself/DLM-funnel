"use client";

interface IconBadgeProps {
  icon: "sparkle" | "eye" | "brain" | "compass" | "rocket" | "star" | "heart" | "shield" | "check" | "wave";
  color?: string;
  size?: number;
  className?: string;
}

const icons: Record<string, (color: string, size: number) => React.ReactNode> = {
  sparkle: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill={c} />
    </svg>
  ),
  eye: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" fill={c} opacity="0.3" />
    </svg>
  ),
  brain: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M12 2a5 5 0 0 1 4.5 7.2A4 4 0 0 1 18 13a4 4 0 0 1-2.8 3.8A3 3 0 0 1 12 22" />
      <path d="M12 2a5 5 0 0 0-4.5 7.2A4 4 0 0 0 6 13a4 4 0 0 0 2.8 3.8A3 3 0 0 0 12 22" />
      <path d="M12 2v20" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  ),
  compass: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill={c} opacity="0.3" />
    </svg>
  ),
  rocket: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91-.79-.79-2.07-.8-2.91-.09z" />
      <path d="M12 15l-3-3" />
      <path d="M18 2s4 4 4 10l-7-3 3-7z" fill={c} opacity="0.15" />
      <path d="M6 22s4-4 10-4" />
    </svg>
  ),
  star: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c} opacity="0.8">
      <path d="M12 2l2.4 7.2H22l-6 4.5 2.3 7.3L12 16.5 5.7 21l2.3-7.3-6-4.5h7.6z" />
    </svg>
  ),
  heart: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c} opacity="0.7">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.3l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  shield: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M12 3L4 7v5c0 5.6 3.4 10.3 8 12 4.6-1.7 8-6.4 8-12V7l-8-4z" />
      <path d="M9 12l2 2 4-4" strokeWidth="2" />
    </svg>
  ),
  check: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={c} opacity="0.15" />
      <path d="M8 12l3 3 5-5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  wave: (c, s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.4" />
    </svg>
  ),
};

export default function IconBadge({
  icon,
  color = "#E8735A",
  size = 28,
  className = "",
}: IconBadgeProps) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {icons[icon]?.(color, size)}
    </span>
  );
}
