import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/without-design-skill/composer-1.5/source/src/app/one/page";
import Page2 from "@/variants/without-design-skill/composer-1.5/source/src/app/two/page";
import Page3 from "@/variants/without-design-skill/composer-1.5/source/src/app/three/page";
import Page4 from "@/variants/without-design-skill/composer-1.5/source/src/app/four/page";
import Page5 from "@/variants/without-design-skill/composer-1.5/source/src/app/five/page";
import { DesignSwitcher } from "@/variants/without-design-skill/composer-1.5/source/src/app/components/DesignSwitcher";

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
        <DesignSwitcher />
        <Page />
      </div>
    );
  },
};

export default module;
