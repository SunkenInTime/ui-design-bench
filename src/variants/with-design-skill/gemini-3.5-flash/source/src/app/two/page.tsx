import Link from "next/link";

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-black text-[#FFB000] font-mono selection:bg-[#FFB000] selection:text-black antialiased relative overflow-hidden flex flex-col justify-between">
      
      {/* CRT Scanline overlay effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-40" />

      {/* Retro CRT Phosphor Glass Overlay (Subtle vignette/radial glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none z-30" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      {/* Main UI Frame */}
      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        
        {/* Terminal Header Bar */}
        <header className="border border-[#FFB000]/40 bg-zinc-950/80 p-3 mb-12 flex flex-col md:flex-row justify-between items-center gap-3 backdrop-blur-sm shadow-[0_0_15px_rgba(255,176,0,0.05)]">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFB000] animate-ping" />
            <span className="font-bold tracking-wider text-xs md:text-sm">
              CORTEX-OS // SECURE_SHELL_v4.29-PROD
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#FFB000]/70">
            <span>PING: 14ms</span>
            <span>MEM: 4.12GB/32.0GB</span>
            <span className="bg-[#FFB000]/10 px-2 py-0.5 border border-[#FFB000]/20 rounded text-[#FFB000]">
              SYS: ONLINE
            </span>
          </div>
        </header>

        {/* Hero Area */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Cyberpunk Description & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block border border-[#FFB000]/30 px-3 py-1 bg-[#FFB000]/5 text-xs font-semibold tracking-widest text-[#FFB000] rounded">
              INITIATING NEURAL LINK_
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FFD000] to-[#E68A00] uppercase drop-shadow-[0_0_15px_rgba(255,176,0,0.3)]">
              CORTEX.OS
            </h1>
            
            <p className="text-sm md:text-base leading-relaxed text-[#FFB000]/80 border-l-2 border-[#FFB000]/60 pl-4 py-2 bg-gradient-to-r from-[#FFB000]/5 to-transparent">
              Welcome to the prompt. Direct, friction-free indexing of the cognitive matrix. We bypass traditional heavy layout paradigms to deliver high-throughput, low-latency recall. Feed CORTEX everything. It is your off-grid biological backup.
            </p>

            {/* Simulated Commands */}
            <div className="bg-zinc-950/90 border border-[#FFB000]/30 p-4 rounded shadow-2xl space-y-2 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">guest@cortex:~$</span>
                <span>curl -s https://get.cortex.os/install | bash</span>
              </div>
              <div className="text-emerald-500/70 pl-4 animate-pulse">
                &gt; Allocating virtual synapses... OK<br />
                &gt; Syncing bi-directional links (42,109 connections)... OK<br />
                &gt; Core database initialized. Status code [200]
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">guest@cortex:~$</span>
                <span className="animate-pulse">cortex --status --live_</span>
              </div>
            </div>

            {/* Action buttons styled as terminal options */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
              <Link
                href="#terminal-mock"
                className="px-6 py-3.5 bg-[#FFB000] text-black hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(255,176,0,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <span>[ BOOT TERMINAL ]</span>
              </Link>
              <Link
                href="#modules"
                className="px-6 py-3.5 border border-[#FFB000] text-[#FFB000] hover:bg-[#FFB000]/10 transition-all duration-200 uppercase tracking-widest"
              >
                <span>[ READ MAN_PAGES ]</span>
              </Link>
            </div>
          </div>

          {/* Retro-Futuristic Terminal Interactive Mockup */}
          <div id="terminal-mock" className="lg:col-span-5">
            <div className="border border-[#FFB000]/40 bg-zinc-950 rounded shadow-[0_0_30px_rgba(255,176,0,0.1)] overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-zinc-900 border-b border-[#FFB000]/20 px-4 py-2 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-[#FFB000]/50 tracking-wider">WORKSPACE_01_SYNAPSE.SH</span>
                <span className="text-[10px] text-[#FFB000]/30">[X]</span>
              </div>

              {/* Terminal Workspace Mock */}
              <div className="p-4 md:p-6 space-y-4 text-xs md:text-sm">
                
                {/* File list header */}
                <div className="flex justify-between border-b border-[#FFB000]/10 pb-2 text-[10px] text-[#FFB000]/50">
                  <span>DIRECTORY: /root/neurons/nodes/</span>
                  <span>FILES: 3 TOTAL</span>
                </div>

                {/* File rows */}
                <div className="space-y-1">
                  <div className="flex justify-between hover:bg-[#FFB000]/5 p-1 rounded cursor-pointer group">
                    <span className="text-[#FFB000] flex items-center gap-2">
                      <span>📄</span> epistemic_webs.md
                    </span>
                    <span className="text-[#FFB000]/40 group-hover:text-[#FFB000]">1.4KB [OPEN]</span>
                  </div>
                  <div className="flex justify-between hover:bg-[#FFB000]/5 p-1 rounded cursor-pointer group">
                    <span className="text-zinc-600 flex items-center gap-2">
                      <span>📄</span> cybernetic_brain.json
                    </span>
                    <span className="text-zinc-700 group-hover:text-[#FFB000]">4.2KB</span>
                  </div>
                  <div className="flex justify-between hover:bg-[#FFB000]/5 p-1 rounded cursor-pointer group">
                    <span className="text-zinc-600 flex items-center gap-2">
                      <span>📄</span> feedback_loops.log
                    </span>
                    <span className="text-zinc-700 group-hover:text-[#FFB000]">29.0KB</span>
                  </div>
                </div>

                {/* Active editor mock */}
                <div className="border border-[#FFB000]/20 bg-[#120D00] p-3 rounded space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[#FFB000]/60 border-b border-[#FFB000]/10 pb-1">
                    <span>EDIT: epistemic_webs.md</span>
                    <span className="text-emerald-400">● MODIFIED</span>
                  </div>
                  <div className="text-[11px] leading-relaxed text-[#FFB000]/90 space-y-1 font-sans">
                    <p className="font-mono text-zinc-400">1| # Epistemic Webs</p>
                    <p className="font-mono text-zinc-200">2| Thoughts are multidimensional nodes in a system.</p>
                    <p className="font-mono text-zinc-200">3| Linked back to [[Cortex-v4]] for system validation.</p>
                    <p className="font-mono text-[#FFB000] animate-pulse">4| &gt; Weaving synapse connections in background..._</p>
                  </div>
                </div>

                {/* Simulated command status bar */}
                <div className="flex justify-between items-center text-[10px] bg-[#FFB000]/10 p-2 rounded border border-[#FFB000]/20 text-[#FFB000]/80">
                  <span>COMMANDS: [G] LOGS [S] SEARCH [E] EXPORT</span>
                  <span className="text-[#FFD000]">SYS_SECURE: AES-256</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Section Divider */}
        <div className="border-t border-dashed border-[#FFB000]/20 my-12" />

        {/* CORTEX PROCESS DAEMONS */}
        <section id="modules" className="space-y-6">
          <div className="text-left">
            <span className="text-[10px] text-[#FFB000]/60 uppercase tracking-widest block mb-1">DAEMONS ACTIVE IN BACKGROUND</span>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">CORTEX CORE ARCHITECTURE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#FFB000]/30 bg-zinc-950/60 p-6 space-y-4 hover:border-[#FFB000] hover:bg-zinc-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#FFB000]/50">[MODULE_01]</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
                  RUNNING
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">MEM_SWAP_INDEXER</h3>
              <p className="text-xs text-[#FFB000]/70 leading-relaxed font-sans">
                Frictionless input system via command prompt, voice dictate, or markdown drop. Converts messy audio or bullet dumps into organized node vectors instantly.
              </p>
            </div>

            <div className="border border-[#FFB000]/30 bg-zinc-950/60 p-6 space-y-4 hover:border-[#FFB000] hover:bg-zinc-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#FFB000]/50">[MODULE_02]</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
                  ACTIVE
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">NEURAL_INDEX_DB</h3>
              <p className="text-xs text-[#FFB000]/70 leading-relaxed font-sans">
                Automated graph linking. Whenever you mention a topic, Cortex scans your entire directory of past notes (semantic vector search) and injects suggestions for lateral cross-linking.
              </p>
            </div>

            <div className="border border-[#FFB000]/30 bg-zinc-950/60 p-6 space-y-4 hover:border-[#FFB000] hover:bg-zinc-950 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#FFB000]/50">[MODULE_03]</span>
                <span className="text-[10px] bg-[#FFB000]/10 text-[#FFB000] border border-[#FFB000]/20 px-1.5 py-0.5 rounded uppercase animate-pulse">
                  OPTIMIZING
                </span>
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">AI_SYNAPSE_CORE</h3>
              <p className="text-xs text-[#FFB000]/70 leading-relaxed font-sans">
                Runs entirely locally inside WebGPU. Scans background nodes, generates automatic synthetic links, compiles weekly intelligence briefs, and acts as a localized neural conversational partner.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Command Log Table */}
        <section className="mt-12 bg-zinc-950 border border-[#FFB000]/20 p-4 rounded text-xs space-y-3">
          <div className="text-[10px] text-[#FFB000]/50 tracking-wider">SYSTEM DIAGNOSTIC LOGS:</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono">
              <thead>
                <tr className="border-b border-[#FFB000]/20 text-[#FFB000]/70">
                  <th className="pb-1 uppercase tracking-tight">Timestamp</th>
                  <th className="pb-1 uppercase tracking-tight">Event ID</th>
                  <th className="pb-1 uppercase tracking-tight">Process Name</th>
                  <th className="pb-1 uppercase tracking-tight text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#FFB000]/80">
                <tr className="border-b border-[#FFB000]/5 py-1">
                  <td className="py-1 text-zinc-500">2026-05-26 23:01:04</td>
                  <td>EVT-09214</td>
                  <td>CEREBRAL_MAP_GEN</td>
                  <td className="text-right text-emerald-400">SUCCESS</td>
                </tr>
                <tr className="border-b border-[#FFB000]/5 py-1">
                  <td className="py-1 text-zinc-500">2026-05-26 23:02:15</td>
                  <td>EVT-09215</td>
                  <td>KNOWLEDGE_VEC_SYNC</td>
                  <td className="text-right text-emerald-400">ACTIVE</td>
                </tr>
                <tr className="border-b border-[#FFB000]/5 py-1">
                  <td className="py-1 text-zinc-500">2026-05-26 23:04:12</td>
                  <td>EVT-09216</td>
                  <td>SEMANTIC_BREATHE_LOOP</td>
                  <td className="text-right text-yellow-400">WAITING</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#FFB000]/20 pt-6 mt-16 text-center text-[10px] text-[#FFB000]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>SECURE PROTOCOL ACTIVE. USER IP INCRYPTED via ON-DEV LOCALS.</span>
          <div className="flex gap-4">
            <Link href="#terminal-mock" className="hover:text-white transition-colors">TERMINAL</Link>
            <Link href="#modules" className="hover:text-white transition-colors">DAEMONS</Link>
            <span>|</span>
            <span className="text-[#FFB000] font-bold">CEREBRAL GRID #02</span>
          </div>
        </footer>
      </div>

      {/* Switching Deck HUD */}
    </div>
  );
}
