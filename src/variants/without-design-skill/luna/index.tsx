import type { VariantModule } from "@/lib/gallery-types";
import {
  BrainLanding,
  type IterationId,
} from "@/variants/without-design-skill/luna/source/src/components/brain-landing";
import "@/generated/scoped-variant-css/without-design-skill/luna/source/src/app/globals.css";

const iterationIds = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
} as const satisfies Record<string, IterationId>;

const variantModule: VariantModule = {
  render({ iteration }) {
    return <BrainLanding iteration={iterationIds[iteration]} />;
  },
};

export default variantModule;
