import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/with-taste-skill/sonnet-5/source/src/app/1/page";
import PageTwo from "@/variants/with-taste-skill/sonnet-5/source/src/app/2/page";
import PageThree from "@/variants/with-taste-skill/sonnet-5/source/src/app/3/page";
import PageFour from "@/variants/with-taste-skill/sonnet-5/source/src/app/4/page";
import PageFive from "@/variants/with-taste-skill/sonnet-5/source/src/app/5/page";
import "@/generated/scoped-variant-css/with-taste-skill/sonnet-5/source/src/app/globals.css";

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default variantModule;
