import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tessera: pin everything, file nothing",
  description:
    "Tessera keeps the links between your notes so you never have to invent a folder again. Markdown files, on your disk.",
};

export default function IterationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-scheme="light"
      className={`${archivo.variable} ${jetbrains.variable} bg-[#e6e6e3]`}
    >
      {children}
    </div>
  );
}
