"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TerminalCommand {
  cmd: string;
  output: string[];
  latency: string;
  category: string;
}

const COMMAND_DEMOS: Record<string, TerminalCommand> = {
  find: {
    cmd: "fuzzy-search 'distributed consensus'",
    latency: "1.18ms",
    category: "SEARCH",
    output: [
      "MATCH (42,810 files scanned in 1.18ms):",
      "  01. ~/vault/systems/paxos-vs-raft.md:42    -> 'quorum intersection guarantees'",
      "  02. ~/vault/bio/slime-mold-routing.md:18  -> 'consensus without master clock'",
      "  03. ~/vault/philosophy/epistemic-mesh.md  -> 'social consensus protocols'",
      "→ Focus on match [01] (Enter) | Transclude block (Tab)",
    ],
  },
  backlinks: {
    cmd: "show-backlinks --bidirectional --depth 2",
    latency: "0.84ms",
    category: "GRAPH",
    output: [
      "INCOMING REFERENCES (3 backlinks):",
      "  ← [[distributed-systems/byzantine]] (line 88: 'relying on quorum math')",
      "  ← [[economics/monetary-settlement]] (line 14: 'finality guarantees')",
      "OUTGOING REFERENCES (5 outbound):",
      "  → [[math/markov-chains]] | → [[crypto/merkle-patricia]] | → [[cs/lamport-timestamps]]",
      "GRAPH DEGREE: 8 (High Centrality Eigenvector: 0.94)",
    ],
  },
  transclude: {
    cmd: "transclude [[systems/raft#leader-election]]",
    latency: "0.32ms",
    category: "TRANSCLUDE",
    output: [
      "LIVE EMBEDDED BLOCK (Zero Byte Duplicate):",
      "┌── [[systems/raft#leader-election]] (source: line 104-108) ──────────────┐",
      "│ 'If a follower receives no communication over election timeout, it       │",
      "│ transitions to candidate and increments currentTerm to request votes.'   │",
      "└──────────────────────────────────────────────────────────────────────────┘",
      "STATUS: Live sync active. Edits in source update this buffer instantly.",
    ],
  },
  query: {
    cmd: "syntact-query 'WHERE tag = #mental-model AND words > 500'",
    latency: "2.04ms",
    category: "SQL/AST",
    output: [
      "QUERY RETURNED 14 NOTES IN 2.04ms:",
      "  • [[inversion-principle.md]] (720w) - Updated 2d ago",
      "  • [[ergodicity-economics.md]] (1,420w) - Updated 6d ago",
      "  • [[chesterton-fence.md]] (510w) - Updated 3w ago",
      "Export query result as virtual zettel buffer? (y/n)",
    ],
  },
};

