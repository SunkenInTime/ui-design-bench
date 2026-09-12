import type { Metadata } from "next";
import { Figtree, Inconsolata, Spectral } from "next/font/google";
import styles from "./two.module.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-two-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-two-body",
  display: "swap",
});

const mono = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-two-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loci — Specimen",
  description: "Notes that grow dendrites. A second brain prepared as a living specimen.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${spectral.variable} ${figtree.variable} ${mono.variable} ${styles.wrap}`}
    >
      {children}
    </div>
  );
}
