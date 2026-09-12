import type { Metadata } from "next";
import { TwoLanding } from "../_components/landing-pages";

export const metadata: Metadata = {
  title: "Night Index",
  description: "A cinematic dark-index landing page for Cairn, your private map of connected knowledge.",
};

export default function Page() {
  return <TwoLanding />;
}
