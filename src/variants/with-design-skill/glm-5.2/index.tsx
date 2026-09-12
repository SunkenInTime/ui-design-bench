import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/with-design-skill/glm-5.2/source/src/app/one/page";
import PageTwo from "@/variants/with-design-skill/glm-5.2/source/src/app/two/page";
import PageThree from "@/variants/with-design-skill/glm-5.2/source/src/app/three/page";
import PageFour from "@/variants/with-design-skill/glm-5.2/source/src/app/four/page";
import PageFive from "@/variants/with-design-skill/glm-5.2/source/src/app/five/page";
import "@/generated/scoped-variant-css/with-design-skill/glm-5.2/source/src/app/globals.css";

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
