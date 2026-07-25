import type { Metadata } from "next";
import { Archivo, Courier_Prime, Source_Sans_3 } from "next/font/google";

/**
 * Archivo is the display face and is only ever used expanded and uppercase,
 * so the `wdth` axis has to come along with it.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

/** Courier Prime is not variable, so the weights have to be named. */
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Cairn — a card catalog for the notes you already wrote",
  description:
    "Cairn keeps your notes as plain markdown files on your own disk, cross-references them as you type, and pulls back the ones you filed years ago. Free for one vault.",
};

export default function CardCatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${archivo.variable} ${sourceSans.variable} ${courierPrime.variable}`}
    >
      {children}
    </div>
  );
}
