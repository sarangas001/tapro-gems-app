import type { Metadata } from "next";
import ResultMessage from "@/components/newsletter/ResultMessage";
import StatusCard from "@/components/newsletter/StatusCard";
import { inspectToken } from "@/lib/newsletter/subscribers";
import { confirmNewsletterAction } from "../actions";

export const metadata: Metadata = {
  title: "Confirm Subscription | Tapro Gems",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ token?: string | string[] }>;
}

export default async function ConfirmPage({ searchParams }: PageProps) {
  const raw = (await searchParams).token;
  const token = typeof raw === "string" ? raw : "";
  let state: Awaited<ReturnType<typeof inspectToken>> | "error" = "invalid";
  try {
    state = await inspectToken(token);
  } catch {
    state = "error";
  }

  if (state === "valid") {
    return (
      <StatusCard eyebrow="Newsletter" title="Confirm your subscription">
        <p className="mb-6">
          One last step. Confirm that you would like to receive an email when Tapro Gems publishes a new gemstone or
          jewellery piece.
        </p>
        <form action={confirmNewsletterAction}>
          <input type="hidden" name="token" value={token} />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold-500 px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Confirm subscription
          </button>
        </form>
      </StatusCard>
    );
  }
  return <ResultMessage status={state} />;
}
