"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Loading theme toggle"
      >
        <div className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative overflow-hidden cursor-pointer hover:!bg-transparent"
    >
      <Moon
        className={`h-4 w-4 transition-all duration-500 group-hover:text-accent ${
          isDark
            ? "-rotate-90 scale-0"
            : "rotate-0 scale-100"
        }`}
      />
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 group-hover:text-accent ${
          isDark
            ? "rotate-0 scale-100"
            : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}