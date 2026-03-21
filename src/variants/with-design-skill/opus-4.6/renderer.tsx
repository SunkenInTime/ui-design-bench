"use client";

import type { IterationId } from "@/lib/gallery-types";
import Bloom from "@/variants/with-design-skill/opus-4.6/source/src/pages/Bloom";
import Cosmos from "@/variants/with-design-skill/opus-4.6/source/src/pages/Cosmos";
import NeonCortex from "@/variants/with-design-skill/opus-4.6/source/src/pages/NeonCortex";
import Neural from "@/variants/with-design-skill/opus-4.6/source/src/pages/Neural";
import Velvet from "@/variants/with-design-skill/opus-4.6/source/src/pages/Velvet";
import { OpusPageSwitcher } from "@/variants/with-design-skill/opus-4.6/page-switcher";

const pages = {
  "1": Neural,
  "2": Velvet,
  "3": NeonCortex,
  "4": Bloom,
  "5": Cosmos,
} as const;

export function OpusRenderer({ iteration }: { iteration: IterationId }) {
  const Page = pages[iteration];

  return (
    <div>
      <OpusPageSwitcher />
      <Page />
    </div>
  );
}
