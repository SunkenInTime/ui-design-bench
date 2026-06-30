import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IterationSwitcher from "../components/iteration-switcher";
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
  title: "Loam - A second brain for your notes",
  description:
    "Loam links your notes as you write them, so every idea stays one search away.",
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
      <body className="min-h-full">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
