import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LandingGlass } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/landing/concept-three";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concept 3 — Glass",
};

export default function Page() {
  return (
    <div className={geist.className}>
      <LandingGlass />
    </div>
  );
}
