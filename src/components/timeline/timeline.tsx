"use client";

import { motion } from "motion/react";

const steps = [
  {
    title: "The meet",
    description:
      "We work together smoothly from the start by creating open comprehension of what your exact goals are and how you function as a company. Our goal for the first meeting then is to obtain a concrete picture of what you need and establish not only an understanding but clear channels of communication between one another that will carry us on into the project.",
  },
  {
    title: "Proposing solutions",
    description:
      "Our team uses its expertise to carefully assess the challenges you are facing and craft a customized solution that aligns seamlessly with your objectives. By doing so, we help you define the future outputs you will accomplish and map a comprehensive plan outlining key deliverables, goal verification milestones, team setup and efficiency reporting mechanisms.",
  },
  {
    title: "Implementation",
    description:
      "As we assist you in bringing about key project deliverables, we prioritize transparency and clear communication by maintaining detailed reporting protocols that ensure our clients remain at the helm.",
  },
  {
    title: "Partnership",
    description:
      "Our constant ongoing support and maintenance ensures that the solution we provide continues to meet your needs. Moreover, we make it our duty to actively monitor performance and proactively address any potential issues before they arise.",
  },
];

export default function Timeline() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="relative ml-4 sm:ml-6">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2 border-border" />

        {steps.map(({ title, description }, index) => (
          <motion.div 
            key={index} 
            className="relative pl-8 sm:pl-10 pb-10 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Timeline Icon */}
            <motion.div 
              className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground/40 flex items-center justify-center rounded-full bg-accent ring-4 sm:ring-8 ring-background"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="font-semibold text-lg text-foreground dark:text-background">{index + 1}</span>
            </motion.div>

            {/* Content */}
            <div className="pt-1 space-y-2">
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight">
                {title}
              </h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}