import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/without-design-skill/kimi-k-2.6/source/app/one/page";
import PageTwo from "@/variants/without-design-skill/kimi-k-2.6/source/app/two/page";
import PageThree from "@/variants/without-design-skill/kimi-k-2.6/source/app/three/page";
import PageFour from "@/variants/without-design-skill/kimi-k-2.6/source/app/four/page";
import PageFive from "@/variants/without-design-skill/kimi-k-2.6/source/app/five/page";

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default module;
