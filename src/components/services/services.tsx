"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

// Individual service features data with SVG paths
const features = [
  {
    title: "Software Development",
    description:
      "At JCS Software, we specialize in crafting custom software that aligns with your unique business needs and objectives. Our team of experienced software developers possesses the expertise to transform your ideas into tangible solutions that drive growth and efficiency.",
    svgPaths: [
      "M12 2L2 7l10 5 10-5-10-5z",
      "M2 17l10 5 10-5M2 12l10 5 10-5"
    ],
    strokeWidth: 2,
  },
  {
    title: "Cloud and Infrastructure", 
    description:
      "Build, optimize and secure your cloud environment and reduce your business costs. If you have yet to make the next move and put yourself into the cloud, let our trusted and experienced professionals help guide you through every step.",
    svgPaths: [
      "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    ],
    strokeWidth: 2,
  },
  {
    title: "Managed IT Services",
    description:
      "JCS offers you a wide range of Managed Services that will help take care of your IT. Whether it be from day-to-day maintenance to proactive problem solving, we are here to manage the headaches for you.",
    svgPaths: [
      "M9 12l2 2 4-4",
      "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
    ],
    strokeWidth: 2,
  },
  {
    title: "ServiceNow",
    description:
      "Looking for a trusted ServiceNow provider? We are here to help you implement your ServiceNow solutions, from smooth rollouts to ongoing support. Work with us to help transform your business potential.",
    svgPaths: [
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      "M14 2v6h6",
      "M16 13H8",
      "M16 17v-4",
      "M12 17v-4"
    ],
    strokeWidth: 2,
  },
  {
    title: "Data and AI",
    description:
      "AI may be disrupting the market but do not let it disrupt your vision or business. Let our team of AI experts work with you to show you how AI can help your business achieve its goals and targets.",
    svgPaths: [
      "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    ],
    strokeWidth: 2,
  },
  {
    title: "Product Management",
    description:
      "You may have a vision to create a unique IT product but are unsure of how to make it a reality. Our team can help guide you along that path to help you successfully manage every step of the way.",
    svgPaths: [
      "M3 3v5h5",
      "M3 8l7-7 13 13v3h-3L7 3z",
      "M14.5 10.5L19 15"
    ],
    strokeWidth: 2,
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl w-full mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 lg:py-20">
      <div className="w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 lg:mb-16"
        >
          <Badge
            variant="secondary"
            className="rounded-full py-2 px-4 border-border hover:bg-accent/80 transition-colors"
            asChild
          >
            <Link href="#" className="inline-flex items-center gap-2">
              What We Offer <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Badge>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-left mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative overflow-hidden"
            >
              {/* Card Background with Better Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
              
              {/* Main Card */}
              <div className="relative flex flex-col border border-border/50 hover:border-primary/20 rounded-xl p-6 lg:p-8 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 h-full hover:shadow-lg hover:shadow-primary/5">
                
                {/* Animated SVG Icon */}
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <motion.svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    whileHover={{ rotate: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.svgPaths.map((path, pathIndex) => (
                      <motion.path
                        key={pathIndex}
                        d={path}
                        stroke="currentColor"
                        strokeWidth={feature.strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        initial={{ 
                          pathLength: 0,
                          opacity: 0,
                          strokeDasharray: "0 1"
                        }}
                        whileInView={{
                          pathLength: 1,
                          opacity: 1,
                          strokeDasharray: "1 0"
                        }}
                        whileHover={{
                          stroke: ["currentColor", "hsl(var(--primary))", "currentColor"],
                          transition: {
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }}
                        transition={{
                          pathLength: { 
                            duration: 1.5, 
                            delay: pathIndex * 0.2,
                            ease: "easeInOut"
                          },
                          opacity: { 
                            duration: 0.3, 
                            delay: pathIndex * 0.2 
                          },
                          strokeDasharray: { 
                            duration: 1.5, 
                            delay: pathIndex * 0.2,
                            ease: "easeInOut"
                          }
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                      />
                    ))}
                    
                    {/* Optional: Add animated fill for certain icons */}
                    {feature.svgPaths.map((path, pathIndex) => (
                      <motion.path
                        key={`fill-${pathIndex}`}
                        d={path}
                        fill="none"
                        className="text-primary/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 0.1,
                          transition: { duration: 0.3 }
                        }}
                      />
                    ))}
                  </motion.svg>
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <motion.h3 
                    className="text-xl lg:text-2xl font-semibold text-foreground"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;