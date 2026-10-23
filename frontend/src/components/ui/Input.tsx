import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        className={`
          w-full
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