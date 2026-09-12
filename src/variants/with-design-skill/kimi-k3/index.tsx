import type { VariantModule } from "@/lib/gallery-types";
import Archive from "@/variants/with-design-skill/kimi-k3/source/app/designs/d1/Archive";
import Observatory from "@/variants/with-design-skill/kimi-k3/source/app/designs/d2/Observatory";
import Garden from "@/variants/with-design-skill/kimi-k3/source/app/designs/d3/Garden";
import Instrument from "@/variants/with-design-skill/kimi-k3/source/app/designs/d4/Instrument";
import Blueprint from "@/variants/with-design-skill/kimi-k3/source/app/designs/d5/Blueprint";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/globals.css";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/designs/d1/archive.css";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/designs/d2/observatory.css";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/designs/d3/garden.css";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/designs/d4/instrument.css";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k3/source/app/designs/d5/blueprint.css";

const pages = {
  "1": Archive,
  "2": Observatory,
  "3": Garden,
  "4": Instrument,
  "5": Blueprint,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return <Page />;
  },
};

export default variantModule;
