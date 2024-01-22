import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      light: "#f3f4f6",
      dark: "#030712",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: "#3b82f6", foreground: "#f3f4f6" },
            secondary: "#93c5fd",
          },
        },
        dark: {
          colors: {
            primary: { DEFAULT: "#3b82f6", foreground: "#f3f4f6" },
            secondary: "#93c5fd",
          },
        },
      },
    }),
  ],
};
export default config;
