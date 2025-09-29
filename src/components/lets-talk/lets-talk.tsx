"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const LetsTalk = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Content */}
        <motion.div 
          className="lg:col-span-2 py-12 lg:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
            Let&apos;s talk
            <span className="text-primary">_</span>
          </h3>
          
          <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter">
            Dedicated IT professionals at your service.
          </h2>
          
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-background/80">
            With the emergence of AI and low-code concepts, it has proven challenging to keep pace with fast moving technologies that are disrupting every business environment. However, new technology comes with the opportunity to grow faster, better and stronger - but only if you know how to utilize it.
          </p>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-background/80">
            We at JCS software are reliable partners made up of experts who are proven in their field by their many years of experience and achievements throughout the industry. Consider what we can offer to help you accelerate in achieving your aims.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold tracking-tight">
              Marko Jevtović
            </h3>
            <p className="text-background/80">Founder</p>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="lg:col-span-1 flex items-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="/mj-removebg-preview.png"
              alt="Marko Jevtović, Founder of JCS Software"
              fill
              className="object-contain object-bottom"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetsTalk;