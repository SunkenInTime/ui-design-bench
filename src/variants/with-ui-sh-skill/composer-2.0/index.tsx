import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-ui-sh-skill/composer-2.0/source/app/(landing)/one/page";
import Page2 from "@/variants/with-ui-sh-skill/composer-2.0/source/app/(landing)/two/page";
import Page3 from "@/variants/with-ui-sh-skill/composer-2.0/source/app/(landing)/three/page";
import Page4 from "@/variants/with-ui-sh-skill/composer-2.0/source/app/(landing)/four/page";
import Page5 from "@/variants/with-ui-sh-skill/composer-2.0/source/app/(landing)/five/page";
import "@/generated/scoped-variant-css/with-ui-sh-skill/composer-2.0/source/app/globals.css";

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
