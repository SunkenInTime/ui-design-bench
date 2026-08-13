import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "./source/app/one/page";
import Layout1 from "./source/app/one/layout";
import Page2 from "./source/app/two/page";
import Layout2 from "./source/app/two/layout";
import Page3 from "./source/app/three/page";
import Layout3 from "./source/app/three/layout";
import Page4 from "./source/app/four/page";
import Layout4 from "./source/app/four/layout";
import Page5 from "./source/app/five/page";
import Layout5 from "./source/app/five/layout";
import "@/generated/scoped-variant-css/with-design-skill/gemini-3.7-flash/source/app/globals.css";

const iterations = {
  "1": { Page: Page1, Layout: Layout1 },
  "2": { Page: Page2, Layout: Layout2 },
  "3": { Page: Page3, Layout: Layout3 },
  "4": { Page: Page4, Layout: Layout4 },
  "5": { Page: Page5, Layout: Layout5 },
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Page, Layout } = iterations[iteration];
    return (
      <Layout>
        <Page />
      </Layout>
    );
  },
};

export default variantModule;
