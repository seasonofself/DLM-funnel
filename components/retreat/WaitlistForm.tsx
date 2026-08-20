"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  buttonLabel?: string;
  microline?: string;
};

/**
 * Waitlist form for the October 2026 retreat (Lourinha, Portugal).
 * POSTs to /api/retreat-waitlist which tags the subscriber in Kit
 * with "ericeira-waitlist-oct-2026". The tag keeps its old name on
 * purpose: the Kit automation is already wired to it.
 */
export default function WaitlistForm({
  variant = "light",
  buttonLabel = "Join the waitlist",
  microline,
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = variant === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/retreat-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  /* ── tokens per variant ── */
  const labelClass = isDark ? "text-cream/55" : "text-ink/55";
  const inputClass = isDark
    ? "bg-transparent border-cream/25 text-cream placeholder:text-cream/40 focus:border-cream"
    : "bg-transparent border-ink/25 text-ink placeholder:text-ink/40 focus:border-ink";
  const buttonClass = isDark
    ? "bg-cream text-ink hover:bg-linen"
    : "bg-ink text-cream hover:bg-deep-brown";
  const microlineClass = isDark ? "text-cream/55" : "text-ink/55";

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-[20px] border ${
              isDark ? "border-cream/20 bg-cream/[0.04]" : "border-ink/15 bg-white/60"
            } p-8 sm:p-10`}
          >
            <p
              className={`font-mono text-[10px] tracking-[0.28em] uppercase mb-4 ${
                isDark ? "text-cream/55" : "text-ink/60"
              }`}
            >
              You are in
            </p>
            <p
              className={`font-display text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.1] tracking-[-0.02em] ${
                isDark ? "text-cream" : "text-ink"
              }`}
            >
              You are on the list. We will be in touch the moment everything is
              ready, <span className="italic">before anyone else</span>.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className={`block font-mono text-[10px] tracking-[0.24em] uppercase mb-2 ${labelClass}`}
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  placeholder="Charlotte"
                  className={`w-full border-b py-3 font-sans text-base sm:text-lg outline-none transition-colors ${inputClass}`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block font-mono text-[10px] tracking-[0.24em] uppercase mb-2 ${labelClass}`}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`w-full border-b py-3 font-sans text-base sm:text-lg outline-none transition-colors ${inputClass}`}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-flex items-center justify-center gap-3 shrink-0 whitespace-nowrap font-mono text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase px-12 sm:px-14 py-[22px] sm:py-[24px] rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${buttonClass}`}
              >
                {status === "loading" ? "Adding you..." : buttonLabel}
                {status !== "loading" && (
                  <span aria-hidden="true">→</span>
                )}
              </button>
              {microline && (
                <p className={`font-sans text-[13px] leading-relaxed ${microlineClass}`}>
                  {microline}
                </p>
              )}
            </div>

            {status === "error" && (
              <p className="font-sans text-sm text-fomo-red">{errorMsg}</p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
