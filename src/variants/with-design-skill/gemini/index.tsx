import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-design-skill/gemini/source/src/app/1/page";
import Page2 from "@/variants/with-design-skill/gemini/source/src/app/2/page";
import Page3 from "@/variants/with-design-skill/gemini/source/src/app/3/page";
import Page4 from "@/variants/with-design-skill/gemini/source/src/app/4/page";
import Page5 from "@/variants/with-design-skill/gemini/source/src/app/5/page";
import { Switcher } from "@/variants/with-design-skill/gemini/source/src/components/Switcher";

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

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Page />
        <Switcher />
      </div>
    );
  },
};

export default module;
