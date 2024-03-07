import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    screens: {
      "vsm":{"max" : "400px"},
      'sm': {"max" : "640px"},
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      backgroundColor: {
          "blue-gradient" : "linear-gradient(90deg, rgba(130,173,214,1) 0%, rgba(18,110,255,1) 26%);"
      },
    },
  },
  plugins: [],
};
export default config;
