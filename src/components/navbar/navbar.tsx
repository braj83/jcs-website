"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggleButton } from "../theme-toggle-button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav 
      className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-border dark:border-primary/20 max-w-[80rem] mx-auto rounded-xl z-50 shadow-sm"
      aria-label="Main navigation"
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <Button 
            className="rounded-md hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            asChild
          >
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  