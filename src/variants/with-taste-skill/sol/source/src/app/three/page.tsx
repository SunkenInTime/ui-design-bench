import type { Metadata } from "next";
import { ThreeLanding } from "../_components/landing-pages";

export const metadata: Metadata = {
  title: "Signal Garden",
  description: "A bright, playful landing page for Cairn, where notes grow into useful connections.",
};

export default function Page() {
  return <ThreeLanding />;
}
