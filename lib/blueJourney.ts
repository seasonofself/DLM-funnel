/**
 * Blue — the Journey model (the spine of the new philosophy).
 *
 * Blue is an AI Identity Coach. A user has exactly ONE active journey at a
 * time. They listen to the same personalized tape repeatedly toward ~21
 * completed sessions. Missing a day NEVER resets progress; the streak is
 * encouragement only and may reset, but session count never does.
 *
 * MVP persistence = localStorage (no auth yet, so we can validate fast).
 * This is intentionally a drop-in for the Supabase `journeys` + `sessions`
 * tables in BLUE_ARCHITECTURE.md — same shape, swap the storage layer at
 * Phase 2 without touching callers.
 */

export const TARGET_SESSIONS = 21;
const KEY = "blue.journey.v1";

export type Journey = {
  id: string;
  title: string;
  intention: string;
  script: string;
  audioPath: string; // the narrated mp3 for this journey
  musicMood: string;
  frequency: { label: string; detail: string };
  estimatedMinutes: number;
  targetSessions: number;
  sessionsCompleted: number;
  streak: number;
  lastListenDate: string | null; // 'YYYY-MM-DD' (local)
  history: { date: string; at: string }[];
  createdAt: string;
  status: "active" | "completed";
  // Nightly nudge (drives the reminder cron once the server is live).
  reminderEmail?: string;
  reminderTime?: string; // e.g. "9:00 PM"
};

function todayStr(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return todayStr(d);
}

export function getJourney(): Journey | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Journey) : null;
  } catch {
    return null;
  }
}

function save(j: Journey) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(j));
}

export function hasJourney(): boolean {
  return !!getJourney();
}

/** Create (and replace) the active journey. */
export function createJourney(input: {
  title: string;
  intention: string;
  script: string;
  audioPath: string;
  musicMood: string;
  frequency: { label: string; detail: string };
  estimatedMinutes: number;
  reminderEmail?: string;
  reminderTime?: string;
}): Journey {
  const j: Journey = {
    id: `j_${Date.now()}`,
    targetSessions: TARGET_SESSIONS,
    sessionsCompleted: 0,
    streak: 0,
    lastListenDate: null,
    history: [],
    createdAt: new Date().toISOString(),
    status: "active",
    ...input,
  };
  save(j);
  return j;
}

/**
 * Record one completed listening session.
 * - sessionsCompleted always increments (never resets).
 * - streak increments on a new night, holds if already counted today,
 *   resets to 1 only after a gap — but progress is untouched by gaps.
 * - marks the journey complete at the target.
 */
export function recordSession(): Journey | null {
  const j = getJourney();
  if (!j) return null;
  const today = todayStr();

  if (j.lastListenDate !== today) {
    j.streak = j.lastListenDate === yesterdayStr() ? j.streak + 1 : 1;
    j.lastListenDate = today;
  }
  j.sessionsCompleted += 1;
  j.history.push({ date: today, at: new Date().toISOString() });
  if (j.sessionsCompleted >= j.targetSessions) j.status = "completed";

  save(j);
  return j;
}

export function clearJourney() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

/** A warm, time-of-day greeting for the home screen. */
export function greeting(d = new Date()): string {
  const h = d.getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}
