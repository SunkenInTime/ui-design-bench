import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Space_Grotesk,
  EB_Garamond,
  Newsreader,
  Manrope,
  Zilla_Slab,
} from "next/font/google";
import "@/generated/scoped-variant-css/with-design-skill/glm-5.2/source/src/app/globals.css";
import { IterationSwitcher } from "../components/IterationSwitcher";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Marginalia", template: "Marginalia — %s" },
  description:
    "A second brain for your working mind. Five design directions for a note-taking app that remembers so you don't have to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${jetbrains.variable} ${spaceGrotesk.variable} ${ebGaramond.variable} ${newsreader.variable} ${manrope.variable} ${zillaSlab.variable}`}
    >
      <body>
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
