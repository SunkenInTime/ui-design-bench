import type { VariantModule } from "@/lib/gallery-types";
import IterationOne from "@/variants/with-design-skill/glm-5.1/source/src/app/one/page";
import IterationTwo from "@/variants/with-design-skill/glm-5.1/source/src/app/two/page";
import IterationThree from "@/variants/with-design-skill/glm-5.1/source/src/app/three/page";
import IterationFour from "@/variants/with-design-skill/glm-5.1/source/src/app/four/page";
import IterationFive from "@/variants/with-design-skill/glm-5.1/source/src/app/five/page";

const pages = {
  "1": IterationOne,
  "2": IterationTwo,
  "3": IterationThree,
  "4": IterationFour,
  "5": IterationFive,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default module;