export default function SyntactLandingPage() {
  const [activeCmdKey, setActiveCmdKey] = useState<string>("find");
  const [cliInput, setCliInput] = useState<string>("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [ramFootprint, setRamFootprint] = useState<number>(14.2);

  const currentCommand = COMMAND_DEMOS[activeCmdKey];

  const handleRunCommand = (key: string) => {
    setActiveCmdKey(key);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E6EDF3] selection:bg-[#10B981]/30 selection:text-white font-mono antialiased overflow-x-hidden relative">
      {/* Subtle CRT Phosphor Scanline Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #10B981, #10B981 1px, transparent 1px, transparent 3px)`,
          backgroundSize: "100% 3px",
        }}
      />

      {/* Terminal Top Window Titlebar */}
      <header className="relative z-20 border-b border-[#21262D] bg-[#0E121A]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-[#30363D]">
              <span className="text-[#10B981] font-bold tracking-wider">SYNTACT</span>
              <span className="text-[#8B949E] hidden sm:inline">
                :: /dev/pts/0 (kernel v4.8-pure)
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#8B949E]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>HEAP: {ramFootprint.toFixed(1)} MB</span>
            </span>
            <span>LATENCY: &lt;1.5ms</span>
            <span>FILES: 48,209 .md</span>
            <span className="text-[#E6EDF3] bg-[#21262D] px-1.5 py-0.5 rounded text-[10px]">
              VIM / MODAL
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#install"
              className="px-3 py-1 text-[11px] text-[#10B981] border border-[#10B981]/40 rounded hover:bg-[#10B981]/10 transition-colors"
            >
              $ cargo install syntact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Thesis & Manifesto */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[11px] font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>COMPILED IN RUST // ZERO ELECTRON OVERHEAD</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F6FC] leading-[1.12]">
              Your second brain should run at the speed of thought.
              <span className="block text-[#10B981] mt-1">
                Not the speed of a bloated browser window.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
              Modern note applications devour 2GB of RAM just to render a bulleted list, introduce
              80ms typing latency, and hide your knowledge inside proprietary SQLite blobs.
              Syntact treats your thoughts as a high-throughput plaintext filesystem kernel: instant
              sub-millisecond fuzzy indexing, bidirectional AST backlinks, and pure keyboard
              flow.
            </p>

            {/* Quick hotkeys bar */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#8B949E] text-[11px]">HOTKEYS:</span>
              <kbd className="px-2 py-1 bg-[#161B22] border border-[#30363D] rounded text-[#E6EDF3]">
                ⌘P fuzzy
              </kbd>
              <kbd className="px-2 py-1 bg-[#161B22] border border-[#30363D] rounded text-[#E6EDF3]">
                [[ link
              </kbd>
              <kbd className="px-2 py-1 bg-[#161B22] border border-[#30363D] rounded text-[#E6EDF3]">
                :transclude
              </kbd>
              <kbd className="px-2 py-1 bg-[#161B22] border border-[#30363D] rounded text-[#E6EDF3]">
                gh 2-hop
              </kbd>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#install"
                className="px-5 py-3 rounded bg-[#10B981] hover:bg-[#059669] text-[#0B0E14] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>Download Terminal Binary</span>
                <span>→</span>
              </a>
              <a
                href="#terminal-sandbox"
                className="px-5 py-3 rounded bg-[#161B22] hover:bg-[#21262D] text-[#C9D1D9] border border-[#30363D] text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Run Interactive Demo</span>
              </a>
            </div>

            {/* Hardware Benchmark Comparison */}
            <div className="pt-6 border-t border-[#21262D] grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#10B981]">14 MB</div>
                <div className="text-[10px] text-[#8B949E] mt-0.5">RAM Usage (vs 1.6GB)</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#F0F6FC]">0.8 ms</div>
                <div className="text-[10px] text-[#8B949E] mt-0.5">Keystroke Latency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#FF6B35]">0 Cloud</div>
                <div className="text-[10px] text-[#8B949E] mt-0.5">100% Plain .md Files</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Sandbox */}
          <div id="terminal-sandbox" className="lg:col-span-6">
            <div className="rounded-xl border border-[#30363D] bg-[#0D1117] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Terminal Title Header */}
              <div className="px-4 py-2.5 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#8B949E]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>syntact-kernel // live REPL session</span>
                </div>
                <span className="text-[10px] text-[#10B981] font-mono">
                  BENCH: {currentCommand.latency}
                </span>
              </div>

              {/* Command Presets Selector */}
              <div className="p-3 bg-[#0E131B] border-b border-[#21262D] flex items-center gap-1.5 overflow-x-auto text-[11px]">
                <span className="text-[#8B949E] text-[10px] mr-1">TRY CMD:</span>
                {(Object.keys(COMMAND_DEMOS) as (keyof typeof COMMAND_DEMOS)[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleRunCommand(key)}
                    className={`px-2.5 py-1 rounded text-xs transition-all ${
                      activeCmdKey === key
                        ? "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/50 font-bold"
                        : "bg-[#161B22] text-[#8B949E] hover:text-[#E6EDF3] border border-transparent"
                    }`}
                  >
                    :{key}
                  </button>
                ))}
              </div>

              {/* Active Shell Output Window */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3 min-h-[300px] bg-[#090D14]">
                {/* Simulated Prompt */}
                <div className="flex items-center gap-2 text-[#8B949E]">
                  <span className="text-[#10B981] font-bold">user@kernel:~/vault$</span>
                  <span className="text-[#F0F6FC]">{currentCommand.cmd}</span>
                </div>

                {/* Command Output */}
                <div className="space-y-1.5 pt-1 text-[#C9D1D9]">
                  {currentCommand.output.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith("MATCH") || line.startsWith("LIVE") || line.startsWith("INCOMING")
                          ? "text-[#10B981] font-semibold"
                          : line.includes("→") || line.includes("←")
                          ? "text-[#58A6FF]"
                          : line.startsWith("┌") || line.startsWith("│") || line.startsWith("└")
                          ? "text-[#E6EDF3] bg-[#161B22]/40 px-1 font-mono"
                          : "text-[#8B949E]"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Blinking Cursor */}
                <div className="pt-2 flex items-center gap-2 text-[#8B949E]">
                  <span className="text-[#10B981] font-bold">user@kernel:~/vault$</span>
                  <span className="w-2 h-4 bg-[#10B981] animate-pulse" />
                </div>
              </div>

              {/* Bottom Quick Action Bar */}
              <div className="p-3 bg-[#161B22] border-t border-[#30363D] flex items-center justify-between text-[11px] text-[#8B949E]">
                <span>Type &apos;:help&apos; for all 74 kernel commands</span>
                <span className="text-[#10B981]">Compile Time: 0.04s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Electron Bloat vs Syntact Kernel */}
        <section className="mt-28 pt-16 border-t border-[#21262D]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#10B981]">
              01 // HARDWARE ARCHITECTURE AUDIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC] mt-2">
              Why your notes app is making your laptop fan scream.
            </h2>
            <p className="text-xs sm:text-sm text-[#8B949E] mt-3">
              Benchmarked on Apple M3 Max and Arch Linux with 50,000 markdown zettel notes.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border border-[#30363D] rounded-lg overflow-hidden">
              <thead className="bg-[#161B22] text-[#F0F6FC] border-b border-[#30363D]">
                <tr>
                  <th className="p-3.5">METRIC</th>
                  <th className="p-3.5 text-rose-400">ELECTRON / CLOUD APPS</th>
                  <th className="p-3.5 text-[#10B981]">SYNTACT KERNEL</th>
                  <th className="p-3.5 text-[#8B949E]">IMPACT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#21262D] bg-[#0D1117] text-[#C9D1D9]">
                <tr>
                  <td className="p-3.5 font-bold">Cold Startup Time</td>
                  <td className="p-3.5 text-rose-400">3,800 ms – 6,200 ms</td>
                  <td className="p-3.5 text-[#10B981] font-bold">7.4 ms</td>
                  <td className="p-3.5 text-[#8B949E]">500x faster capture reflex</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">RAM Consumption</td>
                  <td className="p-3.5 text-rose-400">1,400 MB – 2,200 MB</td>
                  <td className="p-3.5 text-[#10B981] font-bold">14.2 MB</td>
                  <td className="p-3.5 text-[#8B949E]">Runs seamlessly alongside Docker & IDEs</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">Keystroke-to-Pixel Delay</td>
                  <td className="p-3.5 text-rose-400">45 ms – 90 ms</td>
                  <td className="p-3.5 text-[#10B981] font-bold">0.8 ms</td>
                  <td className="p-3.5 text-[#8B949E]">Zero cognitive friction while typing</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">Data Storage Format</td>
                  <td className="p-3.5 text-rose-400">Proprietary Cloud SQLite</td>
                  <td className="p-3.5 text-[#10B981] font-bold">Plain UTF-8 Markdown</td>
                  <td className="p-3.5 text-[#8B949E]">Readable in 50 years with `cat`</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: The 4 Kernel Primitives */}
        <section className="mt-28 pt-16 border-t border-[#21262D]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#10B981]">
              02 // CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC] mt-2">
              Engineered for extreme keyboard throughput.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AST-Level Transclusion",
                code: "[[note#block]]",
                desc: "Embed sections of other notes live. When the original updates, every transcluded reference updates in RAM instantly.",
              },
              {
                title: "Vim Modal Grammar",
                code: ":ciw :yaf <C-o>",
                desc: "Full modal motions built directly into the text engine. Custom remappings, leader keys, and Neovim RPC bridges.",
              },
              {
                title: "GQL Plaintext Queries",
                code: "SELECT note WHERE tag = #algo",
                desc: "Query your entire zettelkasten with SQL-like speed without running a background database daemon.",
              },
              {
                title: "Git-Native Sync",
                code: "git commit -m 'sync'",
                desc: "No closed proprietary sync servers. Sync across machines with your existing GitHub, Gitolite, or self-hosted SSH repo.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#0E131C] border border-[#21262D] hover:border-[#30363D] transition-all"
              >
                <div className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded inline-block mb-3">
                  {card.code}
                </div>
                <h3 className="text-sm font-bold text-[#F0F6FC] mb-2">{card.title}</h3>
                <p className="text-xs text-[#8B949E] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Install & Binaries */}
        <section id="install" className="mt-28 p-8 rounded-xl bg-[#0E131B] border border-[#30363D]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#10B981]">
              03 // ZERO RECURRING SUBSCRIPTIONS
            </span>
            <h2 className="text-2xl font-bold text-[#F0F6FC] mt-1">
              Open Source Kernel. MIT Licensed.
            </h2>
            <p className="text-xs text-[#8B949E] mt-2">
              Install via your favorite package manager in 5 seconds:
            </p>
          </div>

          <div className="mt-6 space-y-3 font-mono text-xs">
            <div className="p-3 bg-[#090D14] rounded border border-[#21262D] flex items-center justify-between">
              <span className="text-[#C9D1D9]">
                <span className="text-[#8B949E]">$</span> cargo install syntact-kernel
              </span>
              <span className="text-[10px] text-[#10B981]">Latest: v4.8.2</span>
            </div>
            <div className="p-3 bg-[#090D14] rounded border border-[#21262D] flex items-center justify-between">
              <span className="text-[#C9D1D9]">
                <span className="text-[#8B949E]">$</span> brew install syntact-lang/tap/syntact
              </span>
              <span className="text-[10px] text-[#8B949E]">macOS / Apple Silicon</span>
            </div>
            <div className="p-3 bg-[#090D14] rounded border border-[#21262D] flex items-center justify-between">
              <span className="text-[#C9D1D9]">
                <span className="text-[#8B949E]">$</span> pacman -S syntact-bin
              </span>
              <span className="text-[10px] text-[#8B949E]">Arch Linux / AUR</span>
            </div>
          </div>
        </section>
      </main>

      {/* Terminal Footer */}
      <footer className="relative z-10 border-t border-[#21262D] bg-[#0A0D13] py-10 px-6 text-xs text-[#8B949E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[#F0F6FC] font-bold">SYNTACT PLAIN-TEXT KERNEL</span>
            <span>//</span>
            <span>Local files. Forever readable. Sub-10ms latency.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/with-design-skill/gemini-3.8-flash/2" className="hover:text-[#F0F6FC]">
              ← 02 Atelier
            </Link>
            <Link href="/with-design-skill/gemini-3.8-flash/4" className="hover:text-[#10B981] font-bold">
              Next: 04 Mneme (Temporal Stream) →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
