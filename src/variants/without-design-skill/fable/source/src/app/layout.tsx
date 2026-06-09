import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Your second brain",
  description:
    "Capture every thought, connect every idea. Cortex is the note-taking app that thinks with you.",
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
