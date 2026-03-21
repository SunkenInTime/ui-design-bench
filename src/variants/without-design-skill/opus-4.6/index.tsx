import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/without-design-skill/opus-4.6/source/src/app/1/page";
import Page2 from "@/variants/without-design-skill/opus-4.6/source/src/app/2/page";
import Page3 from "@/variants/without-design-skill/opus-4.6/source/src/app/3/page";
import Page4 from "@/variants/without-design-skill/opus-4.6/source/src/app/4/page";
import Page5 from "@/variants/without-design-skill/opus-4.6/source/src/app/5/page";

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const module: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default module;
