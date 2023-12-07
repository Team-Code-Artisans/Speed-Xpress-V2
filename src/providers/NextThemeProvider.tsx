"use client"

import { PropsWithChildren } from "react"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

const NextThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default NextThemeProvider
