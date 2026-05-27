"use client";

import React, { useState, useEffect } from "react";
import { 
  Brain, 
  Cpu, 
  Terminal, 
  Activity, 
  Zap, 
  Sliders, 
  Search, 
  FileText, 
  Radio, 
  Layers, 
  ArrowUpRight,
  Database,
  Lock,
  Eye
} from "lucide-react";

// Mock vectors/relations for Version 2
interface CyberNode {
  id: string;
  concept: string;
  vector: string; // Fake coordinate like [0.12, -0.89, 0.44]
  status: "ACTIVE" | "PENDING" | "SYNCHRONIZED";
  synapses: number;
}

const CYBER_NODES: CyberNode[] = [
  { id: "C-101", concept: "Epistemic Mapping", vector: "[0.89, -0.12, 0.44]", status: "SYNCHRONIZED", synapses: 14 },
  { id: "C-102", concept: "Semantic Vector Store", vector: "[-0.34, 0.77, 0.91]", status: "SYNCHRONIZED", synapses: 28 },
  { id: "C-103", concept: "Distributed Cognition", vector: "[0.52, -0.66, -0.12]", status: "ACTIVE", synapses: 19 },
  { id: "C-104", concept: "Cortex Augmentation", vector: "[0.11, 0.98, -0.35]", status: "SYNCHRONIZED", synapses: 42 },
  { id: "C-105", concept: "Bidirectional Synapse", vector: "[-0.85, -0.22, 0.50]", status: "PENDING", synapses: 8 }
];

export default function CyberneticCortex() {
  const [nodes, setNodes] = useState<CyberNode[]>(CYBER_NODES);
  const [activeConcept, setActiveConcept] = useState<string>("C-104");
  const [brainSyncPercent, setBrainSyncPercent] = useState(89.4);
  const [cognitiveLoad, setCognitiveLoad] = useState(42);
  const [userText, setUserText] = useState(
    "Synthesizing knowledge vectors on cortical feedback loops. By coupling vector databases with raw markdown, our local agent indexes semantic relationships under 1ms."
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiStream, setAiStream] = useState<string[]>([
    "Cortex boot sequence initialized...",
    "Local embedding model loaded successfully.",
    "Concept 'Distributed Cognition' linked to 'Cortex Augmentation' (cosine sim: 0.94)"
  ]);

  // Handle fake processing of user typing
  useEffect(() => {
    if (!userText) return;
    setIsProcessing(true);
    const timer = setTimeout(() => {
      setIsProcessing(false);
      // Add a cool processing log
      const words = userText.split(" ");
      const randomWord = words[Math.floor(Math.random() * words.length)] || "Cognition";
      const cleaned = randomWord.replace(/[^\w]/g, "");
      
      if (cleaned.length > 4) {
        setAiStream(prev => [
          `Parsed concept node: [[${cleaned}]]`,
          `Calculating semantic vector coordinates...`,
          `Cosine similarity matrix updated (+${(Math.random() * 0.1).toFixed(3)} density)`,
          ...prev.slice(0, 3)
        ]);
        setCognitiveLoad(prev => Math.min(95, Math.max(30, prev + Math.floor(Math.random() * 11) - 5)));
        setBrainSyncPercent(prev => Math.min(100, Math.max(80, +(prev + Math.random() * 0.4 - 0.2).toFixed(1))));
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [userText]);

  // Simulating live telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBrainSyncPercent(prev => {
        const delta = Math.random() * 0.2 - 0.1;
        return +(Math.min(99.9, Math.max(95, prev + delta))).toFixed(1);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020204] text-[#00f0ff] font-sans relative overflow-hidden select-none selection:bg-[#00f0ff]/20">
      
      {/* Matrix cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05151c_1px,transparent_1px),linear-gradient(to_bottom,#05151c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      {/* Cyber Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Telemetry Ribbon (HUD Status) */}
      <div className="border-b border-[#00f0ff]/20 bg-black/40 backdrop-blur-md px-6 py-2 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#00f0ff]/60 z-50 sticky top-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#00f0ff]" />
            <span>SYS STATUS: <strong className="text-white">COGNITIVE SYNC ONLINE</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>NEURAL TEMP: <strong className="text-white">36.8°C (OPTIMAL)</strong></span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>EMBED LACE: <strong className="text-white">BGE-M3 LOCAL</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <span>COGNITIVE EXPANSION: <strong className="text-white">{brainSyncPercent}%</strong></span>
          <span className="hidden sm:inline">BANDWIDTH: <strong className="text-[#ff00a0]">{cognitiveLoad} MB/s</strong></span>
        </div>
      </div>

      {/* Main Nav Header */}
      <header className="border-b border-[#00f0ff]/10 bg-black/20 px-6 py-4 flex items-center justify-between z-40 relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00f0ff]/50 rounded-lg blur-xs animate-ping"></div>
            <div className="w-8 h-8 bg-black border border-[#00f0ff] rounded-lg flex items-center justify-center relative">
              <Brain className="w-4 h-4 text-[#00f0ff]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-wider text-white">CORTEX</span>
            <span className="text-[8px] font-mono tracking-widest text-[#00f0ff]/50">HUMAN COGNITIVE UPGRADE</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-wider">
          <a href="#console" className="hover:text-white transition-colors flex items-center gap-1 text-[#00f0ff]/80">
            <span>[01_INTERFACE]</span>
          </a>
          <a href="#specifications" className="hover:text-white transition-colors flex items-center gap-1 text-[#00f0ff]/40">
            <span>[02_SPECS]</span>
          </a>
          <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-1 text-[#00f0ff]/40">
            <span>[03_LICENSING]</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="border border-[#00f0ff]/30 hover:border-[#00f0ff] bg-[#00f0ff]/5 hover:bg-[#00f0ff]/10 text-xs font-mono tracking-widest px-4 py-2 rounded uppercase text-[#00f0ff] transition-all cursor-pointer">
            INITIALIZE SYSTEM
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 w-full text-center flex flex-col items-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[10px] font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
            SECURE SEMANTIC SYNC ACTIVE
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            UPGRADE YOUR <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#b923ff] to-[#00f0ff] animate-pulse">
              BIOLOGICAL MEMORY
            </span>
          </h1>

          <p className="text-xs md:text-sm text-[#00f0ff]/70 font-mono max-w-xl mx-auto leading-relaxed uppercase tracking-wide">
            Cortex is a cybernetic knowledge environment. An AI-augmented, deep-vector synaptic mesh that indexes what you write, speaks, and learns in plain text. Perfect recall, hardcoded into your terminal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center font-mono">
            <a 
              href="#console" 
              className="bg-[#00f0ff] text-black font-black text-xs px-8 py-3 rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2 uppercase cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>ACCESS INTERFACE</span>
            </a>
            <button className="border border-[#00f0ff]/30 hover:border-[#00f0ff] bg-black text-[#00f0ff] font-bold text-xs px-8 py-3 rounded transition-all hover:bg-[#00f0ff]/5 uppercase tracking-wider">
              PULL DESKTOP CORE
            </button>
          </div>
        </div>
      </section>

      {/* Cybernetic HUD Interface Console */}
      <section id="console" className="max-w-6xl mx-auto px-6 py-12">
        <div className="border border-[#00f0ff]/20 bg-black/80 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.05)] flex flex-col">
          
          {/* Header Bar */}
          <div className="bg-[#05151c]/60 border-b border-[#00f0ff]/20 px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/90 shadow-[0_0_5px_red]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/90"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]/40 border border-[#00f0ff] shadow-[0_0_5px_#00f0ff]"></span>
              <span className="ml-2 tracking-widest text-[#00f0ff]">CORTEX_SANDBOX_V2.0 // TERMINAL_LOCK</span>
            </div>
            <span className="text-[10px] text-zinc-500">SYS_ADDR: 0x7F4A8B9C</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] items-stretch">
            
            {/* Left Telemetry Panel */}
            <div className="lg:col-span-4 border-r border-[#00f0ff]/10 p-4 space-y-6 font-mono text-xs flex flex-col bg-black/40">
              
              {/* Telemetry stats */}
              <div className="space-y-4 flex-1">
                <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase block">
                  // CORTICAL COGNITION LAB
                </span>
                
                <div className="border border-[#00f0ff]/15 bg-[#00f0ff]/5 rounded p-3 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> SYNC RATE
                    </span>
                    <span className="text-yellow-400 font-bold">{brainSyncPercent}%</span>
                  </div>
                  <div className="w-full bg-[#00f0ff]/10 h-1.5 rounded overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#00f0ff] to-purple-500 h-full transition-all duration-500"
                      style={{ width: `${brainSyncPercent}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500">
                    <span>SECTOR_01: ONLINE</span>
                    <span>AI INDEXER: OK</span>
                  </div>
                </div>

                <div className="border border-purple-500/20 bg-purple-950/10 rounded p-3 space-y-2">
                  <div className="flex justify-between text-[10px] text-purple-300 font-bold">
                    <span>COGNITIVE LOAD</span>
                    <span>{cognitiveLoad} %</span>
                  </div>
                  <div className="w-full bg-purple-950/20 h-1.5 rounded overflow-hidden">
                    <div 
                      className="bg-purple-500 h-full transition-all duration-300"
                      style={{ width: `${cognitiveLoad}%` }}
                    ></div>
                  </div>
                  <p className="text-[8px] text-purple-400/80 leading-relaxed uppercase">
                    Neural buffer capacity active. Synthesizing embedding layers locally.
                  </p>
                </div>
              </div>

              {/* AI Synapse Log Feed */}
              <div className="space-y-2">
                <span className="text-[9px] font-black tracking-widest text-zinc-500 uppercase flex items-center gap-1">
                  <Sliders className="w-3 h-3 text-purple-400" /> SEMANTIC INTERFACER STREAM
                </span>
                <div className="bg-[#020204] border border-[#00f0ff]/10 rounded p-2.5 h-28 overflow-y-auto text-[10px] leading-relaxed text-[#00f0ff]/80 space-y-1">
                  {isProcessing && (
                    <div className="text-white animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                      <span>PROCESSING SEMANTIC STRUCTS...</span>
                    </div>
                  )}
                  {aiStream.map((log, i) => (
                    <div key={i} className={log.startsWith("Parsed") ? "text-purple-400 font-semibold" : "text-zinc-400 font-mono"}>
                      &gt; {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Workspace Canvas */}
            <div className="lg:col-span-5 p-4 flex flex-col space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-white flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" /> CORTEX_CORE_NODE.txt
                </span>
                <span className="text-[#00f0ff]/50 font-bold uppercase">LIVE EMBED INPUT</span>
              </div>

              <div className="flex-1 flex flex-col bg-[#020204]/90 border border-[#00f0ff]/10 rounded p-4 relative">
                {/* Neon bracket frames */}
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#00f0ff]/40"></div>
                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#00f0ff]/40"></div>
                <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#00f0ff]/40"></div>
                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#00f0ff]/40"></div>
                
                <textarea
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  className="flex-1 w-full bg-transparent resize-none border-none outline-none font-mono text-xs leading-relaxed text-[#00f0ff] focus:text-white transition-colors pt-2 z-10"
                  placeholder="Initiate biological brain sync. Type anything to trigger semantic mapping..."
                />
              </div>

              <div className="bg-[#05151c]/40 border border-[#00f0ff]/10 px-3 py-2 rounded text-[10px] font-mono flex items-center justify-between text-[#00f0ff]/80">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> SECURITY LAYER: 256-BIT LOCAL SHA</span>
                <span>VECTORS SYNCED</span>
              </div>
            </div>

            {/* Right Interactive Node HUD */}
            <div className="lg:col-span-3 border-l border-[#00f0ff]/10 p-4 space-y-4 flex flex-col bg-black/40">
              <span className="text-[10px] font-mono font-black tracking-widest text-zinc-500 uppercase block">
                // ACTIVE VECTOR SPACE
              </span>

              <div className="flex-1 space-y-2 overflow-y-auto">
                {nodes.map((node) => {
                  const isActive = activeConcept === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveConcept(node.id)}
                      className={`w-full text-left p-2.5 rounded border font-mono transition-all cursor-pointer relative overflow-hidden group block ${
                        isActive
                          ? "border-[#00f0ff] bg-[#00f0ff]/10 text-white shadow-[0_0_12px_rgba(0,240,255,0.1)]"
                          : "border-zinc-800 bg-[#020204] text-zinc-400 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      {/* Highlight laser bar on hover */}
                      <div className="absolute top-0 left-0 w-[2px] h-full bg-[#00f0ff] scale-y-0 group-hover:scale-y-100 transition-transform"></div>
                      
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold tracking-wider">{node.concept}</span>
                        <span className={`text-[8px] px-1 rounded-sm border ${
                          node.status === "SYNCHRONIZED" 
                            ? "border-[#00f0ff]/30 text-[#00f0ff]" 
                            : "border-yellow-500/30 text-yellow-400"
                        }`}>
                          {node.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-[8px] text-zinc-500">
                        <span>COORD: {node.vector}</span>
                        <span>{node.synapses} synapses</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#020204] border border-[#00f0ff]/10 p-2.5 rounded text-[9px] font-mono text-zinc-500 leading-relaxed uppercase">
                🧠 SYSTEM ANALYSIS: Concept vector <strong className="text-white">{nodes.find(n => n.id === activeConcept)?.concept}</strong> occupies coordinates {nodes.find(n => n.id === activeConcept)?.vector}. Synaptic connections score optimal density.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber specs section */}
      <section id="specifications" className="max-w-5xl mx-auto px-6 py-16 border-t border-[#00f0ff]/10">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase block">SYSTEM_SPECIFICATION_V2</span>
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">HARDWARE & SOFTWARE AUGMENTATION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="border border-zinc-800 bg-black/60 p-5 rounded space-y-3 hover:border-[#00f0ff]/40 transition-colors">
            <div className="text-purple-400 font-bold">&gt; 01_EMBEDDING_LATENCY</div>
            <h4 className="text-white font-extrabold uppercase">Sub-millisecond Mapping</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px]">
              Our custom C++ native WebAssembly bindings process your Markdown in real-time, executing vector cosine distance calculations in under 0.8ms.
            </p>
          </div>

          <div className="border border-zinc-800 bg-black/60 p-5 rounded space-y-3 hover:border-[#00f0ff]/40 transition-colors">
            <div className="text-[#00f0ff] font-bold">&gt; 02_AI_SECURE_PRIVACY</div>
            <h4 className="text-white font-extrabold uppercase">100% Offline LLMs</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px]">
              No data leaves your disk. Cortex embeds a lightweight 1.5B Llama LLM inside your local application, allowing secure semantic querying offline.
            </p>
          </div>

          <div className="border border-zinc-800 bg-black/60 p-5 rounded space-y-3 hover:border-[#00f0ff]/40 transition-colors">
            <div className="text-yellow-400 font-bold">&gt; 03_SYNAPSE_EXPLORER</div>
            <h4 className="text-white font-extrabold uppercase">Visual Vector Maps</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px]">
              Browse your files in a 3D semantic manifold cluster. See which ideas orbit each other and teleport between distant clusters via standard terminal hooks.
            </p>
          </div>

          <div className="border border-zinc-800 bg-black/60 p-5 rounded space-y-3 hover:border-[#00f0ff]/40 transition-colors">
            <div className="text-emerald-400 font-bold">&gt; 04_HYBRID_CORE_STORAGE</div>
            <h4 className="text-white font-extrabold uppercase">Markdown & SQLite</h4>
            <p className="text-zinc-500 leading-relaxed text-[11px]">
              Files reside in clean folders as `.md` text documents, while an indexed shadow SQLite schema guarantees instant search and multi-node references.
            </p>
          </div>
        </div>
      </section>

      {/* Cyber licensing / Footer */}
      <footer id="pricing" className="border-t border-[#00f0ff]/10 py-16 bg-[#010103] relative z-10 font-mono text-xs">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <span className="font-extrabold tracking-widest text-white uppercase text-sm">CORTEX CORE LABS</span>
            </div>
            <p className="text-zinc-500 leading-relaxed text-[11px] max-w-sm uppercase">
              The human brain is a massive parallel processor. It is our duty to give it an adequate secondary storage array. We license Cortex for hackers, builders, and strategic minds.
            </p>
            <div className="text-[9px] text-zinc-600 uppercase tracking-widest">
              STATION_COORD_2026 // ALL RIGHTS RESERVED
            </div>
          </div>

          <div className="border border-[#00f0ff]/20 bg-black rounded-lg p-6 max-w-md w-full space-y-4 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-white font-black tracking-wider text-sm uppercase">CORTEX_LICENSE: STANDARD</span>
              <span className="text-[#00f0ff] font-bold">[OPEN_SOURCE]</span>
            </div>
            <ul className="text-[10px] text-zinc-500 space-y-2 uppercase tracking-wide">
              <li>✓ INFINITE OFFLINE NOTES</li>
              <li>✓ INTEGRATED LOCAL LLM VECTOR PIPELINE</li>
              <li>✓ DEEP SEARCH TERMINAL COMMAND BAR</li>
              <li>✓ SYNC TELEMETRY EMBED GAUGE</li>
            </ul>
            <button className="w-full py-3 bg-[#00f0ff] text-black font-black text-[11px] rounded tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              INITIALIZE HARDWARE INSTALLER
            </button>
            <p className="text-[8px] text-zinc-600 text-center uppercase tracking-wider">
              Encr-Sync node packages run $9/mo for secure high-bandwidth networks.
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Swapper Button */}

    </div>
  );
}
