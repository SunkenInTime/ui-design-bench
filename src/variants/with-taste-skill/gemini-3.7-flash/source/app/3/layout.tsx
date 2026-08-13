import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-kith-display",
});

export const metadata: Metadata = {
  title: "Kith",
  description: "Everything you have read, kept in reach.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} ${display.variable} min-h-[100dvh] bg-[#eef1f3] text-[#1c2421] dark:bg-[#121614] dark:text-[#e6eeea]`}
    >
      {children}
    </div>
  );
}
