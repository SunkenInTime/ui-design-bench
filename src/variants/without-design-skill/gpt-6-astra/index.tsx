import type { VariantModule } from "@/lib/gallery-types";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Barlow_Condensed,
  Caveat,
} from "next/font/google";
import Page1 from "./source/app/one/page";
import Page2 from "./source/app/two/page";
import Page3 from "./source/app/three/page";
import Page4 from "./source/app/four/page";
import Page5 from "./source/app/five/page";
import "@/generated/scoped-variant-css/without-design-skill/gpt-6-astra/source/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-editorial",
});
const condensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-condensed",
});
const handwritten = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} ${condensed.variable} ${handwritten.variable}`}
        style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
      >
        <Page />
      </div>
    );
  },
};

export default variantModule;
