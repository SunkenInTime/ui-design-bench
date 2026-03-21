import { DesignSwitcher } from "../components/DesignSwitcher";
import { Fraunces, Nunito_Sans } from "next/font/google";
import Link from "next/link";

const displayFont = Fraunces({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Nunito_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Iteration3() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} iteration-3`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <DesignSwitcher />
      <main className="iteration-3__main">
        <div className="iteration-3__bg">
          <div className="iteration-3__blob iteration-3__blob--1" />
          <div className="iteration-3__blob iteration-3__blob--2" />
          <div className="iteration-3__blob iteration-3__blob--3" />
        </div>
        <div className="iteration-3__content">
          <p className="iteration-3__eyebrow">Your second brain</p>
          <h1
            className="iteration-3__headline"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Where ideas
            <br />
            take root
          </h1>
          <p className="iteration-3__body">
            Nurture your thoughts. Capture, connect, and watch them grow into
            something meaningful.
          </p>
          <Link href="#" className="iteration-3__cta">
            Start growing
          </Link>
        </div>
      </main>
    </div>
  );
}

