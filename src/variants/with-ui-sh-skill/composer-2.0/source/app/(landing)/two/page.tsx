import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { LandingEditorial } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/landing/concept-two";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Concept 2 — Editorial",
};

export default function Page() {
  return (
    <div className={dmSans.className}>
      <LandingEditorial serifHeadingClass={instrumentSerif.className} />
    </div>
  );
}
