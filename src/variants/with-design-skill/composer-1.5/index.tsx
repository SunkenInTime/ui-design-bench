import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-design-skill/composer-1.5/source/src/app/1/page";
import Page2 from "@/variants/with-design-skill/composer-1.5/source/src/app/2/page";
import Page3 from "@/variants/with-design-skill/composer-1.5/source/src/app/3/page";
import Page4 from "@/variants/with-design-skill/composer-1.5/source/src/app/4/page";
import Page5 from "@/variants/with-design-skill/composer-1.5/source/src/app/5/page";
import "@/variants/with-design-skill/composer-1.5/source/src/app/globals.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/home.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/1/iteration-1.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/2/iteration-2.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/3/iteration-3.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/4/iteration-4.css";
import "@/variants/with-design-skill/composer-1.5/source/src/app/5/iteration-5.css";

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
