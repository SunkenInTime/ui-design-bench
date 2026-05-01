import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mnemosyne — Your second brain",
    template: "%s · Mnemosyne",
  },
  description:
    "Capture ideas, link thoughts, and retrieve what matters — a note workspace built like an extension of memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="min-h-full antialiased font-sans">
        <div className="isolate min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
