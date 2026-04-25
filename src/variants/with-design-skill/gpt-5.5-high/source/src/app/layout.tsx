import type { Metadata } from "next";
import "@/generated/scoped-variant-css/with-design-skill/gpt-5.5-high/source/src/app/globals.css";

export const metadata: Metadata = {
  title: "Cortex Notes",
  description: "A second brain note-taking application landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
