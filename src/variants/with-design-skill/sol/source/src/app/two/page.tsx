import type { Metadata } from "next";
import { CaptureLedgerPage } from "../_components/iterations";

export const metadata: Metadata = {
  title: "Capture ledger concept",
  description: "A kinetic, high-energy landing page concept for Tangent.",
};

export default function Page() {
  return <CaptureLedgerPage />;
}
