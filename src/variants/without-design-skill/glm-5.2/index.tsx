import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/without-design-skill/glm-5.2/source/src/pages/one";
import PageTwo from "@/variants/without-design-skill/glm-5.2/source/src/pages/two";
import PageThree from "@/variants/without-design-skill/glm-5.2/source/src/pages/three";
import PageFour from "@/variants/without-design-skill/glm-5.2/source/src/pages/four";
import PageFive from "@/variants/without-design-skill/glm-5.2/source/src/pages/five";
import "@/generated/scoped-variant-css/without-design-skill/glm-5.2/source/src/app/globals.css";

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
