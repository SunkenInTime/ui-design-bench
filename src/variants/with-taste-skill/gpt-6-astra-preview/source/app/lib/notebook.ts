"use client";

import { useSyncExternalStore } from "react";

export type Note = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  sample?: boolean;
};

type NotebookState = {
  notes: Note[];
  ready: boolean;
  status: "ready" | "saving" | "saved" | "error";
  error: string | null;
};

const STORAGE_KEY = "aster-notebook";

const examples: Note[] = [
  {
    id: "attention",
    title: "The art of paying attention",
    body: "Good ideas start with noticing.\n\nThe shape of a leaf. A sentence that stays with you. The question you keep coming back to.\n\nMake a little room for those things. Write them down before the day carries them away.",
    tags: ["creativity", "everyday"],
    sample: true,
  },
  {
    id: "connections",
    title: "Ideas find each other",
    body: "A thought from a book connects to a conversation. A conversation becomes the beginning of a project.\n\nLeave space between your ideas. Sometimes that is where the interesting part happens.",
    tags: ["creativity", "reading"],
    sample: true,
  },
  {
    id: "somewhere",
    title: "Somewhere, someday",
    body: "A quiet cabin beside a lake. A long walk without a destination. A whole afternoon with a good book.\n\nA few things to make room for.",
    tags: ["everyday", "travel"],
    sample: true,
  },
];

const serverSnapshot: NotebookState = { notes: [], ready: false, status: "ready", error: null };
let snapshot: NotebookState | null = null;
let saveTimer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

function parseNotes(value: string): Note[] {
  const notes: unknown = JSON.parse(value);
  if (!Array.isArray(notes) || !notes.every((note) =>
    note && typeof note.id === "string" && typeof note.title === "string" &&
    typeof note.body === "string" && Array.isArray(note.tags) &&
    note.tags.every((tag: unknown) => typeof tag === "string")
  )) throw new Error("Invalid notebook");
  return notes;
}

function readNotebook(): NotebookState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return { notes: stored ? parseNotes(stored) : examples, ready: true, status: "ready", error: null };
  } catch {
    return {
      notes: examples,
      ready: true,
      status: "error",
      error: "Browser storage is unavailable. You can still write and export your notes.",
    };
  }
}

function getSnapshot() {
  if (!snapshot) snapshot = readNotebook();
  return snapshot;
}

function emit() { listeners.forEach((listener) => listener()); }

function saveNow() {
  clearTimeout(saveTimer);
  if (!snapshot || snapshot.status !== "saving") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot.notes));
    snapshot = { ...snapshot, status: "saved", error: null };
  } catch {
    snapshot = {
      ...snapshot,
      status: "error",
      error: "These changes could not be saved in your browser. Export a copy to keep them.",
    };
  }
  emit();
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY && event.key !== null) return;
  if (snapshot?.status === "saving") saveNow();
  snapshot = readNotebook();
  emit();
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("storage", onStorage);
    window.addEventListener("pagehide", saveNow);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      saveNow();
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("pagehide", saveNow);
    }
  };
}

function commit(notes: Note[]) {
  snapshot = { notes, ready: true, status: "saving", error: null };
  emit();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 250);
}

export function useNotebook() {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);
}

export function addNote(seed?: { title: string; body: string; tags?: string[] }) {
  const note: Note = {
    id: crypto.randomUUID(),
    title: seed?.title ?? "Untitled thought",
    body: seed?.body ?? "",
    tags: seed?.tags ?? [],
  };
  commit([note, ...getSnapshot().notes]);
  return note.id;
}

export function updateNote(id: string, update: Partial<Pick<Note, "title" | "body" | "tags">>) {
  commit(getSnapshot().notes.map((note) => note.id === id ? { ...note, ...update, sample: false } : note));
}

export function removeNote(id: string) {
  const current = getSnapshot();
  const removed = current.notes.find((note) => note.id === id);
  commit(current.notes.filter((note) => note.id !== id));
  return removed;
}

export function restoreNote(note: Note) {
  commit([note, ...getSnapshot().notes]);
}

export function exportNotebook() {
  saveNow();
  const markdown = getSnapshot().notes.map((note) =>
    `# ${note.title || "Untitled thought"}\n\n${note.body}\n\n${note.tags.map((tag) => `#${tag}`).join(" ")}`
  ).join("\n\n---\n\n");
  const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "aster-notes.md";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
