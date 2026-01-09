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
        variant === "neutral" &&
          "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200",
        variant === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
        variant === "warning" &&
          "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
        variant === "danger" &&
          "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200",
        className
      )}
      {...props}
    />
  );
}


