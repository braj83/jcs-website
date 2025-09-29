import React from "react";
import Image from "next/image";

const LetsTalk = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12 px-6">
      <div className="lg:col-span-2 py-12">

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-left mt-4">
          Let&apos;s talk
            <span className="text-primary">_</span>
        </h3>

        <h1 className="mt-2 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
          Dedicated IT professionals at your service.
        </h1>
        <p className="mt-6 sm:text-lg">
          With the emergence of AI and low-code concepts, it has proven challenging to keep pace with fast moving technologies that are disrupting every business environment. However, new technology comes with the opportunity to grow faster, better and stronger - but only if you know how to utilize it. We at JCS software are reliable partners made up of experts who are proven in their field by their many years of experience and achievements throughout the industry. Consider what we can offer to help you accelerate in achieving your aims.
        </p>
        <h3 className="mt-3 text-xl font-medium tracking-[-0.015em]">
          Marko Jevtovic
        </h3>
        <p>Founder</p>
      </div>
      <div className="relative w-full aspect-[4/5] lg:col-span-1 lg:translate-y-13.5">
                <Image
                  src="/mj-removebg-preview.png"
                  alt="A descriptive caption for the image"
                  fill
                  className="object-contain pt-6"
                />
              </div>
    </div>
  );
};

export default LetsTalk;
