import type { Metadata } from "next";
import { Landing } from "./landing";

export const metadata: Metadata = {
  title: "Tangent — Garden (3/5)",
  description:
    "Notes, planted. Tangent treats ideas as living things — tend a few fragments into a garden that thinks back.",
};

export default function Page() {
  return <Landing />;
}
