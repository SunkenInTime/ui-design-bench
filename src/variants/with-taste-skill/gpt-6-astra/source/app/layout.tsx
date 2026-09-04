import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Barlow_Condensed } from "next/font/google";
import { ExperienceProvider } from "@/variants/with-taste-skill/gpt-6-astra/source/components/experience";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", preload: false, subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", preload: false, subsets: ["latin"], display: "swap" });
const condensed = Barlow_Condensed({ variable: "--font-condensed", preload: false, subsets: ["latin"], weight: ["600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Morrow | A little more room for your mind",
  description: "A home for your notes, discoveries, and unfinished ideas. Explore five ways to make room for your second brain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${manrope.variable} ${condensed.variable}`} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <ExperienceProvider>{children}</ExperienceProvider>
      </body>
    </html>
  );
}
