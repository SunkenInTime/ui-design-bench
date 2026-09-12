import type { Metadata } from "next";
import { StudioWallPage } from "../_components/iterations";

export const metadata: Metadata = {
  title: "Studio wall concept",
  description: "A tactile, expressive landing page concept for Tangent.",
};

export default function Page() {
  return <StudioWallPage />;
}
