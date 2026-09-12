import type { Metadata } from "next";
import { FiveLanding } from "../_components/landing-pages";

export const metadata: Metadata = {
  title: "Spatial Calm",
  description: "An airy, contemplative landing page for Cairn, a gentle home for connected thought.",
};

export default function Page() {
  return <FiveLanding />;
}
