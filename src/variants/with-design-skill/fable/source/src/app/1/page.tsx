import type { Metadata } from "next";
import { Landing } from "./landing";

export const metadata: Metadata = {
  title: "Tangent — Card Index (1/5)",
  description:
    "A filing system for thoughts you intend to keep. Tangent, the second-brain note app.",
};

export default function Page() {
  return <Landing />;
}
