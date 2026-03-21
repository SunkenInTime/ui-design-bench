import type { Metadata } from "next";
import BrainFour from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/brain-four";
import { LandingWithSwitcher } from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/LandingWithSwitcher";

export const metadata: Metadata = {
  title: "NEURAL.CORE · Retro-future",
  description: "Second brain landing — retro-future terminal iteration.",
};

export default function FourPage() {
  return (
    <LandingWithSwitcher>
      <BrainFour />
    </LandingWithSwitcher>
  );
}

