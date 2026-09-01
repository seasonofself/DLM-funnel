"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLUE_FLAT, type BlueAnswers } from "@/lib/blueSchema";
import { createJourney, hasJourney } from "@/lib/blueJourney";

/**
 * Blue — onboarding + tape output.
 * A warm, reflective, coaching-style flow through six sections, ending in
 * a personalized subconscious-rewiring tape (title, intention, script,
 * key beliefs, sound bed, listening protocol).
 */

type Stage =
  | "intro"
  | "questions"
  | "loading"
  | "result"
  | "distress"
  | "error";

type Result = {
  title: string;
  intention: string;
  musicMood: string;
  script: string;
  keyBeliefs: string[];
  frequency: { label: string; detail: string; headphones: boolean };
  protocol: string[];
};

export default function BluePage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<BlueAnswers>({});
  const [result, setResult] = useState<Result | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [distressMsg, setDistressMsg] = useState("");
  const [audioBusy, setAudioBusy] = useState(false);
  const [existing, setExisting] = useState(false);
  const [reminderEmail, setReminderEmail] = useState("");
  const [reminderTime, setReminderTime] = useState("9:00 PM");

  useEffect(() => setExisting(hasJourney()), []);

  const total = BLUE_FLAT.length;
  const q = BLUE_FLAT[step];
  const raw = q ? answers[q.key] : undefined;

  const setText = (v: string) =>
    setAnswers((a) => ({ ...a, [q.key]: v }));
  const selectSingle = (opt: string) =>
    setAnswers((a) => ({ ...a, [q.key]: opt }));
  const toggleMulti = (opt: string) =>
    setAnswers((a) => {
      const cur = Array.isArray(a[q.key]) ? (a[q.key] as string[]) : [];
      const next = cur.includes(opt)
        ? cur.filter((x) => x !== opt)
        : [...cur, opt];
      return { ...a, [q.key]: next };
    });
  const fillExample = (ex: string) =>
    setAnswers((a) => {
      const cur = (a[q.key] as string) || "";
      return { ...a, [q.key]: cur ? cur + (cur.endsWith(" ") ? "" : " ") + ex : ex };
    });

  const next = () => (step < total - 1 ? setStep((s) => s + 1) : generate());
  const back = () => setStep((s) => Math.max(0, s - 1));

  async function generate() {
    setStage("loading");
    try {
      const res = await fetch("/api/blue/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      if (data?.distress) {
        setDistressMsg(data.message);
        setStage("distress");
        return;
      }
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setResult(data);
      setStage("result");
    } catch (e: any) {
      setErrorMsg(e?.message || "Something went wrong.");
      setStage("error");
    }
  }

  async function createAudio() {
    if (!result) return;
    setAudioBusy(true);
    try {
      const res = await fetch("/api/blue/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ script: result.script, tone: answers.tone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Voice failed.");

      const mins = parseInt(String(answers.audio_length || "").replace(/\D/g, ""), 10);
      createJourney({
        title: result.title,
        intention: result.intention,
        script: result.script,
        audioPath: data.path || "/blue/her-track.mp3",
        musicMood: result.musicMood,
        frequency: { label: result.frequency.label, detail: result.frequency.detail },
        estimatedMinutes: Number.isFinite(mins) && mins > 0 ? mins : 10,
        reminderEmail: reminderEmail.trim() || undefined,
        reminderTime: reminderEmail.trim() ? reminderTime : undefined,
      });
      window.location.href = "/blue/home";
    } catch (e: any) {
      setErrorMsg(e?.message || "Couldn't create the audio.");
      setStage("error");
    } finally {
      setAudioBusy(false);
    }
  }

  function restart() {
    setAnswers({});
    setResult(null);
    setStep(0);
    setStage("intro");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b18] text-blue-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1230] via-[#070b18] to-[#04060f]" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <span className="text-lg font-light tracking-[0.35em] text-blue-100">
            BLUE
          </span>
          {stage === "questions" && (
            <span className="text-xs tracking-widest text-blue-300/60">
              {step + 1} / {total}
            </span>
          )}
        </header>

        <AnimatePresence mode="wait">
          {/* INTRO */}
          {stage === "intro" && (
            <Fade key="intro" className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-300/70">
                A nightly ritual
              </p>
              <h1 className="font-serif text-4xl font-light leading-tight text-blue-50 sm:text-5xl">
                Become her
                <br />
                in your sleep.
              </h1>
              <p className="mt-6 max-w-md text-balance text-blue-200/70">
                A few reflective questions about what you're calling in and what
                still tightens around it. Blue writes you one personalized tape
                that helps your body feel the new you as safe and inevitable.
              </p>
              <button
                onClick={() => setStage("questions")}
                className="mt-10 rounded-full bg-blue-100 px-8 py-3 text-sm font-medium tracking-wide text-[#070b18] transition hover:bg-white"
              >
                Begin
              </button>
              {existing && (
                <a
                  href="/blue/home"
                  className="mt-4 text-sm tracking-wide text-blue-200/70 underline-offset-4 transition hover:text-blue-50 hover:underline"
                >
                  You have an active journey — continue →
                </a>
              )}
              <p className="mt-6 max-w-sm text-xs leading-relaxed text-blue-300/40">
                For relaxation and personal growth — not medical or
                psychological treatment. Take it at your own pace; nothing is
                required.
              </p>
            </Fade>
          )}

          {/* QUESTIONS */}
          {stage === "questions" && q && (
            <Fade key={`q-${step}`} className="flex flex-1 flex-col">
              <div className="mb-8 h-px w-full bg-blue-100/10">
                <div
                  className="h-px bg-blue-200/60 transition-all duration-500"
                  style={{ width: `${((step + 1) / total) * 100}%` }}
                />
              </div>

              {q.firstInSection && (
                <div className="mb-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-blue-300/50">
                    {q.sectionTitle}
                  </p>
                  <p className="text-sm italic leading-relaxed text-blue-200/60">
                    {q.sectionIntro}
                  </p>
                </div>
              )}
              {!q.firstInSection && (
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-300/40">
                  {q.sectionTitle}
                </p>
              )}

              <label className="mb-6 block font-serif text-2xl font-light leading-snug text-blue-50">
                {q.label}
              </label>

              {/* text input */}
              {q.type === "text" && (
                <>
                  <textarea
                    autoFocus
                    value={(raw as string) || ""}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={q.placeholder}
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-blue-100/15 bg-white/[0.03] p-5 text-lg leading-relaxed text-blue-50 placeholder:text-blue-300/30 focus:border-blue-200/40 focus:outline-none"
                  />
                  {q.examples && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {q.examples.map((ex) => (
                        <button
                          key={ex}
                          onClick={() => fillExample(ex)}
                          className="rounded-full border border-blue-100/15 px-3 py-1.5 text-xs text-blue-200/70 transition hover:border-blue-200/40 hover:text-blue-50"
                        >
                          {ex}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* single-select chips */}
              {q.type === "single" && (
                <div className="flex flex-wrap gap-2.5">
                  {q.options!.map((opt) => {
                    const active = raw === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => selectSingle(opt)}
                        className={`rounded-full border px-4 py-2.5 text-sm transition ${
                          active
                            ? "border-blue-200/70 bg-blue-100/15 text-blue-50"
                            : "border-blue-100/15 text-blue-200/70 hover:border-blue-200/40"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* multi-select chips */}
              {q.type === "multi" && (
                <div className="flex flex-wrap gap-2.5">
                  {q.options!.map((opt) => {
                    const active =
                      Array.isArray(raw) && (raw as string[]).includes(opt);
                    return (
                      <button
                        key={opt}
                        onClick={() => toggleMulti(opt)}
                        className={`rounded-full border px-4 py-2.5 text-sm transition ${
                          active
                            ? "border-amber-100/60 bg-amber-100/10 text-amber-50"
                            : "border-blue-100/15 text-blue-200/70 hover:border-blue-200/40"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm tracking-wide text-blue-300/60 transition hover:text-blue-100 disabled:invisible"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  className="rounded-full bg-blue-100 px-7 py-3 text-sm font-medium tracking-wide text-[#070b18] transition hover:bg-white"
                >
                  {step === total - 1 ? "Write my tape" : "Next"}
                </button>
              </div>
            </Fade>
          )}

          {/* LOADING */}
          {stage === "loading" && (
            <Fade key="loading" className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="mb-8 h-3 w-3 animate-pulse rounded-full bg-blue-200 shadow-[0_0_40px_10px_rgba(147,197,253,0.5)]" />
              <p className="font-serif text-2xl font-light text-blue-50">
                Writing your tape…
              </p>
              <p className="mt-3 max-w-xs text-sm text-blue-200/60">
                Regulating, releasing, rewriting. Shaping your words into who
                you're becoming.
              </p>
            </Fade>
          )}

          {/* RESULT */}
          {stage === "result" && result && (
            <Fade key="result" className="flex flex-1 flex-col">
              <p className="mb-2 text-center text-xs uppercase tracking-[0.4em] text-blue-300/60">
                Your tape
              </p>
              <h2 className="mb-4 text-center font-serif text-3xl font-light text-blue-50">
                {result.title}
              </h2>
              {result.intention && (
                <p className="mx-auto mb-8 max-w-md text-center text-blue-200/80 italic">
                  “{result.intention}”
                </p>
              )}

              {/* meta row */}
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Meta label="Sound bed">
                  {result.frequency.label}
                  <span className="mt-1 block text-xs font-normal text-blue-300/50">
                    {result.frequency.detail}
                  </span>
                </Meta>
                <Meta label="Music mood">{result.musicMood}</Meta>
              </div>

              {/* script */}
              <article className="max-h-[55vh] overflow-y-auto whitespace-pre-line rounded-2xl border border-blue-100/10 bg-white/[0.02] p-6 font-serif text-lg leading-[1.9] text-blue-100/90">
                {result.script}
              </article>

              {/* key beliefs */}
              {result.keyBeliefs.length > 0 && (
                <div className="mt-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-300/50">
                    Beliefs rewritten
                  </p>
                  <ul className="space-y-2">
                    {result.keyBeliefs.map((b, i) => (
                      <li key={i} className="flex gap-3 text-blue-100/85">
                        <span className="text-amber-100/70">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* protocol */}
              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-300/50">
                  How to listen
                </p>
                <ul className="space-y-2 text-sm text-blue-200/70">
                  {result.protocol.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-300/40">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* nightly nudge capture */}
              <div className="mt-10 rounded-2xl border border-blue-100/10 bg-white/[0.02] p-6">
                <p className="mb-1 font-serif text-lg text-blue-50">
                  A gentle nudge each night?
                </p>
                <p className="mb-4 text-sm text-blue-200/60">
                  The ritual works through repetition. We'll send one warm
                  reminder a night — no guilt, easy to turn off.
                </p>
                <input
                  type="email"
                  value={reminderEmail}
                  onChange={(e) => setReminderEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="mb-3 w-full rounded-xl border border-blue-100/15 bg-white/[0.03] px-4 py-3 text-blue-50 placeholder:text-blue-300/30 focus:border-blue-200/40 focus:outline-none"
                />
                {reminderEmail.trim() && (
                  <div className="flex flex-wrap gap-2">
                    {["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setReminderTime(t)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition ${
                          reminderTime === t
                            ? "border-amber-100/60 bg-amber-100/10 text-amber-50"
                            : "border-blue-100/15 text-blue-200/70 hover:border-blue-200/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 border-t border-blue-100/10 pt-8">
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={createAudio}
                    disabled={audioBusy}
                    className="rounded-full bg-blue-100 px-7 py-3 text-sm font-medium tracking-wide text-[#070b18] transition hover:bg-white disabled:opacity-60"
                  >
                    {audioBusy ? "Creating the audio…" : "Create the audio →"}
                  </button>
                  <button
                    onClick={generate}
                    className="rounded-full border border-blue-100/20 px-6 py-3 text-sm tracking-wide text-blue-100 transition hover:border-blue-100/50"
                  >
                    Regenerate
                  </button>
                  <button
                    onClick={restart}
                    className="rounded-full border border-blue-100/10 px-6 py-3 text-sm tracking-wide text-blue-300/60 transition hover:text-blue-100"
                  >
                    Start over
                  </button>
                </div>
                <p className="text-center text-xs text-blue-300/40">
                  “Create the audio” narrates this over your {result.frequency.label.toLowerCase()} bed.
                </p>
              </div>
            </Fade>
          )}

          {/* DISTRESS */}
          {stage === "distress" && (
            <Fade key="distress" className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="mb-4 font-serif text-2xl font-light text-blue-50">
                Before we go further
              </p>
              <p className="max-w-md leading-relaxed text-blue-200/80">
                {distressMsg}
              </p>
              <button
                onClick={restart}
                className="mt-8 rounded-full border border-blue-100/20 px-7 py-3 text-sm tracking-wide text-blue-100 transition hover:border-blue-100/50"
              >
                Back to start
              </button>
            </Fade>
          )}

          {/* ERROR */}
          {stage === "error" && (
            <Fade key="error" className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl font-light text-blue-50">
                A small hiccup.
              </p>
              <p className="mt-3 max-w-sm text-sm text-blue-200/70">{errorMsg}</p>
              <button
                onClick={() => setStage("result")}
                className="mt-8 rounded-full bg-blue-100 px-7 py-3 text-sm font-medium tracking-wide text-[#070b18] transition hover:bg-white"
              >
                Go back
              </button>
            </Fade>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-blue-100/10 bg-white/[0.02] p-4">
      <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-blue-300/50">
        {label}
      </p>
      <p className="text-sm font-medium text-blue-100/90">{children}</p>
    </div>
  );
}

function Fade({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
