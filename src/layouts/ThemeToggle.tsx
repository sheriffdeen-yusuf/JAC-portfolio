import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="mr-1 rounded-full bg-stone-300 p-2 shadow-sm dark:bg-stone-600"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="block h-6 w-6 dark:hidden  " />
      <Moon className="hidden h-6 w-6 dark:block" />
    </button>
  );
}

export default ThemeToggle;
