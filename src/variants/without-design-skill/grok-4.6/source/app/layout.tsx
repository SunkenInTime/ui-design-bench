import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Newsreader, Outfit, Syne } from "next/font/google";
import { VersionSwitcher } from "@/variants/without-design-skill/grok-4.6/source/app/components/version-switcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lumen — A second brain",
    template: "%s — Lumen",
  },
  description:
    "Lumen is a note-taking app that remembers so you can think. Capture once, link freely, and find the thread later.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${instrument.variable} ${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
