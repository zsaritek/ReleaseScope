import * as React from "react";

import { cn } from "../cn";

export type BadgeVariant = "neutral" | "success" | "warning" | "danger";

export type BadgeProps = Readonly<
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
  }
>;

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        variant === "neutral" && "border-slate-200 bg-slate-50 text-slate-700",
        variant === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        variant === "warning" && "border-amber-200 bg-amber-50 text-amber-700",
        variant === "danger" && "border-rose-200 bg-rose-50 text-rose-700",
        className
      )}
      {...props}
    />
  );
}


