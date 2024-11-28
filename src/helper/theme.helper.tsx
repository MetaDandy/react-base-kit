import { useEffect } from "react";
import useAppStore from "@/store/app.store";

function ThemeHelper() {
  const { theme } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return null;
}

export default ThemeHelper;
