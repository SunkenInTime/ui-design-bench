import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VersionSwitcher } from "../components/version-switcher";
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
  title: "Kith",
  description: "A notes app that keeps every thought findable.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
