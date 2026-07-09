import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morrow — your second brain",
  description: "A calm place for the ideas you don't want to lose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
