import type { Metadata } from "next";
import {
  Caveat,
  DM_Sans,
  Instrument_Serif,
  Newsreader,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const editorial = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Second Brain — Five Landing Page Directions",
  description:
    "Five distinct landing page concepts for a thoughtful second-brain note-taking app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${editorial.variable} ${grotesk.variable} ${handwritten.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
