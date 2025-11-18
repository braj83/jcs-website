"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import CalTrigger  from "@/components/ui/cal_trigger";
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
          className="rounded-md cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-6 flex flex-col">
        {/* Add hidden title for accessibility */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Custom header with logo and close button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-8 w-8"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <NavMenu
          orientation="vertical"
          className="flex-1 [&>div]:h-auto"
          onLinkClick={handleLinkClick}
        />

        <CalTrigger>
          <div 
            className="rounded-md inline-flex bg-primary text-black text-lg hover:bg-primary/90 transition-colors h-10 px-4 py-2 items-center justify-center font-medium cursor-pointer w-full"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </div>
        </CalTrigger>
      </SheetContent>
    </Sheet>
  );
};