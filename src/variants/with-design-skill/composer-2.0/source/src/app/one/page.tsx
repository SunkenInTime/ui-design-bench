import type { Metadata } from "next";
import BrainOne from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/brain-one";
import { LandingWithSwitcher } from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/LandingWithSwitcher";

export const metadata: Metadata = {
  title: "MindPalais · Editorial",
  description: "Second brain landing — editorial warmth iteration.",
};

export default function OnePage() {
  return (
    <LandingWithSwitcher>
      <BrainOne />
    </LandingWithSwitcher>
  );
}

