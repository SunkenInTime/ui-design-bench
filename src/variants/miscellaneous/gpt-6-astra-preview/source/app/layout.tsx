import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { PageSwitcher } from "./components/page-switcher";

const dmSans = localFont({ src: "./fonts/dm-sans.woff2", variable: "--font-dm-sans", display: "swap", weight: "100 1000" });
const manrope = localFont({ src: "./fonts/manrope.woff2", variable: "--font-manrope", display: "swap", weight: "200 800" });
const spaceGrotesk = localFont({ src: "./fonts/space-grotesk.woff2", variable: "--font-space-grotesk", display: "swap", weight: "300 700" });

export const metadata: Metadata = {
  title: "Morrow — A little more room for your mind",
  description: "A personal home for your notes, saved ideas, and everyday discoveries. Explore five ways to make room for your thoughts with Morrow.",
};

export default function RootLayout({ children, showSwitcher = false }: { children: ReactNode; showSwitcher?: boolean }) {
  return <div className={`astra-source-root ${dmSans.variable} ${manrope.variable} ${spaceGrotesk.variable}`}><><a className="skip-link" href="#main-content">Skip to content</a>{children}{showSwitcher && <PageSwitcher />}</></div>;
}
