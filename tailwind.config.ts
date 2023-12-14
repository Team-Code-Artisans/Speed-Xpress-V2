import { nextui } from "@nextui-org/react";
const colors = require("tailwindcss/colors");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      light: "#f3f4f6",
      dark: "#030712",
      accent: "#91cff3",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // default: "#111827",
            // foreground: "#030712",
            // background: "#f3f4f6",
            primary: { DEFAULT: "#3b82f6", foreground: "#f3f4f6" },
            secondary: "#93c5fd",
          },
        },
        dark: {
          colors: {
            // default: "#f3f4f6",
            // foreground: "#f3f4f6",
            // background: "#111827",
            primary: { DEFAULT: "#3b82f6", foreground: "#f3f4f6" },
            secondary: "#93c5fd",
          },
        },
      },
    }),
  ],
};
export default config;
