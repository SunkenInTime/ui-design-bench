import type { Metadata } from "next";
import { SlipView } from "./SlipView";

export const metadata: Metadata = {
  title: "Locus — Slips",
  description: "Every thought gets a slip. Every slip knows its neighbors.",
};

export default function Page() {
  return <SlipView />;
}
