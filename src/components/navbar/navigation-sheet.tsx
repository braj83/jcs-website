"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-6 flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        
        <div className="mb-8">
          <Logo />
        </div>

        <NavMenu
          orientation="vertical"
          className="flex-1 [&>div]:h-auto"
          onLinkClick={handleLinkClick}
        />

        <Button
          size="lg"
          className="w-full rounded-md bg-primary text-black/90 hover:bg-primary/90 transition-colors mt-4"
          asChild
          onClick={handleLinkClick}
        >
          <Link href="https://cal.com/marko-jcs/30min" target="_blank" rel="noopener noreferrer">Let&apos;s Talk</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};