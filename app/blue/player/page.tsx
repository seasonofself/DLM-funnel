"use client";

import { useEffect, useRef, useState } from "react";
import { getJourney, recordSession, type Journey } from "@/lib/blueJourney";

/**
 * Blue — the nighttime player.
 *
 * Plays the ACTIVE JOURNEY's narration with the speaker-first ambient bed
 * looping softly underneath. When the narration finishes once, it counts a
 * completed session toward the journey's ~21 (guarded so an all-night loop
 * only credits one session per visit).
 *
 * Visual language (brand moodboard): indigo→midnight, one warm moon, the
 * signature sound-ripples emanating while she listens, soft grain.
 */
export default function Player() {
  const voiceRef = useRef<HTMLAudioElement>(null);
  const bedRef = useRef<HTMLAudioElement>(null);
  const countedRef = useRef(false);

  const [journey, setJourney] = useState<Journey | null>(null);
  const [audioSrc, setAudioSrc] = useState("/blue/her-track.mp3");
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [bedVol, setBedVol] = useState(0.35);
  const [sessionDone, setSessionDone] = useState(false);

  useEffect(() => {
    const j = getJourney();
    setJourney(j);
    if (j?.audioPath) setAudioSrc(j.audioPath);
  }, []);

  useEffect(() => {
    if (bedRef.current) bedRef.current.volume = bedVol;
  }, [bedVol]);

  useEffect(() => {
    const v = voiceRef.current;
    if (!v) return;
    const onTime = () => setTime(v.currentTime);
    const onMeta = () => setDuration(v.duration || 0);
    if (v.readyState >= 1) setDuration(v.duration || 0);
    const onEnd = () => {
      // Credit one completed session per visit, even while looping.
      if (!countedRef.current) {
        countedRef.current = true;
        const updated = recordSession();
        if (updated) {
          setJourney(updated);
          setSessionDone(true);
        }
      }
      if (loop) {
        v.currentTime = 0;
        v.play();
      } else {
        setPlaying(false);
        bedRef.current?.pause();
      }
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
    };
  }, [loop]);

  function toggle() {
    const v = voiceRef.current,
      b = bedRef.current;
    if (!v || !b) return;
    if (playing) {
      v.pause();
      b.pause();
      setPlaying(false);
    } else {
      b.volume = bedVol;
      b.play();
      v.play();
      setPlaying(true);
    }
  }

  function back15() {
    const v = voiceRef.current;
    if (v) v.currentTime = Math.max(0, v.currentTime - 15);
  }

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const pct = duration ? (time / duration) * 100 : 0;

  const title = journey?.title || "Your tape";
  const sessionNo = (journey?.sessionsCompleted ?? 0) + (sessionDone ? 0 : 1);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#04060e] text-blue-50">
      <style>{`
        @keyframes blueRipple { 0%{transform:scale(0.6);opacity:0} 15%{opacity:0.5} 100%{transform:scale(2.6);opacity:0} }
        @keyframes moonBreath { 0%,100%{transform:scale(1);opacity:0.95} 50%{transform:scale(1.04);opacity:1} }
        .ripple { animation: blueRipple 5s ease-out infinite; }
      `}</style>

      <audio ref={voiceRef} src={audioSrc} preload="auto" />
      <audio ref={bedRef} src="/blue/theta-bed.wav" preload="metadata" loop />

      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-5%,#1a2554_0%,#0b1230_45%,#04060e_100%)]" />
        <div
          className={`absolute left-1/2 top-[36%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[80px] transition-opacity duration-1000 ${
            playing ? "opacity-100" : "opacity-50"
          }`}
        />
      </div>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* top bar */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-5 text-xs tracking-wide text-blue-300/50">
        <a href="/blue/home" className="transition hover:text-blue-100">
          ← Home
        </a>
        {journey && (
          <span>
            {journey.sessionsCompleted} / {journey.targetSessions}
          </span>
        )}
      </div>

      <div className="relative flex w-full max-w-sm flex-col items-center px-8">
        <p className="mb-2 text-xs uppercase tracking-[0.45em] text-blue-200/50">
          Current journey
        </p>
        <h1 className="mb-1 text-center font-serif text-2xl font-light text-blue-50">
          {title}
        </h1>
        <p className="mb-14 text-sm tracking-wide text-blue-300/40">
          {sessionDone ? "Session complete" : `Session ${sessionNo}`}
        </p>

        {/* moon orb + ripples */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="relative mb-14 flex h-40 w-40 items-center justify-center"
        >
          {playing && (
            <>
              <span className="ripple absolute h-40 w-40 rounded-full border border-blue-200/30" />
              <span
                className="ripple absolute h-40 w-40 rounded-full border border-blue-200/25"
                style={{ animationDelay: "1.6s" }}
              />
              <span
                className="ripple absolute h-40 w-40 rounded-full border border-amber-100/20"
                style={{ animationDelay: "3.2s" }}
              />
            </>
          )}
          <span
            className="relative flex h-28 w-28 items-center justify-center rounded-full border border-blue-100/15 bg-[radial-gradient(circle_at_38%_32%,#fdf4dd_0%,#dfe9fb_38%,#7f9bd4_72%,#3c508f_100%)] shadow-[0_0_60px_10px_rgba(180,205,255,0.25)]"
            style={playing ? { animation: "moonBreath 5s ease-in-out infinite" } : undefined}
          >
            <span className="text-2xl text-[#1b264d]/80">{playing ? "❚❚" : "▶"}</span>
          </span>
        </button>

        {/* progress */}
        <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-blue-100/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-100/80 to-blue-200/80 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mb-10 flex w-full justify-between text-xs text-blue-300/40">
          <span>{fmt(time)}</span>
          <span>{fmt(duration)}</span>
        </div>

        {/* controls */}
        <div className="flex items-center gap-10">
          <button
            onClick={back15}
            className="flex flex-col items-center text-blue-200/70 transition hover:text-blue-50"
            aria-label="Back 15 seconds"
          >
            <span className="text-2xl">↺</span>
            <span className="text-[10px] tracking-wider">15s</span>
          </button>
          <button
            onClick={() => setLoop((l) => !l)}
            className={`flex flex-col items-center transition ${
              loop ? "text-amber-100/90" : "text-blue-300/30"
            }`}
            aria-label="Toggle loop"
          >
            <span className="text-2xl">∞</span>
            <span className="text-[10px] tracking-wider">
              {loop ? "loop on" : "loop off"}
            </span>
          </button>
        </div>

        {/* bed volume */}
        <div className="mt-14 w-full">
          <label className="mb-2 flex justify-between text-[11px] uppercase tracking-widest text-blue-300/40">
            <span>Ambient bed</span>
            <span>{Math.round(bedVol * 100)}%</span>
          </label>
          <input
            type="range"
            min={0}
            max={0.8}
            step={0.01}
            value={bedVol}
            onChange={(e) => setBedVol(parseFloat(e.target.value))}
            className="w-full accent-amber-100"
          />
        </div>

        {sessionDone && (
          <a
            href="/blue/home"
            className="mt-10 rounded-full border border-blue-100/20 px-6 py-2.5 text-sm tracking-wide text-blue-100 transition hover:border-blue-100/50"
          >
            Rest now — back home
          </a>
        )}
      </div>
    </main>
  );
}
