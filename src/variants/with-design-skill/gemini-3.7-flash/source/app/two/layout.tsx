import { Big_Shoulders, IBM_Plex_Mono, Literata } from "next/font/google";
import type { ReactNode } from "react";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-slip-display",
  adjustFontFallback: false,
});

const body = Literata({
  subsets: ["latin"],
  variable: "--font-slip-body",
  style: ["normal", "italic"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-slip-mono",
  weight: ["400", "500"],
});

export default function SlipLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
