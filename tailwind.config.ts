import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFF",
      "woovi": '#03D69D',
      "font-main": "#4D4D4D",
      "tag": "#E5E5E5",
      "card-selected": "#F4FBF9",
      "blue-banner-discount": "#133A6F",
      "font-banner-discount": "#FFFFFF",
      "font-footer": "#B2B2B2",
      "font-total": "#AFAFAF"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
