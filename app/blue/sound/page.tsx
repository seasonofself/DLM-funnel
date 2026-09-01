"use client";

/**
 * Blue — theta sound bed preview.
 * A throwaway listening page so Charlotte can hear the frequency bed on
 * its own (before the voice goes over it). Not part of the real product
 * flow — it just plays /blue/theta-bed.wav.
 */

export default function SoundPreview() {
  const layers = [
    { hz: "528 Hz", note: "solfeggio “transformation” — the audible root" },
    { hz: "396 Hz", note: "a calming companion tone, a fourth below" },
    { hz: "132 Hz", note: "warm low drone for body" },
    { hz: "7 Hz pulse", note: "theta entrainment — works on a phone speaker" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b18] text-blue-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1230] via-[#070b18] to-[#04060f]" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-12">
        <span className="mb-3 text-lg font-light tracking-[0.35em] text-blue-100">
          BLUE
        </span>
        <p className="mb-2 text-xs uppercase tracking-[0.4em] text-blue-300/60">
          The theta sound bed
        </p>
        <h1 className="mb-6 font-serif text-3xl font-light text-blue-50">
          Hear the frequency bed
        </h1>
        <p className="mb-8 max-w-md text-blue-200/70">
          This is the bed the voice will sit on top of. Play it out loud on a
          phone or laptop speaker — no headphones — and you should feel a soft
          7-times-a-second pulse underneath the tone.
        </p>

        <audio
          controls
          src="/blue/theta-bed.wav"
          className="mb-10 w-full"
          preload="auto"
        />

        <ul className="space-y-3 border-t border-blue-100/10 pt-6">
          {layers.map((l) => (
            <li key={l.hz} className="flex gap-4 text-sm">
              <span className="w-24 shrink-0 font-medium tracking-wide text-blue-100">
                {l.hz}
              </span>
              <span className="text-blue-200/60">{l.note}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-blue-300/40">
          Generated locally by scripts/generate-soundbed.mjs · tweak the recipe
          there. The science is evocative, not clinical — keep marketing soft.
        </p>
      </div>
    </main>
  );
}
