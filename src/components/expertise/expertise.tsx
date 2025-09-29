"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb, 
  MessageSquare, 
  Cloud, 
  Users, 
  Code, 
  Layers, 
  Zap, 
  Palette,
  Wrench
} from "lucide-react";

const expertiseItems = [
  { label: "Solution discovery", icon: Lightbulb },
  { label: "Tech consulting", icon: MessageSquare },
  { label: "Cloud and DevOps", icon: Cloud },
  { label: "Team extension", icon: Users },
  { label: "Web Development", icon: Code },
  { label: "Dedicated Development Teams", icon: Layers },
  { label: "Low Code Development", icon: Zap },
  { label: "UI & UX", icon: Palette },
  { label: "Support and Maintenance", icon: Wrench },
];

const Expertise = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[80rem] w-full mx-auto px-4 sm:px-6 py-12 lg:py-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter">
            Expert-driven services
          </h2>
          
          <div className="mt-8 lg:mt-10 flex flex-wrap gap-3 lg:gap-4">
            {expertiseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Badge
                    variant="default"
                    className="rounded-full py-3 px-5 lg:py-3.5 lg:px-6 border-border hover:bg-accent/80 hover:scale-105 transition-all duration-300 text-sm text-foreground dark:text-background lg:text-base inline-flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    {item.label}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;