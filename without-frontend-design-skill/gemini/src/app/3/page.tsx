import Link from "next/link";

export default function Iteration3() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#2C2C2C] font-sans selection:bg-[#FFE066] selection:text-black flex flex-col relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FF9D7E] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#7ED2FF] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] bg-[#FFE066] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>

      <header className="relative w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-10">
        <div className="font-bold text-2xl tracking-tight flex items-center gap-2">
          <span className="text-3xl">🧠</span> DoodleBrain
        </div>
        <nav className="hidden md:flex gap-8 text-base font-semibold text-gray-600">
          <Link href="#" className="hover:text-black hover:-translate-y-0.5 transition-transform">Use Cases</Link>
          <Link href="#" className="hover:text-black hover:-translate-y-0.5 transition-transform">Templates</Link>
          <Link href="#" className="hover:text-black hover:-translate-y-0.5 transition-transform">Community</Link>
        </nav>
        <button className="text-base font-bold bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Try it free
        </button>
      </header>

      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto z-10">
        <div className="inline-block transform -rotate-2 bg-[#FFE066] px-4 py-2 rounded-xl font-bold text-sm mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
          ✨ The fun way to take notes
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
          Organize your chaos. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B]">Beautifully.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-medium">
          DoodleBrain is the flexible, colorful, and wildly customizable workspace for your thoughts, tasks, and wild ideas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <button className="bg-[#7ED2FF] text-black border-2 border-black px-8 py-4 rounded-2xl font-bold text-xl hover:bg-[#5CB8FF] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
            Get Started — It's Free!
          </button>
          <button className="bg-white text-black border-2 border-black px-8 py-4 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]">
            Watch Video 📺
          </button>
        </div>

        <div className="mt-24 w-full aspect-video bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="absolute top-0 w-full h-12 bg-[#FFE066] border-b-4 border-black flex items-center px-6 gap-3">
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
          </div>
          <div className="text-gray-400 font-bold text-2xl">Your colorful workspace here</div>
        </div>
      </main>
    </div>
  );
}
