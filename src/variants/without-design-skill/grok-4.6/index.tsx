import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Newsreader,
  Outfit,
  Syne,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/without-design-skill/grok-4.6/source/app/1/page";
import PageTwo from "@/variants/without-design-skill/grok-4.6/source/app/2/page";
import PageThree from "@/variants/without-design-skill/grok-4.6/source/app/3/page";
import PageFour from "@/variants/without-design-skill/grok-4.6/source/app/4/page";
import PageFive from "@/variants/without-design-skill/grok-4.6/source/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/grok-4.6/source/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  newsreader.variable,
  instrument.variable,
  syne.variable,
  outfit.variable,
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
