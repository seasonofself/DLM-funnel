# Blue — Architecture (Product Philosophy v2)

**Blue is an AI Identity Coach.** One active journey at a time. The user opens
the app and presses Play. The audio is the delivery mechanism; the
transformation is the product. The app evolves with the user, one identity
layer after another.

Guiding constraints: **Consistency > Novelty · Guidance > Choice ·
Transformation > Content · One Identity > Many Tracks.** Speaker-first audio,
spoken script is the hero, headphones never required.

---

## 1. Product architecture — the Identity OS

```
Onboarding (deep, 6 sections)
      │  one-time profile
      ▼
Journey 1 ──► nightly Play ──► ~21 sessions ──► Reflection ──► AI Evolution
                                                                   │
                                                          recommends next identity
                                                                   ▼
Journey 2 ──► … ──► Journey 3 ──► … (the OS grows with her)
```

Each journey = one personalized tape (script + speaker-first ambient bed),
listened to repeatedly. There is **no library, no feed, no browsing**. The
coach decides the next step.

**Built in this codebase**
| Piece | File |
|---|---|
| Onboarding flow + schema + binaural/safety logic | `lib/blueSchema.ts` |
| Script engine (7-movement, 2-step generation) | `lib/bluePrompt.ts` |
| Generation API | `app/api/blue/generate/route.ts` |
| Voice (TTS) API | `app/api/blue/voice/route.ts` |
| Journey + progress model (MVP: localStorage) | `lib/blueJourney.ts` |
| Home (the one-button hub) | `app/blue/home/page.tsx` |
| Player (counts sessions) | `app/blue/player/page.tsx` |
| Reflection questions | `lib/blueReflection.ts` |
| Next-journey AI prompt | `buildNextJourneyMessages` in `lib/bluePrompt.ts` |
| Speaker-first ambient bed generator | `scripts/generate-soundbed.mjs` |

**To build next:** `/blue/reflection` flow, `/api/blue/next-journey` route
(prompt is ready), accounts, and the reminder cron.

---

## 6. Reminder system

Gentle, warm, no guilt. One nudge per evening at the user's chosen time.

- **MVP (build first, reliable everywhere): scheduled email or SMS.** You
  already have **Resend** wired for email; SMS via Twilio if you want bedtime
  reach. A daily **Vercel Cron** job queries who hasn't listened today and
  sends their nudge. No app-install friction.
