import {
  Cormorant_Garamond,
  Fraunces,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import type { VariantModule } from "@/lib/gallery-types";
import { IterationSwitcher } from "@/variants/with-design-skill/gpt-5.4/source/src/components/iteration-switcher";
import { renderIteration } from "@/variants/with-design-skill/gpt-5.4/source/src/components/landing-iterations";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const editorialFont = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceIds = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
} as const;

const module: VariantModule = {
  render({ iteration }) {
    return (
      <div
        className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable} min-h-full overflow-x-hidden bg-[#050816] text-white [font-family:var(--font-body)]`}
      >
        <IterationSwitcher />
        {renderIteration(sourceIds[iteration])}
      </div>
    );
  },
};

export default module;
