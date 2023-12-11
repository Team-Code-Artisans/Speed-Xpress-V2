"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// icons
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <FaMoon size={"1.2rem"} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <BsSunFill size={"1.2rem"} />
        </button>
      )}
    </>
  );
}
