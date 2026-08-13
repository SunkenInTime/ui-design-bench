import { Caveat, IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import type { ReactNode } from "react";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-lab-serif",
  weight: ["400", "500", "600"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-lab-sans",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-lab-mono",
  weight: ["400", "500"],
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-lab-hand",
});

export default function LabLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${hand.variable}`}
    >
      {children}
    </div>
  );
}
