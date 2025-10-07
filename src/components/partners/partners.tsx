"use client";

import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/partners/logos";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "motion/react";

const Partners = () => {
  return (
    <section className="w-full pb-12 lg:pb-20 overflow-hidden">
      <motion.div 
        className="max-w-[80rem] mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
             >
              Our Partners
              <span className="text-primary">_</span>
        </motion.h2>
        <p className="mt-4 lg:mt-6 text-base sm:text-lg leading-relaxed text-foreground/80 text-center max-w-3xl mx-auto px-4">
          We believe in the power of working together. Here are some of the great companies we are proud to call our partners.
        </p>
      </motion.div>

      <div className="mt-12 lg:mt-16 lg:max-w-[80rem] justify-center mx-auto relative">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
        
        <Marquee
          pauseOnHover
          className="[--duration:30s] [--gap:2.5rem]"
        >
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
          <Logo06 />
          <Logo07 />
          <Logo08 />
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;