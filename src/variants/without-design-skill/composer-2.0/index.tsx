import type { VariantModule } from "@/lib/gallery-types";
import { IterationSwitcher } from "@/variants/without-design-skill/composer-2.0/source/src/components/IterationSwitcher";
import Page1 from "@/variants/without-design-skill/composer-2.0/source/src/app/(landing)/one/page";
import Page2 from "@/variants/without-design-skill/composer-2.0/source/src/app/(landing)/two/page";
import Page3 from "@/variants/without-design-skill/composer-2.0/source/src/app/(landing)/three/page";
import Page4 from "@/variants/without-design-skill/composer-2.0/source/src/app/(landing)/four/page";
import Page5 from "@/variants/without-design-skill/composer-2.0/source/src/app/(landing)/five/page";

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
        <IterationSwitcher />
      </div>
    );
  },
};

export default module;
