import type { Metadata } from "next";
import {
  Instrument_Serif,
  DM_Sans,
  Syne,
  JetBrains_Mono,
  Fraunces,
  Literata,
  Outfit,
} from "next/font/google";
import { IterationSwitcher } from "../components/IterationSwitcher";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synapse — Your second brain",
  description:
    "A note-taking app that becomes your second brain. Capture freely, connect ideas, think with clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${dmSans.variable} ${syne.variable} ${jetbrains.variable} ${fraunces.variable} ${literata.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
