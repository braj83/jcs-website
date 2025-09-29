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
      <div className="space-y-8 md:space-y-10">
        {steps.map(({ title, description }, index) => (
          <motion.div 
            key={index} 
            className="flex gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left side: Timeline icon and line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <motion.div 
                className="h-10 w-10 border-2 border-border flex items-center justify-center rounded-full bg-accent"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 12
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.span 
                  className="font-semibold text-lg text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.span>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="w-0.5 bg-border flex-1 mt-2" />
              )}
            </div>

            {/* Right side: Content */}
            <motion.div 
              className="flex-1 pb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
              layoutScroll
            >
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-foreground/80 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}