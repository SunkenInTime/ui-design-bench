import {
  DM_Sans,
  Fraunces,
  Instrument_Serif,
  JetBrains_Mono,
  Literata,
  Outfit,
  Syne,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/without-design-skill/grok-4.5/source/src/app/one/page";
import PageTwo from "@/variants/without-design-skill/grok-4.5/source/src/app/two/page";
import PageThree from "@/variants/without-design-skill/grok-4.5/source/src/app/three/page";
import PageFour from "@/variants/without-design-skill/grok-4.5/source/src/app/four/page";
import PageFive from "@/variants/without-design-skill/grok-4.5/source/src/app/five/page";
import "@/generated/scoped-variant-css/without-design-skill/grok-4.5/source/src/app/globals.css";

const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const literata = Literata({ subsets: ["latin"], variable: "--font-literata", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div
        className={`${instrument.variable} ${dmSans.variable} ${syne.variable} ${jetbrains.variable} ${fraunces.variable} ${literata.variable} ${outfit.variable} min-h-full antialiased`}
      >
        <Page />
      </div>
    );
  },
};

export default variantModule;
