import type { Metadata } from "next";
import "./globals.css";
import DesignSwitcher from "./components/DesignSwitcher";

export const metadata: Metadata = {
  title: "Cortex — Your second brain",
  description:
    "Cortex is a note-taking application that works like a second brain: capture anything, link everything, and resurface ideas before you forget them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
