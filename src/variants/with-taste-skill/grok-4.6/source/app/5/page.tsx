import type { Metadata } from "next";
import { V5Landing } from "@/variants/with-taste-skill/grok-4.6/source/components/v5-landing";

export const metadata: Metadata = {
  title: "Cairn - The brain you build",
  description: "Capture fast, link freely, and let old notes surface when you need them.",
};

export default function Page() {
  return <V5Landing />;
}
