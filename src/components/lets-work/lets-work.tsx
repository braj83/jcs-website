"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const LetsWork = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[80rem] w-full mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Content */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter">
            Let&apos;s work together to bring your business from idea to success!
          </h2>
          
          <p className="mt-4 lg:mt-6 text-base sm:text-lg leading-relaxed text-background/80">
            You provide the vision, we offer the expertise. We are here to offer our full complement of support services to guide you down the complicated path of digital transformation.
          </p>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-background/80">
            Whether you need a handful of engineers to support your in-house team or are seeking to assemble a complete product development squad to bring the next major innovation to market, we will dedicate our services to you to make it happen. Together, we can transform your astounding dreams into concrete achievements.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="relative w-full aspect-square rounded-xl lg:col-span-1 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/work-img-2.png"
            alt="Digital transformation and business innovation collaboration"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LetsWork;