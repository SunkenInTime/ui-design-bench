import { Manrope } from "next/font/google";

/*
  Iteration 4: "Understory"
  Design read: premium consumer landing, Apple-adjacent. Bento grid with real
  visual variation, one frosted-glass surface (the floating nav).
  DESIGN_VARIANCE 7 / MOTION_INTENSITY 6 / VISUAL_DENSITY 3
  Palette: Forest (deep green + bone + amber). Deliberately not the
  beige/brass/espresso default. Shape rule: surfaces 22px, buttons pill.
*/
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-iter="4" className={manrope.variable}>
      {children}
    </div>
  );
}
