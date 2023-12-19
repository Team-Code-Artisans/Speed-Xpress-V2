"use client";

import { useContext, useEffect, useState } from "react";

// icons
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { AllStateContext } from "@/providers/AllStateProvider";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { setLocalTheme } = useContext(AllStateContext);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme) {
      setLocalTheme(theme as "dark" | "light");
    }
    setMounted(true);
  }, [theme, setLocalTheme]);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button title="Dark" onClick={() => setTheme("light")}>
          <FaMoon size={"1.2rem"} />
        </button>
      ) : (
        <button title="Light" onClick={() => setTheme("dark")}>
          <BsSunFill size={"1.2rem"} />
        </button>
      )}
    </>
  );
}
