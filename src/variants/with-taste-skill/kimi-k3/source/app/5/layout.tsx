import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export default function IterationFiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${archivo.variable} f-archivo bg-[#fefef9] text-[#111110]`}>
      {children}
    </div>
  );
}
