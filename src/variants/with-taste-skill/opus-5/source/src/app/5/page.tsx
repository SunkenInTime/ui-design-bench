import { Space_Grotesk } from "next/font/google";
import { KineticNav } from "./_components/kinetic-nav";
import { KineticHero } from "./_components/kinetic-hero";
import { IntegrationsMarquee } from "./_components/integrations-marquee";
import { CapabilitiesPan } from "./_components/capabilities-pan";
import { StepsStack } from "./_components/steps-stack";
import { TestimonialsStagger } from "./_components/testimonials-stagger";
import { PricingPanels } from "./_components/pricing-panels";
import { ClosingFooter } from "./_components/closing-footer";

/*
  Direction 5, "Kinetic". Scroll is the narrative device: the page reveals the
  argument in sequence instead of listing it.

  PALETTE (locked, dark throughout): page #0a0a0b, primary text #f4f4f3, muted
  text #8e8e8c, panel #141416, hairline rgba(255,255,255,0.10), one accent, deep
  rose #f43f5e. The rose is only ever used with #0a0a0b text on it, never white.

  RADIUS RULE: interactive elements are full-pill, panels and images are 12px
  (rounded-xl), nothing else has a radius.

  MOTION: GSAP and ScrollTrigger only. The Motion library is deliberately not
  imported anywhere in this route, the two fight over the same frames. Every
  effect lives in
  its own client leaf inside a gsap.context with a revert() cleanup, and the pin
  work is gated behind gsap.matchMedia so it only builds at 768px and up with
  motion allowed.
*/

const spaceGrotesk = Space_Grotesk({
  variable: "--f-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = { title: "Kinetic" };

export default function KineticPage() {
  return (
    <div
      data-theme="dark"
      className={`${spaceGrotesk.variable} min-h-[100dvh] w-full bg-[#0a0a0b] font-sans text-[#f4f4f3] selection:bg-[#f43f5e] selection:text-[#0a0a0b]`}
    >
      <KineticNav />
      <main>
        <KineticHero />
        <IntegrationsMarquee />
        <CapabilitiesPan />
        <StepsStack />
        <TestimonialsStagger />
        <PricingPanels />
      </main>
      <ClosingFooter />
    </div>
  );
}
