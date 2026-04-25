import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IterationSwitcher from "./_components/IterationSwitcher";
import "@/generated/scoped-variant-css/without-design-skill/glm-5.1/source/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse — Your Second Brain",
  description: "A note-taking app that thinks alongside you",
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
        <IterationSwitcher />
      </body>
    </html>
  );
}
