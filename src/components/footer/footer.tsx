import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../navbar/logo";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-[var(--breakpoint-xl)] mx-auto">
        <div className="flex flex-col gap-y-10 gap-x-8 justify-between items-start py-12 px-6 sm:flex-row xl:px-0">
          <div>
            <Logo />
          </div>

          <div className="w-full sm:max-w-lg text-right">
            {/* Copyright */}
            <span className="text-foreground">
              All rights reserved
              {" © "}
              JCS Software DOO Belgrade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;