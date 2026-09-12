import { Figtree, Geist, Geist_Mono, Outfit, Space_Grotesk, Syne } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-src",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono-src",
  subsets: ["latin"],
});

export const outfit = Outfit({
  variable: "--font-outfit-src",
  subsets: ["latin"],
});

export const syne = Syne({
  variable: "--font-syne-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const figtree = Figtree({
  variable: "--font-figtree-src",
  subsets: ["latin"],
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-src",
  subsets: ["latin"],
});
