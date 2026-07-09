import type { VariantModule } from "@/lib/gallery-types";
import { LandingPage } from "@/variants/with-taste-skill/luna/source/src/components/landing-page";
import type { IterationKey } from "@/variants/with-taste-skill/luna/source/src/components/iteration-switcher";
import "@/generated/scoped-variant-css/with-taste-skill/luna/source/src/app/globals.css";

const iterationKeys = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
} as const satisfies Record<string, IterationKey>;

const variantModule: VariantModule = {
  render({ iteration }) {
    return <LandingPage iteration={iterationKeys[iteration]} />;
  },
};

export default variantModule;
