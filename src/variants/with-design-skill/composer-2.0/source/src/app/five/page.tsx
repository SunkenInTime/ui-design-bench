import type { Metadata } from "next";
import BrainFive from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/brain-five";
import { LandingWithSwitcher } from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/LandingWithSwitcher";

export const metadata: Metadata = {
  title: "Mnemos · Refined",
  description: "Second brain landing — refined minimal iteration.",
};

export default function FivePage() {
  return (
    <LandingWithSwitcher>
      <BrainFive />
    </LandingWithSwitcher>
  );
}

