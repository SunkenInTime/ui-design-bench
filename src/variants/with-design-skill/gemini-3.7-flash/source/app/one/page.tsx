import type { Metadata } from "next";
import { PalaceView } from "./PalaceView";

export const metadata: Metadata = {
  title: "Locus — Palace",
  description: "A palace for what you keep. Rooms that remember each other.",
};

export default function Page() {
  return <PalaceView />;
}
