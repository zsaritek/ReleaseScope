"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = Readonly<{
  href: "/" | "/changelog" | "/features";
  children: string;
}>;

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "rounded-sm text-slate-700 hover:text-slate-900",
        "dark:text-slate-300 dark:hover:text-slate-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        "ring-offset-white dark:ring-offset-slate-950",
        isActive ? "font-medium underline underline-offset-4" : ""
      ].join(" ")}
    >
      {children}
    </Link>
  );
}


