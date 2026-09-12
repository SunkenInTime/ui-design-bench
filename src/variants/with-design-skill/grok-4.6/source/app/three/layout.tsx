import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import styles from "./three.module.css";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-three-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-three-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-three-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loci — Catalog",
  description: "A card for every thought. A drawer for the rest.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${styles.wrap}`}
    >
      {children}
    </div>
  );
}
