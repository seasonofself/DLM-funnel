"use client";

/* ──────────────────────────────────────────────────────────
   FlowLines — the signature "topographic contour" motif from
   The Inner Map (ikigai.seasonofself.co). A band of nested,
   undulating lines that flow across the width, tight on the
   left and fanning out to the right, stroked with a sage ->
   linen -> terracotta gradient.

   Deterministic (index-based, no random) so SSR and client
   markup match. Decorative only.
─────────────────────────────────────────────────────────── */

const LINES = 5;
const W = 1440;
const H = 360;
const STEPS = 60;

function buildPath(i: number): string {
  const t = i / (LINES - 1); // 0 (top of band) .. 1 (bottom)
  const baseY = 40 + t * (H - 70);
  const pts: string[] = [];
  for (let s = 0; s <= STEPS; s++) {
    const px = s / STEPS; // 0..1 across the width
    const x = px * W;
    // amplitude is small on the left (the "pinch") and grows to the right
    const amp = 4 + px * 52 * (0.45 + 0.55 * t);
    const y =
      baseY +
      Math.sin(px * Math.PI * 1.5 + t * 0.9) * amp +
      Math.sin(px * Math.PI * 3.1 + i * 0.28) * amp * 0.28 -
      px * 18; // gentle upward sweep to the right
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return "M" + pts.join(" L");
}

const PATHS = Array.from({ length: LINES }, (_, i) => buildPath(i));

export default function FlowLines({
  className = "",
  gradientId = "flowlines-gradient",
  opacity = 0.5,
}: {
  className?: string;
  gradientId?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#939e7a" />
          <stop offset="48%" stopColor="#d7cfac" />
          <stop offset="100%" stopColor="#c19673" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity={opacity}>
        {PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
