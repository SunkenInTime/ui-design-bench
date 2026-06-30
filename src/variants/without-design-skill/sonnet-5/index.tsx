import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/without-design-skill/sonnet-5/source/src/app/1/page";
import PageTwo from "@/variants/without-design-skill/sonnet-5/source/src/app/2/page";
import PageThree from "@/variants/without-design-skill/sonnet-5/source/src/app/3/page";
import PageFour from "@/variants/without-design-skill/sonnet-5/source/src/app/4/page";
import PageFive from "@/variants/without-design-skill/sonnet-5/source/src/app/5/page";
import "@/generated/scoped-variant-css/without-design-skill/sonnet-5/source/src/app/globals.css";

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
