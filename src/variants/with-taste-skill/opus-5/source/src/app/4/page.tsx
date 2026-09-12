import { Archivo, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "./_components/site-nav";
import { Hero } from "./_components/hero";
import { IntegrationStrip } from "./_components/integration-strip";
import { CapabilityGrid } from "./_components/capability-grid";
import { HowItWorks } from "./_components/how-it-works";
import { ImageBand } from "./_components/image-band";
import { Testimonials } from "./_components/testimonials";
import { PricingSplit } from "./_components/pricing-split";
import { FaqList } from "./_components/faq-list";
import { ClosingFooter } from "./_components/closing-footer";

/*
  Iteration 4, "Utility": brutalist industrial documentation. Light theme, locked.

  Dials: DESIGN_VARIANCE 9, MOTION_INTENSITY 4, VISUAL_DENSITY 7.

  Type: Archivo carries display headings and prices (variable to 900), JetBrains Mono
  carries the wordmark, labels and meta, and body paragraphs stay in Geist from the
  root layout for readability. Both extra families are declared here so this route
  preloads only what it renders.

  Motion is CSS only: hover inversions and a 1px active push on every control. No
  Motion, no GSAP, no scroll-driven anything.
*/
const archivo = Archivo({
  variable: "--f-archivo",
  subsets: ["latin"],
  // Archivo's variable face carries the whole wght axis, 100 to 900, so the 900
  // used by every display heading is available without loading static cuts.
  weight: "variable",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--f-jet",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = { title: "Utility" };

export default function UtilityPage() {
  return (
    <div
      data-theme="light"
      className={`${archivo.variable} ${jetBrainsMono.variable} min-h-[100dvh] bg-white font-sans text-[#0c0c0c] antialiased`}
    >
      <SiteNav />
      <main>
        <Hero />
        <IntegrationStrip />
        <CapabilityGrid />
        <HowItWorks />
        <ImageBand />
        <Testimonials />
        <PricingSplit />
        <FaqList />
      </main>
      <ClosingFooter />
    </div>
  );
}
