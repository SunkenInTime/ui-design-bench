import { Orbitron, Rajdhani } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-neural-display",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-neural-body",
});

const modules = [
  { code: "CAP-01", name: "Instant Capture", status: "ONLINE" },
  { code: "LNK-02", name: "Neural Linking", status: "ONLINE" },
  { code: "RCV-03", name: "Context Recall", status: "ONLINE" },
  { code: "SYN-04", name: "Pattern Synthesis", status: "BETA" },
];

export default function RetroFutureLanding() {
  return (
    <div
      className={`${orbitron.variable} ${rajdhani.variable} relative min-h-screen overflow-hidden`}
      style={{
        fontFamily: "var(--font-neural-body), sans-serif",
        background: "#050010",
        color: "#e0e0ff",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(255,0,255,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #050010 0%, #0a0020 100%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg) scale(2)",
          transformOrigin: "center top",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,255,255,0.15), transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />

      <header className="relative z-10 flex items-center justify-between border-b border-[#00ffff]/20 px-6 py-5">
        <div className="flex items-center gap-3">
          <div
            className="h-3 w-3 rounded-sm"
            style={{
              background: "#00ffff",
              boxShadow: "0 0 12px #00ffff, 0 0 24px #00ffff",
            }}
          />
          <span
            className="text-sm tracking-[0.3em]"
            style={{ fontFamily: "var(--font-neural-display), sans-serif" }}
          >
            NEURALINK
          </span>
          <span className="text-[10px] text-[#00ffff]/50">v2.077</span>
        </div>
        <div className="flex items-center gap-6 text-xs tracking-widest text-[#ff00ff]/70">
          <span className="hidden sm:inline">SYS.STATUS: NOMINAL</span>
          <button
            type="button"
            className="border border-[#00ffff]/40 px-4 py-1.5 text-[#00ffff] transition hover:bg-[#00ffff]/10"
            style={{
              boxShadow: "inset 0 0 12px rgba(0,255,255,0.1)",
            }}
          >
            JACK IN
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 pb-24">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div style={{ animation: "reveal-up 0.7s ease-out both" }}>
            <p
              className="mb-4 text-xs tracking-[0.4em] text-[#ff00ff]"
              style={{ fontFamily: "var(--font-neural-display), sans-serif" }}
            >
              {`/// SECOND BRAIN INTERFACE`}
            </p>
            <h1
              className="mb-6 text-4xl leading-tight tracking-wide md:text-6xl"
              style={{
                fontFamily: "var(--font-neural-display), sans-serif",
                textShadow: "0 0 40px rgba(0,255,255,0.3)",
              }}
            >
              UPLOAD
              <br />
              YOUR
              <br />
              <span
                style={{
                  color: "#00ffff",
                  textShadow: "0 0 20px #00ffff",
                }}
              >
                MIND
              </span>
            </h1>
            <p className="mb-8 max-w-md text-lg font-light leading-relaxed text-[#a0a0cc]">
              Direct neural interface for knowledge storage. Capture at the speed
              of thought. Retrieve by associative resonance.
            </p>
            <button
              type="button"
              className="relative px-8 py-3 text-sm tracking-[0.2em] text-[#050010] transition hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-neural-display), sans-serif",
                background: "linear-gradient(90deg, #00ffff, #ff00ff)",
                boxShadow: "0 0 30px rgba(0,255,255,0.4)",
              }}
            >
              INITIALIZE VAULT
            </button>
          </div>

          <div
            className="relative rounded border border-[#00ffff]/20 p-6 font-mono text-xs"
            style={{
              background: "rgba(0,255,255,0.03)",
              boxShadow: "0 0 40px rgba(0,255,255,0.05)",
              animation: "reveal-up 0.7s ease-out 0.15s both",
            }}
          >
            <div className="mb-4 flex items-center gap-2 border-b border-[#00ffff]/10 pb-3">
              <div className="h-2 w-2 rounded-full bg-[#ff00ff]" />
              <div className="h-2 w-2 rounded-full bg-[#00ffff]" />
              <div className="h-2 w-2 rounded-full bg-[#00ffff]/30" />
              <span className="ml-2 text-[#00ffff]/50">neural_vault.exe</span>
            </div>
            <pre className="leading-6 text-[#00ffff]/80">
              {`> establishing neural link...
> bandwidth: 847 TB/s
> latency: 0.003ms

> loading memory graph...
  ├─ 2,847 nodes active
  ├─ 12,403 synaptic links
  └─ recall index: OPTIMAL

> awaiting input_
`}
            </pre>
            <span
              className="inline-block h-4 w-2 animate-pulse bg-[#00ffff]"
              style={{ boxShadow: "0 0 8px #00ffff" }}
            />
          </div>
        </section>

        <section className="mt-24">
          <p
            className="mb-8 text-xs tracking-[0.4em] text-[#ff00ff]/70"
            style={{ fontFamily: "var(--font-neural-display), sans-serif" }}
          >
            ACTIVE MODULES
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((mod, i) => (
              <div
                key={mod.code}
                className="border border-[#00ffff]/15 p-5 transition hover:border-[#00ffff]/40"
                style={{
                  background: "rgba(255,0,255,0.03)",
                  animation: `reveal-up 0.6s ease-out ${0.2 + i * 0.08}s both`,
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] text-[#00ffff]/50">
                    {mod.code}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{
                      color: mod.status === "BETA" ? "#ff00ff" : "#00ffff",
                      textShadow:
                        mod.status === "BETA"
                          ? "0 0 8px #ff00ff"
                          : "0 0 8px #00ffff",
                    }}
                  >
                    ● {mod.status}
                  </span>
                </div>
                <p
                  className="text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-neural-display), sans-serif" }}
                >
                  {mod.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="mt-24 overflow-hidden border border-[#ff00ff]/20 py-4"
          style={{ background: "rgba(255,0,255,0.05)" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="px-8 text-sm tracking-[0.3em] text-[#ff00ff]/60"
                style={{ fontFamily: "var(--font-neural-display), sans-serif" }}
              >
                THINK FASTER • REMEMBER EVERYTHING • CONNECT EVERYTHING • KNOW
                MORE • THINK FASTER • REMEMBER EVERYTHING • CONNECT EVERYTHING •
                KNOW MORE •&nbsp;
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
