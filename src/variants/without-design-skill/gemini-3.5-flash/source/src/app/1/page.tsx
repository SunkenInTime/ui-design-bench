"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Search, 
  GitFork, 
  Command, 
  ChevronRight, 
  Plus, 
  FileText, 
  HelpCircle,
  Network,
  Cpu,
  Bookmark,
  Share2
} from "lucide-react";

// Mock database of connected notes for the live demo
interface Note {
  id: string;
  title: string;
  content: string;
  connections: string[]; // list of note IDs this note connects to
  tags: string[];
}

const INITIAL_NOTES: Record<string, Note> = {
  "1": {
    id: "1",
    title: "Second Brain Theory",
    content: "The fundamental concept of [[Second Brain Theory]] is that human minds are designed for having ideas, not holding them. By offloading memory to digital nodes like [[Digital Gardens]] or structural maps, we free cognitive capacity for synthesis.\n\nSee also: [[Networked Thought]].",
    connections: ["2", "3"],
    tags: ["philosophy", "systems"]
  },
  "2": {
    id: "2",
    title: "Digital Gardens",
    content: "Unlike static blogs, [[Digital Gardens]] are exploratory, organic spaces. Ideas grow over time, starting as seedlings and maturing into thickets. They heavily utilize [[Networked Thought]] to link serendipitous concepts together.",
    connections: ["1", "3"],
    tags: ["gardening", "web"]
  },
  "3": {
    id: "3",
    title: "Networked Thought",
    content: "Traditional folders enforce a top-down hierarchy. But intelligence is associative. [[Networked Thought]] bypasses categories in favor of bidirectional links, just like neural synapses.\n\nThis maps perfectly to [[Second Brain Theory]].",
    connections: ["1", "2"],
    tags: ["neuroscience", "learning"]
  }
};

