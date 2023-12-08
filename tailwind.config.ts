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
      prefix: "nextui",
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {
            // foreground: "#030712",
            // background: "#f3f4f6",
            primary: "#0ea5e9",
            secondary: "#38bdf8",
          },
        },
        dark: {
          colors: {
            // foreground: "#f3f4f6",
            // background: "#0f0f0f",
            primary: "#0ea5e9",
            secondary: "#38bdf8",
          },
        },
      },
    }),
  ],
}
export default config
