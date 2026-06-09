import type { Metadata } from "next";
import { Landing } from "./landing";

export const metadata: Metadata = {
  title: "Tangent — Desk (5/5)",
  description:
    "Your brain: great at ideas, terrible at keeping them. Tangent makes the mess make sense.",
};

export default function Page() {
  return <Landing />;
}
