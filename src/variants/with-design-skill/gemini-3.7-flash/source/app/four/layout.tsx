import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import type { ReactNode } from "react";

const display = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-garden-display",
  weight: ["400", "500", "700"],
});

const body = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  variable: "--font-garden-body",
  weight: ["400", "500", "700"],
});

export default function GardenLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable}`}>{children}</div>
  );
}
