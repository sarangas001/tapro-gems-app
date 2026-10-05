import type { Metadata } from "next";
import ResultMessage from "@/components/newsletter/ResultMessage";

export const metadata: Metadata = {
  title: "Newsletter | Tapro Gems",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ status?: string | string[] }>;
}

/** Display only. Visiting this URL never changes subscription state. */
export default async function ResultPage({ searchParams }: PageProps) {
  const raw = (await searchParams).status;
  return <ResultMessage status={typeof raw === "string" ? raw : "invalid"} />;
}
