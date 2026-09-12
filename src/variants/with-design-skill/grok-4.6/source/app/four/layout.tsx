import type { Metadata } from "next";
import { Ibarra_Real_Nova, JetBrains_Mono, Outfit } from "next/font/google";
import styles from "./four.module.css";

const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-four-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-four-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-four-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loci — Night",
  description: "The part of you that remembers at 1am.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${ibarra.variable} ${outfit.variable} ${mono.variable} ${styles.wrap}`}
    >
      {children}
    </div>
  );
}
