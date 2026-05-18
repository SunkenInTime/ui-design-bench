import type { Metadata } from "next";
import { IterationSwitcher } from "./components/IterationSwitcher";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cortex — Your Second Brain",
  description:
    "Five design explorations for a note-taking app that thinks with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <IterationSwitcher />
      </body>
    </html>
  );
}
