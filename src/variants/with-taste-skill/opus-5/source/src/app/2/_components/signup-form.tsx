"use client";

import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { useSignup } from "@/variants/with-taste-skill/opus-5/source/src/components/use-signup";

export function SignupForm() {
  const form = useSignup();

  if (form.isSent) {
    return (
      <div
        aria-live="polite"
        className="flex items-start gap-3 border-t-2 border-[#a83a2c] bg-[#e9e9e5] p-6"
      >
        <CheckIcon
          size={18}
          weight="bold"
          className="mt-1 shrink-0 text-[#a83a2c]"
        />
        <div>
          <p className="font-garamond text-[22px] leading-snug text-[#17191b]">
            On its way to {form.email}
          </p>
          <p className="mt-1.5 font-tight text-[13.5px] leading-relaxed text-[#5c6063]">
            One link, one download. Your first vault is an empty folder you
            already own.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={form.onSubmit} noValidate className="w-full max-w-lg">
      <label
        htmlFor={form.inputId}
        className="block font-tight text-[13px] font-medium tracking-wide text-[#17191b]"
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
          className={`h-12 flex-1 border bg-white px-4 font-tight text-[15px] text-[#17191b] placeholder:text-[#84888b] focus:outline-none focus-visible:border-[#a83a2c] focus-visible:ring-2 focus-visible:ring-[#a83a2c]/20 ${
            form.isError ? "border-[#a83a2c]" : "border-[#c9c9c2]"
          }`}
        />
        <button
          type="submit"
          disabled={form.isSending}
          className="inline-flex h-12 shrink-0 items-center justify-center bg-[#a83a2c] px-7 font-tight text-[14.5px] font-medium whitespace-nowrap text-white transition-[transform,background-color] hover:bg-[#8f2f22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a83a2c] active:translate-y-[1px] disabled:opacity-70"
        >
          {form.isSending ? "Sending" : "Start free"}
        </button>
      </div>
      <p
        id={form.messageId}
        aria-live="polite"
        className={`mt-2.5 font-tight text-[13px] leading-relaxed ${
          form.isError ? "text-[#8f2f22]" : "text-[#5c6063]"
        }`}
      >
        {form.isError
          ? form.error
          : "A download link and nothing else. We do not run a mailing list."}
      </p>
    </form>
  );
}
