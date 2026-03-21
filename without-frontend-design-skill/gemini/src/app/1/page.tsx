import Link from "next/link";

export default function Iteration1() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans selection:bg-black selection:text-white flex flex-col">
      <header className="w-full max-w-5xl mx-auto p-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">Cerebrum</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
          <Link href="#" className="hover:text-black transition-colors">Features</Link>
          <Link href="#" className="hover:text-black transition-colors">Methodology</Link>
          <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
        </nav>
        <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Get Started
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
          Your mind, <br />
          <span className="text-gray-400">extended.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
          A minimalist second brain designed to capture your thoughts, connect ideas, and amplify your thinking without getting in the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
            Start writing freely
          </button>
          <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all">
            See how it works
          </button>
        </div>

        <div className="mt-24 w-full aspect-video bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
          <div className="text-gray-300 font-mono text-sm">App Interface Preview</div>
        </div>
      </main>
    </div>
  );
}
