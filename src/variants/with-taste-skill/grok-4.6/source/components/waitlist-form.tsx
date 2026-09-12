"use client";

import { useState } from "react";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  accentClass,
  inputClass,
  helperClass,
  errorClass,
  successClass,
}: {
  accentClass: string;
  inputClass: string;
  helperClass: string;
  errorClass: string;
  successClass: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className={successClass} role="status">
        You are on the list. We will email you when desktop is ready.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2">
      <label htmlFor="waitlist-email" className="text-sm font-medium">
        Email
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@studio.com"
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${accentClass} inline-flex h-12 shrink-0 items-center justify-center gap-2 px-5 text-sm font-medium active:scale-[0.98] disabled:opacity-70`}
        >
          {status === "loading" ? (
            <CircleNotch size={16} weight="regular" className="animate-spin" />
          ) : (
            <>
              Get Cairn
              <ArrowRight size={16} weight="regular" />
            </>
          )}
        </button>
      </div>
      <p className={helperClass}>No spam. One note when desktop ships.</p>
      {status === "error" ? (
        <p className={errorClass} role="alert">
          Enter a real email so we can reach you.
        </p>
      ) : null}
    </form>
  );
}
