import {
  Fraunces,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/without-design-skill/fable-5.1/source/app/1/page";
import Page2 from "@/variants/without-design-skill/fable-5.1/source/app/2/page";
import Page3 from "@/variants/without-design-skill/fable-5.1/source/app/3/page";
import Page4 from "@/variants/without-design-skill/fable-5.1/source/app/4/page";
import Page5 from "@/variants/without-design-skill/fable-5.1/source/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/fable-5.1/source/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const fontVars = [
  inter.variable,
  instrumentSerif.variable,
  fraunces.variable,
  spaceGrotesk.variable,
  jetbrainsMono.variable,
].join(" ");

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${fontVars} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
