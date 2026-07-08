import { Geist, Geist_Mono, Newsreader, Outfit } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/with-taste-skill/grok-4.5/source/src/app/one/page";
import PageTwo from "@/variants/with-taste-skill/grok-4.5/source/src/app/two/page";
import PageThree from "@/variants/with-taste-skill/grok-4.5/source/src/app/three/page";
import PageFour from "@/variants/with-taste-skill/grok-4.5/source/src/app/four/page";
import PageFive from "@/variants/with-taste-skill/grok-4.5/source/src/app/five/page";
import "@/generated/scoped-variant-css/with-taste-skill/grok-4.5/source/src/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });

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
      <div className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${newsreader.variable} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
