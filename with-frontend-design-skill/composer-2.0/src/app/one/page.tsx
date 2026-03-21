import type { Metadata } from "next";
import BrainOne from "@/components/landings/brain-one";
import { LandingWithSwitcher } from "@/components/landings/LandingWithSwitcher";

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
