import type { Metadata } from "next";
import "./globals.css";
import { DesignSwitcher } from "@/variants/with-design-skill/kimi-k-2.5/source/src/components/DesignSwitcher";

export const metadata: Metadata = {
  title: "Cortex — Your Second Brain",
  description: "A note-taking application that extends your mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DesignSwitcher />
        {children}
      </body>
    </html>
  );
}

