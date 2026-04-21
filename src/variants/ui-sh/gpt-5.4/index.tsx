import type { VariantModule } from "@/lib/gallery-types";
import {
  LandingFive,
  LandingFour,
  LandingOne,
  LandingThree,
  LandingTwo,
} from "@/variants/ui-sh/gpt-5.4/source/landing";

const pages = {
  "1": LandingOne,
  "2": LandingTwo,
  "3": LandingThree,
  "4": LandingFour,
  "5": LandingFive,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default variantModule;
