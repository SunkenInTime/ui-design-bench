import { DesignSwitcher } from "../components/DesignSwitcher";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const monoFont = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function Iteration2() {
  return (
    <div
      className={`${monoFont.variable} iteration-2`}
      style={{ fontFamily: "var(--font-mono), monospace" }}
    >
      <DesignSwitcher />
      <main className="iteration-2__main">
        <div className="iteration-2__scanlines" aria-hidden />
        <div className="iteration-2__content">
          <p className="iteration-2__prompt">
            <span className="iteration-2__cursor">_</span>
          </p>
          <h1 className="iteration-2__headline">
            &gt; SECOND_BRAIN.EXE
            <br />
            <span className="iteration-2__glow">INITIALIZING...</span>
          </h1>
          <p className="iteration-2__body">
            [CAPTURE] [LINK] [RECALL] [SYNC]
            <br />
            Your thoughts. Indexed. Searchable. Forever.
          </p>
          <Link href="#" className="iteration-2__cta">
            &gt; LAUNCH
          </Link>
        </div>
      </main>
    </div>
  );
}

