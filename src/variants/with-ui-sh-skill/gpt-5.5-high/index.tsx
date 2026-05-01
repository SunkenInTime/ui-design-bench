import type { VariantModule } from "@/lib/gallery-types";
import LandingPage from "@/variants/with-ui-sh-skill/gpt-5.5-high/source/components/LandingPage";
import "@/generated/scoped-variant-css/with-ui-sh-skill/gpt-5.5-high/source/styles/globals.css";

const iterationMap = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    return <LandingPage iteration={iterationMap[iteration]} />;
  },
};

export default variantModule;
