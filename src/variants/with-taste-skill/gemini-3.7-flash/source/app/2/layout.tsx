import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";

const sans = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kith",
  description: "A quieter place for what you know.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} min-h-[100dvh] bg-[#eceff2] text-[#22262b] dark:bg-[#16181c] dark:text-[#e7eaee]`}
    >
      {children}
    </div>
  );
}
