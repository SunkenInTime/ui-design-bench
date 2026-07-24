import type { Metadata } from "next";
import { DirectionSwitcher } from "@/variants/with-design-skill/opus-5/source/src/components/DirectionSwitcher";
import { plexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tessera — five directions",
  description:
    "Five landing page directions for Tessera, a second brain for the notes you actually keep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plexMono.variable}>
      <body className="antialiased">
        {children}
        <DirectionSwitcher />
      </body>
    </html>
  );
}
