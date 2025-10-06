const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "animate-marquee",
    "animate-marquee-vertical",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;