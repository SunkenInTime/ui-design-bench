import { Source_Serif_4, Syne } from "next/font/google";
import type { ReactNode } from "react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-palace-display",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-palace-body",
  weight: ["400", "600", "700"],
});

export default function PalaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${syne.variable} ${sourceSerif.variable}`}>{children}</div>
  );
}
