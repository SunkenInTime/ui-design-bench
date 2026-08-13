import type { Metadata } from "next";
import { LabView } from "./LabView";

export const metadata: Metadata = {
  title: "Locus — Lab",
  description: "Write the thought you’re carrying. The notebook finds its neighbors.",
};

export default function Page() {
  return <LabView />;
}
