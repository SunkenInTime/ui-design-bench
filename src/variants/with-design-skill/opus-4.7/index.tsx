import {
  Archivo_Black,
  Caveat,
  Cormorant_Garamond,
  EB_Garamond,
  Fraunces,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
  Shippori_Mincho,
  VT323,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import "@/variants/with-design-skill/opus-4.7/source/src/app/globals.css";
import Page1 from "@/variants/with-design-skill/opus-4.7/source/src/app/1/page";
import Page2 from "@/variants/with-design-skill/opus-4.7/source/src/app/2/page";
import Page3 from "@/variants/with-design-skill/opus-4.7/source/src/app/3/page";
import Page4 from "@/variants/with-design-skill/opus-4.7/source/src/app/4/page";
import Page5 from "@/variants/with-design-skill/opus-4.7/source/src/app/5/page";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const ebGaramond = EB_Garamond({ variable: "--font-eb-garamond", subsets: ["latin"], display: "swap" });
const vt323 = VT323({ variable: "--font-vt323", subsets: ["latin"], weight: "400", display: "swap" });
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
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], display: "swap" });
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
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], display: "swap" });

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const fontVars = [
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
].join(" ");

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${fontVars} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default module;
