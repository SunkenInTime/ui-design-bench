import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-design-skill/gpt-5.5-low/source/src/app/one/page";
import Page2 from "@/variants/with-design-skill/gpt-5.5-low/source/src/app/two/page";
import Page3 from "@/variants/with-design-skill/gpt-5.5-low/source/src/app/three/page";
import Page4 from "@/variants/with-design-skill/gpt-5.5-low/source/src/app/four/page";
import Page5 from "@/variants/with-design-skill/gpt-5.5-low/source/src/app/five/page";
import "@/generated/scoped-variant-css/with-design-skill/gpt-5.5-low/source/src/app/globals.css";

const pages = {
  "1": Page1,
  "2": Page2,
  "3": Page3,
  "4": Page4,
  "5": Page5,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default variantModule;
