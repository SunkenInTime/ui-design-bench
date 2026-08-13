import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "./source/app/1/page";
import Layout1 from "./source/app/1/layout";
import Page2 from "./source/app/2/page";
import Layout2 from "./source/app/2/layout";
import Page3 from "./source/app/3/page";
import Layout3 from "./source/app/3/layout";
import Page4 from "./source/app/4/page";
import Layout4 from "./source/app/4/layout";
import Page5 from "./source/app/5/page";
import Layout5 from "./source/app/5/layout";
import "@/generated/scoped-variant-css/with-taste-skill/gemini-3.7-flash/source/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const iterations = {
  "1": { Page: Page1, Layout: Layout1 },
  "2": { Page: Page2, Layout: Layout2 },
  "3": { Page: Page3, Layout: Layout3 },
  "4": { Page: Page4, Layout: Layout4 },
  "5": { Page: Page5, Layout: Layout5 },
} as const;

const fontVariables = `${geistSans.variable} ${geistMono.variable}`;

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Page, Layout } = iterations[iteration];
    return (
      <div className={fontVariables}>
        <Layout>
          <Page />
        </Layout>
      </div>
    );
  },
};

export default variantModule;
