import type { Metadata } from "next";
import { RecallInstrumentPage } from "../_components/iterations";

export const metadata: Metadata = {
  title: "Recall instrument concept",
  description: "A quiet, precise landing page concept for Tangent.",
};

export default function Page() {
  return <RecallInstrumentPage />;
}
