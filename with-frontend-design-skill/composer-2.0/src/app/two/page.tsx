import type { Metadata } from "next";
import BrainTwo from "@/components/landings/brain-two";
import { LandingWithSwitcher } from "@/components/landings/LandingWithSwitcher";

export const metadata: Metadata = {
  title: "SYS.MEMO · Brutalist",
  description: "Second brain landing — brutalist stack iteration.",
};

export default function TwoPage() {
  return (
    <LandingWithSwitcher>
      <BrainTwo />
    </LandingWithSwitcher>
  );
}
