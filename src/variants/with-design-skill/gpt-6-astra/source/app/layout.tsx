import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  DM_Sans,
  Instrument_Serif,
  Space_Grotesk,
  Caveat,
} from "next/font/google";
import { ExperienceProvider, DesignSwitcher } from "@/variants/with-design-skill/gpt-6-astra/source/components/shared";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Morrow — A little room for your whole mind",
    template: "%s | Morrow",
  },
  description:
    "A home for passing thoughts, things you love, and ideas you haven't met yet. Explore five ways to build your second brain with Morrow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${space.variable} ${hand.variable}`}
    >
      <body>
        <ExperienceProvider>
          {children}
          <DesignSwitcher />
        </ExperienceProvider>
      </body>
    </html>
  );
}
