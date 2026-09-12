import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla } from "next/font/google";

/* Display ink: heavy, tight, set very large. Variable font — no `weight`. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

/* Body ink: Karla is variable too. */
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cairn — two notes overprint into a third",
  description:
    "Cairn keeps your notes as plain markdown on your own disk. Link any two and the link prints on both. Resurface brings back the note you stopped opening a year ago.",
};

export default function OverprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${bricolage.variable} ${karla.variable}`}>{children}</div>;
}
