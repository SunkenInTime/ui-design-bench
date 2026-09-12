import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Synapse — Graph",
  description: "Your notes, networked into a second brain.",
};

export default function TwoPage() {
  return (
    <main className="lp-two">
      <section className="lp-two__hero">
        <div className="lp-two__media anim-ken">
          <Image
            src="/variants/without-design-skill/grok-4.5/heroes/two.jpg"
            alt="Abstract network of glowing teal nodes on deep navy"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lp-two__grid" />
        <div className="lp-two__veil" />
        <div className="lp-two__nodes" aria-hidden>
          <span
            className="lp-two__node anim-pulse"
            style={{ top: "22%", left: "18%" }}
          />
          <span
            className="lp-two__node anim-pulse"
            style={{ top: "38%", right: "24%", animationDelay: "0.8s" }}
          />
          <span
            className="lp-two__node anim-pulse"
            style={{ bottom: "28%", left: "42%", animationDelay: "1.4s" }}
          />
        </div>
        <div className="lp-two__content">
          <p className="lp-two__brand anim-fade">
            second brain
            <span>Synapse</span>
          </p>
          <h1 className="lp-two__headline anim-rise-delay-1">
            Your notes, networked into a mind that thinks with you.
          </h1>
          <p className="lp-two__lede anim-rise-delay-2">
            Capture fragments. Watch links form. Query a graph that knows how
            your ideas relate.
          </p>
          <div className="lp-two__cta anim-rise-delay-3">
            <Link href="#start" className="lp-two__btn">
              Initialize graph
            </Link>
            <Link href="#nodes" className="lp-two__btn-ghost">
              Explore nodes
            </Link>
          </div>
        </div>
      </section>

      <section className="lp-two__section" id="nodes">
        <div className="lp-two__section-inner">
          <h2>From isolated notes to living structure.</h2>
          <p>
            Every capture becomes a node. Every mention becomes an edge. Over
            time, Synapse reveals the shape of how you think.
          </p>
          <div className="lp-two__features">
            <article className="lp-two__feature">
              <h3>Capture</h3>
              <p>Drop thoughts without deciding where they belong.</p>
            </article>
            <article className="lp-two__feature">
              <h3>Connect</h3>
              <p>Links surface automatically as patterns emerge.</p>
            </article>
            <article className="lp-two__feature">
              <h3>Recall</h3>
              <p>Ask a question—get the thread, not a folder path.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lp-two__section" id="start">
        <div className="lp-two__section-inner">
          <h2>A second brain that scales with curiosity.</h2>
          <p>
            Built for researchers, builders, and anyone whose best ideas arrive
            mid-sentence.
          </p>
        </div>
      </section>

      <footer className="lp-two__footer">
        SYNAPSE // GRAPH MODE // 2026
      </footer>
    </main>
  );
}
