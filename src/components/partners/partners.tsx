"use client";

import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const partnerLogos = [
  {
    name: "ProfiLab",
    light: "/partners/profilab-light.png",
    dark: "/partners/profilab-dark.png",
    width: 174,
    height: 80,
  },
  {
    name: "Galerija",
    light: "/partners/galerija-light.png",
    dark: "/partners/galerija-dark.png",
    width: 212,
    height: 80,
  },
  {
    name: "EagleHills",
    light: "/partners/eaglehills-light.png",
    dark: "/partners/eaglehills-dark.png",
    width: 282,
    height: 80,
  },
  {
    name: "Portugal",
    light: "/partners/portugal-light.png",
    dark: "/partners/portugal-dark.png",
    width: 174,
    height: 80,
  },
  {
    name: "Jtb",
    light: "/partners/jtb-light.png",
    dark: "/partners/jtb-dark.png",
    width: 192,
    height: 80,
  },
  {
    name: "Rasa",
    light: "/partners/rasa-light.png",
    dark: "/partners/rasa-dark.png",
    width: 104,
    height: 80,
  },
];

const Partners = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logosForMarquee = [...partnerLogos, ...partnerLogos];

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
          We believe in the power of working together. Here are some of the
          great companies we are proud to call our partners.
        </p>
      </motion.div>

      <div className="mt-12 lg:mt-16 lg:max-w-[80rem] justify-center mx-auto relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />

        <Marquee pauseOnHover className="[--duration:30s] [--gap:6rem]">
          {logosForMarquee.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0">
              <Image
                src={theme === "dark" ? logo.dark : logo.light}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="h-20 object-contain"
                style={{ width: 'auto' }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;