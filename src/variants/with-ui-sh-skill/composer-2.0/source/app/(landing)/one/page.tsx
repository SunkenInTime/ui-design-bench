import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { LandingVault } from "@/variants/with-ui-sh-skill/composer-2.0/source/components/landing/concept-one";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Concept 1 — Vault",
};

export default function Page() {
  return (
    <div className={dmSans.className}>
      <LandingVault monoFont={ibmMono.className} />
    </div>
  );
}
