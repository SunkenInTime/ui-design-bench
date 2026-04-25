import type { Metadata } from "next";
import "@/generated/scoped-variant-css/with-design-skill/glm-5.1/source/src/app/globals.css";

export const metadata: Metadata = {
  title: "Cortex — Your Second Brain",
  description: "A note-taking application that thinks with you",
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
