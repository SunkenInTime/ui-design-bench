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
  title: "Engram — Your second brain",
  description:
    "Engram is a note-taking app that turns scattered thoughts into a living second brain. Capture, connect, and recall with ease.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }} className="min-h-full font-sans">
        {children}
      </div>
    </div>
  );
}
