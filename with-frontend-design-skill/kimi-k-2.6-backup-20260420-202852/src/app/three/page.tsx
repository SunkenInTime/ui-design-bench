import { Share_Tech_Mono, VT323 } from "next/font/google";

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export default function Three() {
  return (
    <div
      className={`${shareTech.variable} ${vt323.variable} relative min-h-screen overflow-hidden bg-[#050505] text-[#33ff00] selection:bg-[#33ff00] selection:text-black`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,255,0,0.1) 2px, rgba(51,255,0,0.1) 4px)",
        }}
      />
      {/* CRT flicker */}
      <div className="pointer-events-none fixed inset-0 z-40 animate-pulse bg-[#33ff00] opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8">
        <div className="flex items-center justify-between border border-[#33ff00]/40 bg-[#0a1f0a]/50 p-4">
          <div
            className="text-xl tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SECOND_BRAIN.EXE
          </div>
          <div className="animate-pulse text-xs">SYS.READY</div>
        </div>

        <div className="mt-12 border border-[#33ff00]/30 bg-[#0a1f0a]/30 p-8 sm:p-12">
          <div className="mb-4 text-xs text-[#33ff00]/60">
            {`>`} INITIALIZING NEURAL_INTERFACE... OK
          </div>
          <h1
            className="mb-6 text-5xl leading-none tracking-tight sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EXPAND YOUR
            <br />
            MIND_CAPACITY
          </h1>
          <div className="mb-6 h-px w-full bg-[#33ff00]/30" />
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#33ff00]/80">
            {`>`} EXTERNAL_MEMORY_BUFFER: ONLINE
            <br />
            {`>`} THOUGHT_INDEXING: ACTIVE
            <br />
            {`>`} RETRIEVAL_LATENCY: 0.002ms
          </p>
          <div className="flex gap-4">
            <button className="border border-[#33ff00] px-6 py-3 text-sm tracking-widest transition-colors hover:bg-[#33ff00] hover:text-black">
              [ EXECUTE ]
            </button>
            <button className="border border-[#33ff00]/40 px-6 py-3 text-sm tracking-widest text-[#33ff00]/60 transition-colors hover:border-[#33ff00] hover:text-[#33ff00]">
              [ READ_LOG ]
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              cmd: "LINK_NODES",
              desc: "Establish synaptic connections between memory fragments.",
            },
            {
              cmd: "DAILY_DUMP",
              desc: "Archive conscious stream with timestamp integrity.",
            },
            {
              cmd: "QUERY_MIND",
              desc: "Instant retrieval across entire neural graph.",
            },
            {
              cmd: "ENCRYPT_SELF",
              desc: "Local-first storage. No external servers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group border border-[#33ff00]/20 p-6 transition-all hover:border-[#33ff00]/60 hover:bg-[#0a1f0a]/50"
            >
              <div className="mb-2 text-xs text-[#33ff00]/40 group-hover:text-[#33ff00]/70">
                {`>`} {item.cmd}.PRG
              </div>
              <p className="text-sm leading-relaxed text-[#33ff00]/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#33ff00]/30">
          SECOND_BRAIN v2.0.4 // BUILD 8942 // LOCALHOST
        </div>
      </div>
    </div>
  );
}
