import * as React from "react";

import { cn } from "../cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

export type ButtonProps = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
>;

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        size === "sm" ? "h-8 px-3" : "h-9 px-4",
        variant === "primary" &&
          "bg-slate-900 text-white hover:bg-slate-800 ring-offset-white",
        variant === "secondary" &&
          "bg-slate-100 text-slate-900 hover:bg-slate-200 ring-offset-white",
        variant === "ghost" &&
          "bg-transparent text-slate-900 hover:bg-slate-100 ring-offset-white",
        className
      )}
      {...props}
    />
  );
}


