import type { Metadata } from "next";
import Link from "next/link";
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
    <html lang="en">
      <body>
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              ReleaseScope
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-700 hover:text-slate-900">
                Home
              </Link>
              <Link
                href="/changelog"
                className="text-slate-700 hover:text-slate-900"
              >
                Changelog
              </Link>
              <Link
                href="/features"
                className="text-slate-700 hover:text-slate-900"
              >
                Features
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}


