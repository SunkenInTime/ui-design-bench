import type { Metadata } from "next";
import { OneLanding } from "../_components/landing-pages";

export const metadata: Metadata = {
  title: "Paper Atlas",
  description: "A tactile editorial landing page for Cairn, the note-taking app that connects your thinking.",
};

export default function Page() {
  return <OneLanding />;
}
