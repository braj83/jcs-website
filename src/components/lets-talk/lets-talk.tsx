"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CalTrigger  from "@/components/ui/cal_trigger";

const LetsTalk = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-5 gap-o md:gap-6">
        
        {/* Content */}
        <motion.div 
          className="lg:col-span-6 py-12 lg:py-16"
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

          {/* Animated Image with Link */}
          <div className="w-full md:col-span-1 order-2 md:order-2 flex justify-center mt-4 md:justify-end md:mt-0">
            <CalTrigger> 
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="cursor-pointer"
              >
                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  whileHover={{ 
                    transition: { 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }
                  }}
                >
                  <Image
                    src="/getintouch.svg"
                    alt="Get in Touch"
                    width={160}
                    height={160}
                    className="w-full h-full"
                    priority
                    loading="eager"
                  />
    
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full blur-md -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
              </motion.div>
            </CalTrigger>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetsTalk;