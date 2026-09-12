import type { Metadata } from "next";
import {
  Familjen_Grotesk,
  Instrument_Sans,
  Martian_Mono,
} from "next/font/google";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cairn — the network map of your notes",
  description:
    "Cairn keeps every note as a plain markdown file on your own disk, links them with two square brackets, and runs Resurface: the service that brings back notes you have not opened in a year.",
};

export default function WayfindingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${familjen.variable} ${instrument.variable} ${martian.variable}`}
    >
      {children}
    </div>
  );
}
