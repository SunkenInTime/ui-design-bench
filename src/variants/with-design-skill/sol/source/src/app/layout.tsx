import type { Metadata } from "next";
import {
  Archivo_Black,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Libre_Franklin,
  Manrope,
  Newsreader,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Tangent — Notes that find each other",
    template: "%s · Tangent",
  },
  description:
    "Tangent is a second brain for turning scattered notes into connected, useful memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${plexMono.variable} ${archivoBlack.variable} ${cormorant.variable} ${bricolage.variable} ${libreFranklin.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
