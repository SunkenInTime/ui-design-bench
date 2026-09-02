"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TerminalWindow,
  Cpu,
  GitBranch,
  Key,
  Database,
  Lightning,
  ShieldCheck,
  Code,
  Copy,
  Check,
  CaretRight,
} from "@phosphor-icons/react";

/*
  DESIGN READ:
  Reading this as: Local-first, keyboard-driven second brain for engineers,
  security researchers, and hackers, with a high-density terminal language,
  leaning toward deep carbon, phosphor amber #f59e0b accent, monospace data strips,
  and hotkey command palette.

  DIALS:
  DESIGN_VARIANCE: 7
  MOTION_INTENSITY: 6
  VISUAL_DENSITY: 9
*/

interface CommandItem {
  cmd: string;
  desc: string;
  output: string;
  latency: string;
}

const TERMINAL_COMMANDS: CommandItem[] = [
  {
    cmd: ":query --vector 'raft consensus split brain'",
    desc: "Cosine semantic search across 42,000 research notes",
    output: "Found 4 matches in 0.18ms. Highest affinity: notes/distributed/raft-safety.md (score 0.982)",
    latency: "0.18ms",
  },
  {
    cmd: ":link [[byzantine-fault]] [[paxos-leases]]",
    desc: "Establish atomic bidirectional relation with reverse AST injection",
    output: "Inserted bidirectional edge: AST node #4092 updated. Commit hash e81b2a.",
    latency: "0.04ms",
  },
  {
    cmd: ":graph --export dot --depth 3",
    desc: "Stream Graphviz DAG topology directly to standard out",
    output: "Serialized 148 nodes and 391 edges into graph.dot (18.4 KB).",
    latency: "0.82ms",
  },
  {
    cmd: ":audit --crypto-check",
    desc: "Verify local GPG signature and verify zero uncommitted leaks",
    output: "All 1,290 note heads signed with GPG key ID 0x82FA419B. Status: pristine.",
    latency: "0.41ms",
  },
];

