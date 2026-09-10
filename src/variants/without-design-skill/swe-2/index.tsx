import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/without-design-skill/swe-2/source/app/1/page";
import Page2 from "@/variants/without-design-skill/swe-2/source/app/2/page";
import Page3 from "@/variants/without-design-skill/swe-2/source/app/3/page";
import Page4 from "@/variants/without-design-skill/swe-2/source/app/4/page";
import Page5 from "@/variants/without-design-skill/swe-2/source/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/swe-2/source/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col antialiased`}
      >
        <Page />
      </div>
    );
  },
};

export default variantModule;
