import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Fraunces,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";

import { IterationSwitcher } from "@/components/iteration-switcher";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const editorialFont = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nerva | Second Brain Landing Pages",
  description:
    "Five distinct landing page explorations for Nerva, a note-taking app built as a second brain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#050816] text-white [font-family:var(--font-body)]">
        <IterationSwitcher />
        {children}
      </body>
    </html>
  );
}