export default function MinimalistAether() {
  const [notes, setNotes] = useState<Record<string, Note>>(INITIAL_NOTES);
  const [activeNoteId, setActiveNoteId] = useState<string>("1");
  const [commandOpen, setCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editorText, setEditorText] = useState(INITIAL_NOTES["1"].content);

  // Update note content on edit
  useEffect(() => {
    setNotes(prev => {
      if (prev[activeNoteId]?.content === editorText) return prev;
      return {
        ...prev,
        [activeNoteId]: {
          ...prev[activeNoteId],
          content: editorText
        }
      };
    });
  }, [editorText, activeNoteId]);

  // Sync editor text when active note changes
  const handleSelectNote = (id: string) => {
    setActiveNoteId(id);
    setEditorText(notes[id].content);
  };

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 font-mono flex flex-col transition-colors selection:bg-zinc-200 dark:selection:bg-zinc-800">
      
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between bg-[#fafafa]/80 dark:bg-[#0c0c0e]/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 bg-zinc-950 dark:bg-white rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-white dark:text-black font-extrabold">Æ</span>
          </div>
          <span className="font-bold text-sm uppercase tracking-widest text-zinc-950 dark:text-white">Aether</span>
          <span className="text-[10px] text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5 rounded">v1.4.0-Beta</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <a href="#demo" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Interactive Demo</a>
          <a href="#philosophy" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Philosophy</a>
          <a href="#features" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCommandOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-400 text-xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search Command</span>
            <kbd className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.2 text-[9px] rounded font-sans border border-zinc-200 dark:border-zinc-700">⌘K</kbd>
          </button>
          
          <button className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black text-xs font-bold px-4 py-1.5 rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">
            Launch Cloud
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-500 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Now Available: Multi-device Synced SQLite
          </div>
          <h1 className="text-3.5xl md:text-5xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white max-w-2xl">
            Your mind isn&apos;t linear.<br />
            <span className="text-zinc-400 dark:text-zinc-600">Your notes shouldn&apos;t be either.</span>
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            Aether is a keyboard-first, local-first markdown workspace that connects your ideas dynamically. Banish folders, embrace bidirectional links, and visualize your cognitive network growing in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
            <a 
              href="#demo"
              className="bg-zinc-950 dark:bg-white text-white dark:text-black font-semibold text-xs px-6 py-3 rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 text-center transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Try Interactive Demo</span>
            </a>
            <button className="border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-600 dark:text-zinc-300 font-semibold text-xs px-6 py-3 rounded text-center transition-all bg-white dark:bg-zinc-900/40">
              Download Desktop App
            </button>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-zinc-400 dark:text-zinc-500 justify-center md:justify-start pt-2">
            <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3" /> Fully Offline</span>
            <span className="flex items-center gap-1.5"><Command className="w-3 h-3" /> 100% Markdown</span>
            <span className="flex items-center gap-1.5"><GitFork className="w-3 h-3" /> Peer-to-Peer Sync</span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500"></div>
          
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-900 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
              <span className="ml-1 font-bold">neural_graph.md</span>
            </div>
            <span>89 nodes mapped</span>
          </div>

          {/* Simple preview node visual */}
          <div className="h-48 flex items-center justify-center relative bg-zinc-50 dark:bg-zinc-900/30 rounded-lg border border-zinc-100 dark:border-zinc-900/60 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#202025_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
            
            {/* Connected Nodes Visual */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="65%" y2="75%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1.5" />
              <line x1="25%" y1="35%" x2="30%" y2="70%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" strokeDasharray="2" />
              <line x1="75%" y1="30%" x2="65%" y2="75%" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800/40" strokeWidth="1" strokeDasharray="2" />
            </svg>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-white text-white dark:text-black text-[9px] font-bold px-2 py-1 rounded shadow-md z-10 border border-zinc-700/20">
              Second Brain
            </div>
            
            <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 text-[8px] px-2 py-0.5 rounded shadow-sm border border-zinc-200 dark:border-zinc-700">
              Cognition
            </div>

            <div className="absolute top-[30%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 text-[8px] px-2 py-0.5 rounded shadow-sm border border-zinc-200 dark:border-zinc-700">
              Productivity
            </div>

            <div className="absolute top-[75%] left-[65%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 text-[8px] px-2 py-0.5 rounded shadow-sm border border-zinc-200 dark:border-zinc-700">
              Readings
            </div>

            <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300 text-[8px] px-2 py-0.5 rounded shadow-sm border border-zinc-200 dark:border-zinc-700">
              Ideas
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-2 w-3/4 bg-zinc-100 dark:bg-zinc-900 rounded"></div>
            <div className="h-2 w-5/6 bg-zinc-100 dark:bg-zinc-900 rounded"></div>
            <div className="h-2 w-1/2 bg-zinc-100 dark:bg-zinc-900 rounded"></div>
          </div>
        </div>
      </section>

      {/* Live Demo Console - Key Experience */}
      <section id="demo" className="border-t border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white flex items-center gap-2 justify-center md:justify-start">
              <Network className="w-4 h-4 text-zinc-400" />
              <span>Interactive Demonstration Sandbox</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-lg">
              Click the links inside the notes or directly select nodes from the neural graph. Type in the editor to modify the active note. Watch your brain update dynamically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Directory Sidebar */}
            <div className="md:col-span-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] rounded-xl p-4 space-y-4">
              <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase block">Active Brain</span>
              
              <div className="space-y-1">
                {Object.values(notes).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => handleSelectNote(note.id)}
                    className={`w-full text-left flex items-center justify-between px-2.5 py-1.5 rounded text-xs cursor-pointer ${
                      activeNoteId === note.id 
                        ? "bg-zinc-950 dark:bg-white text-white dark:text-black font-bold" 
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    }`}
                  >
                    <span className="truncate flex items-center gap-1.5">
                      <FileText className="w-3 h-3 opacity-60" />
                      {note.title}
                    </span>
                    <span className="text-[9px] opacity-60">{note.connections.length}c</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <button 
                  onClick={() => {
                    const newId = String(Object.keys(notes).length + 1);
                    const newNote: Note = {
                      id: newId,
                      title: `Untitled Note ${newId}`,
                      content: `This is Note ${newId}. Type [[Second Brain Theory]] to link it!`,
                      connections: [],
                      tags: ["draft"]
                    };
                    setNotes(prev => ({ ...prev, [newId]: newNote }));
                    handleSelectNote(newId);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 rounded text-[10px] font-bold text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  Add New Node
                </button>
              </div>
            </div>

            {/* Note Editor */}
            <div className="md:col-span-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] rounded-xl flex flex-col min-h-[320px]">
              <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-bold flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-zinc-500" />
                  editor/{notes[activeNoteId]?.title.toLowerCase().replace(/\s+/g, "_")}.md
                </span>
                <span className="text-[10px]">MD Editor</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <input
                  type="text"
                  value={notes[activeNoteId]?.title || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNotes(prev => ({
                      ...prev,
                      [activeNoteId]: { ...prev[activeNoteId], title: val }
                    }));
                  }}
                  className="bg-transparent border-b border-dashed border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 outline-none pb-2 text-sm font-bold text-zinc-900 dark:text-white mb-3"
                  placeholder="Note Title"
                />
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  className="flex-1 w-full bg-transparent resize-none border-none outline-none text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 font-mono"
                  placeholder="Type notes here. Reference other notes with [[Note Title]]..."
                />
              </div>
              <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-100 dark:border-zinc-900 text-[10px] text-zinc-400 flex items-center justify-between">
                <span>⚡ Auto-saving locally...</span>
                <span>{editorText.length} chars</span>
              </div>
            </div>

            {/* Live Interactive SVG Graph */}
            <div className="md:col-span-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] rounded-xl p-4 flex flex-col overflow-hidden select-none relative min-h-[320px]">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-4 uppercase tracking-wider font-bold">
                <span>Synaptic Matrix (Live)</span>
                <span className="text-[8px] bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-500">Interactive</span>
              </div>
              
              <div className="flex-1 relative border border-zinc-100 dark:border-zinc-900 rounded-lg overflow-hidden bg-zinc-50/50 dark:bg-[#060608]">
                {/* Visual SVG connectors */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Draw lines dynamically based on actual connections in database */}
                  {Object.values(notes).map((note, index) => {
                    // Position mapping
                    const getPos = (id: string) => {
                      if (id === "1") return { x: 50, y: 50 };
                      if (id === "2") return { x: 20, y: 30 };
                      if (id === "3") return { x: 80, y: 35 };
                      return { x: 50 + (parseInt(id) * 8) % 35, y: 75 };
                    };
                    
                    const selfPos = getPos(note.id);
                    return note.connections.map((targetId) => {
                      const targetPos = getPos(targetId);
                      return (
                        <line
                          key={`${note.id}-${targetId}`}
                          x1={`${selfPos.x}%`}
                          y1={`${selfPos.y}%`}
                          x2={`${targetPos.x}%`}
                          y2={`${targetPos.y}%`}
                          stroke="currentColor"
                          className={`${
                            activeNoteId === note.id || activeNoteId === targetId 
                              ? "text-zinc-900 dark:text-zinc-100 stroke-[1.5]" 
                              : "text-zinc-200 dark:text-zinc-800 stroke-[0.8]"
                          }`}
                        />
                      );
                    });
                  })}
                </svg>

                {/* Node coordinates */}
                {Object.values(notes).map((note) => {
                  const getPos = (id: string) => {
                    if (id === "1") return { x: 50, y: 50 };
                    if (id === "2") return { x: 20, y: 30 };
                    if (id === "3") return { x: 80, y: 35 };
                    // generic fallback for custom added notes
                    const seed = parseInt(id) || 4;
                    return { x: 50 + (seed * 8) % 35, y: 75 };
                  };
                  const pos = getPos(note.id);
                  const isActive = activeNoteId === note.id;

                  return (
                    <button
                      key={note.id}
                      onClick={() => handleSelectNote(note.id)}
                      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded shadow-sm text-[10px] transition-all cursor-pointer font-bold ${
                        isActive
                          ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black ring-2 ring-offset-2 ring-zinc-500 scale-105 z-20"
                          : "bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 hover:scale-105 z-10"
                      }`}
                    >
                      {note.title}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 text-[9px] text-zinc-400 text-center">
                🧠 Click a node to open, edit text to connect. Nodes linked on-screen are connected physically.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-20 w-full space-y-12">
        <div className="text-center md:text-left space-y-2">
          <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Capabilities</span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">Designed for Infinite Scaling.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900/10 space-y-3">
            <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white mb-2">
              <Command className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white">Keyboard Driven Everything</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Never touch your mouse. Invoke the prompt via <kbd className="text-[9px] border bg-zinc-50 dark:bg-zinc-800 px-1 py-0.5 rounded">⌘K</kbd>, find articles, query semantically, compile drafts, and organize tags instantly.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900/10 space-y-3">
            <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white mb-2">
              <GitFork className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white">Bidirectional Autolinking</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Writing <code className="text-[10px] bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded">[[Idea]]</code> creates a new file if it doesn&apos;t exist and links them bidirectionally. Track backtracking pathways seamlessly.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900/10 space-y-3">
            <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white mb-2">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white">Offline & Local First</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Your brain isn&apos;t rented from Verisign. Notes are stored locally on your device as standard, plain-text markdown. Easily readable by standard shell utilities forever.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="border-t border-zinc-200 dark:border-zinc-800 py-20 px-6 bg-zinc-100/50 dark:bg-zinc-950/20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Philosophy</span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">The Anti-Category Manifesto</h2>
          </div>
          <blockquote className="border-l-2 border-zinc-900 dark:border-zinc-200 pl-4 py-1.5 italic text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            &quot;The structure of folders implies an answer before the question has even been formulated. Networked thought means building connections as you discover them, creating meaning through association.&quot;
          </blockquote>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed space-y-4">
            Most notebook software forces you to pick a folder for your note. This creates an immediate cognitive hurdle: <em>Where does this belong?</em> In marketing? Under books? Or under journal?
            <br /><br />
            With Aether, you just create a page. Link it to relevant things as they pop up. As connections build, structure naturally crystallizes. You discover hidden pathways in your own thought patterns. It is an extension of your memory, operating as a biological neural web.
          </p>
        </div>
      </section>

      {/* Pricing / Footer */}
      <footer id="pricing" className="border-t border-zinc-200 dark:border-zinc-800 py-16 px-6 bg-white dark:bg-[#0c0c0e]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Own your thoughts, completely.</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              We believe knowledge tools should be utility tools. No venture funding, no data telemetry, no lock-in. Aether is built by a small team dedicated to pure thinking systems.
            </p>
            <div className="text-[10px] text-zinc-400">
              © 2026 Aether Labs Inc. Built with Next.js, local storage.
            </div>
          </div>
          
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-[#fafafa] dark:bg-zinc-950/60 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-900 dark:text-white">Aether Standard</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800">FREE FOREVER</span>
            </div>
            <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
              <li className="flex items-center gap-1.5">✓ Unlimited local nodes</li>
              <li className="flex items-center gap-1.5">✓ Instant Command Bar (⌘K)</li>
              <li className="flex items-center gap-1.5">✓ Markdown editor & CSS Custom Themes</li>
              <li className="flex items-center gap-1.5">✓ Multi-node visualization graphics</li>
            </ul>
            <button className="w-full py-2 bg-zinc-950 dark:bg-white text-white dark:text-black font-bold text-xs rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              Install Locally
            </button>
            <p className="text-[9px] text-zinc-400 text-center">
              Optional Cloud Sync (with end-to-end encryption) is $4/mo.
            </p>
          </div>
        </div>
      </footer>

      {/* Global Command Menu Dialog Mock */}
      {commandOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg max-w-lg w-full shadow-2xl p-4 flex flex-col font-mono animate-in zoom-in-95 duration-100">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-3">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-xs text-zinc-900 dark:text-white"
              />
              <button 
                onClick={() => setCommandOpen(false)}
                className="text-[10px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-zinc-400"
              >
                ESC
              </button>
            </div>

            <div className="space-y-1 max-h-60 overflow-y-auto">
              <span className="text-[10px] text-zinc-400 font-bold block mb-1">Commands</span>
              <button 
                onClick={() => {
                  setCommandOpen(false);
                  const newId = String(Object.keys(notes).length + 1);
                  const title = "New Idea Node";
                  setNotes(prev => ({
                    ...prev,
                    [newId]: {
                      id: newId,
                      title,
                      content: `Writing in new note. Created from Command Palette.`,
                      connections: [activeNoteId],
                      tags: ["cmd"]
                    }
                  }));
                  handleSelectNote(newId);
                }}
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-between text-zinc-600 dark:text-zinc-300"
              >
                <span className="flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" /> Create new note page</span>
                <kbd className="text-[9px] opacity-60">cmd + n</kbd>
              </button>
              
              <button 
                onClick={() => {
                  setCommandOpen(false);
                  setEditorText(prev => prev + " [[Networked Thought]]");
                }}
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-between text-zinc-600 dark:text-zinc-300"
              >
                <span className="flex items-center gap-1.5"><GitFork className="w-3.5 h-3.5" /> Link active note to...</span>
                <kbd className="text-[9px] opacity-60">cmd + l</kbd>
              </button>

              <span className="text-[10px] text-zinc-400 font-bold block mt-3 mb-1">Matches ({
                Object.values(notes).filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase())).length
              })</span>
              {Object.values(notes)
                .filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.content.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(note => (
                  <button
                    key={note.id}
                    onClick={() => {
                      handleSelectNote(note.id);
                      setCommandOpen(false);
                    }}
                    className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-between text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {note.title}</span>
                    <span className="text-[9px] opacity-50 font-sans italic">{note.tags.join(", ")}</span>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      )}

      {/* Persistent Swapper Button */}

    </div>
  );
}
