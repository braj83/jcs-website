import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-3 gap-12 px-6 py-12">
        <div className="relative w-full aspect-square rounded-xl lg:col-span-1 overflow-hidden">
          <Image
            src="/work-img-1.png"
            alt="A descriptive caption for the image"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-2">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Who We Are <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            About Us
          </h1>
          <p className="mt-6 sm:text-lg">
            We are strategic technology consultancy and managed service provider focused on helping our clients excel in software development, digital product creation, infrastructure maintenance, and the execution of digital transformation initiatives.
            Experienced in creating, scaling, and leading teams, we empower businesses to facilitate innovation in software development by leveraging the power of AI and established low-code development platforms like ServiceNow, Mendix, Rasa.
            Drawing upon our extensive industry experience, we possess the expertise to choose the appropriate technology solutions that will expedite your product development and facilitate your cloud transformation journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
