import {
  Archivo,
  EB_Garamond,
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Outfit,
  Space_Grotesk,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import "@/generated/scoped-variant-css/with-taste-skill/fable/source/app/globals.css";
import Page1 from "@/variants/with-taste-skill/fable/source/app/1/page";
import Page2 from "@/variants/with-taste-skill/fable/source/app/2/page";
import Page3 from "@/variants/with-taste-skill/fable/source/app/3/page";
import Page4 from "@/variants/with-taste-skill/fable/source/app/4/page";
import Page5 from "@/variants/with-taste-skill/fable/source/app/5/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
  geistSans.variable,
  geistMono.variable,
  garamond.variable,
  spaceGrotesk.variable,
  outfit.variable,
  archivo.variable,
  jetbrains.variable,
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
