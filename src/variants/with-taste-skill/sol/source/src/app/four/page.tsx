import type { Metadata } from "next";
import { FourLanding } from "../_components/landing-pages";

export const metadata: Metadata = {
  title: "Archive Grid",
  description: "A structured brutalist landing page for Cairn, a second brain built for finding instead of filing.",
};

export default function Page() {
  return <FourLanding />;
}
