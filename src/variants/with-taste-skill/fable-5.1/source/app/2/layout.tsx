import { EB_Garamond } from "next/font/google";

/*
  Iteration 2: "Commonplace"
  Design read: editorial manifesto for readers and writers. The product is
  framed as the commonplace book tradition, so a Garamond is a literal
  reference to the object, not a "creative = serif" reflex. Centered hero
  is allowed here because the message is the design.
  DESIGN_VARIANCE 6 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3
  Palette: neutral off-white + off-black + vermilion. Radius 0 everywhere.
*/
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-iter="2" className={garamond.variable}>
      {children}
    </div>
  );
}
