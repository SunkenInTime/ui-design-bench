import type { Metadata } from "next";
import { V1Landing } from "@/variants/with-taste-skill/grok-4.6/source/components/v1-landing";

export const metadata: Metadata = {
  title: "Cairn - Notes that find each other",
  description: "A local-first second brain for people who capture thoughts and need them back.",
};

export default function Page() {
  return <V1Landing />;
}
