import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DesignSwitcher from "@/variants/without-design-skill/opus-5/source/src/components/design-switcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loam — your second brain",
  description:
    "Five landing page directions for Loam, a note-taking app that remembers how your ideas connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Next.js 16 no longer overrides scroll-behavior on client-side
      // navigation — opt in explicitly.
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
