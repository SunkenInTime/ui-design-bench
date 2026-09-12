import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cortex — Your second brain",
    template: "%s · Cortex",
  },
  description:
    "Cortex is a note-taking app built as a second brain: capture once, link automatically, recall when it matters.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }} className="min-h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
