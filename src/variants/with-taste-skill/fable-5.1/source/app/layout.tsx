import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IterationSwitcher } from "./_shared/IterationSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loam. Notes that come back to you.",
  description:
    "Loam is a second brain built on plain Markdown files. Capture anywhere, link as you write, and let old notes resurface when they matter.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
