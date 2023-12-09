import { nextui } from "@nextui-org/react"
const colors = require("tailwindcss/colors")
import type { Config } from "tailwindcss"

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
            // foreground: "#030712",
            // background: "#f3f4f6",
            primary: "#3b82f6",
            secondary: "#93c5fd",
          },
        },
        dark: {
          colors: {
            // foreground: "#f3f4f6",
            // background: "#0f0f0f",
            primary: "#3b82f6",
            secondary: "#93c5fd",
          },
        },
      },
    }),
  ],
}
export default config
