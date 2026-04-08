import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Which AI Made This?",
  description:
    "Compare AI-generated UIs from the same prompt across models, with and without a frontend design skill.",
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
