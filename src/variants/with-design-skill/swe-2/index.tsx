import {
  Anton,
  Archivo,
  IBM_Plex_Mono,
  Newsreader,
  Space_Grotesk,
  Spectral,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-design-skill/swe-2/source/app/one/page";
import Page2 from "@/variants/with-design-skill/swe-2/source/app/two/page";
import Page3 from "@/variants/with-design-skill/swe-2/source/app/three/page";
import Page4 from "@/variants/with-design-skill/swe-2/source/app/four/page";
import Page5 from "@/variants/with-design-skill/swe-2/source/app/five/page";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/globals.css";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/one/one.css";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/two/two.css";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/three/three.css";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/four/four.css";
import "@/generated/scoped-variant-css/with-design-skill/swe-2/source/app/five/five.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

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
        className={`${spectral.variable} ${grotesk.variable} ${plexMono.variable} ${archivo.variable} ${newsreader.variable} ${anton.variable} min-h-full antialiased`}
      >
        <Page />
      </div>
    );
  },
};

export default variantModule;
