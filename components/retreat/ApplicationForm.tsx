"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = {
  fullName: string;
  email: string;
  contact: string; // phone / instagram
  age: string;
  location: string;
  roomTier: string;
  about: string;
  walkAway: string;
  experience: string;
  dietary: string;
  heardFrom: string;
  anythingElse: string;
  company: string; // honeypot — must stay empty
};

const EMPTY: FormState = {
  fullName: "",
  email: "",
  contact: "",
  age: "",
  location: "",
  roomTier: "",
  about: "",
  walkAway: "",
  experience: "",
  dietary: "",
  heardFrom: "",
  anythingElse: "",
  company: "",
};

const ROOM_TIERS = [
  "Glamping — shared",
  "Glamping — private",
  "Bunk bed",
  "Shared room",
  "Private room",
  "Not sure yet",
];

const STEPS = ["About you", "Your retreat", "A few details"];

const labelCls =
  "block font-mono text-[10px] tracking-[0.22em] uppercase text-ink/55 mb-2";
const inputCls =
  "w-full bg-transparent border-b border-ink/25 py-2.5 font-sans text-base text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-ink";
const boxCls =
  "w-full bg-white/60 border border-ink/15 rounded-card px-4 py-3 font-sans text-base text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-ink/50";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  function validateStep(s: number): boolean {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!data.fullName.trim()) e.fullName = "Please add your name";
      if (!data.email.trim() || !isEmail(data.email))
        e.email = "Please add a valid email";
      if (!data.contact.trim()) e.contact = "Phone or Instagram, please";
      if (!data.location.trim()) e.location = "Where are you based?";
    }
    if (s === 1) {
      if (!data.roomTier) e.roomTier = "Pick the room you're drawn to";
      if (!data.about.trim()) e.about = "We'd love to hear a little about you";
      if (!data.walkAway.trim()) e.walkAway = "What are you hoping for?";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(0) || !validateStep(1)) {
      setStep(0);
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/retreat-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-card-lg border border-ink/15 bg-white/60 p-8 sm:p-12 text-center"
      >
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink/60 mb-4">
          Application received
        </p>
        <p className="font-display text-ink text-2xl sm:text-3xl leading-snug tracking-[-0.015em] mb-4">
          Thank you, lovely.
        </p>
        <p className="font-sans text-ink/70 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          We will be in touch within 48 hours to find a time to connect. We
          cannot wait to hear what is drawing you here.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card-lg border border-ink/12 bg-offwhite/70 p-6 sm:p-10">
      {/* progress */}
      <div className="flex items-center gap-3 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2">
              <span
                className={`flex items-center justify-center w-7 h-7 rounded-full font-mono text-[11px] transition-colors ${
                  i <= step ? "bg-ink text-cream" : "bg-ink/10 text-ink/40"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`hidden sm:block font-mono text-[10px] tracking-[0.16em] uppercase ${
                  i <= step ? "text-ink/70" : "text-ink/35"
                }`}
              >
                {s}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="flex-1 h-px bg-ink/15" />
            )}
          </div>
        ))}
      </div>

      {/* honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.company}
          onChange={set("company")}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {step === 0 && (
            <>
              <Field label="Full name" error={errors.fullName}>
                <input className={inputCls} value={data.fullName} onChange={set("fullName")} placeholder="Your name" autoComplete="name" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" error={errors.email}>
                  <input className={inputCls} type="email" value={data.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" />
                </Field>
                <Field label="Phone or Instagram" error={errors.contact}>
                  <input className={inputCls} value={data.contact} onChange={set("contact")} placeholder="+351… or @handle" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Age (optional)">
                  <input className={inputCls} value={data.age} onChange={set("age")} placeholder="" inputMode="numeric" />
                </Field>
                <Field label="Where are you based?" error={errors.location}>
                  <input className={inputCls} value={data.location} onChange={set("location")} placeholder="City, country" />
                </Field>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <Field label="Which room are you drawn to?" error={errors.roomTier}>
                <select className={`${inputCls} appearance-none cursor-pointer`} value={data.roomTier} onChange={set("roomTier")}>
                  <option value="" disabled>
                    Choose a room
                  </option>
                  {ROOM_TIERS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Tell me a little about you, and what's drawing you to this retreat right now" error={errors.about}>
                <textarea className={boxCls} rows={4} value={data.about} onChange={set("about")} placeholder="There are no wrong answers here." />
              </Field>
              <Field label="What are you hoping to walk away with?" error={errors.walkAway}>
                <textarea className={boxCls} rows={3} value={data.walkAway} onChange={set("walkAway")} />
              </Field>
              <Field label="Surf, yoga, or meditation experience (optional)">
                <input className={inputCls} value={data.experience} onChange={set("experience")} placeholder="All levels welcome" />
              </Field>
            </>
          )}

          {step === 2 && (
            <>
              <Field label="Dietary needs & allergies">
                <input className={inputCls} value={data.dietary} onChange={set("dietary")} placeholder="The menu is vegetarian; tell me anything else" />
              </Field>
              <Field label="How did you hear about us?">
                <input className={inputCls} value={data.heardFrom} onChange={set("heardFrom")} placeholder="Instagram, a friend, …" />
              </Field>
              <Field label="Anything else you'd like me to know? (optional)">
                <textarea className={boxCls} rows={3} value={data.anythingElse} onChange={set("anythingElse")} />
              </Field>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-6 font-sans text-sm text-fomo-red">
          {errorMsg}. Please try again, or email hello@seasonofself.co.
        </p>
      )}

      <div className="mt-9 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          className={`font-sans text-sm text-ink/55 hover:text-ink transition-colors ${
            step === 0 ? "invisible" : ""
          }`}
        >
          ← Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="group inline-flex items-center justify-center gap-3 font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 py-[18px] rounded-full bg-ink text-cream hover:bg-deep-brown transition-colors"
          >
            Continue
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex items-center justify-center gap-3 font-sans font-medium text-[11px] sm:text-xs tracking-[0.32em] uppercase px-9 py-[18px] rounded-full bg-ink text-cream hover:bg-deep-brown transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Submit application"}
            {status !== "loading" && (
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
      {error && <p className="mt-1.5 font-sans text-xs text-fomo-red">{error}</p>}
    </div>
  );
}
