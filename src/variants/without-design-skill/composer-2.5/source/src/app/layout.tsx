import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IterationSwitcher } from "../components/iteration-switcher";
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
  title: "Engram — Your second brain",
  description: "Five landing page design iterations for a note-taking second brain app.",
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
      <body className="flex min-h-full flex-col">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
