import type { Metadata } from "next";
import { V4Landing } from "@/variants/with-taste-skill/grok-4.6/source/components/v4-landing";

export const metadata: Metadata = {
  title: "Cairn - A trail through your thinking",
  description: "Stack notes like stones. Follow them back when the path gets faint.",
};

export default function Page() {
  return <V4Landing />;
}
