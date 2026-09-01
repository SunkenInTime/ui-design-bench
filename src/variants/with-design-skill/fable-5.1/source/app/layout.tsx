import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loam — a second brain that talks back",
  description:
    "Five design directions for Loam, a note-taking app built to be your second brain.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
