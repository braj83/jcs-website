"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[80rem] w-full mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Image */}
        <motion.div 
          className="relative w-full aspect-square rounded-xl lg:col-span-1 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/work-img-1.png"
            alt="JCS Software team collaborating on innovative technology solutions"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-left mt-4">
            Who We Are
              <span className="text-primary">_</span>
          </h3>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter">
            About Us
          </h2>
          
          <p className="mt-4 lg:mt-6 text-base sm:text-lg leading-relaxed text-background/80">
            We are strategic technology consultancy and managed service provider focused on helping our clients excel in software development, digital product creation, infrastructure maintenance, and the execution of digital transformation initiatives.
          </p>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-background/80">
            Experienced in creating, scaling, and leading teams, we empower businesses to facilitate innovation in software development by leveraging the power of AI and established low-code development platforms like ServiceNow, Mendix, Rasa.
          </p>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-background/80">
            Drawing upon our extensive industry experience, we possess the expertise to choose the appropriate technology solutions that will expedite your product development and facilitate your cloud transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;