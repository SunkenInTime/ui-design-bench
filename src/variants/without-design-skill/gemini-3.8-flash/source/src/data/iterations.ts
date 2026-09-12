import React from "react";
import {
  Share2,
  Feather,
  Terminal,
  BrainCircuit,
  Layers
} from "lucide-react";

export interface IterationInfo {
  id: string;
  number: number;
  slug: string;
  name: string;
  theme: string;
  tagline: string;
  style: string;
  palette: string[];
  icon: React.ElementType;
  badge: string;
}

export const ITERATIONS: IterationInfo[] = [
  {
    id: "1",
    number: 1,
    slug: "/1",
    name: "Synapse",
    theme: "The Neural Graph",
    tagline: "Bi-directional Knowledge Web & Graph Physics",
    style: "Cyber-Minimalist • Obsidian/Roam Evolved • Bioluminescent Dark",
    palette: ["#090D16", "#06B6D4", "#10B981"],
    icon: Share2,
    badge: "Graph First",
  },
  {
    id: "2",
    number: 2,
    slug: "/2",
    name: "Atelier",
    theme: "Editorial Sanctuary",
    tagline: "Serene Typography & Daily Distillation",
    style: "Warm Editorial • Kinfolk/Craft Style • Ivory & Terracotta",
    palette: ["#FAF7F2", "#C2410C", "#292524"],
    icon: Feather,
    badge: "Mindful Focus",
  },
  {
    id: "3",
    number: 3,
    slug: "/3",
    name: "Cortex CLI",
    theme: "Command Velocity",
    tagline: "Sub-10ms Keyboard-Driven Power Tool",
    style: "Developer-First • Raycast/Linear Inspired • Carbon & Amber",
    palette: ["#0B0D13", "#F59E0B", "#8B5CF6"],
    icon: Terminal,
    badge: "120 FPS Speed",
  },
  {
    id: "4",
    number: 4,
    slug: "/4",
    name: "Mnemonic AI",
    theme: "Cognitive Synthesis",
    tagline: "Autonomous Reasoning & Living Memory",
    style: "Futuristic Glassmorphic • Deep Violet & Cyan • Semantic Vectors",
    palette: ["#0D0B1F", "#A855F7", "#38BDF8"],
    icon: BrainCircuit,
    badge: "Living Memory",
  },
  {
    id: "5",
    number: 5,
    slug: "/5",
    name: "MindPalace",
    theme: "Spatial Studio",
    tagline: "Infinite 2D Canvas & Visual Thought Palace",
    style: "Spatial Whiteboard • Heptabase/Miro Aesthetic • Clean Slate & Grid",
    palette: ["#F8FAFC", "#3B82F6", "#EC4899"],
    icon: Layers,
    badge: "Spatial Canvas",
  },
];
