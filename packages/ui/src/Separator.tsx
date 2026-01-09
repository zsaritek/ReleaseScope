import * as React from "react";
import { cn } from "../cn";

export type SeparatorProps = Readonly<
  React.HTMLAttributes<HTMLDivElement>
>;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        "h-px w-full bg-slate-200 dark:bg-slate-800",
        className
      )}
      {...props}
    />
  );
}
