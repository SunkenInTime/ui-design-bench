import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Syne } from "next/font/google";

const sans = Outfit({ subsets: ["latin"] });
const display = Syne({
  subsets: ["latin"],
  variable: "--font-kith-display",
});

export const metadata: Metadata = {
  title: "Kith",
  description: "Stack a thought. Find it later.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} ${display.variable} min-h-[100dvh] bg-[#e4e6ea] text-[#1f2328] dark:bg-[#1a1c20] dark:text-[#ececec]`}
    >
      {children}
    </div>
  );
}
