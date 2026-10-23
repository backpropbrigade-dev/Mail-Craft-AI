import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <textarea
        className={`
          min-h-36
          w-full
          resize-none
          rounded-xl
          border
          border-slate-700
          bg-slate-800/80
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-500/20
          ${className}
        `}
        {...props}
      />

    </div>
  );
}