- **Phase 2: Web Push** via a PWA service worker (works once she taps "Add to
  Home Screen" on iOS 16.4+). Capacitor wrapper later if push reliability
  becomes the constraint.
- Copy is journey-aware: *"🌙 Tonight we continue your journey. Night 12 is
  ready."* / *"Your future self is waiting."* Suppress if already listened.

---

## 9. Database schema (Phase 2 — Supabase/Postgres)

The localStorage `Journey` is a deliberate drop-in for this. Same shape.

```sql
-- users (auth handled by Supabase Auth; this is the profile + onboarding)
users (
  id            uuid primary key,
  email         text unique,
  created_at    timestamptz default now(),
  onboarding    jsonb,                 -- the full BlueAnswers object
  reminder_time time,                  -- preferred nightly nudge
  push_sub      jsonb,                 -- web-push subscription (nullable)
  subscription  text                   -- 'trial' | 'active' | 'canceled'
)

journeys (
  id              uuid primary key,
  user_id         uuid references users(id),
  title           text,
  intention       text,
  script          text,
  audio_url       text,                -- stored mp3 (Supabase Storage / S3)
  music_mood      text,
  frequency_label text,
  est_minutes     int,
  target_sessions int default 21,
  status          text default 'active',  -- 'active' | 'completed'
  created_at      timestamptz default now()
)

sessions (                              -- one row per completed listen
  id          uuid primary key,
  journey_id  uuid references journeys(id),
  user_id     uuid references users(id),
  listened_on date,                     -- local date (for streak)
  created_at  timestamptz default now()
)

reflections (
  id          uuid primary key,
  journey_id  uuid references journeys(id),
  user_id     uuid references users(id),
  prompts     jsonb,                    -- free-text answers
  scales      jsonb,                    -- {trust_self: 7, ...}
  created_at  timestamptz default now()
)

next_recommendations (                  -- audit of the AI's coaching choices
  id            uuid primary key,
  user_id       uuid references users(id),
  from_journey  uuid references journeys(id),
  recommended   jsonb,                  -- {title, focus, why}
  alternates    jsonb,
  chosen        text,
  created_at    timestamptz default now()
)
```

Progress = `count(sessions where journey_id = active)`; streak = consecutive
`listened_on` dates. **Missing a day never deletes a session row**, so
progress can't reset — only the streak lapses.

---

## 10. Backend architecture

- **Framework:** Next.js (App Router) on Vercel — already in place. API routes
  are serverless functions.
- **AI:** OpenAI — `gpt-4o` for script + metadata + next-journey; `gpt-4o-mini-tts`
  ("shimmer") for voice. One key, one bill.
- **Audio:** speaker-first ambient bed pre-generated once (`scripts/…`), stored
  static; per-journey narration mp3 stored in Supabase Storage (Phase 2; today
  it's written to `public/blue/`). Voice + bed are **layered at playback**, not
  pre-mixed — no server-side mixing needed.
- **Auth + DB:** Supabase (Phase 2). MVP runs anonymous via localStorage to
  validate the loop first.
- **Cron:** Vercel Cron → nightly reminder dispatcher.
- **Payments:** Stripe (existing) — free trial → $9/mo or $70/yr; gate journey
  creation behind an active/trial subscription.
- **Cost shape:** generation is rare (≈ once per journey), replay is free. Audio
  ≈ a few cents per journey; everything else is fixed/cheap. The replay-forever
  ritual keeps variable cost near zero.

---

## 11. Mobile wireframes

```
┌─ HOME ────────────┐   ┌─ PLAYER ──────────┐   ┌─ ONBOARDING ──────┐
│                   │   │ ← Home      13/21 │   │ BLUE        3/25  │
│   🌙 Good evening │   │                   │   │ ───────·········· │
│                   │   │  Current journey  │   │ CURRENT CONTRACTION│
│  CURRENT JOURNEY  │   │  Becoming the     │   │                   │
│  Becoming the     │   │  Magnetic Founder │   │ Where do you feel │
│  Magnetic Founder │   │   Session 14      │   │ that contraction  │
│                   │   │                   │   │ in your body?     │
│  ▓▓▓▓▓▓▓░░░ 13/21 │   │      ◯  ))) )      │   │ ┌───────────────┐ │
│  🔥 6 nights      │   │     (moon+ripples)│   │ │               │ │
│                   │   │                   │   │ └───────────────┘ │
│  Est. 20 minutes  │   │  ▓▓▓▓░░░  4:12     │   │                   │
│                   │   │   ↺15s    ∞loop   │   │        [ Next ]   │
│ [▶ Continue tonight]  │  Ambient bed ▁▃▅  │   └───────────────────┘
│                   │   │                   │
│ Same tape nightly │   │ (falls asleep)    │   ┌─ REFLECTION ──────┐
└───────────────────┘   └───────────────────┘   │ You did it — 21.  │
                                                 │ How different do  │
┌─ COMPLETION ──────┐   ┌─ AI EVOLUTION ────┐   │ you feel vs 3 wks?│
│  ✓ 21 sessions    │   │ Your coach suggests│  │ ┌───────────────┐ │
│  Something shifted│   │                   │   │ └───────────────┘ │
│                   │   │  Receiving With   │   │ "I trust myself"  │
│ [Begin reflection]│ → │  Ease             │ ← │  1 ──●───── 10    │
│                   │   │  "Because you said│   │                   │
└───────────────────┘   │   receiving still │   │     [ Continue ]  │
                        │   feels hard…"    │   └───────────────────┘
                        │ [Begin this journey]
                        └───────────────────┘
```

**The whole product in one line:** Open app → press Play → fall asleep →
repeat → reflect → the coach hands you the next you.
