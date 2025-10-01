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

          {/* Subscribe Newsletter */}
          <div className="w-full sm:max-w-xs">
            <h6 className="font-medium">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" className="placeholder:text-foreground/80"/>
              <Button className="text-black/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse gap-y-5 gap-x-2 items-center justify-between py-8 px-6 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-foreground">
            All rights reserved
            {" © "}
            JCS Software DOO Belgrade
          </span>

          <div className="flex items-center gap-5 text-foreground">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;