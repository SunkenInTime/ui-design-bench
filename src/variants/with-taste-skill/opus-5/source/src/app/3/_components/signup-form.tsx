"use client";

import { useSignup } from "@/variants/with-taste-skill/opus-5/source/src/components/use-signup";

export function SignupForm() {
  const form = useSignup();

  if (form.isSent) {
    return (
      <div
        aria-live="polite"
        className="border-2 border-[#141414] bg-[#d9330c] p-6"
      >
        <p className="font-jet text-[11px] tracking-[0.2em] text-white/80">
          LINK SENT
        </p>
        <p className="mt-3 font-archivo text-[20px] leading-tight font-bold text-white">
          {form.email}
        </p>
        <p className="mt-2 max-w-[40ch] text-[14px] leading-relaxed text-white/90">
          Download, unzip, point it at a folder. There is no account to set up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={form.onSubmit} noValidate className="w-full max-w-xl">
      <label
        htmlFor={form.inputId}
        className="block font-jet text-[11px] tracking-[0.2em] text-[#141414]"
      >
        EMAIL
      </label>
      <div className="mt-2.5 flex flex-col gap-0 sm:flex-row">
        <input
          id={form.inputId}
          type="email"
          value={form.email}
          onChange={(event) => form.onChange(event.target.value)}
          aria-describedby={form.messageId}
          aria-invalid={form.isError}
          placeholder="you@work.com"
          className={`h-13 flex-1 border-2 bg-[#f4f4f2] px-4 font-jet text-[14px] text-[#141414] placeholder:text-[#6b6b66] focus:outline-none focus-visible:bg-white ${
            form.isError ? "border-[#d9330c]" : "border-[#141414]"
          }`}
        />
        <button
          type="submit"
          disabled={form.isSending}
          className="inline-flex h-13 shrink-0 items-center justify-center border-2 border-[#141414] bg-[#d9330c] px-8 font-archivo text-[14px] font-bold tracking-wide whitespace-nowrap text-white transition-transform hover:bg-[#141414] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414] active:translate-y-[2px] disabled:opacity-70 sm:-ml-0.5"
        >
          {form.isSending ? "SENDING" : "START FREE"}
        </button>
      </div>
      <p
        id={form.messageId}
        aria-live="polite"
        className={`mt-3 text-[13.5px] leading-relaxed ${
          form.isError ? "font-medium text-[#a8280a]" : "text-[#565651]"
        }`}
      >
        {form.isError
          ? form.error
          : "One download link. We do not operate a mailing list."}
      </p>
    </form>
  );
}
