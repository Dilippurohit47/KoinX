import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
          "blue-gradient" : "linear-gradient(90deg, rgba(130,173,214,1) 0%, rgba(18,110,255,1) 26%);"
      },
    },
  },
  plugins: [],
};
export default config;
