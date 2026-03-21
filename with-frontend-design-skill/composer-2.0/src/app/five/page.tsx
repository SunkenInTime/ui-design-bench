import type { Metadata } from "next";
import BrainFive from "@/components/landings/brain-five";
import { LandingWithSwitcher } from "@/components/landings/LandingWithSwitcher";

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
