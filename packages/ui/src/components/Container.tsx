import * as React from "react";

import { cn } from "../cn";

export type ContainerProps = Readonly<
  React.HTMLAttributes<HTMLDivElement> & {
    as?: "div" | "header" | "main" | "section";
    size?: "md" | "lg";
  }
>;

export function Container({
  as = "div",
  size = "lg",
  className,
  ...props
}: ContainerProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4",
        size === "md" ? "max-w-3xl" : "max-w-5xl",
        className
      )}
      {...props}
    />
  );
}


