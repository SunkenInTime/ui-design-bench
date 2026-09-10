import type { Metadata } from "next";
import {
  Archivo,
  Archivo_Black,
  Familjen_Grotesk,
  Fraunces,
  IBM_Plex_Mono,
  Instrument_Serif,
  Newsreader,
  Space_Grotesk,
  Space_Mono,
  Unbounded,
} from "next/font/google";
import type { ReactNode } from "react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cairn — stack your thinking",
  description:
    "Five landing page directions for Cairn, a note-taking app that works as a second brain.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={[
        instrumentSerif.variable,
        archivo.variable,
        archivoBlack.variable,
        newsreader.variable,
        plexMono.variable,
        spaceMono.variable,
        fraunces.variable,
        spaceGrotesk.variable,
        unbounded.variable,
        familjen.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <div style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }} className="min-h-full">{children}</div>
    </div>
  );
}
