import type { VariantModule } from "@/lib/gallery-types";
import SecondBrainPage from "@/variants/with-design-skill/luna/source/src/components/second-brain/SecondBrainPage";
import type { IterationId } from "@/variants/with-design-skill/luna/source/src/components/second-brain/types";
import "@/generated/scoped-variant-css/with-design-skill/luna/source/src/app/globals.css";

const iterationIds = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
} as const satisfies Record<string, IterationId>;

const variantModule: VariantModule = {
  render({ iteration }) {
    return <SecondBrainPage iteration={iterationIds[iteration]} />;
  },
};

export default variantModule;
