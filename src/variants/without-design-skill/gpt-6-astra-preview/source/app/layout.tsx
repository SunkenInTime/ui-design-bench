import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

const sans = localFont({
  src: [
    { path: "./fonts/dm-regular.ttf", weight: "400" },
    { path: "./fonts/dm-medium.ttf", weight: "500" },
    { path: "./fonts/dm-bold.ttf", weight: "700" },
    { path: "./fonts/dm-extra-bold.ttf", weight: "800" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "./fonts/instrument-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/instrument-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const space = localFont({
  src: [
    { path: "./fonts/space-regular.ttf", weight: "400" },
    { path: "./fonts/space-bold.ttf", weight: "700" },
  ],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mote — A little space for your mind",
  description: "Keep your notes, inspiration, and little sparks of curiosity in one thoughtful space. Meet mote, your second brain.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className={`astra-source-root ${sans.variable} ${serif.variable} ${space.variable}`}><>{children}</></div>;
}
