import type { VariantModule } from "@/lib/gallery-types";
import { Geist, Geist_Mono, Manrope, Barlow_Condensed } from "next/font/google";
import { ExperienceProvider } from "./source/components/experience";
import Page1 from "./source/app/one/page";
import Page2 from "./source/app/two/page";
import Page3 from "./source/app/three/page";
import Page4 from "./source/app/four/page";
import Page5 from "./source/app/five/page";
import "@/generated/scoped-variant-css/with-taste-skill/gpt-6-astra/source/app/globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", preload: false, subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", preload: false, subsets: ["latin"], display: "swap" });
const condensed = Barlow_Condensed({ variable: "--font-condensed", preload: false, subsets: ["latin"], weight: ["600", "700"], display: "swap" });

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div
        className={`${geist.variable} ${mono.variable} ${manrope.variable} ${condensed.variable}`}
        style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}
      >
        <ExperienceProvider iteration={iteration}>
          <Page />
        </ExperienceProvider>
      </div>
    );
  },
};

export default variantModule;
