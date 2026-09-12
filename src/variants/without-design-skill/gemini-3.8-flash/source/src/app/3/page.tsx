"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Terminal,
  Zap,
  Search,
  Command,
  Cpu,
  GitCommit,
  ArrowRight,
  Check,
  Copy,
  Activity,
  Clock,
  Code2,
  Database,
  Keyboard,
  Flame,
  ExternalLink,
  CornerDownLeft,
  Sliders,
  CheckCircle2,
  FolderGit2
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "action" | "query" | "navigation";
  title: string;
  shortcut: string;
  description: string;
  latency: string;
}

const COMMAND_PALETTE_ITEMS: CommandItem[] = [
  {
    id: "quick-capture",
    category: "action",
    title: "cortex capture --instant",
    shortcut: "⌥ C",
    description: "Append one-line thought into today's scratchpad buffer",
    latency: "1.2ms"
  },
  {
    id: "query-decisions",
    category: "query",
    title: "cortex query: tags contains #architecture",
    shortcut: "⌘ ⇧ F",
    description: "Fuzzy scan 14,200 markdown files for system architecture RFCs",
    latency: "3.4ms"
  },
  {
    id: "git-sync",
    category: "action",
    title: "cortex sync --push-git-remote",
    shortcut: "⌘ S",
    description: "Atomic commit with cryptographic tree hash and fast-forward push",
    latency: "28ms"
  },
  {
    id: "mcp-server",
    category: "action",
    title: "mcp serve --port 4040 --context-brain",
    shortcut: "⌘ M",
    description: "Expose personal vault as dynamic MCP resource for Cursor & Claude",
    latency: "4.8ms"
  },
  {
    id: "graph-centrality",
    category: "query",
    title: "cortex analyze: eigenvector-centrality",
    shortcut: "⌥ G",
    description: "Calculate top 10 foundational hub concepts in your personal graph",
    latency: "6.1ms"
  },
  {
    id: "vim-mode",
    category: "navigation",
    title: "cortex mode: toggle-vim-bindings",
    shortcut: ":set vi",
    description: "Enable modal modal normal/insert/visual buffer manipulation",
    latency: "0.2ms"
  }
];

