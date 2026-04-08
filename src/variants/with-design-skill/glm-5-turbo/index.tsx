import type { VariantModule } from "@/lib/gallery-types";
import Iteration1 from "@/variants/with-design-skill/glm-5-turbo/source/src/components/iterations/Iteration1";
import Iteration2 from "@/variants/with-design-skill/glm-5-turbo/source/src/components/iterations/Iteration2";
import Iteration3 from "@/variants/with-design-skill/glm-5-turbo/source/src/components/iterations/Iteration3";
import Iteration4 from "@/variants/with-design-skill/glm-5-turbo/source/src/components/iterations/Iteration4";
import Iteration5 from "@/variants/with-design-skill/glm-5-turbo/source/src/components/iterations/Iteration5";

const pages = {
  "1": Iteration1,
  "2": Iteration2,
  "3": Iteration3,
  "4": Iteration4,
  "5": Iteration5,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default module;
