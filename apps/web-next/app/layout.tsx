import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@releasescope/ui";
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
            __html: `(function(){try{var k="releasescope.theme";var t=localStorage.getItem(k);if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`
          }}
        />
      </head>
      <body>
        <header className="border-b border-slate-200 dark:border-slate-800">
          <Container
            as="div"
            className="flex items-center justify-between py-4"
          >
            <Link href="/" className="font-semibold tracking-tight">
              ReleaseScope
            </Link>
            <div className="flex items-center gap-3">
              <nav
                aria-label="Primary"
                className="flex items-center gap-4 text-sm"
              >
                <Link
                  href="/"
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
                >
                Home
                </Link>
                <Link
                  href="/changelog"
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
                >
                Changelog
                </Link>
                <Link
                  href="/features"
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
                >
                Features
                </Link>
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


