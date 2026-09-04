import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Barlow_Condensed,
  Caveat,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-editorial",
});
const condensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-condensed",
});
const handwritten = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "mori — A little space for your whole mind",
  description:
    "Your notes, ideas, and everyday discoveries. Together in a second brain that feels like you. Explore five ways to make room for your mind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} ${condensed.variable} ${handwritten.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
