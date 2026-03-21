import { DesignSwitcher } from "../components/DesignSwitcher";
import { DM_Serif_Display, Source_Serif_4 } from "next/font/google";
import Link from "next/link";

const displayFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Source_Serif_4({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Iteration1() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} iteration-1`}
      style={{ fontFamily: "var(--font-body), serif" }}
    >
      <DesignSwitcher />
      <main className="iteration-1__main">
        <div className="iteration-1__content">
          <p className="iteration-1__eyebrow">Your second brain</p>
          <h1
            className="iteration-1__headline"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Think.
            <br />
            Capture.
            <br />
            Remember.
          </h1>
          <p className="iteration-1__body">
            Notes that think with you. A place for ideas to grow, connect, and
            resurface when you need them most.
          </p>
          <Link href="#" className="iteration-1__cta">
            Begin
          </Link>
        </div>
      </main>
    </div>
  );
}

