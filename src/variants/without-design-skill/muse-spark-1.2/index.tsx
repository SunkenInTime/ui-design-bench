import { Geist, Geist_Mono, Instrument_Serif, Newsreader, Space_Grotesk } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "./source/src/app/1/page";
import Page2 from "./source/src/app/2/page";
import Page3 from "./source/src/app/3/page";
import Page4 from "./source/src/app/4/page";
import Page5 from "./source/src/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/muse-spark-1.2/source/src/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400" });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const pages = { "1": Page1, "2": Page2, "3": Page3, "4": Page4, "5": Page5 } as const;
const fontVariables = `${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${newsreader.variable} ${spaceGrotesk.variable}`;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={fontVariables}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
