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
  title: "Marrow — your second brain",
  description:
    "Five landing-page directions for Marrow, a note-taking app that grows with your thinking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div style={{ fontFamily: "var(--font-geist-sans), system-ui, -apple-system, sans-serif" }} className="min-h-full">
        {children}
      </div>
    </div>
  );
}
