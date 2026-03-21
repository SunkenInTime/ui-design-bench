"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, HardDrive, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function TerminalLanding() {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING SECOND_BRAIN_PROTOCOL... \nMOUNTING NEURAL_DRIVE... [OK]\nESTABLISHING SYNAPTIC_LINK... [OK]\nREADY FOR INPUT.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-black overflow-hidden relative">
      {/* CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(0, 255, 65, 0) 50%, rgba(0, 255, 65, 0.25) 50%)",
        backgroundSize: "100% 4px"
      }} />
      <div className="absolute inset-0 pointer-events-none z-50 opacity-5 shadow-[inset_0_0_100px_rgba(0,255,65,1)]" />

      <nav className="border-b border-[#00FF41]/30 p-4 flex justify-between items-center bg-[#050505] relative z-10">
        <div className="text-xl font-bold tracking-widest flex items-center gap-2">
          <Terminal className="w-5 h-5" /> ROOT@BRAIN:~#
        </div>
        <div className="flex gap-6 text-xs tracking-widest opacity-70">
          <a href="#" className="hover:text-white hover:opacity-100 transition-colors">[DOCS]</a>
          <a href="#" className="hover:text-white hover:opacity-100 transition-colors">[UPGRADE]</a>
          <a href="#" className="hover:text-white hover:opacity-100 transition-colors">[AUTH]</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col items-start">
        <div className="mb-12 h-24 text-sm md:text-base opacity-80 whitespace-pre-wrap leading-relaxed">
          {text}
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-3 h-5 bg-[#00FF41] align-middle ml-1"
          />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2, ease: "circOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        >
          &gt; EXTERNAL_MEMORY<br/>
          &gt; ALLOCATED.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-lg md:text-xl max-w-3xl mb-12 opacity-80 leading-relaxed border-l-2 border-[#00FF41]/50 pl-4"
        >
          A command-line driven second brain for power users. Navigate thoughts with keystrokes, query ideas with regex, and build a fortress of knowledge in plain text.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          whileHover={{ scale: 1.05, backgroundColor: "#00FF41", color: "#050505", boxShadow: "0 0 20px rgba(0,255,65,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 text-xl font-bold border-2 border-[#00FF41] px-8 py-4 transition-all bg-[#050505]"
        >
          ./execute_brain.sh
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full border-t border-[#00FF41]/30 pt-12">
          {[
            { icon: Cpu, title: "REGEX SEARCH", desc: "Query your entire knowledge base with complex regular expressions." },
            { icon: HardDrive, title: "LOCAL FIRST", desc: "Your data stays on your machine. Encrypted, fast, and yours." },
            { icon: ShieldAlert, title: "VIM BINDINGS", desc: "Navigate your thoughts without ever touching the mouse." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5 + (i * 0.2) }}
              className="border border-[#00FF41]/30 p-6 hover:bg-[#00FF41]/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#00FF41]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <feature.icon className="w-8 h-8 mb-4 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,1)] transition-all" />
              <h3 className="text-lg font-bold mb-2">&gt; {feature.title}</h3>
              <p className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

