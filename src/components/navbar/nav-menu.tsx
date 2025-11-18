"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
  onLinkClick?: () => void;
};

export const NavMenu = ({ onLinkClick, ...props }: NavMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start data-[orientation=vertical]:gap-3">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#services" 
            onClick={onLinkClick}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xl md:text-sm data-[orientation=vertical]:text-lg font-medium transition-colors hover:bg-accent hover:text-black focus:bg-accent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Services
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#about" 
            onClick={onLinkClick}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xl md:text-sm data-[orientation=vertical]:text-lg font-medium transition-colors hover:bg-accent hover:text-black focus:bg-accent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            About
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#process" 
            onClick={onLinkClick}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xl md:text-sm data-[orientation=vertical]:text-lg font-medium transition-colors hover:bg-accent hover:text-black focus:bg-accent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            How We Work
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link 
            href="#contact" 
            onClick={onLinkClick}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xl md:text-sm data-[orientation=vertical]:text-lg font-medium transition-colors hover:bg-accent hover:text-black focus:bg-accent focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);