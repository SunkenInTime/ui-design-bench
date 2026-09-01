import { Geist, Geist_Mono } from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Layout1 from "@/variants/with-taste-skill/fable-5.1/source/app/1/layout";
import Page1 from "@/variants/with-taste-skill/fable-5.1/source/app/1/page";
import Layout2 from "@/variants/with-taste-skill/fable-5.1/source/app/2/layout";
import Page2 from "@/variants/with-taste-skill/fable-5.1/source/app/2/page";
import Layout3 from "@/variants/with-taste-skill/fable-5.1/source/app/3/layout";
import Page3 from "@/variants/with-taste-skill/fable-5.1/source/app/3/page";
import Layout4 from "@/variants/with-taste-skill/fable-5.1/source/app/4/layout";
import Page4 from "@/variants/with-taste-skill/fable-5.1/source/app/4/page";
import Layout5 from "@/variants/with-taste-skill/fable-5.1/source/app/5/layout";
import Page5 from "@/variants/with-taste-skill/fable-5.1/source/app/5/page";
import "@/generated/scoped-variant-css/with-taste-skill/fable-5.1/source/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const iterations = {
  "1": { Layout: Layout1, Page: Page1 },
  "2": { Layout: Layout2, Page: Page2 },
  "3": { Layout: Layout3, Page: Page3 },
  "4": { Layout: Layout4, Page: Page4 },
  "5": { Layout: Layout5, Page: Page5 },
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Layout, Page } = iterations[iteration];
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
