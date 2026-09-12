import type { Metadata } from "next";
import { VersionSwitcher } from "@/variants/with-taste-skill/grok-4.6/source/components/version-switcher";
import {
  figtree,
  geistMono,
  geistSans,
  outfit,
  spaceGrotesk,
  syne,
} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cairn",
  description: "A second brain for notes that find each other.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${syne.variable} ${figtree.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
