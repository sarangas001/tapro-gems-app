"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { validateEmail } from "@/lib/newsletter/email";

type State =
  | { phase: "idle" }
  | { phase: "loading" }
  | { phase: "success"; message: string }
  | { phase: "error"; message: string };

export default function NewsletterForm() {
  const id = useId();
  const inFlight = useRef(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ phase: "idle" });
  const loading = state.phase === "loading";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return; // blocks double submits before React re-renders
    const check = validateEmail(email);
    if (!check.ok) {
      setState({ phase: "error", message: "Please enter a valid email address." });
      return;
    }
    inFlight.current = true;
    setState({ phase: "loading" });
    try {
      const website = new FormData(event.currentTarget).get("website");
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: check.email, website }),
      });
      const data = (await response.json().catch(() => ({}))) as { message?: string; error?: string };
      if (response.ok) {
        setState({
          phase: "success",
          message: data.message ?? "Please check your inbox to confirm your subscription.",
        });
        setEmail("");
      } else {
        setState({ phase: "error", message: data.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setState({ phase: "error", message: "Could not reach the server. Please try again." });
    } finally {
      inFlight.current = false;
    }
  }

  const hintId = `${id}-hint`;
  const statusId = `${id}-status`;

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full max-w-md flex-col gap-3" aria-busy={loading}>
      <label htmlFor={`${id}-email`} className="text-sm font-medium uppercase tracking-[0.2em] text-gold-600">
        New arrivals by email
      </label>
      <p id={hintId} className="text-sm leading-relaxed text-ink-muted">
        Subscribe to receive an email whenever we publish a new gemstone or jewellery piece. See our{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-ink">
          Privacy Policy
        </Link>
        .
      </p>
      {/* Honeypot: hidden from people and assistive tech. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          placeholder="you@example.com"
          aria-describedby={`${hintId} ${statusId}`}
          aria-invalid={state.phase === "error"}
          className="h-12 min-w-0 flex-1 rounded-full border border-navy-900/15 bg-white px-5 text-sm text-ink placeholder:text-ink-muted/50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 items-center justify-center rounded-full bg-gold-500 px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:opacity-60"
        >
          {loading ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p
        id={statusId}
        role={state.phase === "error" ? "alert" : "status"}
        aria-live={state.phase === "error" ? "assertive" : "polite"}
        className={`min-h-5 text-sm ${state.phase === "error" ? "text-red-700" : "text-ink-muted"}`}
      >
        {state.phase === "loading" && "Sending your confirmation email…"}
        {(state.phase === "success" || state.phase === "error") && state.message}
      </p>
    </form>
  );
}
