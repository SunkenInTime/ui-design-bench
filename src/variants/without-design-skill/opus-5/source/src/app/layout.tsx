import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesignSwitcher } from "@/variants/without-design-skill/opus-5/source/src/components/design-switcher";
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
  title: {
    default: "Recall — landing page iterations",
    template: "%s — Recall",
  },
  description:
    "Five landing page directions for Recall, a note-taking app built to work like a second brain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-neutral-950">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
