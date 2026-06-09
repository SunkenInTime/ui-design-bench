import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tangent — a second brain, five ways",
  description:
    "Five landing page directions for Tangent, a note-taking app built as a second brain.",
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
