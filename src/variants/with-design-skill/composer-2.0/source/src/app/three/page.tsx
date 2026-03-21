import type { Metadata } from "next";
import BrainThree from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/brain-three";
import { LandingWithSwitcher } from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/LandingWithSwitcher";

export const metadata: Metadata = {
  title: "Root & Recall · Organic",
  description: "Second brain landing — organic garden iteration.",
};

export default function ThreePage() {
  return (
    <LandingWithSwitcher>
      <BrainThree />
    </LandingWithSwitcher>
  );
}

