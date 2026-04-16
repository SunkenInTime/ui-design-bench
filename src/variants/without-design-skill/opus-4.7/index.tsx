import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import "@/variants/without-design-skill/opus-4.7/source/src/app/globals.css";
import Page1 from "@/variants/without-design-skill/opus-4.7/source/src/app/(landing-iterations)/one/page";
import Page2 from "@/variants/without-design-skill/opus-4.7/source/src/app/(landing-iterations)/two/page";
import Page3 from "@/variants/without-design-skill/opus-4.7/source/src/app/(landing-iterations)/three/page";
import Page4 from "@/variants/without-design-skill/opus-4.7/source/src/app/(landing-iterations)/four/page";
import Page5 from "@/variants/without-design-skill/opus-4.7/source/src/app/(landing-iterations)/five/page";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default module;
