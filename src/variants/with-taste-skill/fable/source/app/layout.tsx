import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  EB_Garamond,
  Space_Grotesk,
  Outfit,
  Archivo,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { IterationSwitcher } from "./components/iteration-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trove, a second brain that organizes itself",
  description:
    "Trove captures notes from anywhere, links them automatically, and resurfaces the right idea exactly when you need it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${garamond.variable} ${spaceGrotesk.variable} ${outfit.variable} ${archivo.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
