import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function IterationThreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${grotesk.variable} f-grotesk bg-[#fbfaf6] text-[#191813]`}>
      {children}
    </div>
  );
}
