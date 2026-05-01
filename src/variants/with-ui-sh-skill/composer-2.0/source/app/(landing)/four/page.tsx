import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { LandingTerminal } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/landing/concept-four";

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Concept 4 — Terminal",
};

export default function Page() {
  return (
    <div className={ibmMono.className}>
      <LandingTerminal monoClass={ibmMono.className} />
    </div>
  );
}
