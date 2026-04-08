import type { VariantModule } from "@/lib/gallery-types";
import Design1 from "@/variants/without-design-skill/glm-5-turbo/source/src/components/designs/Design1";
import Design2 from "@/variants/without-design-skill/glm-5-turbo/source/src/components/designs/Design2";
import Design3 from "@/variants/without-design-skill/glm-5-turbo/source/src/components/designs/Design3";
import Design4 from "@/variants/without-design-skill/glm-5-turbo/source/src/components/designs/Design4";
import Design5 from "@/variants/without-design-skill/glm-5-turbo/source/src/components/designs/Design5";

const pages = {
  "1": Design1,
  "2": Design2,
  "3": Design3,
  "4": Design4,
  "5": Design5,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default module;
