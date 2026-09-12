import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loci — A memory palace for everything you learn",
  description:
    "Loci is a note-taking app that works like a second brain. Capture freely, link ideas, and walk back through what you know.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="min-h-full flex flex-col">{children}</div>
    </div>
  );
}
