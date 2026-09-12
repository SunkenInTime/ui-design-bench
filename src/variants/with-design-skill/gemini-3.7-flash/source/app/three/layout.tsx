import { IBM_Plex_Mono, Italiana, Karla } from "next/font/google";
import type { ReactNode } from "react";

const display = Italiana({
  subsets: ["latin"],
  variable: "--font-atlas-display",
  weight: "400",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-atlas-body",
  weight: ["400", "500", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-atlas-mono",
  weight: ["400", "500"],
});

export default function AtlasLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}
