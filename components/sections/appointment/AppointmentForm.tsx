"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import type { GemstoneSummary } from "@/types/gemstone";
import { contactDetails } from "@/lib/data/contact";

const formats = ["In person — Tampere", "Video call", "Phone call"];

const fieldClasses =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none";

const labelClasses = "text-xs font-medium tracking-[0.15em] text-ink-muted uppercase";

export default function AppointmentForm({ gemstones }: { gemstones: GemstoneSummary[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        `We could not send your request. Please try again or contact us at ${contactDetails.phone}.`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Section background="ivory" className="pt-32 md:pt-40 lg:pt-48">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium tracking-[0.3em] text-gold-600 uppercase">
            Private Appointment
          </span>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            Book a Private Appointment
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Choose a time to speak with our team about your gemstone requirements, sourcing
            options and certification needs. We will confirm your appointment by email.
          </p>
          <p className="text-sm text-ink-muted">
            {contactDetails.address} · {contactDetails.phone}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <p className="rounded-2xl border border-gold-300 bg-white p-8 text-center text-base text-ink">
              Thank you — your appointment request has been received. Our team will confirm
              your time shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Full Name</span>
                <input type="text" name="fullName" required className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Email Address</span>
                <input type="email" name="email" required className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Phone Number</span>
                <input type="tel" name="phone" className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Appointment Format</span>
                <select name="format" required defaultValue="" className={fieldClasses}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {formats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Preferred Date</span>
                <input type="date" name="date" required className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Preferred Time</span>
                <input type="time" name="time" required className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClasses}>Gemstone of Interest</span>
                <select name="gemstone" defaultValue="" className={fieldClasses}>
                  <option value="">No specific gemstone</option>
                  {gemstones.map((gemstone) => (
                    <option key={gemstone.id} value={gemstone.name}>
                      {gemstone.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClasses}>Message</span>
                <textarea name="message" rows={4} className={`${fieldClasses} resize-none`} />
              </label>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-col gap-3 sm:col-span-2">
                {error ? (
                  <p role="alert" className="text-sm text-red-700">
                    {error}
                  </p>
                ) : null}
                <div>
                  <Button type="submit" size="md" disabled={sending}>
                    {sending ? "Sending…" : "Request Appointment"}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
