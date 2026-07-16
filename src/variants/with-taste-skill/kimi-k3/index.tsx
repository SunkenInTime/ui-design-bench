import {
  Archivo,
  EB_Garamond,
  Geist,
  Geist_Mono,
  Inter_Tight,
  Space_Grotesk,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import Page1 from "@/variants/with-taste-skill/kimi-k3/source/app/1/page";
import Page2 from "@/variants/with-taste-skill/kimi-k3/source/app/2/page";
import Page3 from "@/variants/with-taste-skill/kimi-k3/source/app/3/page";
import Page4 from "@/variants/with-taste-skill/kimi-k3/source/app/4/page";
import Page5 from "@/variants/with-taste-skill/kimi-k3/source/app/5/page";
import "@/generated/scoped-variant-css/with-taste-skill/kimi-k3/source/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const ebGaramond = EB_Garamond({
  variable: "--font-ebg",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const spaceGrotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const interTight = Inter_Tight({ variable: "--font-tight", subsets: ["latin"] });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });

const pages = {
  "1": { Page: Page1, className: `${ebGaramond.variable} f-ebg bg-[#f7f7f3] text-[#21211c]` },
  "2": { Page: Page2, className: "bg-[#0a0a0b] text-zinc-100" },
  "3": { Page: Page3, className: `${spaceGrotesk.variable} f-grotesk bg-[#fbfaf6] text-[#191813]` },
  "4": { Page: Page4, className: `${interTight.variable} f-tight bg-[#f5f6f8] text-[#101828]` },
  "5": { Page: Page5, className: `${archivo.variable} f-archivo bg-[#fefef9] text-[#111110]` },
} as const;

const baseFonts = `${geistSans.variable} ${geistMono.variable}`;

const variantModule: VariantModule = {
  render({ iteration }) {
    const { Page, className } = pages[iteration];
    return (
      <div className={`${baseFonts} ${className} min-h-full antialiased`}>
        <Page />
      </div>
    );
  },
};

export default variantModule;
