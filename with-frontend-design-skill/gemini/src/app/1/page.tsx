"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Brain, Zap } from "lucide-react";

export default function BrutalistLanding() {
  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
        backgroundSize: "4rem 4rem",
        opacity: 0.1
      }} />

      <nav className="border-b-4 border-black p-6 flex justify-between items-center bg-white relative z-10">
        <div className="text-2xl font-black uppercase tracking-tighter">SYNAPSE_CORE</div>
        <div className="flex gap-8 font-bold uppercase text-sm">
          <a href="#" className="hover:underline underline-offset-4 decoration-2">Features</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-2">Pricing</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-2">Login</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block border-2 border-black px-3 py-1 mb-8 font-bold uppercase text-xs bg-black text-white"
        >
          System Online // v2.0.4
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "circOut" }}
          className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8"
        >
          Your Mind.<br/>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>Externalized.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl font-medium mb-12 border-l-4 border-black pl-6"
        >
          A brutal, uncompromising second brain for high-velocity thinkers. No fluff. Just raw data capture and neural linking.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-4 text-2xl font-black uppercase border-4 border-black px-8 py-4 transition-colors"
        >
          Initialize Core
          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full border-t-4 border-black pt-16">
          {[
            { icon: Brain, title: "Neural Links", desc: "Bi-directional connections between all nodes." },
            { icon: Database, title: "Raw Storage", desc: "Infinite capacity for unformatted thought dumps." },
            { icon: Zap, title: "Instant Recall", desc: "Sub-millisecond search across your entire consciousness." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
              className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors group"
            >
              <feature.icon className="w-12 h-12 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-black uppercase mb-2">{feature.title}</h3>
              <p className="font-medium opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
