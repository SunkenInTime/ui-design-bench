import { Bricolage_Grotesque } from "next/font/google";

/*
  Iteration 5: "Loud"
  Design read: agency / Awwwards-leaning kinetic-type landing. Word-by-word
  hero entrance (Motion), one logo marquee, GSAP horizontal pan for features.
  DESIGN_VARIANCE 9 / MOTION_INTENSITY 8 / VISUAL_DENSITY 3
  Palette: off-white + off-black + one hot-pink pop. Shape rule: surfaces
  sharp (0px), buttons pill.
*/
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-iter="5" className={bricolage.variable}>
      {children}
    </div>
  );
}
