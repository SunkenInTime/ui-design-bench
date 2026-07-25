import { Geist } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-taste-skill/opus-5/source/src/app/1/page";
import Page2 from "@/variants/with-taste-skill/opus-5/source/src/app/2/page";
import Page3 from "@/variants/with-taste-skill/opus-5/source/src/app/3/page";
import Page4 from "@/variants/with-taste-skill/opus-5/source/src/app/4/page";
import Page5 from "@/variants/with-taste-skill/opus-5/source/src/app/5/page";
import "@/generated/scoped-variant-css/with-taste-skill/opus-5/source/src/app/globals.css";

const geistSans = Geist({
  variable: "--f-geist",
  subsets: ["latin"],
  display: "swap",
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
      <div className={`${geistSans.variable} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
