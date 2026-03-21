import type { Metadata } from "next";
import BrainTwo from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/brain-two";
import { LandingWithSwitcher } from "@/variants/with-design-skill/composer-2.0/source/src/components/landings/LandingWithSwitcher";

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

