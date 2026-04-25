import { Jura, VT323 } from "next/font/google";
import Link from "next/link";

const display = Jura({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const mono = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export default function Four() {
  return (
    <div
      className={`${display.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-black text-green-400 scanlines`}
    >
      <div className="pointer-events-none absolute inset-0 z-20 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12),rgba(0,0,0,0.12)_1px,transparent_1px,transparent_2px)]" />

      {/* CRT flicker and glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-green-500/[0.02]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(57,255,20,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating HUD elements */}
      <div className="pointer-events-none absolute left-6 top-24 hidden flex-col gap-2 md:flex">
        <div className="h-16 w-px bg-green-500/30" />
        <div className="font-[family-name:var(--font-mono)] text-[10px] text-green-500/40">SYS.01</div>
        <div className="h-8 w-px bg-green-500/30" />
      </div>
      <div className="pointer-events-none absolute right-6 top-24 hidden flex-col items-end gap-2 md:flex">
        <div className="h-16 w-px bg-fuchsia-500/30" />
        <div className="font-[family-name:var(--font-mono)] text-[10px] text-fuchsia-500/40">MEM.99</div>
        <div className="h-8 w-px bg-fuchsia-500/30" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-green-500/20 px-6 py-4 md:px-16">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
          <div className="font-[family-name:var(--font-mono)] text-lg tracking-widest text-green-400">
            SECOND_BRAIN.exe
          </div>
        </div>
        <div className="font-[family-name:var(--font-mono)] text-xs text-green-500/50">
          v2.0.77 [BUILD 2049]
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-16 md:px-16">
        {/* Terminal Window */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-lg border border-green-500/30 bg-black/80 shadow-[0_0_60px_rgba(57,255,20,0.08)] backdrop-blur-sm">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-green-500/20 bg-green-500/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <div className="ml-4 font-[family-name:var(--font-mono)] text-[10px] text-green-500/40">
              user@second-brain: ~/thoughts
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-10">
            <div className="font-[family-name:var(--font-mono)] text-sm leading-7 md:text-base">
              <span className="text-green-500/50">$</span>{" "}
              <span className="text-green-300">init_cognition --mode=enhanced</span>
              <br />
              <span className="text-green-500/50">[OK]</span>{" "}
              <span className="text-green-400/70">Neural bridge established...</span>
              <br />
              <span className="text-green-500/50">[OK]</span>{" "}
              <span className="text-green-400/70">Memory banks: ONLINE</span>
              <br />
              <span className="text-green-500/50">[OK]</span>{" "}
              <span className="text-green-400/70">Thought threads: 8,192 active</span>
              <br />
              <br />
              <span className="animate-pulse text-green-400">_</span>
            </div>

            <div className="mt-8 border-t border-green-500/10 pt-8">
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-green-300 md:text-5xl">
                UPLOAD YOUR MIND
              </h1>
              <p className="mt-4 max-w-lg font-[family-name:var(--font-mono)] text-sm text-green-400/60">
                Second Brain is a neural interface for raw thought. No cloud.
                No trackers. Just you and your data, encrypted at the synapse
                level.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="group relative overflow-hidden border border-green-400 bg-green-400 px-8 py-3 font-[family-name:var(--font-mono)] text-sm font-bold text-black transition-all hover:bg-green-300"
                >
                  <span className="relative z-10">EXECUTE</span>
                </Link>
                <a
                  href="#"
                  className="border border-green-500/30 px-8 py-3 font-[family-name:var(--font-mono)] text-sm text-green-400/70 transition-colors hover:border-green-400 hover:text-green-400"
                >
                  VIEW_SOURCE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats HUD */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { label: "THOUGHTS_INDEXED", value: "∞", sub: "No limits. No caps." },
            { label: "LINKS_FORMED", value: "2.4M", sub: "Neural pathways active." },
            { label: "UPTIME", value: "100%", sub: "Local-first. Always on." },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative border border-green-500/20 bg-green-500/5 p-6 transition-all hover:border-green-400/40 hover:bg-green-500/10"
            >
              <div className="font-[family-name:var(--font-mono)] text-[10px] text-green-500/40">
                {stat.label}
              </div>
              <div className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold text-green-300 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                {stat.value}
              </div>
              <div className="mt-1 font-[family-name:var(--font-mono)] text-xs text-green-500/50">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Feature list — terminal style */}
        <div className="mt-16 border border-fuchsia-500/20 bg-fuchsia-500/5 p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 bg-fuchsia-500 animate-pulse" />
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-fuchsia-400/70">
              Feature Matrix
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { cmd: "--local-storage", desc: "Your data never leaves your machine." },
              { cmd: "--bi-directional-links", desc: "Every note knows what notes link to it." },
              { cmd: "--graph-visualization", desc: "See your thoughts as a constellation." },
              { cmd: "--markdown-native", desc: "Future-proof format. No lock-in." },
            ].map((f) => (
              <div key={f.cmd} className="flex gap-4">
                <span className="font-[family-name:var(--font-mono)] text-xs text-fuchsia-500/60">
                  {f.cmd}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-green-400/50">
                  {f.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-green-500/30 px-8 py-4">
            <span className="font-[family-name:var(--font-mono)] text-xs text-green-500/60">
              root@second-brain:~#{" "}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-green-400">
              ./start_thinking.sh
            </span>
            <span className="animate-pulse text-green-400">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
