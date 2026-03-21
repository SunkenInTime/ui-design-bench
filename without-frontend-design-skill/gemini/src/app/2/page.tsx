import Link from "next/link";

export default function Iteration2() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-mono selection:bg-purple-500 selection:text-white flex flex-col relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>

      <header className="relative w-full max-w-6xl mx-auto p-6 flex justify-between items-center z-10">
        <div className="font-bold text-xl tracking-widest text-purple-400 uppercase">SYNAPSE_</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-purple-400 transition-colors">/features</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">/docs</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">/pricing</Link>
        </nav>
        <button className="text-sm font-bold bg-purple-600/20 text-purple-400 border border-purple-500/50 px-4 py-2 rounded hover:bg-purple-600/40 hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          INITIATE
        </button>
      </header>

      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-8 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          SYSTEM ONLINE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-purple-600">
          YOUR DIGITAL<br />
          NEURAL NET
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Offload your cognitive burden. A high-performance second brain built for developers, researchers, and deep thinkers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <button className="bg-purple-600 text-white px-8 py-4 rounded font-bold text-lg hover:bg-purple-500 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] uppercase tracking-wider">
            Deploy Now
          </button>
          <button className="bg-transparent text-gray-300 border border-gray-700 px-8 py-4 rounded font-bold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all uppercase tracking-wider">
            View Source
          </button>
        </div>

        <div className="mt-24 w-full aspect-[21/9] bg-black/50 rounded-lg shadow-2xl border border-gray-800 overflow-hidden flex items-center justify-center relative backdrop-blur-sm">
          <div className="absolute top-0 w-full h-8 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="text-purple-500/30 font-mono text-sm">~ $ ./synapse --preview</div>
        </div>
      </main>
    </div>
  );
}
