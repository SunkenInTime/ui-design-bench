import { EB_Garamond } from "next/font/google";

const ebg = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebg",
  style: ["normal", "italic"],
});

export default function IterationOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ebg.variable} bg-[#f7f7f3] text-[#21211c]`}>
      {children}
    </div>
  );
}
