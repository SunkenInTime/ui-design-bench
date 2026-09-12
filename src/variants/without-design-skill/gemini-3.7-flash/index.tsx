import {
  Fraunces,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Instrument_Serif,
  Newsreader,
  Syne,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "./source/app/1/page";
import Page2 from "./source/app/2/page";
import Page3 from "./source/app/3/page";
import Page4 from "./source/app/4/page";
import Page5 from "./source/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/gemini-3.7-flash/source/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  newsreader.variable,
  instrumentSerif.variable,
  syne.variable,
  plexMono.variable,
  fraunces.variable,
].join(" ");

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${fontVariables} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
