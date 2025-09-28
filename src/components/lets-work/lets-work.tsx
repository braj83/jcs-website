import React from "react";
import Image from "next/image";

const LetsWork = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-3 gap-12 px-6 py-12">
        <div className="lg:col-span-2">
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Let&apos;s work together to bring your business from idea to success!
          </h1>
          <p className="mt-6 sm:text-lg">
            You provide the vision, we offer the expertise.
            We are here to offer our full complement of support services to guide you down the complicated path of digital transformation.
            Whether you need a handful of engineers to support your in-house team or are seeking to assemble a complete product development squad to bring the next major innovation to market, we will dedicate our services to you to make it happen. Together, we can transform your astounding dreams into concrete achievements.
          </p>
        </div>
        <div className="relative w-full aspect-square rounded-xl lg:col-span-1 overflow-hidden">
                  <Image
                    src="/work-img-2.png"
                    alt="A descriptive caption for the image"
                    fill
                    className="object-cover"
                  />
                </div>
      </div>
    </div>
  );
};

export default LetsWork;
