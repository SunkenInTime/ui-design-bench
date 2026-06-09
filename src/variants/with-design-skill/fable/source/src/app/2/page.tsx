import type { Metadata } from "next";
import { Landing } from "./landing";

export const metadata: Metadata = {
  title: "Tangent — Synapse (2/5)",
  description:
    "Half a thought is enough. Tangent catches fragments and wires them to everything they touch.",
};

export default function Page() {
  return <Landing />;
}