export default function IterationThree() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCommandId, setSelectedCommandId] = useState(COMMAND_PALETTE_ITEMS[0].id);
  const [activeLog, setActiveLog] = useState<string | null>(null);
  const [executionCount, setExecutionCount] = useState(148);

  const filteredCommands = COMMAND_PALETTE_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("brew install cortex-brain/tap/cortex");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const handleRunCommand = (cmd: CommandItem) => {
    setActiveLog(`[SUCCESS ${cmd.latency}] Executed \`${cmd.title}\` -> buffer updated.`);
    setExecutionCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#080A0F] text-neutral-100 font-mono selection:bg-amber-500/30 selection:text-amber-200">
      {/* Precision CRT Scanline & Grid Effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none" />

      {/* Top Velocity HUD Header */}
      <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#080A0F]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold tracking-wider">
              <Terminal className="w-4 h-4 text-amber-500" />
              <span>CORTEX://CLI</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/10 text-[11px] text-neutral-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Rust v1.82 Core • SQLite-WASM 4ms Index</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-neutral-400 text-[11px]">
              <span className="text-amber-400/90 flex items-center gap-1">
                <Activity className="w-3 h-3" /> 120 FPS UI
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">0.8ms P99 Sync</span>
            </div>
            <button
              onClick={handleCopyInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs transition cursor-pointer"
            >
              {copiedInstall ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>brew install cortex</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-amber-500/30 bg-amber-950/30 text-amber-400 text-xs mb-6">
          <Flame className="w-3.5 h-3.5 text-amber-500" />
          <span>The High-Velocity Command Brain For Builders</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-300">v3.8 Stable Released</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
          Capture thought at <span className="text-amber-400 font-mono">120 FPS</span>.{" "}
          <span className="block text-neutral-400 font-normal text-2xl sm:text-4xl mt-2 font-mono">
            Zero latency. Zero mouse dependency.
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The note-taking software for people who live inside terminals. Native Rust binaries, Git version control, Vim modal bindings, and an ultra-fast SQLite index that searches 50,000 notes in &lt; 4ms.
        </p>

        {/* Quick Shell Install Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-neutral-200 shadow-inner w-full sm:w-auto">
            <span className="text-amber-500 font-bold">$</span>
            <code className="text-amber-300">curl -fsSL https://cortex.sh/get | sh</code>
            <button
              onClick={handleCopyInstall}
              className="ml-3 p-1 hover:text-white text-neutral-400"
              title="Copy to clipboard"
            >
              {copiedInstall ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <a
            href="#interactive-terminal"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Launch Command Palette</span>
          </a>
        </div>

        {/* Micro Benchmarks Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left text-xs">
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
            <div className="text-neutral-500 text-[10px] uppercase">Search Latency</div>
            <div className="mt-1 text-lg font-bold text-emerald-400">2.1 ms</div>
            <div className="text-[10px] text-neutral-400">vs Notion: 1,420 ms</div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
            <div className="text-neutral-500 text-[10px] uppercase">Memory Footprint</div>
            <div className="mt-1 text-lg font-bold text-amber-400">24 MB</div>
            <div className="text-[10px] text-neutral-400">vs Electron: 750 MB</div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
            <div className="text-neutral-500 text-[10px] uppercase">Cold Boot Time</div>
            <div className="mt-1 text-lg font-bold text-emerald-400">18 ms</div>
            <div className="text-[10px] text-neutral-400">Instant background socket</div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
            <div className="text-neutral-500 text-[10px] uppercase">Git Sync State</div>
            <div className="mt-1 text-lg font-bold text-cyan-400">SHA-256</div>
            <div className="text-[10px] text-neutral-400">Zero vendor lock-in</div>
          </div>
        </div>
      </section>

      {/* Interactive Command Palette Simulator Showcase */}
      <section id="interactive-terminal" className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-amber-500/30 bg-[#0A0D15] p-4 sm:p-6 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <Command className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white tracking-wider">CORTEX SPOTLIGHT (⌘K)</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
              <span>Simulated Execution Buffer: {executionCount} runs</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Interactive Input */}
          <div className="mt-4 relative">
            <Search className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Type to filter commands, or press Enter on selected..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full h-12 pl-10 pr-24 rounded-xl bg-black/60 border border-amber-500/30 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 font-mono"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[10px] text-neutral-400">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">↓</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">↵ Enter</kbd>
            </div>
          </div>

          {/* Command List */}
          <div className="mt-4 space-y-2">
            {filteredCommands.map((cmd) => {
              const isSelected = selectedCommandId === cmd.id;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    setSelectedCommandId(cmd.id);
                    handleRunCommand(cmd);
                  }}
                  className={`p-3 rounded-xl border transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    isSelected
                      ? "bg-amber-500/10 border-amber-500/50 text-white shadow-sm"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded bg-black/50 border border-white/10 flex items-center justify-center text-[10px] text-amber-400 shrink-0">
                      &gt;_
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-white">
                          {cmd.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-neutral-400">
                          {cmd.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                        {cmd.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                      {cmd.latency}
                    </span>
                    <kbd className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[10px] text-amber-300 font-mono">
                      {cmd.shortcut}
                    </kbd>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Execution Log Output Console */}
          {activeLog && (
            <div className="mt-4 p-3 rounded-xl bg-black/90 border border-emerald-500/40 text-emerald-400 text-xs flex items-center justify-between animate-in fade-in">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{activeLog}</span>
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">Press ⌘K to reset</span>
            </div>
          )}

          {/* Bottom hotkey hints */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-neutral-400">
            <div className="flex items-center gap-4">
              <span><kbd className="text-white">⌥ C</kbd> Quick Capture</span>
              <span><kbd className="text-white">⌘ P</kbd> Fuzzy Jump</span>
              <span><kbd className="text-white">⌘ ⇧ F</kbd> Grep Vault</span>
            </div>
            <span className="text-amber-500/80">Click any row to test execute</span>
          </div>
        </div>
      </section>

      {/* Feature Matrix for Developers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amber-400">
            Engineered For Pure Leverage
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-sans text-white">
            Built Like High-Frequency Trading Systems
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400">
            We stripped out webview bloat, telemetry trackers, and 500MB dependencies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition">
            <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">
              Git-Backed Everything
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
              Every edit, deletion, or link update is automatically mapped to standard Git commits. Roll back any file with <code className="text-amber-300">cortex undo</code> or branch ideas in parallel.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-400">
              Zero cloud lock-in • Your repo
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition">
            <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">
              Native MCP Server Protocol
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
              Run <code className="text-amber-300">cortex mcp</code> to turn your second brain into a live Model Context Protocol server. Cursor and Claude can read your real-time notes directly without copy-paste.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-400">
              Standard JSON-RPC 2.0 interface
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition">
            <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Keyboard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">
              Full Vim / Helix Motions
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
              Navigate buffers without taking your hands off the home row. Includes custom `.cortexrc` configuration files, Lua hooks, and custom macro recording.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-400">
              Modal navigation & text objects
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section className="py-16 border-t border-white/10 bg-[#07080D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-amber-400">
            Open Source & Developer Subscriptions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-sans text-white">
            Honest, Developer-Friendly Pricing
          </h2>
          <p className="mt-2 text-xs text-neutral-400">
            The core CLI and local SQLite engine are 100% free and open-source.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <span className="text-xs text-neutral-400 uppercase">CLI OSS</span>
              <div className="mt-2 text-3xl font-bold text-white font-sans">$0</div>
              <p className="mt-1 text-xs text-neutral-400">Local Rust binary forever.</p>
              <div className="mt-6 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Unlimited local vaults and buffers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>SQLite-WASM query engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Git hooks and CLI daemon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Model Context Protocol (MCP) server</span>
                </div>
              </div>
              <a
                href="#install"
                className="mt-6 block text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs transition"
              >
                Install via Homebrew
              </a>
            </div>

            <div className="p-6 rounded-2xl border-2 border-amber-500 bg-[#0E121C] relative">
              <span className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-amber-500 text-black font-bold text-[10px] uppercase">
                Power Developer
              </span>
              <span className="text-xs text-amber-400 uppercase">Cortex Cloud Sync</span>
              <div className="mt-2 text-3xl font-bold text-white font-sans">
                $10 <span className="text-xs font-normal text-neutral-400">/ mo</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">Zero-config encrypted relay across devices.</p>
              <div className="mt-6 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Encrypted P2P WebSocket sync (&lt; 10ms)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>iOS & Android companion terminal clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Raycast & Alfred official extensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Priority access to GPU embedding endpoints</span>
                </div>
              </div>
              <a
                href="#start"
                className="mt-6 block text-center py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition"
              >
                Start 14-Day Pro Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white">CORTEX CLI</span>
            <span>— The Speed-of-Thought Second Brain</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/without-design-skill/gemini-3.8-flash/4" className="hover:text-neutral-300 transition text-amber-400">Iteration 4: Mnemonic AI →</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition">GitHub</a>
            <a href="#benchmarks" className="hover:text-neutral-300 transition">Benchmarks</a>
            <span>MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
