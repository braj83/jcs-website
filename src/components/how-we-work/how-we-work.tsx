import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HowWeWork = () => {
  return (
    <div className="px-6 py-12">
      <div>
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            How We Work <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
          Tailor-made solutions created to meet your objectives
        </h1>
        <p className="mt-6 max-w-[60ch] sm:text-lg">
          We want to ease you in your troubles in organization and software development by offering seamless solutions for project management that undertake complex digital transformation.

What’s more, we make sure that our work together is straightforward, transparent and efficient so that you rest-easy and know that the project is being accomplished. Here are the basic steps in how we help you:
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;
