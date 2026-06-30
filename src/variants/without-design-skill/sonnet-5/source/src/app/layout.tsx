import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VariantSwitcher } from "../components/variant-switcher";
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
  title: "Cortex — Your second brain",
  description:
    "Five landing page explorations for Cortex, the note-taking app that thinks alongside you.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <VariantSwitcher />
      </body>
    </html>
  );
}
