import type { VariantModule } from "@/lib/gallery-types";
import { OpusRenderer } from "@/variants/with-design-skill/opus-4.6/renderer";

const module: VariantModule = {
  render({ iteration }) {
    return <OpusRenderer iteration={iteration} />;
  },
};

export default module;
