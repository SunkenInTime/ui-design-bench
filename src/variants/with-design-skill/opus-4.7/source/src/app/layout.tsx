import type { Metadata } from "next";
import {
  Fraunces,
  EB_Garamond,
  VT323,
  IBM_Plex_Mono,
  Instrument_Serif,
  Caveat,
  Cormorant_Garamond,
  Archivo_Black,
  JetBrains_Mono,
  Shippori_Mincho,
  Inter_Tight,
} from "next/font/google";
import "@/generated/scoped-variant-css/with-design-skill/opus-4.7/source/src/app/globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Second Brain · Five Iterations",
  description:
    "Landing page explorations for a note-taking application, each a distinct aesthetic world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        fraunces.variable,
        ebGaramond.variable,
        vt323.variable,
        ibmPlexMono.variable,
        instrumentSerif.variable,
        caveat.variable,
        cormorant.variable,
        archivoBlack.variable,
        jetbrainsMono.variable,
        shippori.variable,
        interTight.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
