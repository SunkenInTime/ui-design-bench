import { DesignSwitcher } from "../components/DesignSwitcher";
import { Bebas_Neue, Outfit } from "next/font/google";
import Link from "next/link";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Iteration5() {
  return (
    <div
      className={`${displayFont.variable} ${bodyFont.variable} iteration-5`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <DesignSwitcher />
      <main className="iteration-5__main">
        <div className="iteration-5__shapes">
          <div className="iteration-5__shape iteration-5__shape--1" />
          <div className="iteration-5__shape iteration-5__shape--2" />
          <div className="iteration-5__shape iteration-5__shape--3" />
          <div className="iteration-5__shape iteration-5__shape--4" />
        </div>
        <div className="iteration-5__content">
          <h1
            className="iteration-5__headline"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            SECOND
            <br />
            BRAIN
          </h1>
          <p className="iteration-5__tagline">
            Notes. Links. Ideas. All of it. One place.
          </p>
          <Link href="#" className="iteration-5__cta">
            Get started
          </Link>
        </div>
      </main>
    </div>
  );
}
