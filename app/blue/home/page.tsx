"use client";

import { useEffect, useState } from "react";
import {
  getJourney,
  greeting,
  TARGET_SESSIONS,
  type Journey,
} from "@/lib/blueJourney";

/**
 * Blue — Home. The whole philosophy in one screen.
 * No feed, no library, no choices. One journey. One button: Continue.
 */
export default function Home() {
  const [journey, setJourney] = useState<Journey | null>(null);
  const [hello, setHello] = useState("Good evening");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setJourney(getJourney());
    setHello(greeting());
    setReady(true);
  }, []);

  const pct = journey
    ? Math.min(100, (journey.sessionsCompleted / journey.targetSessions) * 100)
    : 0;
  const complete = journey?.status === "completed";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05070f] text-blue-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_-5%,#1a2554_0%,#0b1230_45%,#04060e_100%)]" />
        <div className="absolute bottom-[-10%] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-amber-200/10 blur-[110px]" />
      </div>

      {!ready ? null : !journey ? (
        /* ── No journey yet ── */
        <div className="relative flex max-w-sm flex-col items-center px-8 text-center">
          <span className="mb-10 text-lg font-light tracking-[0.35em] text-blue-100">
            BLUE
          </span>
          <h1 className="mb-4 font-serif text-3xl font-light text-blue-50">
            Your journey hasn't begun yet.
          </h1>
          <p className="mb-10 text-blue-200/70">
            Answer a few reflective questions and Blue will craft your first
            identity journey.
          </p>
          <a
            href="/blue"
            className="rounded-full bg-blue-100 px-8 py-3 text-sm font-medium tracking-wide text-[#05070f] transition hover:bg-white"
          >
            Begin your first journey
          </a>
        </div>
      ) : (
        /* ── Active / completed journey ── */
        <div className="relative flex w-full max-w-sm flex-col items-center px-8 text-center">
          <p className="mb-10 text-sm tracking-wide text-blue-200/60">
            🌙 {hello}
          </p>

          <p className="mb-2 text-xs uppercase tracking-[0.4em] text-blue-300/50">
            Current journey
          </p>
          <h1 className="mb-8 font-serif text-3xl font-light leading-tight text-blue-50">
            {journey.title}
          </h1>

          {/* progress ring-ish bar */}
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-blue-100/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-100/80 to-blue-200/80 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mb-1 text-sm text-blue-100/90">
            {journey.sessionsCompleted} / {journey.targetSessions} sessions
          </p>
          {journey.streak > 0 && (
            <p className="mb-8 text-xs tracking-wide text-amber-100/70">
              🔥 {journey.streak} night{journey.streak === 1 ? "" : "s"} in a row
            </p>
          )}
          {journey.streak === 0 && <div className="mb-8" />}

          {complete ? (
            <>
              <p className="mb-6 text-blue-200/80">
                You did it — {TARGET_SESSIONS} sessions. Something has shifted.
                Let's listen for it.
              </p>
              <a
                href="/blue/reflection"
                className="rounded-full bg-blue-100 px-10 py-4 text-base font-medium tracking-wide text-[#05070f] transition hover:bg-white"
              >
                Begin reflection →
              </a>
            </>
          ) : (
            <>
              <p className="mb-1 text-xs uppercase tracking-[0.3em] text-blue-300/40">
                Estimated time
              </p>
              <p className="mb-8 text-sm text-blue-200/70">
                {journey.estimatedMinutes} minutes
              </p>
              <a
                href="/blue/player"
                className="rounded-full bg-blue-100 px-12 py-4 text-base font-medium tracking-wide text-[#05070f] shadow-[0_0_50px_-5px_rgba(180,205,255,0.4)] transition hover:bg-white"
              >
                ▶ Continue tonight
              </a>
            </>
          )}

          <p className="mt-12 text-[11px] text-blue-300/25">
            Same tape, every night. Consistency is the medicine.
          </p>
        </div>
      )}
    </main>
  );
}
