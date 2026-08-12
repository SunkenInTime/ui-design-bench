import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/with-design-skill/grok-4.6/source/app/one/page";
import LayoutOne from "@/variants/with-design-skill/grok-4.6/source/app/one/layout";
import PageTwo from "@/variants/with-design-skill/grok-4.6/source/app/two/page";
import LayoutTwo from "@/variants/with-design-skill/grok-4.6/source/app/two/layout";
import PageThree from "@/variants/with-design-skill/grok-4.6/source/app/three/page";
import LayoutThree from "@/variants/with-design-skill/grok-4.6/source/app/three/layout";
import PageFour from "@/variants/with-design-skill/grok-4.6/source/app/four/page";
import LayoutFour from "@/variants/with-design-skill/grok-4.6/source/app/four/layout";
import PageFive from "@/variants/with-design-skill/grok-4.6/source/app/five/page";
import LayoutFive from "@/variants/with-design-skill/grok-4.6/source/app/five/layout";
import "@/generated/scoped-variant-css/with-design-skill/grok-4.6/source/app/globals.css";

const pages = {
  "1": { Page: PageOne, Layout: LayoutOne },
  "2": { Page: PageTwo, Layout: LayoutTwo },
  "3": { Page: PageThree, Layout: LayoutThree },
  "4": { Page: PageFour, Layout: LayoutFour },
  "5": { Page: PageFive, Layout: LayoutFive },
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Page, Layout } = pages[iteration];
    return (
      <Layout>
        <Page />
      </Layout>
    );
  },
};

export default variantModule;
