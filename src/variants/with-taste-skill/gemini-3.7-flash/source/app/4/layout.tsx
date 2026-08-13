import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-kith-mono",
});

export const metadata: Metadata = {
  title: "Kith",
  description: "Your notes, as a graph you can walk.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} ${mono.variable} min-h-[100dvh] bg-zinc-100 text-zinc-900 dark:bg-[#0e1116] dark:text-zinc-100`}
    >
      {children}
    </div>
  );
}