export default function KortexLandingPage() {
  const [activeCmd, setActiveCmd] = useState<CommandItem>(TERMINAL_COMMANDS[0]);
  const [copiedInstall, setCopiedInstall] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("cargo install kortex-brain");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] bg-[#090a0f] text-[#d1d5db] font-mono selection:bg-amber-500/30 selection:text-amber-200 text-xs">
      {/* High-density Telemetry Header Bar */}
      <div className="border-b border-[#1f2430] bg-[#0c0d14] px-4 py-1.5 flex items-center justify-between text-[11px] text-[#6b7280]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>KORTEX_KERNEL v0.9.8-LTS</span>
          </span>
          <span className="hidden sm:inline">PID: 49102</span>
          <span className="hidden md:inline">HEAP: 14.2MB</span>
          <span className="hidden lg:inline">SYNC: 100% LOCAL</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LATENCY: 0.18ms</span>
          <span className="text-amber-400">STATUS: READY</span>
        </div>
      </div>

      {/* Main Terminal Header */}
      <header className="sticky top-0 z-40 border-b border-[#1f2430] bg-[#090a0f]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/with-taste-skill/gemini-3.8-flash/3" className="flex items-center gap-2">
            <div className="h-6 w-6 bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
              KX
            </div>
            <span className="font-bold text-white tracking-wider text-sm">
              KORTEX // 0x
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[11px] text-[#9ca3af]">
            <a href="#cli" className="hover:text-amber-400 transition-colors">
              // REPL
            </a>
            <a href="#specs" className="hover:text-amber-400 transition-colors">
              // ARCHITECTURE
            </a>
            <a href="#vim" className="hover:text-amber-400 transition-colors">
              // MODES
            </a>
            <a href="#install" className="hover:text-amber-400 transition-colors">
              // BINARIES
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 border border-[#2d3342] bg-[#11131a] px-3 py-1.5 text-[11px] text-amber-400 hover:border-amber-400 transition-colors"
            >
              {copiedInstall ? (
                <>
                  <Check size={13} />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>cargo install kortex-brain</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Cockpit density, max pt-16, fits viewport) */}
      <section className="pt-12 pb-14 border-b border-[#1f2430] bg-[#090a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Eyebrow 1 of 2 */}
              <div className="inline-block border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-400 uppercase tracking-widest font-bold">
                [ ZERO MOUSE PROTOCOL ]
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
                The keyboard-driven cortex for hackers.
              </h1>

              <p className="text-[#9ca3af] text-xs leading-relaxed max-w-[48ch]">
                Instantaneous local capture, Vim keybindings, and SQLite semantic query engine with zero mouse friction.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#install"
                  className="inline-flex items-center justify-center bg-amber-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition-colors"
                >
                  Install Kortex v0.9
                </a>
                <a
                  href="#cli"
                  className="inline-flex items-center justify-center gap-2 border border-[#2d3342] bg-[#11131a] px-4 py-2.5 text-xs text-white hover:border-amber-400 transition-colors"
                >
                  <TerminalWindow size={15} />
                  <span>Interactive REPL</span>
                </a>
              </div>

              <div className="pt-2 text-[10px] text-[#6b7280] space-y-0.5">
                <div>* 100% Rust memory safety core.</div>
                <div>* Plain markdown + SQLite FTS5 index.</div>
              </div>
            </div>

            {/* Right Column: Live Interactive Command Simulator (7 cols) */}
            <div className="lg:col-span-7">
              <div className="border border-[#2d3342] bg-[#0c0d14] shadow-2xl">
                {/* Window Bar */}
                <div className="border-b border-[#1f2430] bg-[#11131a] px-3 py-2 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                      <span className="h-2 w-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[#9ca3af] ml-2">bash - kortex@zenith:~</span>
                  </div>
                  <span className="text-amber-400 text-[10px]">FPS: 120 | LAT: 0.18ms</span>
                </div>

                {/* Commands Selector */}
                <div className="p-3 border-b border-[#1f2430] grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#0a0b11]">
                  {TERMINAL_COMMANDS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCmd(item)}
                      className={`text-left p-2 border transition-all text-[10px] ${
                        activeCmd.cmd === item.cmd
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-[#1f2430] text-[#6b7280] hover:text-white hover:border-[#2d3342]"
                      }`}
                    >
                      <div className="text-amber-400 font-bold truncate">
                        {item.cmd.split(" ")[0]}
                      </div>
                      <div className="truncate text-[#9ca3af]">{item.latency}</div>
                    </button>
                  ))}
                </div>

                {/* Terminal Screen Output */}
                <div className="p-4 space-y-3 bg-[#08090d] min-h-[220px]">
                  <div className="text-[#6b7280]">
                    # Execute semantic query or relational link in active buffer
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-amber-400 font-bold">&gt;</span>
                    <span className="font-bold">{activeCmd.cmd}</span>
                  </div>
                  <div className="text-[11px] text-[#9ca3af] pl-4 border-l-2 border-amber-500/50 space-y-1">
                    <div>{activeCmd.output}</div>
                    <div className="text-[#6b7280] text-[10px]">
                      // Operation executed in {activeCmd.latency} without disk thrashing.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400 pt-2 animate-pulse">
                    <span>kortex:buffer [NORMAL]</span>
                    <span className="h-3 w-1.5 bg-amber-400 inline-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Density System Specifications Strip */}
      <section id="specs" className="border-b border-[#1f2430] bg-[#0c0d14] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px]">
            <div className="border border-[#1f2430] p-4 bg-[#090a0f]">
              <div className="text-[#6b7280]">SEARCH SPEED</div>
              <div className="text-xl font-bold text-amber-400 mt-1">0.24ms</div>
              <div className="text-[#9ca3af] mt-1">Across 100k local markdown ASTs</div>
            </div>
            <div className="border border-[#1f2430] p-4 bg-[#090a0f]">
              <div className="text-[#6b7280]">MEMORY FOOTPRINT</div>
              <div className="text-xl font-bold text-white mt-1">14.8MB</div>
              <div className="text-[#9ca3af] mt-1">Zero Electron browser bloat</div>
            </div>
            <div className="border border-[#1f2430] p-4 bg-[#090a0f]">
              <div className="text-[#6b7280]">NETWORK EGRESS</div>
              <div className="text-xl font-bold text-white mt-1">0 BYTES</div>
              <div className="text-[#9ca3af] mt-1">Local SQLite database forever</div>
            </div>
            <div className="border border-[#1f2430] p-4 bg-[#090a0f]">
              <div className="text-[#6b7280]">KEYBINDINGS</div>
              <div className="text-xl font-bold text-amber-400 mt-1">VIM / EMACS</div>
              <div className="text-[#9ca3af] mt-1">Full modal navigation suite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Command Architecture (ID: cli) */}
      <section id="cli" className="py-16 border-b border-[#1f2430] bg-[#090a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            {/* Eyebrow 2 of 2 */}
            <div className="inline-block border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-400 uppercase tracking-widest font-bold mb-3">
              [ SUBSYSTEM SPECS ]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Unix philosophy applied to human knowledge.
            </h2>
            <p className="mt-2 text-[#9ca3af] text-xs">
              Every note is text. Every query is a pipeline. Every link is composable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[#1f2430] bg-[#0c0d14] p-5">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <GitBranch size={16} />
                <span className="font-bold">Git-Native Lineage</span>
              </div>
              <p className="text-[#9ca3af] text-[11px] leading-relaxed">
                Every save is an immutable Git commit. Revert thoughts back 5 years or branch exploratory hypotheses without corrupting your trunk.
              </p>
              <div className="mt-4 pt-3 border-t border-[#1f2430] text-[10px] text-[#6b7280]">
                $ git log --oneline -n 3
              </div>
            </div>

            <div className="border border-[#1f2430] bg-[#0c0d14] p-5">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <Database size={16} />
                <span className="font-bold">SQLite Vector Virtual Table</span>
              </div>
              <p className="text-[#9ca3af] text-[11px] leading-relaxed">
                Embeddings calculated locally on your CPU using quantized models. Query notes via cosine distance in pure SQL syntax.
              </p>
              <div className="mt-4 pt-3 border-t border-[#1f2430] text-[10px] text-[#6b7280]">
                SELECT * FROM notes WHERE vector_match(query)
              </div>
            </div>

            <div className="border border-[#1f2430] bg-[#0c0d14] p-5">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <Key size={16} />
                <span className="font-bold">GPG Key Signing</span>
              </div>
              <p className="text-[#9ca3af] text-[11px] leading-relaxed">
                Cryptographically sign daily entries. Encrypt sensitive security research notes with recipient public keys.
              </p>
              <div className="mt-4 pt-3 border-t border-[#1f2430] text-[10px] text-[#6b7280]">
                GPG KEY ID: 0x82FA419B
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vim Keybinding Modal Engine (ID: vim) */}
      <section id="vim" className="py-16 border-b border-[#1f2430] bg-[#0c0d14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Modal navigation at the speed of thought.
            </h2>
            <p className="mt-2 text-[#9ca3af] text-xs">
              No UI toolbars. No menus. Master standard key chords to organize libraries without taking hands off the home row.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
            <div className="border border-[#1f2430] bg-[#090a0f] p-4">
              <div className="text-amber-400 font-bold">NORMAL MODE</div>
              <div className="text-white font-mono mt-1">Ctrl + [</div>
              <p className="text-[#9ca3af] text-[10px] mt-2">
                Traverse headers, fold outline sections, and yank markdown blocks.
              </p>
            </div>

            <div className="border border-[#1f2430] bg-[#090a0f] p-4">
              <div className="text-amber-400 font-bold">LINK EXTENSION</div>
              <div className="text-white font-mono mt-1">gl (Go Link)</div>
              <p className="text-[#9ca3af] text-[10px] mt-2">
                Fuzzy search graph and insert bidirectional reference portal.
              </p>
            </div>

            <div className="border border-[#1f2430] bg-[#090a0f] p-4">
              <div className="text-amber-400 font-bold">FUZZY JUMP</div>
              <div className="text-white font-mono mt-1">Leader + f</div>
              <p className="text-[#9ca3af] text-[10px] mt-2">
                Ripgrep through entire knowledge base in sub-millisecond threads.
              </p>
            </div>

            <div className="border border-[#1f2430] bg-[#090a0f] p-4">
              <div className="text-amber-400 font-bold">GRAPH INSPECTOR</div>
              <div className="text-white font-mono mt-1">Leader + g</div>
              <p className="text-[#9ca3af] text-[10px] mt-2">
                Render terminal ASCII dependency tree of current node backlinks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Validation (Quotes, Clean Attribution, No Em-dashes) */}
      <section className="py-16 border-b border-[#1f2430] bg-[#090a0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Peer verification.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#1f2430] bg-[#0c0d14] p-5">
              <p className="text-[#d1d5db] text-xs leading-relaxed">
                "Kortex replaced three sluggish Electron note apps on my Arch workstation. The Rust binary launches in 4 milliseconds and memory usage never tops 18 megabytes."
              </p>
              <div className="mt-4 pt-3 border-t border-[#1f2430] text-[10px]">
                <div className="font-bold text-white">Soren Dahl</div>
                <div className="text-[#6b7280]">Kernel Developer, Helsinki</div>
              </div>
            </div>

            <div className="border border-[#1f2430] bg-[#0c0d14] p-5">
              <p className="text-[#d1d5db] text-xs leading-relaxed">
                "Being able to pipe my terminal build logs and GDB trace dumps directly into my second brain using standard UNIX pipes is a complete game changer."
              </p>
              <div className="mt-4 pt-3 border-t border-[#1f2430] text-[10px]">
                <div className="font-bold text-white">Naomi Chen</div>
                <div className="text-[#6b7280]">Security Researcher, Tokyo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Package Managers & Installation (ID: install) */}
      <section id="install" className="py-18 bg-[#090a0f]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="border border-[#2d3342] bg-[#0c0d14] p-8 sm:p-12">
            <div className="text-amber-400 font-bold tracking-widest text-xs">
              // READY FOR INGESTION
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Get the native binary.
            </h2>
            <p className="mt-2 text-xs text-[#9ca3af] max-w-lg mx-auto">
              Single statically-linked binary with zero external dependencies. Compiled for macOS ARM/x86, Linux, and Windows.
            </p>

            <div className="mt-6 inline-block w-full max-w-md bg-[#08090d] border border-amber-500/40 p-3 text-left">
              <div className="flex items-center justify-between text-white text-xs">
                <span>$ cargo install kortex-brain</span>
                <button
                  onClick={handleCopy}
                  className="text-amber-400 hover:text-white transition-colors"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] text-[#6b7280]">
              <span>brew install kortex</span>
              <span>•</span>
              <span>pacman -S kortex</span>
              <span>•</span>
              <span>nix-shell -p kortex</span>
            </div>
          </div>

          <footer className="mt-12 pt-6 border-t border-[#1f2430] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6b7280]">
            <div>KORTEX KERNEL. DISTRIBUTED UNDER APACHE 2.0.</div>
            <div className="flex items-center gap-4">
              <a href="#install" className="hover:text-amber-400">CARGO CRATE</a>
              <a href="#specs" className="hover:text-amber-400">ARCHITECTURE RFC</a>
              <a href="#cli" className="hover:text-amber-400">VIM CHEATSHEET</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
