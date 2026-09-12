import type { Metadata } from "next";
import { GardenView } from "./GardenView";

export const metadata: Metadata = {
  title: "Locus — Garden",
  description: "A garden of notes. Raked daily.",
};

export default function Page() {
  return <GardenView />;
}
