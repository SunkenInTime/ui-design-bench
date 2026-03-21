import { DesignSwitcher } from "../components/DesignSwitcher";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import Link from "next/link";

const displayFont = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Iteration4() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} iteration-4`}
      style={{ fontFamily: "var(--font-body), serif" }}
    >
      <DesignSwitcher />
      <main className="iteration-4__main">
        <div className="iteration-4__noise" aria-hidden />
        <div className="iteration-4__content">
          <div className="iteration-4__ornament" />
          <p className="iteration-4__eyebrow">Your second brain</p>
          <h1
            className="iteration-4__headline"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            The art of
            <br />
            <span className="iteration-4__headline-accent">remembering</span>
          </h1>
          <p className="iteration-4__body">
            A refined space for your thoughts. Capture, curate, and recall with
            intention.
          </p>
          <Link href="#" className="iteration-4__cta">
            Begin your collection
          </Link>
        </div>
      </main>
    </div>
  );
}
