"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen max-w-[80rem] mx-auto flex flex-col md:grid md:grid-cols-4 items-center justify-center px-4 sm:px-6 py-8 md:py-0 gap-8 md:gap-0">
      {/* Text Content */}
      <motion.div 
        className="w-full md:col-span-3 text-left order-1 md:order-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold leading-tight tracking-tighter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          Empowering Businesses to Build Faster and Smarter by leveraging{' '}
          <motion.span 
            className="text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AI
          </motion.span>{' '}
          and{' '}
          <motion.span 
            className="text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Low-Code
          </motion.span>{' '}
          Development
        </motion.h1>
        
        <motion.p 
          className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          JCS constructs technology teams, offers managed services, and provides solutions tailored for both startups and enterprise clients.
        </motion.p>
      </motion.div>

      {/* Animated Image with Link */}
      <Link
        href="https://cal.com/marko-jcs/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:col-span-1 order-2 md:order-2 cursor-pointer"
      >
      <motion.div 
        className="flex justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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

          {/* Glowing Background Effect */}
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
      </Link>
    </div>
  );
};

export default Hero;