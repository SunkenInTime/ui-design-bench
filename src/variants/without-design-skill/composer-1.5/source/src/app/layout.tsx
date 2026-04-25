import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DesignSwitcher } from "./components/DesignSwitcher";
import "@/generated/scoped-variant-css/without-design-skill/composer-1.5/source/src/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Second Brain — Note-taking reimagined",
  description: "Your second brain. Capture, connect, recall.",
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
        <DesignSwitcher />
      </body>
    </html>
  );
}

