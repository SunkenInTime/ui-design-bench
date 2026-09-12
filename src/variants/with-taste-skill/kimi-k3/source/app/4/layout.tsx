import { Inter_Tight } from "next/font/google";

const tight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-tight",
});

export default function IterationFourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${tight.variable} f-tight bg-[#f5f6f8] text-[#101828]`}>
      {children}
    </div>
  );
}
