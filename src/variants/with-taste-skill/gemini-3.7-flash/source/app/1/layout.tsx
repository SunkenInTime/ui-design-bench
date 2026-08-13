import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({ subsets: ["latin"] });
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-kith-mono",
});

export const metadata: Metadata = {
  title: "Kith",
  description: "Find the note you forgot you wrote.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} ${mono.variable} min-h-[100dvh] bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
    >
      {children}
    </div>
  );
}
