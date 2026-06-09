import type { Metadata } from "next";
import { Landing } from "./landing";

export const metadata: Metadata = {
  title: "Tangent — Blueprint (4/5)",
  description:
    "Build a brain you can point to. Tangent: capture, links, recall — approved for construction.",
};

export default function Page() {
  return <Landing />;
}
