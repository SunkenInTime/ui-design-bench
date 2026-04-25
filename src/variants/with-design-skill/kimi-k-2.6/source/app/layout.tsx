import type { Metadata } from "next";
import "@/generated/scoped-variant-css/with-design-skill/kimi-k-2.6/source/app/globals.css";
import ThemeSwitcher from "../components/ThemeSwitcher";

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
      <body className="min-h-full flex flex-col relative">
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
