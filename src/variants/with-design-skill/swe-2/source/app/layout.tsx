import type { Metadata } from "next";
import {
  Spectral,
  Space_Grotesk,
  IBM_Plex_Mono,
  Archivo,
  Newsreader,
  Anton,
} from "next/font/google";
import "./globals.css";
import DesignSwitcher from "./components/DesignSwitcher";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Commonplace — a second brain",
  description:
    "A note-taking application designed as a second brain. Five design studies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${grotesk.variable} ${plexMono.variable} ${archivo.variable} ${newsreader.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
