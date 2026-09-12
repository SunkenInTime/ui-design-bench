import type { VariantModule } from "@/lib/gallery-types";
import {
  figtree,
  geistMono,
  geistSans,
  outfit,
  spaceGrotesk,
  syne,
} from "@/variants/with-taste-skill/grok-4.6/source/app/fonts";
import PageOne from "@/variants/with-taste-skill/grok-4.6/source/app/1/page";
import PageTwo from "@/variants/with-taste-skill/grok-4.6/source/app/2/page";
import PageThree from "@/variants/with-taste-skill/grok-4.6/source/app/3/page";
import PageFour from "@/variants/with-taste-skill/grok-4.6/source/app/4/page";
import PageFive from "@/variants/with-taste-skill/grok-4.6/source/app/5/page";
import "@/generated/scoped-variant-css/with-taste-skill/grok-4.6/source/app/globals.css";

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  outfit.variable,
  syne.variable,
  figtree.variable,
  spaceGrotesk.variable,
].join(" ");

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div className={`${fontVariables} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
