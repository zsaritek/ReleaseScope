import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@releasescope/ui";
import { NavLink } from "../components/NavLink";
import { ThemeToggle } from "../components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReleaseScope",
  description: "Product release & changelog viewer"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k="releasescope.theme";var t=localStorage.getItem(k);var m=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(t==="dark"||(!t&&m)){document.documentElement.classList.add("dark")}}catch(e){}})();`
          }}
        />
      </head>
      <body>
        <header className="border-b border-slate-200 dark:border-slate-800">
          <Container
            as="div"
            className="flex flex-wrap items-center justify-between gap-3 py-4"
          >
            <Link href="/" className="font-semibold tracking-tight">
              ReleaseScope
            </Link>
            <div className="flex items-center gap-3">
              <nav
                aria-label="Primary"
                className="flex flex-wrap items-center gap-4 text-sm"
              >
                <NavLink href="/">Home</NavLink>
                <NavLink href="/changelog">Changelog</NavLink>
                <NavLink href="/features">Features</NavLink>
              </nav>
              <ThemeToggle />
            </div>
          </Container>
        </header>
        <Container as="main" className="py-8">
          {children}
        </Container>
      </body>
    </html>
  );
}


