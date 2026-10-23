import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-blue-500 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-95",

    secondary:
      "border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:border-indigo-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;