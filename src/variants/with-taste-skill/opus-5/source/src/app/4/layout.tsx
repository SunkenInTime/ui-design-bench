import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tessera: everything you meant to remember",
  description:
    "Tessera holds your notes and the links between them, so nothing needs filing and nothing gets lost.",
};

export default function IterationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-scheme="light"
      className={`${outfit.variable} ${manrope.variable} bg-[#f6f7f9]`}
    >
      {children}
    </div>
  );
}
