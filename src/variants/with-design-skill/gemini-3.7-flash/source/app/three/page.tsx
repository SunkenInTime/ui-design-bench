import type { Metadata } from "next";
import { AtlasView } from "./AtlasView";

export const metadata: Metadata = {
  title: "Locus — Atlas",
  description: "Thoughts as stars. Links as constellations you name.",
};

export default function Page() {
  return <AtlasView />;
}
