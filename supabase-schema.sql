-- Blue — Supabase schema (MVP: email-as-identity, no passwords).
-- Run this once in Supabase → SQL Editor → New query → Run.
--
-- Identity is the user's email + a random magic-link token (sent in the
-- nightly reminder, opens their journey at /blue/home?u=<token>). Full
-- Supabase Auth can be layered on later without changing this shape.

create extension if not exists "pgcrypto";

-- who to remind, and how to recognize them
create table if not exists blue_users (
  id            uuid primary key default gen_random_uuid(),
  email         text unique not null,
  token         text unique not null,        -- magic-link token
  reminder_time text,                         -- e.g. '9:00 PM' (null = no nudge)
  created_at    timestamptz default now()
);

-- the one active journey per user (we keep history rows but only one 'active')
create table if not exists blue_journeys (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid references blue_users(id) on delete cascade,
  title              text,
  intention          text,
  script             text,
  audio_url          text,
  music_mood         text,
  frequency_label    text,
  est_minutes        int,
  target_sessions    int default 21,
  sessions_completed int default 0,
  streak             int default 0,
  last_listen_date   date,
  status             text default 'active',   -- 'active' | 'completed'
  created_at         timestamptz default now()
);

-- one row per completed listen (progress = count; never deleted, so it
-- can't reset — only the streak lapses)
create table if not exists blue_sessions (
  id          uuid primary key default gen_random_uuid(),
  journey_id  uuid references blue_journeys(id) on delete cascade,
  user_id     uuid references blue_users(id) on delete cascade,
  listened_on date,
  created_at  timestamptz default now()
);

create index if not exists idx_blue_journeys_user on blue_journeys(user_id);
create index if not exists idx_blue_journeys_active on blue_journeys(status);
create index if not exists idx_blue_sessions_journey on blue_sessions(journey_id);

-- The app talks to these only through server routes using the SERVICE ROLE
-- key, so row-level security can stay simple. Lock down anon access:
alter table blue_users    enable row level security;
alter table blue_journeys enable row level security;
alter table blue_sessions enable row level security;
-- (No anon policies added = anon/public cannot read or write. The service
--  role key used by our API routes bypasses RLS, which is what we want.)
