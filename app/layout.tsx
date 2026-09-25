import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cormorant, inter, playfair } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tapro Gems | Natural Sri Lankan Gemstones",
  description:
    "Tapro Gems is a Finland-based, family-owned gemstone house offering hand-selected, certified natural Sri Lankan sapphires, rubies and rare gemstones for collectors, investors and jewellery designers across Europe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
