/*
  /3 "Quiet". Premium consumer calm, light theme, locked.

  Design read: premium consumer software for a design conscious buyer. Calm,
  spacious, photographic, physical. The reference is a good outdoor equipment
  brand rather than a SaaS dashboard.

  Dials: DESIGN_VARIANCE 7, MOTION_INTENSITY 6, VISUAL_DENSITY 3.

  Palette (the approved "Forest" family, deliberately cool, never warm paper):
    page bone   #e9eae7
    forest      #12352a   dark surfaces and the primary CTA fill
    ink         #1c211e   body and heading text
    muted       #5a635e   secondary text, 5.1:1 on bone
    panel       #f4f5f2   soft cards
    amber       #c2761a   the single accent, used only as a 2px rule mark and as
                          link underlines, never as text or as a fill

  RADIUS RULE, applied everywhere on this route:
    - interactive elements (buttons, pills, the floating nav shell) -> full pill
    - panels, cards and images -> 16px (`rounded-2xl`)
    - nothing else carries a radius

  Image treatment: every photograph is `saturate-[0.85]` and the hero additionally
  carries a forest gradient scrim. That single consistent treatment is what makes
  arbitrary picsum photography read as one deliberate system.

  Sections and their layout families, in order:
    1 floating glass pill nav
    2 full bleed photographic hero, copy lower left
    3 airy logo row (integrations)
    4 bento grid, six cells (carries the page's single eyebrow)
    5 horizontal scroll snap gallery (how it works)
    6 full bleed photographic plate with caption
    7 forest quote panel plus two column plain quote row
    8 two panel pricing, with an airy prose stack of questions
    9 closing line plus airy footer

  Motion lives only in `"use client"` leaves (`floating-nav`, `reveal`,
  `wide-plate`), each guarded by `useReducedMotion`.
*/

import { Outfit } from "next/font/google";
import { FloatingNav } from "./_components/floating-nav";
import { Hero } from "./_components/hero";
import { IntegrationsRow } from "./_components/integrations-row";
import { CapabilitiesBento } from "./_components/capabilities-bento";
import { HowGallery } from "./_components/how-gallery";
import { WidePlate } from "./_components/wide-plate";
import { TestimonialsPanel } from "./_components/testimonials-panel";
import { PricingPanels } from "./_components/pricing-panels";
import { ClosingFooter } from "./_components/closing-footer";

const outfit = Outfit({
  variable: "--f-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = { title: "Quiet" };

export default function QuietPage() {
  return (
    <div
      id="top"
      data-theme="light"
      className={`${outfit.variable} min-h-[100dvh] bg-[#e9eae7] font-sans text-[#1c211e]`}
    >
      <FloatingNav />
      <main>
        <Hero />
        <IntegrationsRow />
        <CapabilitiesBento />
        <HowGallery />
        <WidePlate />
        <TestimonialsPanel />
        <PricingPanels />
        <ClosingFooter />
      </main>
    </div>
  );
}
