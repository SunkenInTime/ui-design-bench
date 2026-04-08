import { Playfair_Display, DM_Sans } from "next/font/google";
import IterationNav from "@/components/IterationNav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export default function IterationTwo() {
  return (
    <div className={`${playfair.variable} ${dmSans.variable} paper-garden`}>
      <div className="pg-grain" />

      <header className="pg-header">
        <div className="pg-logo" style={{ fontFamily: "var(--font-playfair)" }}>
          <span className="pg-logo__mark">✿</span> Cortex
        </div>
        <nav className="pg-nav">
          <a href="#features">Garden</a>
          <a href="#how">Growth</a>
          <a href="#cta">Plant a Seed</a>
        </nav>
      </header>

      <main className="pg-main">
        <section className="pg-hero">
          <div className="pg-hero__vine pg-hero__vine--left" />
          <div className="pg-hero__vine pg-hero__vine--right" />
          <div className="pg-hero__leaf pg-hero__leaf--1">🍃</div>
          <div className="pg-hero__leaf pg-hero__leaf--2">🌿</div>
          <div className="pg-hero__leaf pg-hero__leaf--3">🌱</div>

          <p className="pg-hero__eyebrow" style={{ fontFamily: "var(--font-dm-sans)" }}>
            A garden for your mind
          </p>
          <h1 className="pg-hero__title" style={{ fontFamily: "var(--font-playfair)" }}>
            Thoughts take root.<br />
            Knowledge <em className="pg-hero__title--italic">blooms.</em>
          </h1>
          <p className="pg-hero__sub" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Cortex is a living notebook where your ideas grow organically — connecting, branching, and
            flowering into understanding. Tend to your thoughts like a garden, and watch your second brain flourish.
          </p>
          <div className="pg-hero__cta">
            <a href="#cta" className="pg-btn pg-btn--primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Begin Growing
            </a>
            <a href="#how" className="pg-btn pg-btn--outline" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Explore
            </a>
          </div>
        </section>

        <section id="features" className="pg-features">
          <h2 className="pg-section-title" style={{ fontFamily: "var(--font-playfair)" }}>
            The Garden&apos;s Gifts
          </h2>
          <div className="pg-features__grid">
            {[
              { icon: "🌳", title: "Rooted Connections", desc: "Ideas grow deep roots through bidirectional links. Every thought is anchored to its origin and its future." },
              { icon: "🌸", title: "Organic Discovery", desc: "Like wandering a garden path, Cortex reveals unexpected connections between distant ideas." },
              { icon: "🦋", title: "Lightweight Capture", desc: "Jot a seed of thought in seconds. It will find its place in the garden, no pruning required." },
              { icon: "🌾", title: "Bountiful Harvest", desc: "Search and recall with ease. Your entire knowledge garden, always in season." },
              { icon: "🌧️", title: "Daily Rainfall", desc: "Spaced reviews nourish your memory. The right ideas resurface when they're needed most." },
              { icon: "🌿", title: "Wild & Private", desc: "Your garden, your ground. Everything stays local. No clouds overhead." },
            ].map((f, i) => (
              <div key={i} className="pg-card">
                <div className="pg-card__icon">{f.icon}</div>
                <h3 className="pg-card__title" style={{ fontFamily: "var(--font-playfair)" }}>{f.title}</h3>
                <p className="pg-card__desc" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pg-divider">
          <span className="pg-divider__ornament">❧</span>
        </div>

        <section id="how" className="pg-how">
          <h2 className="pg-section-title" style={{ fontFamily: "var(--font-playfair)" }}>
            How Your Garden Grows
          </h2>
          <div className="pg-steps">
            {[
              { num: "I", title: "Sow", desc: "Plant every idea — a fragment, a quote, a sketch. No thought is too small for the garden." },
              { num: "II", title: "Tend", desc: "Cortex weaves connections between your notes, like roots beneath the soil finding each other." },
              { num: "III", title: "Harvest", desc: "When you need insight, the garden offers it up. Search, browse, or follow the winding paths." },
            ].map((s, i) => (
              <div key={i} className="pg-step">
                <div className="pg-step__num" style={{ fontFamily: "var(--font-playfair)" }}>{s.num}</div>
                <div className="pg-step__content">
                  <h3 className="pg-step__title" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                  <p className="pg-step__desc" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="pg-cta">
          <div className="pg-cta__floral">✿ ❀ ✿</div>
          <h2 className="pg-cta__title" style={{ fontFamily: "var(--font-playfair)" }}>
            Plant Your First Seed
          </h2>
          <p className="pg-cta__sub" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Join a community of cultivators growing their second brains, one thought at a time.
          </p>
          <a href="#" className="pg-btn pg-btn--primary pg-btn--large" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Start Your Garden
          </a>
        </section>
      </main>

      <footer className="pg-footer" style={{ fontFamily: "var(--font-dm-sans)" }}>
        <span>✿ Cortex 2026</span>
        <span>Grow what you know.</span>
      </footer>

      <IterationNav />

      <style>{`
        .paper-garden {
          --cream: #faf5ef;
          --parchment: #f5ede0;
          --forest: #1a3a2a;
          --green: #2d6a4f;
          --gold: #c8a45c;
          --text: #2c2c2c;
          --muted: #6b6b5e;
          min-height: 100vh;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
          position: relative;
        }

        .pg-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
        }

        .pg-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
        }
        .pg-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 22px;
          font-weight: 700;
          color: var(--forest);
        }
        .pg-logo__mark { color: var(--green); font-size: 20px; }
        .pg-nav {
          display: flex;
          gap: 36px;
        }
        .pg-nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 14px;
          font-family: var(--font-dm-sans);
          transition: color 0.2s;
          font-weight: 500;
        }
        .pg-nav a:hover { color: var(--green); }

        .pg-main { position: relative; z-index: 10; }

        .pg-hero {
          text-align: center;
          padding: 100px 24px 80px;
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }
        .pg-hero__vine {
          position: absolute;
          width: 2px;
          height: 120px;
          background: linear-gradient(to bottom, var(--green), transparent);
          opacity: 0.15;
        }
        .pg-hero__vine--left { left: 10%; top: 20%; }
        .pg-hero__vine--right { right: 10%; top: 30%; }

        .pg-hero__leaf {
          position: absolute;
          font-size: 24px;
          opacity: 0.35;
          animation: leafFloat 6s ease-in-out infinite;
        }
        .pg-hero__leaf--1 { left: 8%; top: 25%; animation-delay: 0s; }
        .pg-hero__leaf--2 { right: 12%; top: 15%; animation-delay: 2s; }
        .pg-hero__leaf--3 { left: 20%; bottom: 10%; animation-delay: 4s; }

        @keyframes leafFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }

        .pg-hero__eyebrow {
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
        }
        .pg-hero__title {
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--forest);
          margin: 0 0 28px;
          animation: fadeInUp 0.8s ease-out 0.15s both;
        }
        .pg-hero__title--italic {
          font-style: italic;
          color: var(--green);
        }
        .pg-hero__sub {
          font-size: 16px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 480px;
          margin: 0 auto 40px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        .pg-hero__cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.45s both;
        }

        .pg-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .pg-btn--primary {
          background: var(--forest);
          color: var(--cream);
          box-shadow: 0 4px 20px rgba(26, 58, 42, 0.2);
        }
        .pg-btn--primary:hover {
          background: var(--green);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(45, 106, 79, 0.25);
        }
        .pg-btn--outline {
          background: transparent;
          color: var(--forest);
          border: 1.5px solid var(--forest);
        }
        .pg-btn--outline:hover {
          background: var(--forest);
          color: var(--cream);
        }
        .pg-btn--large {
          padding: 18px 48px;
          font-size: 16px;
        }

        .pg-features {
          padding: 60px 24px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pg-section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--forest);
          text-align: center;
          margin: 0 0 56px;
        }
        .pg-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .pg-card {
          padding: 36px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(45, 106, 79, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(8px);
          transition: all 0.35s;
        }
        .pg-card:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(26, 58, 42, 0.08);
        }
        .pg-card__icon { font-size: 28px; margin-bottom: 16px; }
        .pg-card__title {
          font-size: 20px;
          font-weight: 700;
          color: var(--forest);
          margin: 0 0 10px;
        }
        .pg-card__desc {
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .pg-divider {
          text-align: center;
          padding: 40px 0;
        }
        .pg-divider__ornament {
          font-size: 28px;
          color: var(--gold);
          opacity: 0.6;
        }

        .pg-how {
          padding: 60px 24px 80px;
          max-width: 800px;
          margin: 0 auto;
        }
        .pg-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pg-step {
          display: flex;
          gap: 28px;
          padding: 36px 0;
          border-bottom: 1px solid rgba(45, 106, 79, 0.12);
        }
        .pg-step:last-child { border-bottom: none; }
        .pg-step__num {
          font-size: 40px;
          font-weight: 800;
          color: rgba(200, 164, 92, 0.3);
          line-height: 1;
          min-width: 60px;
        }
        .pg-step__title {
          font-size: 22px;
          font-weight: 700;
          color: var(--forest);
          margin: 0 0 8px;
        }
        .pg-step__desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .pg-cta {
          text-align: center;
          padding: 100px 24px;
          background: linear-gradient(to bottom, var(--cream), var(--parchment));
        }
        .pg-cta__floral {
          font-size: 28px;
          letter-spacing: 16px;
          color: var(--green);
          opacity: 0.25;
          margin-bottom: 32px;
        }
        .pg-cta__title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: var(--forest);
          margin: 0 0 16px;
        }
        .pg-cta__sub {
          font-size: 15px;
          color: var(--muted);
          margin: 0 0 40px;
        }

        .pg-footer {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          padding: 28px 48px;
          border-top: 1px solid rgba(45, 106, 79, 0.1);
          color: var(--muted);
          font-size: 13px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .pg-header { padding: 16px 20px; }
          .pg-nav { gap: 20px; }
          .pg-hero { padding: 60px 20px; }
          .pg-cta { padding: 80px 20px; }
          .pg-footer { flex-direction: column; gap: 8px; text-align: center; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
