"use client";

import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { useSignup } from "@/variants/with-taste-skill/opus-5/source/src/components/use-signup";

export function SignupForm() {
  const form = useSignup();

  if (form.isSent) {
    return (
      <div
        aria-live="polite"
        className="flex items-start gap-3.5 bg-[#c9f24d] p-7"
      >
        <CheckIcon
          size={20}
          weight="bold"
          className="mt-1 shrink-0 text-[#0b0b0c]"
        />
        <div>
          <p className="font-[family-name:var(--font-syne)] text-[20px] leading-tight font-extrabold text-[#0b0b0c]">
            Sent to {form.email}
          </p>
          <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-[#1e2410]">
            Download it, point it at a folder, start writing. No account step.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={form.onSubmit} noValidate className="w-full max-w-lg">
      <label
        htmlFor={form.inputId}
        className="block text-[13px] font-medium tracking-wide text-[#f2f1ee]"
      >
        Email
      </label>
      <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
        <input
          id={form.inputId}
          type="email"
          value={form.email}
          onChange={(event) => form.onChange(event.target.value)}
          aria-describedby={form.messageId}
          aria-invalid={form.isError}
          placeholder="you@studio.com"
          className={`h-13 flex-1 rounded-full border bg-[#141416] px-5 text-[15px] text-[#f2f1ee] placeholder:text-[#9b9b94] focus:outline-none focus-visible:border-[#c9f24d] focus-visible:ring-2 focus-visible:ring-[#c9f24d]/30 ${
            form.isError ? "border-[#ff7a5c]" : "border-white/14"
          }`}
        />
        <button
          type="submit"
          disabled={form.isSending}
          className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#c9f24d] px-7 font-[family-name:var(--font-syne)] text-[15px] font-extrabold whitespace-nowrap text-[#0b0b0c] transition-[transform,background-color] hover:bg-[#d8fb6e] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c9f24d] active:scale-[0.98] disabled:opacity-70"
        >
          {form.isSending ? "Sending" : "Start free"}
          {!form.isSending && <ArrowUpRightIcon size={15} weight="bold" />}
        </button>
      </div>
      <p
        id={form.messageId}
        aria-live="polite"
        className={`mt-3 text-[13.5px] leading-relaxed ${
          form.isError ? "text-[#ff7a5c]" : "text-[#8e8e88]"
        }`}
      >
        {form.isError
          ? form.error
          : "One download link and nothing else. We do not run a mailing list."}
      </p>
    </form>
  );
}
