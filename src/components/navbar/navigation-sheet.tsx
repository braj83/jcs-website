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
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        </SheetHeader>
        <Logo />

        <NavMenu
          orientation="vertical"
          className="mt-6 [&>div]:h-full"
          onLinkClick={handleLinkClick}
        />

        <div className="mt-auto mb-4 w-full">
          <Button
            size="lg"
            className="w-full rounded-md text-black"
            asChild
            onClick={handleLinkClick}
          >
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
