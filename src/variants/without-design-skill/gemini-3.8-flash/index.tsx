import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "./source/src/app/1/page";
import Page2 from "./source/src/app/2/page";
import Page3 from "./source/src/app/3/page";
import Page4 from "./source/src/app/4/page";
import Page5 from "./source/src/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/gemini-3.8-flash/source/src/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
