import type { Metadata } from "next";
import BrainThree from "@/components/landings/brain-three";
import { LandingWithSwitcher } from "@/components/landings/LandingWithSwitcher";

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
