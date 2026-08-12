import type { Metadata } from "next";
import { V2Landing } from "@/variants/with-taste-skill/grok-4.6/source/components/v2-landing";

export const metadata: Metadata = {
  title: "Cairn - Think once. Find it again.",
  description: "A quiet second brain for notes, links, and the ideas you keep meaning to finish.",
};

export default function Page() {
  return <V2Landing />;
}
