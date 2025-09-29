"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const HowWeWork = () => {
  return (
    <motion.section 
      className="px-4 sm:px-6 py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div>
        <Badge
          variant="secondary"
          className="rounded-full py-2 px-4 border-border hover:bg-accent/80 transition-colors"
          asChild
        >
          <Link href="#" className="inline-flex items-center gap-2">
            How We Work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Badge>
        
        <motion.h2 
          className="mt-4 lg:mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Tailor-made solutions created to meet your objectives
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <p className="mt-4 lg:mt-6 max-w-[60ch] text-base sm:text-lg leading-relaxed text-foreground/80">
            We want to ease you in your troubles in organization and software development by offering seamless solutions for project management that undertake complex digital transformation.
          </p>
          
          <p className="mt-4 max-w-[60ch] text-base sm:text-lg leading-relaxed text-foreground/80">
            What&apos;s more, we make sure that our work together is straightforward, transparent and efficient so that you rest-easy and know that the project is being accomplished. Here are the basic steps in how we help you:
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowWeWork;