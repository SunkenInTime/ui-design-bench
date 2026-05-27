"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  Award, 
  Compass, 
  ArrowUpRight, 
  Maximize2, 
  Minimize2, 
  Plus, 
  User, 
  Search,
  CheckCircle,
  Briefcase,
  TrendingUp,
  FileText,
  Star
} from "lucide-react";

interface Dossier {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  rawText: string;
  insights: string[];
}

const DOSSIERS: Dossier[] = [
  {
    id: "dos-1",
    title: "Macroeconomic Paradigm Shift 2026",
    source: "Strategic Advisory Council",
    date: "May 2026",
    summary: "De-globalization and local-first micro-factory trends are accelerating. Supply chain vulnerabilities require decentralized resource allocation. Capital allocation is shifting toward private localized structures.",
    rawText: "Analyzing macroeconomic data for Q2 2026 shows near-shoring reaching 42% in critical components. Real interest rates remain at 3.2%, creating a strong preference for high-efficiency infrastructure plays over high-leverage SaaS models. Energy demands are spiking due to local AI hosting clusters.",
    insights: [
      "Decentralized operations hedge against 2026 supply chain disruptions (94% confidence)",
      "Allocate 15% of infrastructure reserves directly into local modular grids",
      "Shift critical data assets to 100% offline-compatible local-first SQLite architectures"
    ]
  },
  {
    id: "dos-2",
    title: "AI Integration & Data Sovereignty Roadmap",
    source: "Technology Governance Institute",
    date: "April 2026",
    summary: "Corporate data leaks to third-party public LLMs are driving a hard pivot toward local-only AI models. Companies must mandate 100% offline semantic indexing systems for security.",
    rawText: "Surveys indicate 78% of enterprise executives listed 'LLM telemetry data leak' as their top operational risk for 2026. The shift toward local inference on high-memory client hardware (such as unified memory workstations) is making client-side vector search databases a standard corporate requirement.",
    insights: [
      "Mandate end-to-end client-side encryption for all conceptual knowledge bases",
      "Standardize on raw Markdown schemas to prevent proprietary database vendor lock-in",
      "Train corporate managers to index knowledge bases in local vector stores to save $2M/yr API costs"
    ]
  },
  {
    id: "dos-3",
    title: "Sovereignty Systems & Human Leverage",
    source: "The Sovereign Thinker Quarterly",
    date: "March 2026",
    summary: "As information volume reaches saturation, human leverage shifts from raw collection to high-fidelity synthesis. Elite thinkers operate as strategic directors rather than data filing clerks.",
    rawText: "The abundance of low-cost synthetic content means search engines are becoming cluttered. The premium value of human intelligence is now centered on rare original connections, strategic trade-off analysis, and high-trust leadership. Filing things in static folders is a zero-leverage task.",
    insights: [
      "De-prioritize rigid categorization in favor of dynamic associative networks",
      "Establish a 'quiet executive hours' block supported by high-contrast typography",
      "Bypass automated feed noise; curate a highly filtered offline reading list"
    ]
  }
];

export default function ExecutiveElite() {
  const [dossiers, setDossiers] = useState<Dossier[]>(DOSSIERS);
  const [activeId, setActiveId] = useState<string>("dos-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSynthesizing, setIsProcessing] = useState(false);
  const [activeDossierText, setActiveDossierText] = useState(DOSSIERS[0].rawText);
  const [distilledInsights, setDistilledInsights] = useState<string[]>(DOSSIERS[0].insights);

  const activeDossier = dossiers.find(d => d.id === activeId) || dossiers[0];

  const handleSelectDossier = (id: string) => {
    setActiveId(id);
    const target = dossiers.find(d => d.id === id);
    if (target) {
      setActiveDossierText(target.rawText);
      setDistilledInsights(target.insights);
    }
  };

  const handleDistill = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Generate some custom strategic insights on the fly
      const sentences = activeDossierText.split(". ");
      const randomIdea = sentences[Math.floor(Math.random() * sentences.length)] || "Investigate paradigm shifts";
      
      setDistilledInsights([
        `Synthesized Insight: ${randomIdea.replace(/\.$/, "")} represents a core strategic pivot`,
        `Recommendation: Diversify exposure and lock down localized file structures immediately`,
        ...activeDossier.insights.slice(0, 1)
      ]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#060a13] text-[#ebd5b3] font-serif transition-colors selection:bg-[#ebd5b3]/20 select-none pb-24">
      
      {/* High-end pinstripe editorial grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(235,213,179,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(235,213,179,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      {/* Luxury Gold Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ebd5b3]/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Professional Ribbon */}
      <div className="border-b border-[#ebd5b3]/10 bg-slate-950/80 px-8 py-2.5 flex items-center justify-between text-[9px] font-sans tracking-widest uppercase text-[#ebd5b3]/60 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> SECURE EXECUTIVE VAULT ACTIVE</span>
          <span className="hidden md:inline">ENCRYPTION: QUANTUM AES-512</span>
        </div>
        <div className="flex items-center gap-6">
          <span>COGNITIVE REPORT STATUS: <strong className="text-white">SYNTHESIZED</strong></span>
          <span className="hidden sm:inline">USER: BRIEFING ROOM 01</span>
        </div>
      </div>

      {/* Main Nav Header */}
      <header className="border-b border-[#ebd5b3]/10 bg-[#060a13]/60 px-8 py-5 flex items-center justify-between z-40 relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border border-[#ebd5b3]/30 flex items-center justify-center bg-[#0d1527]">
            <BookOpen className="w-4 h-4 text-[#ebd5b3]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-widest text-white uppercase font-sans">Aethelgard</span>
            <span className="text-[8px] font-sans text-[#ebd5b3]/40 tracking-widest uppercase">Intellectual Strategy & Capital Ledger</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[10px] font-sans tracking-widest uppercase text-[#ebd5b3]/70">
          <a href="#demo" className="hover:text-white transition-colors">Briefing Sandbox</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#specifications" className="hover:text-white transition-colors">Architecture</a>
        </nav>

        <div>
          <button className="border border-[#ebd5b3]/40 hover:border-[#ebd5b3] text-[#ebd5b3] hover:text-white text-[10px] font-sans tracking-widest px-5 py-2.5 rounded uppercase bg-[#ebd5b3]/5 hover:bg-[#ebd5b3]/10 transition-all cursor-pointer">
            Access Secure Core
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 pt-20 pb-16 text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ebd5b3]/20 bg-[#ebd5b3]/3 text-[9px] font-sans uppercase tracking-widest text-[#ebd5b3]/80">
          <Star className="w-3 h-3 text-amber-500 fill-current animate-pulse" />
          The Cognitive Partner for Professional Intelligence
        </div>

        <h1 className="text-4xl md:text-6.5xl font-light tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Intelligence, <span className="italic text-[#ebd5b3] font-serif">distilled</span>.<br />
          <span className="font-sans text-xl md:text-2xl font-semibold tracking-widest text-[#ebd5b3]/50 uppercase block mt-3">
            THE STRATEGIC SYNAPSES OF LEADERS
          </span>
        </h1>

        <p className="text-xs md:text-sm text-[#ebd5b3]/70 font-sans max-w-2xl mx-auto leading-relaxed uppercase tracking-wide">
          Aethelgard is a premium, localized knowledge environment designed for researchers, venture partners, and strategic thinkers. It replaces messy chaotic folders with elegant, automated intelligence briefcases, securing your sovereignty.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center font-sans">
          <a 
            href="#demo"
            className="bg-[#ebd5b3] text-black font-bold text-[10px] tracking-widest px-8 py-3.5 rounded hover:bg-white transition-all uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENTER THE BRIEFING ROOM</span>
          </a>
          <button className="border border-[#ebd5b3]/30 text-[#ebd5b3] hover:border-[#ebd5b3] hover:text-white bg-[#060a13] font-bold text-[10px] tracking-widest px-8 py-3.5 rounded transition-all uppercase">
            REQUEST ENTERPRISE LICENSING
          </button>
        </div>
      </section>

      {/* Interactive Briefing Room Ledger Demo */}
      <section id="demo" className="max-w-6xl mx-auto px-8 py-12">
        <div className="border border-[#ebd5b3]/20 bg-[#090f1d] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(235,213,179,0.02)] flex flex-col">
          
          {/* Header Bar */}
          <div className="bg-[#0b1425] border-b border-[#ebd5b3]/10 px-5 py-3.5 flex items-center justify-between text-[10px] font-sans tracking-widest text-[#ebd5b3]/60">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span>AETHELGARD // BRIEFING_DASHBOARD_V5</span>
            </div>
            <span>OFFLINE SECURE BUFFER</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px] items-stretch">
            
            {/* Left: Strategic Dossiers Selector */}
            <div className="lg:col-span-4 border-r border-[#ebd5b3]/10 p-5 flex flex-col justify-between bg-slate-950/40">
              <div className="space-y-4">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#ebd5b3]/40 block">
                  // STRATEGIC DOSSIERS
                </span>

                <div className="space-y-3">
                  {dossiers.map((dos) => {
                    const isActive = dos.id === activeId;
                    return (
                      <button
                        key={dos.id}
                        onClick={() => handleSelectDossier(dos.id)}
                        className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer block relative ${
                          isActive
                            ? "border-[#ebd5b3] bg-[#ebd5b3]/5 text-white"
                            : "border-transparent bg-transparent text-[#ebd5b3]/50 hover:bg-[#ebd5b3]/3 hover:text-[#ebd5b3]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-bold font-sans uppercase tracking-wider truncate max-w-[80%]">{dos.title}</h4>
                          <span className="text-[8px] font-mono text-amber-500 font-bold">{dos.date}</span>
                        </div>
                        <p className="text-[10px] italic leading-relaxed line-clamp-2 text-[#ebd5b3]/60">{dos.summary}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-[#ebd5b3]/10 mt-6 font-sans">
                <button 
                  onClick={() => {
                    const newId = `dos-${dossiers.length + 1}`;
                    const newDos: Dossier = {
                      id: newId,
                      title: `New Venture Briefing ${dossiers.length + 1}`,
                      source: "Corporate Intelligence Hub",
                      date: "May 2026",
                      summary: "New intelligence node injected securely. Complete the strategy briefing coordinates below to synthesize key recommendations.",
                      rawText: "Write a high-fidelity strategy summary here. Include market metrics, investment targets, and potential systemic leverage points to help our local model synthesize conclusions.",
                      insights: [
                        "Dossier loaded to RAM (100% security)",
                        "Click 'Distill Strategic Intelligence' to calculate confidence paths"
                      ]
                    };
                    setDossiers([...dossiers, newDos]);
                    handleSelectDossier(newId);
                  }}
                  className="w-full py-2.5 bg-[#ebd5b3]/10 hover:bg-[#ebd5b3]/20 text-[#ebd5b3] border border-dashed border-[#ebd5b3]/30 rounded text-[9px] tracking-widest uppercase font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Compile New Dossier
                </button>
              </div>
            </div>

            {/* Middle: Rich Document Workspace */}
            <div className="lg:col-span-4 p-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[9px] font-sans tracking-widest text-[#ebd5b3]/40 border-b border-[#ebd5b3]/10 pb-2">
                  <span className="font-bold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#ebd5b3]/60" />
                    DOSSIER_SOURCE_DATA.txt
                  </span>
                  <span>RAW CONTENT</span>
                </div>

                <div className="space-y-3">
                  <span className="text-[9px] font-sans text-stone-500 uppercase tracking-widest font-bold">
                    Advisor: {activeDossier.source}
                  </span>
                  <input
                    type="text"
                    value={activeDossier.title}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDossiers(prev => prev.map(d => d.id === activeId ? { ...d, title: val } : d));
                    }}
                    className="bg-transparent border-b border-dashed border-[#ebd5b3]/20 text-sm font-bold text-white w-full focus:outline-none pb-1 mb-2 font-sans uppercase tracking-wider"
                  />
                  <textarea
                    value={activeDossierText}
                    onChange={(e) => setActiveDossierText(e.target.value)}
                    className="w-full h-52 bg-transparent border-none text-[11px] leading-relaxed italic text-[#ebd5b3]/80 focus:text-white outline-none resize-none font-serif"
                    placeholder="Enter strategic parameters..."
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#ebd5b3]/10">
                <button 
                  onClick={handleDistill}
                  disabled={isSynthesizing}
                  className="w-full py-3 bg-[#ebd5b3] hover:bg-white text-black font-bold font-sans text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSynthesizing ? (
                    <>
                      <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping"></span>
                      <span>SYNTHESIZING PARADIGMS...</span>
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-4 h-4" />
                      <span>Distill Strategic Intelligence</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Distinguished Strategic Insights Output */}
            <div className="lg:col-span-4 border-l border-[#ebd5b3]/10 p-5 flex flex-col justify-between bg-slate-950/40">
              <div className="space-y-4">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#ebd5b3]/40 block">
                  // DISTILLED STRATEGIC ACTIONS
                </span>

                <div className="space-y-3">
                  {distilledInsights.map((insight, i) => (
                    <div 
                      key={i} 
                      className="border border-[#ebd5b3]/10 bg-slate-950/60 p-3 rounded flex items-start gap-2.5 text-[10.5px] leading-relaxed text-[#ebd5b3]/80 hover:border-[#ebd5b3]/35 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#060a13] border border-[#ebd5b3]/10 p-3.5 rounded text-[9px] font-sans leading-relaxed text-[#ebd5b3]/50 uppercase">
                🏛️ <strong>INTELLIGENCE AUDIT:</strong> Ledger records high conceptual density in active sector. Synapses mapped via decentralized local models ensure secure, private decision pipelines.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium specs */}
      <section id="specifications" className="max-w-5xl mx-auto px-8 py-16 border-t border-[#ebd5b3]/10">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[10px] font-sans tracking-widest text-[#ebd5b3] uppercase block">Aethelgard Specifications</span>
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">The Sovereign Architectural Infrastructure</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-[11px] leading-relaxed">
          <div className="space-y-2">
            <h4 className="text-[#ebd5b3] font-bold uppercase tracking-wider">I. Quantum Local Security</h4>
            <p className="text-stone-400">
              We operate under a strict zero-telemetry policy. Your folders stay completely client-side in encrypted Markdown format. No corporate cloud rentals, no automated server scraping, zero leak surface.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[#ebd5b3] font-bold uppercase tracking-wider">II. Local LLM Strategy Synthesis</h4>
            <p className="text-stone-400">
              Aethelgard runs an offline 3B parameters DeepSeek-Coder model compiled natively in modern machine code. It acts as an elite strategic consultant, mapping concept vectors on your physical chip.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[#ebd5b3] font-bold uppercase tracking-wider">III. Plaintext Longevity</h4>
            <p className="text-stone-400">
              Proprietary file formats represent vendor imprisonment. Aethelgard hardcodes everything into standard, bidirectional Markdown. Your work remains completely legible by standard Unix systems indefinitely.
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer id="philosophy" className="border-t border-[#ebd5b3]/10 py-16 px-8 bg-slate-950 font-sans text-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="font-bold tracking-widest text-white uppercase text-sm">AETHELGARD LABS ADVISORY</span>
            </div>
            <p className="text-stone-400 leading-relaxed text-[10px] max-w-sm mx-auto md:mx-0 uppercase tracking-wide">
              We design tools for intellectual leverage. We believe high-fidelity thinkers deserve an offline secondary storage array that matches their cognitive calibre.
            </p>
            <div className="text-[9px] text-[#ebd5b3]/30 tracking-wider">
              © 2026 AETHELGARD LTD. STRATEGIC SOVEREIGNTY SECURED.
            </div>
          </div>

          <div className="border border-[#ebd5b3]/20 bg-[#060a13] p-6 rounded max-w-sm w-full mx-auto md:ml-auto space-y-4 shadow-[0_0_20px_rgba(235,213,179,0.01)]">
            <div className="flex justify-between items-center pb-2 border-b border-[#ebd5b3]/10 font-bold text-[10px]">
              <span className="text-white uppercase tracking-wider">INDIVIDUAL LICENSE</span>
              <span className="text-amber-500">[SOVEREIGN]</span>
            </div>
            <ul className="text-[9px] text-stone-400 space-y-2 uppercase tracking-widest leading-normal">
              <li>✓ INFINITE OFFLINE INTEL DOSSIERS</li>
              <li>✓ CLIENT-SIDE LLM VECTOR COMPILATION</li>
              <li>✓ AES-512 SECURE DEEP MEMORY VAULT</li>
              <li>✓ NO VENTURE FUNDING INTERFERENCE</li>
            </ul>
            <button className="w-full py-3 bg-[#ebd5b3] text-black font-bold rounded text-[9px] tracking-widest uppercase hover:bg-white transition-all">
              INITIALIZE QUANTUM SOVEREIGN CORE
            </button>
            <p className="text-[8px] text-stone-500 text-center uppercase">
              Cloud Synced strategic clusters run $15/mo under strict private RSA handshakes.
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Swapper Button */}

    </div>
  );
}
