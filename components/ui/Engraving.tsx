/* ─────────────────────────────────────────────────────────────
   Engraving — bold symbolic marks & mystic glyphs.
   Charlotte's reference direction (Aug 2026): block-print
   starbursts & shells, and thin glyph symbols built from arcs,
   spirals & dots (intuition / transformation / alignment style).
   Not botanical, not fine-line engraving hatching.

   Original inline SVG (drawn for this site — licensing is a
   non-issue, each motif is tiny). All drawn with currentColor
   so they take ink on cream and cream on ink.

   Usage:
     <Engraving motif="spiral" className="w-16 text-ink/60" />
   Pair with .engraving (hover stir) or .engraving-drift (rest
   drift) from globals.css; both respect prefers-reduced-motion.
───────────────────────────────────────────────────────────── */

export type EngravingMotif =
  | "starburst"
  | "spiral"
  | "shell"
  | "wave"
  | "crescent"
  | "sun"
  | "sprout"
  | "arc";

type Props = {
  motif: EngravingMotif;
  className?: string;
  /** Decorative by default; pass a label to expose to screen readers. */
  label?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Fixed-precision coordinates so server & client render byte-identical
   markup (raw trig floats differ in the last bits and break hydration). */
const px = (n: number) => Number(n.toFixed(2));

/* Block-print starburst — solid core, tapered spikes (ref image 1) */
function StarburstSvg() {
  const C = 60;
  const spikes = Array.from({ length: 24 }, (_, i) => {
    const a = (i * Math.PI * 2) / 24;
    const r1 = 30;
    const r2 = i % 2 === 0 ? 56 : 46;
    const halfW = 0.055; // half-width of the spike base, in radians
    const x1 = px(C + r1 * Math.cos(a - halfW));
    const y1 = px(C + r1 * Math.sin(a - halfW));
    const x2 = px(C + r1 * Math.cos(a + halfW));
    const y2 = px(C + r1 * Math.sin(a + halfW));
    const xt = px(C + r2 * Math.cos(a));
    const yt = px(C + r2 * Math.sin(a));
    return `M ${x1} ${y1} L ${x2} ${y2} L ${xt} ${yt} Z`;
  });
  return (
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="26" fill="currentColor" />
      <path d={spikes.join(" ")} fill="currentColor" />
    </svg>
  );
}

/* Hand-drawn open spiral with orbit dots — transformation */
function SpiralSvg() {
  return (
    <svg viewBox="0 0 120 120" {...strokeProps} strokeWidth="2.6">
      <path d="M63 57 C 66 60, 64 65, 59 65 C 51 65, 47 57, 50 50 C 54 41, 65 38, 73 43 C 84 49, 86 63, 79 72 C 70 83, 53 84, 43 75 C 31 65, 30 47, 40 36" />
      <circle cx="86" cy="26" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="27" cy="84" r="2" fill="currentColor" stroke="none" />
      <circle cx="94" cy="88" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Primitive spiral shell with radiating dashes (ref image 4) */
function ShellSvg() {
  return (
    <svg viewBox="0 0 140 120" {...strokeProps} strokeWidth="2.4">
      {/* outer whorl */}
      <path d="M112 78 C 116 62, 108 44, 92 36 C 74 27, 52 32, 42 48 C 33 62, 38 80, 53 88 C 67 95, 84 90, 90 77 C 95 66, 89 54, 77 51 C 67 49, 58 56, 58 65 C 58 72, 64 77, 70 75" />
      {/* opening lip */}
      <path d="M112 78 C 108 86, 100 91, 90 92 L 86 78" strokeWidth="2.2" />
      {/* radiating dashes along the top edge */}
      <path d="M46 42 L 39 33" strokeWidth="2" />
      <path d="M56 35 L 52 25" strokeWidth="2" />
      <path d="M68 31 L 66 20" strokeWidth="2" />
      <path d="M80 31 L 81 20" strokeWidth="2" />
      <path d="M92 34 L 96 24" strokeWidth="2" />
      <path d="M102 41 L 109 33" strokeWidth="2" />
      {/* short inner ticks around the core spiral */}
      <path d="M64 57 L 60 51" strokeWidth="1.8" />
      <path d="M74 56 L 74 49" strokeWidth="1.8" />
      <path d="M82 62 L 88 58" strokeWidth="1.8" />
    </svg>
  );
}

/* Simple bold wave glyph with a dot */
function WaveSvg() {
  return (
    <svg viewBox="0 0 120 90" {...strokeProps} strokeWidth="2.8">
      <path d="M16 48 C 34 22, 60 22, 70 38 C 76 48, 68 55, 61 49" />
      <path d="M26 66 C 50 48, 82 48, 104 60" strokeWidth="2.4" />
      <circle cx="90" cy="28" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Bold crescent with a column of dots — quiet */
function CrescentSvg() {
  return (
    <svg viewBox="0 0 110 120" {...strokeProps} strokeWidth="2.6">
      <path d="M62 18 C 42 28, 32 46, 34 66 C 36 84, 47 97, 62 102 C 47 88, 41 72, 43 55 C 45 40, 52 27, 62 18 Z" />
      <circle cx="78" cy="42" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="82" cy="60" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="78" cy="78" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Circle, center dot, ring of dots — inner strength / vision */
function SunSvg() {
  return (
    <svg viewBox="0 0 120 120" {...strokeProps} strokeWidth="2.6">
      <circle cx="60" cy="60" r="20" />
      <circle cx="60" cy="60" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="60" cy="27" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="83.3" cy="36.7" r="2" fill="currentColor" stroke="none" />
      <circle cx="93" cy="60" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="83.3" cy="83.3" r="2" fill="currentColor" stroke="none" />
      <circle cx="60" cy="93" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="36.7" cy="83.3" r="2" fill="currentColor" stroke="none" />
      <circle cx="27" cy="60" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="36.7" cy="36.7" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Winged stem with dots — alignment / growth */
function SproutSvg() {
  return (
    <svg viewBox="0 0 120 130" {...strokeProps} strokeWidth="2.6">
      <circle cx="60" cy="18" r="2.6" fill="currentColor" stroke="none" />
      <path d="M60 34 C 46 34, 34 40, 26 52" />
      <path d="M60 34 C 74 34, 86 40, 94 52" />
      <path d="M60 56 C 49 56, 40 61, 34 70" strokeWidth="2.3" />
      <path d="M60 56 C 71 56, 80 61, 86 70" strokeWidth="2.3" />
      <path d="M60 34 L 60 82" strokeWidth="2.3" />
      <circle cx="60" cy="96" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Facing arcs with a dot column — intuition / the open door */
function ArcSvg() {
  return (
    <svg viewBox="0 0 120 100" {...strokeProps} strokeWidth="2.6">
      <path d="M40 20 C 22 34, 22 62, 40 78" />
      <path d="M80 20 C 98 34, 98 62, 80 78" />
      <path d="M52 32 C 42 42, 42 56, 52 66" strokeWidth="2.2" />
      <path d="M68 32 C 78 42, 78 56, 68 66" strokeWidth="2.2" />
      <circle cx="60" cy="36" r="2" fill="currentColor" stroke="none" />
      <circle cx="60" cy="49" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="62" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const MOTIFS: Record<EngravingMotif, () => JSX.Element> = {
  starburst: StarburstSvg,
  spiral: SpiralSvg,
  shell: ShellSvg,
  wave: WaveSvg,
  crescent: CrescentSvg,
  sun: SunSvg,
  sprout: SproutSvg,
  arc: ArcSvg,
};

export default function Engraving({ motif, className, label }: Props) {
  const Motif = MOTIFS[motif];
  return (
    <span
      className={className ? `inline-block ${className}` : "inline-block"}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Motif />
    </span>
  );
}
