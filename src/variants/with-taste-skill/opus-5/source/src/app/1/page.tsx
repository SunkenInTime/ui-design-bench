import { EB_Garamond } from "next/font/google";

import { CapabilitiesIndex } from "./_components/capabilities-index";
import { Closing } from "./_components/closing";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { IntegrationsStrip } from "./_components/integrations-strip";
import { PhotoPlate } from "./_components/photo-plate";
import { PricingColumns } from "./_components/pricing-columns";
import { SiteFooter } from "./_components/site-footer";
import { SiteNav } from "./_components/site-nav";
import { TestimonialsSpread } from "./_components/testimonials-spread";

/*
  Direction 1, "Commonplace".

  Verso descends from the commonplace book: a personal index of what you read.
  This iteration reads that lineage literally as a printed page, which is the one
  place a serif is genuinely earned. EB Garamond is a Garamond revival used in
  book setting, so it carries display headings, prices and the pull quote. Every
  piece of body copy, every label and every button is Geist, loaded globally by
  the root layout.

  Dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 3, VISUAL_DENSITY 3. Dial 3 means
  the page is still: CSS :hover and :active only, no animation library imported,
  no scroll work.
*/
const garamond = EB_Garamond({
  variable: "--f-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = { title: "Commonplace" };

export default function CommonplacePage() {
  return (
    <div
      id="top"
      data-theme="light"
      className={`${garamond.variable} min-h-[100dvh] bg-[#f5f5f3] font-sans text-[#17171a]`}
    >
      <SiteNav />
      <main>
        <Hero />
        <IntegrationsStrip />
        <CapabilitiesIndex />
        <PhotoPlate />
        <HowItWorks />
        <TestimonialsSpread />
        <PricingColumns />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}
