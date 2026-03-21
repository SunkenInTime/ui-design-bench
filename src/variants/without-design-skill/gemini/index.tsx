import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/without-design-skill/gemini/source/src/app/1/page";
import Page2 from "@/variants/without-design-skill/gemini/source/src/app/2/page";
import Page3 from "@/variants/without-design-skill/gemini/source/src/app/3/page";
import Page4 from "@/variants/without-design-skill/gemini/source/src/app/4/page";
import Page5 from "@/variants/without-design-skill/gemini/source/src/app/5/page";
import { Navigation } from "@/variants/without-design-skill/gemini/source/src/components/Navigation";

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
    return (
      <div className="min-h-screen">
        <Page />
        <Navigation />
      </div>
    );
  },
};

export default module;
