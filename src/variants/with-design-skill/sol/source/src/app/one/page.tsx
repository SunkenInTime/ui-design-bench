import type { Metadata } from "next";
import { CartographerPage } from "../_components/iterations";

export const metadata: Metadata = {
  title: "Cartographer concept",
  description: "An airy, spatial landing page concept for Tangent.",
};

export default function Page() {
  return <CartographerPage />;
}
