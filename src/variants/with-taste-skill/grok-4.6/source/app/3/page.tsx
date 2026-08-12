import type { Metadata } from "next";
import { V3Landing } from "@/variants/with-taste-skill/grok-4.6/source/components/v3-landing";

export const metadata: Metadata = {
  title: "Cairn - Write it down. Mean it later.",
  description: "Cairn keeps every note in conversation with the rest of your work.",
};

export default function Page() {
  return <V3Landing />;
}
