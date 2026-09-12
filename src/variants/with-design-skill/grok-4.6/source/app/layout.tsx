import type { Metadata } from "next";
import VersionSwitcher from "./components/VersionSwitcher";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Loci",
    template: "%s",
  },
  description:
    "Loci is a local notebook that behaves like a second brain: rooms, links, and recall.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
