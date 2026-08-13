"use client";

import { useState } from "react";

const variants = {
  luxury: {
    label: "text-zinc-700 dark:text-zinc-300",
    helper: "text-zinc-600 dark:text-zinc-400",
    input:
      "rounded-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#3d6d99] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100",
    button:
      "rounded-full bg-[#3d6d99] px-5 py-3 text-white hover:bg-[#345d82] active:scale-[0.98] dark:bg-[#7eafd4] dark:text-zinc-950 dark:hover:bg-[#9bc2de]",
    error: "text-red-800 dark:text-red-300",
    success: "text-zinc-800 dark:text-zinc-200",
  },
  paper: {
    label: "text-zinc-800 dark:text-zinc-200",
    helper: "text-zinc-600 dark:text-zinc-400",
    input:
      "rounded-none border border-zinc-400 bg-[#f3f4f6] px-3 py-3 text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-[#2c5a4f] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100",
    button:
      "rounded-none bg-[#2c5a4f] px-5 py-3 text-[#f3f4f6] hover:bg-[#244c43] active:translate-y-[1px] dark:bg-[#8fbfb3] dark:text-zinc-950 dark:hover:bg-[#a9d0c6]",
    error: "text-red-800 dark:text-red-300",
    success: "text-zinc-800 dark:text-zinc-200",
  },
  studio: {
    label: "text-zinc-800 dark:text-zinc-200",
    helper: "text-zinc-600 dark:text-zinc-400",
    input:
      "rounded-none border border-zinc-400 bg-transparent px-3 py-3 text-zinc-900 outline-none focus-visible:ring-2 focus-visible:ring-[#c45c3e] dark:border-zinc-500 dark:text-zinc-100",
    button:
      "rounded-none bg-[#c45c3e] px-5 py-3 text-white hover:bg-[#a84d34] active:scale-[0.98] dark:bg-[#e08b72] dark:text-zinc-950 dark:hover:bg-[#ebaa98]",
    error: "text-red-800 dark:text-red-300",
    success: "text-zinc-800 dark:text-zinc-200",
  },
} as const;

export function WaitlistForm({
  id,
  variant,
  cta,
}: {
  id?: string;
  variant: keyof typeof variants;
  cta: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const ui = variants[variant];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setStatus("error");
      setMessage("Enter an email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setMessage("Enter a valid email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className={`max-w-[40ch] text-base leading-relaxed ${ui.success}`} role="status">
        You are on the list. We will write when a seat opens.
      </p>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="flex max-w-md flex-col gap-2" noValidate>
      <label htmlFor={`${id ?? "waitlist"}-email`} className={`text-sm font-medium ${ui.label}`}>
        Email
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id ?? "waitlist"}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={`${id ?? "waitlist"}-help ${status === "error" ? `${id ?? "waitlist"}-error` : ""}`}
          className={`min-h-12 min-w-0 flex-1 ${ui.input}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`min-h-12 shrink-0 text-sm font-medium whitespace-nowrap transition ${ui.button} disabled:opacity-60`}
        >
          {status === "loading" ? "Sending" : cta}
        </button>
      </div>
      <p id={`${id ?? "waitlist"}-help`} className={`text-sm ${ui.helper}`}>
        We send a Mac, iOS, and web download. No extra mail.
      </p>
      {status === "error" ? (
        <p id={`${id ?? "waitlist"}-error`} className={`text-sm ${ui.error}`} role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
