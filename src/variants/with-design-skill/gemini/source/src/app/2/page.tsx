"use client";

import { motion } from "framer-motion";
import { Sparkles, Feather, Cloud } from "lucide-react";

export default function EtherealLanding() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif overflow-hidden relative">
      {/* Soft Gradients */}
      <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-[#E8E0F0] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#F0E4E0] rounded-full mix-blend-multiply filter blur-[120px] opacity-60" />

      <nav className="relative z-10 flex justify-between items-center px-12 py-8">
        <div className="text-2xl tracking-widest font-light italic text-[#6A5A7A]">Aura</div>
        <div className="flex gap-12 font-light text-sm tracking-wider">
          <a href="#" className="hover:text-[#6A5A7A] transition-colors">Essence</a>
          <a href="#" className="hover:text-[#6A5A7A] transition-colors">Harmony</a>
          <a href="#" className="hover:text-[#6A5A7A] transition-colors">Enter</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 p-1 rounded-full bg-gradient-to-r from-[#E8E0F0] to-[#F0E4E0]"
        >
          <div className="px-6 py-2 rounded-full bg-white/50 backdrop-blur-md text-sm font-sans tracking-widest text-[#6A5A7A]">
            A sanctuary for your thoughts
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light leading-tight mb-8 text-[#2D2A32]"
        >
          Breathe life into<br/>
          <span className="italic text-[#6A5A7A]">your ideas.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-16 text-[#7A7A7A]"
        >
          A delicate second brain that gently organizes your consciousness. Float through your notes, connect concepts seamlessly, and find clarity in the noise.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(106, 90, 122, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="px-12 py-5 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-lg text-lg font-sans tracking-widest text-[#6A5A7A] hover:bg-white transition-all flex items-center gap-3"
        >
          Begin Journey <Sparkles className="w-5 h-5" />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40 w-full">
          {[
            { icon: Feather, title: "Weightless", desc: "A frictionless writing experience that feels like air." },
            { icon: Cloud, title: "Fluid Structure", desc: "Notes organize themselves naturally, like clouds forming." },
            { icon: Sparkles, title: "Serendipity", desc: "Discover beautiful connections between distant thoughts." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 + (i * 0.2) }}
              className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8E0F0] to-[#F0E4E0] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-[#6A5A7A]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-light mb-4 text-[#2D2A32]">{feature.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-[#7A7A7A]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

