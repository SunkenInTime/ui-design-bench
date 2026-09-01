import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-design-skill/fable-5.1/source/app/(iterations)/1/page";
import Page2 from "@/variants/with-design-skill/fable-5.1/source/app/(iterations)/2/page";
import Page3 from "@/variants/with-design-skill/fable-5.1/source/app/(iterations)/3/page";
import Page4 from "@/variants/with-design-skill/fable-5.1/source/app/(iterations)/4/page";
import Page5 from "@/variants/with-design-skill/fable-5.1/source/app/(iterations)/5/page";
import "@/generated/scoped-variant-css/with-design-skill/fable-5.1/source/app/globals.css";

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
