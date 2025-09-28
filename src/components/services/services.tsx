import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "/service1.svg",
    title: "Software Development",
    description:
      "At JCS Software, we specialize in crafting custom software that aligns with your unique business needs and objectives. Our team of experienced software developers possesses the expertise to transform your ideas into tangible solutions that drive growth and efficiency.",
  },
  {
    icon: "/service2.svg",
    title: "Cloud and Infrastructure",
    description:
      "Build, optimize and secure your cloud environment and reduce your business costs. If you have yet to make the next move and put yourself into the cloud, let our trusted and experienced professionals help guide you through every step. If you are already there, let them consult you to help you further get the most out of the cloud.",
  },
  {
    icon: "/service3.svg",
    title: "Managed IT Services",
    description:
      "JCS offers you a wide range of Managed Services that will help take care of your IT. Whether it be from day-to-day maintenance to proactive problem solving, we are here to manage the headaches for you. Use JSC services at the time when you need it to complement your current team and take advantage of new opportunities as they arise. Get expert support, unlock efficiency gains and free up resources – all without having to expand your team or needlessly raise your costs.",
  },
  {
    icon: "/service4.svg",
    title: "ServiceNow",
    description:
      "Looking for a trusted ServiceNow provider? We are here to help you implement your ServiceNow solutions, from smooth rollouts to ongoing support. Work with us to help transform your business potential. We will make sure your procedures and software are properly incorporated into ServiceNow so you can make the right transition and avoid any future bumps in the road.",
  },
  {
    icon: "/service5.svg",
    title: "Data and AI",
    description:
      "AI may be disrupting the market but do not let it disrupt your vision or business. Let our team of AI experts work with you to show you how AI can help your business achieve its goals and targets. We can consult to help you create your very own conversational AI to offer your own customers text or conversational based assistance. Unleash your potential through building a foundation for smarter, faster success using AI.",
  },
  {
    icon: "/service6.svg",
    title: "Product Management",
    description:
      "You may have a vision to create a unique IT product but are unsure of how to make it a reality. Our team can help guide you along that path to help you successfully manage every step of the way to implement the right product for your market. We will take your vision and translate it into a product by helping you through market research, looking at the product’s market fit, assisting you with product design and we can even make a road map for your products to be executed flawlessly.",
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen flex items-center justify-center px-6 py-12">
      <div>
        <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              What We Offer <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-left mt-2">
          Services
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-xl) mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="h-30 w-30 flex items-center justify-left rounded-full">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-6 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
