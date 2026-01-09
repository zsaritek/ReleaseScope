"use client";

import * as React from "react";

import { Button } from "@releasescope/ui";

type Theme = "light" | "dark";

const STORAGE_KEY = "releasescope.theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
}

function readStoredTheme(): Theme | null {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === "light" || value === "dark") return value;
  return null;
}

function writeStoredTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    const stored = readStoredTheme();
    const initial: Theme = stored ?? "light";
    applyTheme(initial);
    setTheme(initial);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      onClick={() => {
        const current: Theme = theme ?? "light";
        const next: Theme = current === "dark" ? "light" : "dark";
        writeStoredTheme(next);
        applyTheme(next);
        setTheme(next);
      }}
    >
      {theme ? (theme === "dark" ? "Light" : "Dark") : "Theme"}
    </Button>
  );
}


