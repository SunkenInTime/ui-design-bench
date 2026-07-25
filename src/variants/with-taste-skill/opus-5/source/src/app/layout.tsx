import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { IterationSwitcher } from "@/variants/with-taste-skill/opus-5/source/src/components/iteration-switcher";

/*
  Only the font the shared chrome needs (the switcher and the index page) is
  loaded here. Each iteration at /1 .. /5 declares its own families in its own
  page file, so a route preloads only the fonts it actually renders.
*/
const geist = Geist({
  variable: "--f-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verso design iterations",
    template: "%s | Verso",
  },
  description:
    "Five landing page directions for Verso, a notebook that links what you write to what you already wrote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // No page-level colour is set here on purpose: each route owns and locks its
    // own theme, so the shell stays neutral instead of fighting it.
    <html lang="en" className={geist.variable}>
      <body className="antialiased">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
