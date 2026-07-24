import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-taste-skill/opus-5/source/src/app/1/page";
import Layout1 from "@/variants/with-taste-skill/opus-5/source/src/app/1/layout";
import Page2 from "@/variants/with-taste-skill/opus-5/source/src/app/2/page";
import Layout2 from "@/variants/with-taste-skill/opus-5/source/src/app/2/layout";
import Page3 from "@/variants/with-taste-skill/opus-5/source/src/app/3/page";
import Layout3 from "@/variants/with-taste-skill/opus-5/source/src/app/3/layout";
import Page4 from "@/variants/with-taste-skill/opus-5/source/src/app/4/page";
import Layout4 from "@/variants/with-taste-skill/opus-5/source/src/app/4/layout";
import Page5 from "@/variants/with-taste-skill/opus-5/source/src/app/5/page";
import Layout5 from "@/variants/with-taste-skill/opus-5/source/src/app/5/layout";
import "@/generated/scoped-variant-css/with-taste-skill/opus-5/source/src/app/globals.css";

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

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Page, Layout } = iterations[iteration];
    return (
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        <Layout>
          <Page />
        </Layout>
      </div>
    );
  },
};

export default variantModule;
