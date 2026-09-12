import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { Capabilities } from "./_components/capabilities";
import { ClosingCta } from "./_components/closing-cta";
import { FaqList } from "./_components/faq-list";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { ImageBand } from "./_components/image-band";
import { IntegrationsStrip } from "./_components/integrations-strip";
import { PricingTable } from "./_components/pricing-table";
import { SiteFooter } from "./_components/site-footer";
import { SiteNav } from "./_components/site-nav";
import { Testimonials } from "./_components/testimonials";

/*
  Direction 2, "Terminal": a dark keyboard first devtool page. Geist for
  headlines and body, Geist Mono for labels, prices, kbd keys and the wordmark.
  Palette is locked to page #0a0a0b, panel #121214, text #e8e8e6, muted #8b8b87,
  hairline rgba(255,255,255,0.09) and one accent, emerald #3ddc97. One radius,
  6px, on everything including images.
*/
const geistMono = Geist_Mono({
  variable: "--f-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = { title: "Terminal" };

export default function TerminalPage() {
  return (
    <div
      data-theme="dark"
      className={`${geistMono.variable} min-h-[100dvh] bg-[#0a0a0b] font-sans text-[#e8e8e6] selection:bg-[#3ddc97] selection:text-[#0a0a0b]`}
    >
      <SiteNav />
      <main>
        <Hero />
        <IntegrationsStrip />
        <Capabilities />
        <HowItWorks />
        <Testimonials />
        <ImageBand />
        <PricingTable />
        <FaqList />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
