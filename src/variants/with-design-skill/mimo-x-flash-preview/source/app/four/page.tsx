import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cairn / Plotter",
  description: "Research-lab plotter landing direction for Cairn.",
};

export default function PlotterPage() {
  return (
    <div className="min-h-screen bg-[#EEF0F3] text-[#0C1821] [background-image:linear-gradient(to_right,rgba(12,24,33,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,24,33,0.06)_1px,transparent_1px)] [background-size:28px_28px]">

      <header className="border-b border-[#0C1821]/15 bg-[#EEF0F3]/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              <circle cx="5" cy="11" r="2.5" fill="none" stroke="#0C1821" strokeWidth="1.2" />
              <circle cx="17" cy="5" r="2.5" fill="none" stroke="#0F7A6C" strokeWidth="1.2" />
              <circle cx="17" cy="17" r="2.5" fill="none" stroke="#0C1821" strokeWidth="1.2" />
              <path d="M7.5 11h4M14.5 6.2l-3 3.2M14.5 15.8l-3-3.2" stroke="#0C1821" strokeWidth="1" fill="none" />
            </svg>
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium">
              Cairn
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-xs text-[#0C1821]/50 italic">
              instrument for thought
            </span>
          </div>
          <a
            href="#"
            className="inline-flex h-9 items-center bg-[#0F7A6C] px-4 font-[family-name:var(--font-space-grotesk)] text-xs font-medium text-white hover:bg-[#0c6559]"
          >
            Start recording
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
        <section className="grid gap-10 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-wide text-[#0F7A6C]">
              CH. 01 — SIGNAL ACQUISITION
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-[1.08] font-light tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Plot the shape of what you know.
            </h1>
            <p className="mt-6 max-w-md font-[family-name:var(--font-space-grotesk)] text-[15px] leading-relaxed text-[#0C1821]/72">
              Cairn is a second brain built like a lab notebook: capture readings
              quickly, see the connections between them, and run the same experiment
              twice without losing the trail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex h-10 items-center border border-[#0F7A6C] bg-[#0F7A6C] px-4 font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-white"
              >
                Launch workspace
              </a>
              <a
                href="#protocol"
                className="inline-flex h-10 items-center border border-[#0C1821]/25 bg-white/60 px-4 font-[family-name:var(--font-space-grotesk)] text-sm font-medium hover:border-[#0C1821]"
              >
                Read the protocol
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <figure className="border border-[#0C1821]/20 bg-white/80 p-4 shadow-[0_1px_0_rgba(12,24,33,0.06)]">
              <figcaption className="mb-3 flex items-center justify-between font-[family-name:var(--font-space-grotesk)] text-[11px] text-[#0C1821]/55">
                <span>FIG. 01 — LINK FIELD (SAMPLE VAULT)</span>
                <span className="text-[#0F7A6C]">LIVE</span>
              </figcaption>
              <svg
                viewBox="0 0 420 280"
                className="h-auto w-full"
                role="img"
                aria-label="Diagram of linked notes forming a constellation"
              >
                <rect width="420" height="280" fill="#F7F8FA" />
                {/* grid */}
                {Array.from({ length: 13 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 35}
                    y1="0"
                    x2={i * 35}
                    y2="280"
                    stroke="#0C1821"
                    strokeOpacity="0.05"
                  />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 35}
                    x2="420"
                    y2={i * 35}
                    stroke="#0C1821"
                    strokeOpacity="0.05"
                  />
                ))}
                {/* edges */}
                <g stroke="#0C1821" strokeOpacity="0.35" fill="none" strokeWidth="1">
                  <path d="M70 140 L150 90" />
                  <path d="M150 90 L240 70" />
                  <path d="M150 90 L200 160" />
                  <path d="M200 160 L300 130" />
                  <path d="M200 160 L280 210" />
                  <path d="M300 130 L360 90" />
                  <path d="M70 140 L120 210" />
                  <path d="M120 210 L200 160" stroke="#0F7A6C" strokeOpacity="0.85" />
                  <path d="M280 210 L340 240" />
                </g>
                {/* nodes */}
                <g fontFamily="var(--font-space-grotesk), sans-serif" fontSize="10" fill="#0C1821">
                  <circle cx="70" cy="140" r="7" fill="#0C1821" />
                  <text x="82" y="143">inbox</text>
                  <circle cx="150" cy="90" r="9" fill="#0F7A6C" />
                  <text x="162" y="93">spatial memory</text>
                  <circle cx="240" cy="70" r="6" fill="#0C1821" />
                  <text x="250" y="73">cognition</text>
                  <circle cx="200" cy="160" r="11" fill="#0F7A6C" />
                  <text x="214" y="164" fontWeight="600">core note</text>
                  <circle cx="300" cy="130" r="7" fill="#0C1821" />
                  <text x="312" y="133">talk · 4/2</text>
                  <circle cx="360" cy="90" r="5" fill="#0C1821" fillOpacity="0.5" />
                  <circle cx="120" cy="210" r="6" fill="#0C1821" />
                  <text x="130" y="214">draft §2</text>
                  <circle cx="280" cy="210" r="7" fill="#0C1821" />
                  <text x="292" y="214">reading list</text>
                  <circle cx="340" cy="240" r="5" fill="#0F7A6C" fillOpacity="0.7" />
                </g>
                <text
                  x="16"
                  y="266"
                  fontFamily="var(--font-space-grotesk), sans-serif"
                  fontSize="9"
                  fill="#0C1821"
                  fillOpacity="0.45"
                >
                  SCALE 1:1 · n=9 · edges=9
                </text>
              </svg>
            </figure>
          </div>
        </section>

        <section
          id="protocol"
          className="mt-16 border-t border-[#0C1821]/15 pt-12"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-normal sm:text-3xl">
              Operating protocol
            </h2>
            <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] text-[#0C1821]/45">
              three stages · no ceremony
            </p>
          </div>
          <div className="mt-8 grid gap-px border border-[#0C1821]/15 bg-[#0C1821]/15 sm:grid-cols-3">
            {[
              {
                id: "A",
                h: "Log",
                p: "Capture voice, text, or a URL in under a second. Timestamps and source are automatic.",
                readout: "latency < 40ms",
              },
              {
                id: "B",
                h: "Wire",
                p: "Every mention creates a durable edge. The graph updates while you keep writing.",
                readout: "edges ∝ use",
              },
              {
                id: "C",
                h: "Revisit",
                p: "Daily digest surfaces orphan nodes and rising clusters — the ones worth another pass.",
                readout: "recall ↑",
              },
            ].map((s) => (
              <div key={s.id} className="bg-white/90 p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-6 w-6 items-center justify-center border border-[#0F7A6C] font-[family-name:var(--font-space-grotesk)] text-[11px] font-medium text-[#0F7A6C]">
                    {s.id}
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-wide text-[#0C1821]/45">
                    {s.readout}
                  </span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-xl">
                  {s.h}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[14px] leading-relaxed text-[#0C1821]/72">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-[#0C1821]/20 bg-white/85 px-6 py-10 sm:px-10">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] text-[#0F7A6C]">
              CALIBRATION
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight sm:text-4xl">
              Run your thinking on instruments, not vibes.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-[15px] text-[#0C1821]/70">
              Free for personal vaults. Export always available as Markdown + JSON graph.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-10 items-center bg-[#0F7A6C] px-5 font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-white"
            >
              Begin logging
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
