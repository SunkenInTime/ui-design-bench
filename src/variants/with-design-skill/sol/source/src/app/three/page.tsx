import type { Metadata } from "next";
import { ObservatoryPage } from "../_components/iterations";

export const metadata: Metadata = {
  title: "Memory observatory concept",
  description: "A nocturnal, constellation-led landing page concept for Tangent.",
};

export default function Page() {
  return <ObservatoryPage />;
}
