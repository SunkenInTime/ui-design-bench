"use client";

import { motion } from "framer-motion";
import { Smile, PenTool, Layers, Zap } from "lucide-react";

export default function NeoBrutalistLanding() {
  return (
    <div className="min-h-screen bg-[#FFF4E0] text-black font-sans selection:bg-[#FF90E8] selection:text-black overflow-hidden relative">
      <nav className="border-b-4 border-black p-6 flex justify-between items-center bg-[#FF90E8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 relative">
        <div className="text-3xl font-black tracking-tighter flex items-center gap-2">
          <Smile className="w-8 h-8 fill-white" strokeWidth={2.5} />
          JOTTER
        </div>
        <div className="flex gap-6 font-bold text-lg">
          <a href="#" className="hover:-translate-y-1 transition-transform">Features</a>
          <a href="#" className="hover:-translate-y-1 transition-transform">Pricing</a>
          <a href="#" className="hover:-translate-y-1 transition-transform">Login</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-12 px-6 py-3 rounded-full border-4 border-black bg-[#FFC900] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold text-xl inline-block transform -rotate-3"
        >
          Your brain, but fun! 🧠✨
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="text-6xl md:text-[7rem] font-black leading-[0.9] tracking-tighter mb-8 max-w-4xl"
        >
          DUMP YOUR THOUGHTS. <br/>
          <span className="text-[#00E5FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: "3px black" }}>MAKE SENSE LATER.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl max-w-3xl font-bold mb-16 leading-tight"
        >
          A colorful, chaotic, and wonderfully organized second brain for creative minds who hate boring folders.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
          whileTap={{ scale: 0.95, y: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
          className="px-12 py-6 rounded-2xl bg-[#FF4911] text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-3xl font-black transition-all flex items-center gap-4"
        >
          Start Jotting <PenTool className="w-8 h-8" strokeWidth={3} />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full">
          {[
            { icon: Layers, title: "Messy Canvas", desc: "Throw images, text, and links anywhere. We'll connect them.", color: "#00E5FF" },
            { icon: Zap, title: "Lightning Fast", desc: "Instantly capture ideas before they escape your adhd brain.", color: "#FFC900" },
            { icon: Smile, title: "Joyful UI", desc: "Because taking notes shouldn't feel like doing taxes.", color: "#FF90E8" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.8 + (i * 0.2) }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              className="p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white group cursor-pointer"
            >
              <div 
                className="w-20 h-20 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-8 mx-auto transition-transform group-hover:scale-110"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-10 h-10 text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black mb-4">{feature.title}</h3>
              <p className="text-xl font-bold opacity-80 leading-snug">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

