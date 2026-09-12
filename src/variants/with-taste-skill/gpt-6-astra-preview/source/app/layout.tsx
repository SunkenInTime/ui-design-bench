import type { ReactNode } from "react";
import type { Metadata } from "next";
import { sans, geometric, editorial } from "./lib/fonts";

export const metadata: Metadata = {
  title: { default: "Aster | A little space for a big mind", template: "%s | Aster" },
  description: "A thoughtful home for your notes, ideas, and little discoveries. Explore five ways to make space for your mind.",
  applicationName: "Aster",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div data-astra-taste-root="" suppressHydrationWarning className={`astra-source-root ${sans.variable} ${geometric.variable} ${editorial.variable}`}>
      <noscript><style>{`[data-astra-taste-root] .reveal{opacity:1!important;transform:none!important}`}</style></noscript>
      <>{children}</>
    </div>
  );
}
