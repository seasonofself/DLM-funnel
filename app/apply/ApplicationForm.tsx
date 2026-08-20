"use client";

import { useEffect, useState } from "react";
import { application } from "@/content/season";

/* ─────────────────────────────────────────────────────────────
   The autumn season application — the 7 questions from the copy
   doc, as one calm editorial page. Submits to /api/apply (Google
   Sheet + email to hello@seasonofself.co + Kit tag autumn-applied).
   Name & email prefill from the /cohort two-step via sessionStorage
   (never via URL params).
───────────────────────────────────────────────────────────── */

const inputClass =
  "w-full bg-cream border border-ink/25 rounded-[8px] px-5 py-4 text-base text-ink placeholder:text-ink/40 font-sans focus:outline-none focus:border-ink/60 transition-colors";

const textareaClass = `${inputClass} min-h-[132px] resize-y leading-relaxed`;

function QuestionLabel({
  number,
  children,
  hint,
}: {
  number?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-4">
      <p className="font-display lowercase text-xl sm:text-[1.35rem] leading-snug text-ink">
        {number && (
          <span className="text-terracotta mr-2">{number} ·</span>
        )}
        {children}
      </p>
      {hint && (
        <p className="mt-2 font-sans text-[14px] text-ink/70 leading-relaxed">
          {hint}
        </p>
      )}
    </div>
  );
}

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    instagram: "",
    location: "",
    workLife: "",
    dreams: "",
    blockers: [] as string[],
    blockersOther: "",
    vision: "",
    selfCare: "",
    readiness: "",
    readinessNote: "",
    tuition: "",
    anythingElse: "",
    wantsCall: "",
    company: "", // honeypot — must stay empty
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  /* Prefill from the /cohort two-step (sessionStorage, same-origin) */
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("sos-applicant");
      if (raw) {
        const { firstName, email } = JSON.parse(raw);
        setForm((f) => ({
          ...f,
          name: f.name || firstName || "",
          email: f.email || email || "",
        }));
      }
    } catch {
      /* prefill is a nicety, never a requirement */
    }
  }, []);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleBlocker = (b: string) =>
    setForm((f) => ({
      ...f,
      blockers: f.blockers.includes(b)
        ? f.blockers.filter((x) => x !== b)
        : [...f.blockers, b],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          blockers: form.blockers.join(" · "),
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Application submit error:", err);
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="card-editorial bg-[#DDE2D2] p-8 sm:p-12 text-center">
        <p className="font-display lowercase text-2xl text-ink mb-5">
          received.
        </p>
        <p className="font-sans text-ink/80 text-base sm:text-[17px] leading-[1.7] max-w-md mx-auto">
          One of us will be in your inbox (or your voice notes) within 48
          hours. Until then, maybe don&rsquo;t open the scroll. Consider it
          practice.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ── basics ── */}
      <section className="card-editorial bg-[#DDE2D2] p-7 sm:p-10">
        <p className="card-label mb-6">first, the basics</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="your name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder="your email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="instagram (optional)"
            value={form.instagram}
            onChange={(e) => set("instagram")(e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            required
            placeholder="where do you live & what timezone?"
            value={form.location}
            onChange={(e) => set("location")(e.target.value)}
            className={inputClass}
          />
        </div>
        {/* honeypot — hidden from real users */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={(e) => set("company")(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </section>

      {/* ── 1 · work life now ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel number="1">
          where are you in your work life right now, &amp; what&rsquo;s no
          longer fitting?
        </QuestionLabel>
        <textarea
          required
          value={form.workLife}
          onChange={(e) => set("workLife")(e.target.value)}
          className={textareaClass}
        />
      </section>

      {/* ── 2 · the dreams ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel
          number="2"
          hint="Even the half-formed ideas count. List everything that's crossed your mind, no matter how unrealistic it feels."
        >
          what have you dreamt of starting?
        </QuestionLabel>
        <textarea
          required
          value={form.dreams}
          onChange={(e) => set("dreams")(e.target.value)}
          className={textareaClass}
        />

        <div className="mt-8">
          <QuestionLabel hint="(choose all that feel true)">
            &amp; what&rsquo;s been standing between you and those dreams?
          </QuestionLabel>
          <div className="flex flex-wrap gap-2.5">
            {application.blockers.map((b) => {
              const on = form.blockers.includes(b);
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => toggleBlocker(b)}
                  aria-pressed={on}
                  className={`font-sans text-[13px] sm:text-sm px-4 py-2.5 rounded-[8px] border transition-colors ${
                    on
                      ? "bg-ink text-cream border-ink"
                      : "bg-transparent text-ink/80 border-ink/25 hover:border-ink/60"
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
          {form.blockers.includes("something else") && (
            <input
              type="text"
              placeholder="tell us"
              value={form.blockersOther}
              onChange={(e) => set("blockersOther")(e.target.value)}
              className={`${inputClass} mt-4`}
            />
          )}
        </div>
      </section>

      {/* ── 3 · december 18 ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel number="3">
          imagine it&rsquo;s december 18 &amp; the season went beautifully.
          what&rsquo;s different?
        </QuestionLabel>
        <textarea
          required
          value={form.vision}
          onChange={(e) => set("vision")(e.target.value)}
          className={textareaClass}
        />
      </section>

      {/* ── 4 · self-care ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel
          number="4"
          hint="What helps you feel the most grounded, at peace, clear? And do you practice it on a regular basis?"
        >
          what are your current self-care routines?
        </QuestionLabel>
        <textarea
          required
          value={form.selfCare}
          onChange={(e) => set("selfCare")(e.target.value)}
          className={textareaClass}
        />
      </section>

      {/* ── 5 · time & tech readiness ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel number="5">
          the season asks for about 3 hours a week, plus gentle boundaries
          with your phone &amp; social media for the twelve weeks. ready for
          that?
        </QuestionLabel>
        <div className="space-y-3">
          {application.readiness.map((r) => (
            <label
              key={r}
              className={`flex items-center gap-3 font-sans text-[15px] text-ink/85 border rounded-[8px] px-5 py-3.5 cursor-pointer transition-colors ${
                form.readiness === r
                  ? "border-ink bg-ink/[0.04]"
                  : "border-ink/25 hover:border-ink/60"
              }`}
            >
              <input
                type="radio"
                name="readiness"
                required
                checked={form.readiness === r}
                onChange={() => set("readiness")(r)}
                className="accent-[#6E7A62]"
              />
              {r}
            </label>
          ))}
        </div>
        {form.readiness === "that might be hard for me" && (
          <input
            type="text"
            placeholder="tell us more (optional)"
            value={form.readinessNote}
            onChange={(e) => set("readinessNote")(e.target.value)}
            className={`${inputClass} mt-4`}
          />
        )}
      </section>

      {/* ── 6 · tuition ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel number="6">
          founding tuition is $997, or 3 × $350. if we&rsquo;re a fit, are you
          ready to make that investment this season?
        </QuestionLabel>
        <div className="space-y-3">
          {application.tuitionReadiness.map((t) => (
            <label
              key={t}
              className={`flex items-center gap-3 font-sans text-[15px] text-ink/85 border rounded-[8px] px-5 py-3.5 cursor-pointer transition-colors ${
                form.tuition === t
                  ? "border-ink bg-ink/[0.04]"
                  : "border-ink/25 hover:border-ink/60"
              }`}
            >
              <input
                type="radio"
                name="tuition"
                required
                checked={form.tuition === t}
                onChange={() => set("tuition")(t)}
                className="accent-[#6E7A62]"
              />
              {t}
            </label>
          ))}
        </div>
      </section>

      {/* ── 7 · anything else + the call ── */}
      <section className="card-editorial card-editorial--filled p-7 sm:p-10">
        <QuestionLabel number="7">
          anything else you want us to know, about you, your season, or how
          you&rsquo;re really doing right now?
        </QuestionLabel>
        <textarea
          value={form.anythingElse}
          onChange={(e) => set("anythingElse")(e.target.value)}
          className={textareaClass}
        />
        <div className="mt-8">
          <QuestionLabel>
            &amp; would you like a 20-minute call with one of us before
            deciding?
          </QuestionLabel>
          <div className="flex flex-wrap gap-3">
            {application.callOptions.map((c) => (
              <label
                key={c}
                className={`flex items-center gap-3 font-sans text-[15px] text-ink/85 border rounded-[8px] px-5 py-3.5 cursor-pointer transition-colors ${
                  form.wantsCall === c
                    ? "border-ink bg-ink/[0.04]"
                    : "border-ink/25 hover:border-ink/60"
                }`}
              >
                <input
                  type="radio"
                  name="wantsCall"
                  required
                  checked={form.wantsCall === c}
                  onChange={() => set("wantsCall")(c)}
                  className="accent-[#6E7A62]"
                />
                {c}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* ── submit ── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-accent w-full disabled:opacity-60"
        >
          {status === "submitting"
            ? "sending…"
            : "submit my application →"}
        </button>
        {status === "error" && (
          <p className="mt-4 text-center font-sans text-[14px] text-ink/80 leading-relaxed">
            Something went wrong on our end. Please try again, or email your
            answers to{" "}
            <a
              href="mailto:hello@seasonofself.co"
              className="underline decoration-ink/30 underline-offset-4"
            >
              hello@seasonofself.co
            </a>
            . They will reach us either way.
          </p>
        )}
      </div>
    </form>
  );
}
