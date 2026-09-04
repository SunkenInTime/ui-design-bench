import type { VariantModule } from "@/lib/gallery-types";
import {
  Bricolage_Grotesque,
  DM_Sans,
  Instrument_Serif,
  Space_Grotesk,
  Caveat,
} from "next/font/google";
import { ExperienceProvider } from "./source/components/shared";
import Page1 from "./source/app/one/page";
import Page2 from "./source/app/two/page";
import Page3 from "./source/app/three/page";
import Page4 from "./source/app/four/page";
import Page5 from "./source/app/five/page";
import "@/generated/scoped-variant-css/with-design-skill/gpt-6-astra/source/app/globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"] });

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
    return (
      <div
        className={`${sans.variable} ${display.variable} ${serif.variable} ${space.variable} ${hand.variable}`}
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        <ExperienceProvider>
          <Page />
        </ExperienceProvider>
      </div>
    );
  },
};

export default variantModule;
