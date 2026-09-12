import type { Metadata } from "next";
import { IBM_Plex_Mono, Literata, Syne } from "next/font/google";
import styles from "./one.module.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-one-display",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-one-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-one-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loci — Palace",
  description: "A notebook with a floor plan. Walk the rooms back to a thought.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${syne.variable} ${literata.variable} ${mono.variable} ${styles.wrap}`}
    >
      {children}
    </div>
  );
}
