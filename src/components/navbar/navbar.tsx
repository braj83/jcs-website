import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggleButton } from "../theme-toggle-button";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-[2px] border dark:primary max-w-[var(--breakpoint-xl)] mx-auto rounded-md z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <Button className="rounded-md hidden md:inline-flex text-black">Let&#39;s Talk</Button>

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