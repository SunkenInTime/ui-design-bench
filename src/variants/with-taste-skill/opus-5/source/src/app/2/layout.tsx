import type { Metadata } from "next";
import { EB_Garamond, Inter_Tight } from "next/font/google";

/*
  Serif is justified here and only here: the brief is a commonplace book, an
  actual publication form. EB Garamond rather than the two display serifs every
  generated page reaches for.
*/
const garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tessera: a commonplace book that remembers",
  description:
    "Keep what you notice. Tessera holds the connections between your notes so you do not have to file them.",
};

export default function IterationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-scheme="light"
      className={`${garamond.variable} ${interTight.variable} bg-[#f2f2f0]`}
    >
      {children}
    </div>
  );
}
