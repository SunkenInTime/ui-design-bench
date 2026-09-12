import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

// Syne and IBM Plex Sans ship as variable fonts here, so no `weight`.
// IBM Plex Mono is static, so its weights must be declared explicitly.
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cairn — the vault, drawn as a floor plan",
  description:
    "Cairn keeps your notes as markdown files on your own disk, links them with [[, and reopens the ones you forgot. Drawn here as a building you can walk back into.",
};

export default function MemoryPalaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${syne.variable} ${plexSans.variable} ${plexMono.variable}`}>
      {children}
    </div>
  );
}
