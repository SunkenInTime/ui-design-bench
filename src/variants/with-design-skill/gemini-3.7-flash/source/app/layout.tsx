import type { Metadata } from "next";
import { VersionSwitcher } from "../components/VersionSwitcher";
import "./globals.css";

export const metadata: Metadata = {
  title: "Locus",
  description:
    "A second brain that houses your thoughts instead of filing them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <VersionSwitcher />
        {children}
      </body>
    </html>
  );
}
