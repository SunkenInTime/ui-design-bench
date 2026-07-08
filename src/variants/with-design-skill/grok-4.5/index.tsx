import {
  DM_Sans,
  Fraunces,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Sans,
  Literata,
  Newsreader,
  Source_Sans_3,
  Space_Grotesk,
  Syne,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import PageOne from "@/variants/with-design-skill/grok-4.5/source/src/app/one/page";
import PageTwo from "@/variants/with-design-skill/grok-4.5/source/src/app/two/page";
import PageThree from "@/variants/with-design-skill/grok-4.5/source/src/app/three/page";
import PageFour from "@/variants/with-design-skill/grok-4.5/source/src/app/four/page";
import PageFive from "@/variants/with-design-skill/grok-4.5/source/src/app/five/page";
import "@/generated/scoped-variant-css/with-design-skill/grok-4.5/source/src/app/globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const literata = Literata({ variable: "--font-literata", subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });

const pages = {
  "1": PageOne,
  "2": PageTwo,
  "3": PageThree,
  "4": PageFour,
  "5": PageFive,
} as const;

const variantModule: VariantModule = {
  render({ iteration }) {
    const Page = pages[iteration];
    return (
      <div
        className={[
          fraunces.variable,
          sourceSans.variable,
          ibmPlexSans.variable,
          ibmPlexMono.variable,
          syne.variable,
          dmSans.variable,
          literata.variable,
          instrumentSans.variable,
          spaceGrotesk.variable,
          newsreader.variable,
          "min-h-full antialiased",
        ].join(" ")}
      >
        <Page />
      </div>
    );
  },
};

export default variantModule;
