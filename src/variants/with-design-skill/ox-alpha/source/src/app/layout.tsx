import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Substrate — five landing concepts",
  description:
    "Five design iterations for Substrate, a note-taking app built as a second brain.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
