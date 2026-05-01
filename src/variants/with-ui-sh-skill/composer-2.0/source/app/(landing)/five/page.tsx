import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { LandingGrove } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/landing/concept-five";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Concept 5 — Grove",
};

export default function Page() {
  return (
    <div className={figtree.className}>
      <LandingGrove />
    </div>
  );
}
