// ─────────────────────────────────────────────────────────────
//  Next live call for the /school "This month at school" card.
//  Server-only (reads env, fetches Circle) — call from a server
//  component and pass the result down as a prop.
//
//  Source order:
//  1. Circle events calendar, when CIRCLE_API_TOKEN is set
//     (Circle → Settings → Developers → Tokens → Admin V2).
//  2. The upcomingCalls list in content/school.ts.
//  Any Circle failure falls back to the list, so the card never
//  breaks because of an API hiccup.
// ─────────────────────────────────────────────────────────────

import { upcomingCalls } from "@/content/school";

/* Calls are hosted from Costa Rica (UTC-6): a call stays "next"
   through the end of its day in that timezone. */
const HOME_UTC_OFFSET = "-06:00";

export async function getNextLiveCallDate(): Promise<string | null> {
  return (await nextFromCircle()) ?? nextFromSchedule(new Date());
}

async function nextFromCircle(): Promise<string | null> {
  const token = process.env.CIRCLE_API_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      "https://app.circle.so/api/admin/v2/events?status=upcoming&per_page=10",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;

    const data = await res.json();
    const events: { name?: string; starts_at?: string }[] = Array.isArray(data)
      ? data
      : data.records ?? data.items ?? [];

    const upcoming = events
      .filter((e) => e.starts_at && new Date(e.starts_at) > new Date())
      .sort(
        (a, b) => +new Date(a.starts_at ?? 0) - +new Date(b.starts_at ?? 0)
      );

    /* Prefer an event that is clearly the monthly call; otherwise
       the soonest upcoming event. */
    const call =
      upcoming.find((e) => /call|coaching/i.test(e.name ?? "")) ?? upcoming[0];

    return call?.starts_at ? formatCallDate(new Date(call.starts_at)) : null;
  } catch {
    return null;
  }
}

function nextFromSchedule(now: Date): string | null {
  for (const iso of upcomingCalls) {
    const endOfCallDay = new Date(`${iso}T23:59:59${HOME_UTC_OFFSET}`);
    if (endOfCallDay >= now) {
      return formatCallDate(new Date(`${iso}T12:00:00Z`));
    }
  }
  /* Schedule ran dry — the card shows its quiet fallback line.
     Top up upcomingCalls in content/school.ts (or add the Circle
     token) to bring the date back. */
  return null;
}

function formatCallDate(date: Date): string {
  /* Render the calendar date as it reads from Costa Rica, so an
     evening call never rolls over to the next UTC day. */
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Costa_Rica",
  });
}
