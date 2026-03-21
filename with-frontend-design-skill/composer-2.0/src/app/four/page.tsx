import type { Metadata } from "next";
import BrainFour from "@/components/landings/brain-four";
import { LandingWithSwitcher } from "@/components/landings/LandingWithSwitcher";

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
