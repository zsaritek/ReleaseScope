import * as React from "react";

import { cn } from "../cn";

export type CardProps = Readonly<
  React.HTMLAttributes<HTMLDivElement> & {
    as?: "div" | "section" | "article";
  }
>;

export function Card({ as = "div", className, ...props }: CardProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "rounded-lg border border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        className
      )}
      {...props}
    />
  );
}

export type CardHeaderProps = Readonly<React.HTMLAttributes<HTMLDivElement>>;
export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("px-4 pt-4", className)} {...props} />;
}

export type CardTitleProps = Readonly<React.HTMLAttributes<HTMLHeadingElement>>;
export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("text-base font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export type CardContentProps = Readonly<React.HTMLAttributes<HTMLDivElement>>;
export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("px-4 pb-4", className)} {...props} />;
}


