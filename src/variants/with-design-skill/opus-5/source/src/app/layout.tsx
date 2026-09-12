import type { Metadata } from "next";
import "./globals.css";
import { IterationSwitcher } from "@/variants/with-design-skill/opus-5/source/src/components/iteration-switcher";

export const metadata: Metadata = {
  title: "Cairn — landing page iterations",
  description:
    "Five design directions for Cairn, a notes app for people whose notes outlive the projects they were written for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
