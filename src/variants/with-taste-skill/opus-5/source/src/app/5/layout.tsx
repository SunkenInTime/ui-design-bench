import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";

/* Syne has no italic, so headline emphasis here is weight, never a faked oblique. */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tessera: notes that find each other",
  description:
    "Tessera links every note as you write it, then brings the right ones back when you need them.",
};

export default function IterationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-scheme="dark"
      className={`${syne.variable} ${spaceGrotesk.variable} bg-[#0b0b0c]`}
    >
      {children}
    </div>
  );
}
