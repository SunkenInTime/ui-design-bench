import type { Metadata } from "next";
import "./globals.css";
import DesignSwitcher from "@/components/DesignSwitcher";

export const metadata: Metadata = {
  title: "Second Brain",
  description: "Your thoughts, organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
