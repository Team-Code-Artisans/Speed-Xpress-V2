import { nextui } from "@nextui-org/react"
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
      dark: "#030712",
      light: "#f3f4f6",
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
            primary: "#0da2e7",
          },
        },
        dark: {
          colors: {
            primary: "#0da2e7",
          },
        },
      },
    }),
  ],
}
export default config
