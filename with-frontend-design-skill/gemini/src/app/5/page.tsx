"use client";

import { motion } from "framer-motion";
import { BookOpen, Map, Compass, Archive } from "lucide-react";

export default function EditorialLanding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2C3627] font-serif selection:bg-[#722F26] selection:text-[#F4F1EA] overflow-hidden">
      <nav className="border-b border-[#2C3627]/20 px-12 py-8 flex justify-between items-center">
        <div className="text-xl tracking-[0.2em] uppercase font-bold text-[#722F26]">
          The Archive
        </div>
        <div className="flex gap-12 text-sm tracking-widest uppercase font-medium">
          <a href="#" className="hover:text-[#722F26] transition-colors">Manifesto</a>
          <a href="#" className="hover:text-[#722F26] transition-colors">Volumes</a>
          <a href="#" className="hover:text-[#722F26] transition-colors">Subscribe</a>
        </div>
      </nav>

      <main className="max-w-[90rem] mx-auto px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 text-sm tracking-[0.3em] uppercase font-bold text-[#722F26] border-b border-[#722F26] pb-2"
            >
              Issue N° 01 — The Mind
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-7xl lg:text-[8rem] font-light leading-[0.85] tracking-tight mb-12"
            >
              Curate your <br/>
              <span className="italic font-normal text-[#722F26]">intellect.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl max-w-2xl leading-relaxed mb-16 font-light text-[#4A5445]"
            >
              An elegant repository for the modern thinker. Treat your notes not as fleeting data, but as chapters in the ongoing anthology of your life.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="group flex items-center gap-6 text-sm tracking-[0.2em] uppercase font-bold"
            >
              <span className="border-b border-[#2C3627] pb-1 group-hover:border-[#722F26] group-hover:text-[#722F26] transition-colors">
                Open the Archive
              </span>
              <BookOpen className="w-5 h-5 group-hover:text-[#722F26] transition-colors" strokeWidth={1.5} />
            </motion.button>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="aspect-[3/4] bg-[#E8E4DB] p-8 flex flex-col justify-between border border-[#2C3627]/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#722F26]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2C3627]/5 rounded-full blur-3xl" />
              
              <div className="flex justify-between items-start z-10">
                <Archive className="w-8 h-8 text-[#722F26]" strokeWidth={1} />
                <span className="text-xs tracking-widest uppercase opacity-50">Fig. 1</span>
              </div>
              
              <div className="z-10">
                <h3 className="text-3xl italic mb-4 text-[#722F26]">The Atlas of Thought</h3>
                <p className="text-sm leading-loose opacity-80 font-sans">
                  "Every note is a coordinate on the map of your understanding. Connect them, and you trace the geography of your own mind."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-40 border-t border-[#2C3627]/20 pt-16">
          {[
            { icon: Compass, title: "Navigate", desc: "Wander through your ideas with intentional, beautifully typeset links." },
            { icon: Map, title: "Cartography", desc: "Map out complex subjects with an interface that respects whitespace and typography." },
            { icon: Archive, title: "Preserve", desc: "Your knowledge, bound in a digital format that feels as permanent as print." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + (i * 0.2) }}
              className="flex flex-col items-start group cursor-pointer"
            >
              <feature.icon className="w-8 h-8 mb-6 text-[#722F26] group-hover:-translate-y-2 transition-transform duration-500" strokeWidth={1} />
              <h3 className="text-xl uppercase tracking-widest font-bold mb-4">{feature.title}</h3>
              <p className="text-lg leading-relaxed opacity-70 font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
