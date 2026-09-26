"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const enquiryTypes = [
  "General Enquiry",
  "Book an Appointment",
  "Gemstone Availability",
  "Private Sourcing",
  "Wholesale Enquiry",
  "Certification Question",
  "Other",
];

const contactMethods = ["Email", "Phone", "WhatsApp"];

const fieldClasses =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none";

const labelClasses = "text-xs font-medium tracking-[0.15em] text-ink-muted uppercase";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section background="ivory">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Send Us an Enquiry
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Tell us what you are looking for and our team will get back to
            you as soon as possible.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <p className="rounded-2xl border border-gold-300 bg-white p-8 text-center text-base text-ink">
              Thank you — your enquiry has been received. Our team will be
              in touch shortly.
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
                <span className={labelClasses}>Country</span>
                <input type="text" name="country" className={fieldClasses} />
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Enquiry Type</span>
                <select name="enquiryType" required defaultValue="" className={fieldClasses}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className={labelClasses}>Preferred Contact Method</span>
                <select name="contactMethod" defaultValue="" className={fieldClasses}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClasses}>Gemstone of Interest</span>
                <input
                  type="text"
                  name="gemstone"
                  placeholder="e.g. Royal Blue Ceylon Sapphire"
                  className={fieldClasses}
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClasses}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={`${fieldClasses} resize-none`}
                />
              </label>

              <div className="sm:col-span-2">
                <Button type="submit" size="md">
                  Send Enquiry
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
