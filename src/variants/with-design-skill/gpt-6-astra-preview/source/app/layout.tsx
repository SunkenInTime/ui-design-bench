import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { StudioProvider } from "./components/studio";

const sans = localFont({ src: "./fonts/dm-sans.woff2", variable: "--font-sans", weight: "400 700", display: "swap" });
const editorial = localFont({ src: [{ path: "./fonts/newsreader.woff2", style: "normal", weight: "400 500" }, { path: "./fonts/newsreader-italic.woff2", style: "italic", weight: "400 500" }], variable: "--font-editorial", display: "swap" });
const geometric = localFont({ src: "./fonts/space-grotesk.woff2", variable: "--font-geometric", weight: "400 700", display: "swap" });
const garden = localFont({ src: [{ path: "./fonts/fraunces.woff2", style: "normal", weight: "400 600" }, { path: "./fonts/fraunces-italic.woff2", style: "italic", weight: "400 600" }], variable: "--font-garden", display: "swap" });
const playful = localFont({ src: "./fonts/bricolage.woff2", variable: "--font-playful", weight: "400 800", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Morrow — A little room for your mind", template: "%s | Morrow" },
  description: "A home for your notes, the things you find, and the ideas still taking shape. Find your own way to think with Morrow.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`astra-source-root ${sans.variable} ${editorial.variable} ${geometric.variable} ${garden.variable} ${playful.variable}`}>
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <StudioProvider>{children}</StudioProvider>
      </>
    </div>
  );
}
