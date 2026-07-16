import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // 1. Safely check if we are in the browser
    if (typeof window !== "undefined") {
      // 2. Check localStorage, but VALIDATE the value to prevent corruption bugs
      const storedTheme = localStorage.getItem("kizuna-theme");
      if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme;
      }

      // 3. Respect system preference if no valid stored preference exists
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    // 4. Ultimate fallback
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first to prevent conflicts from legacy browser behaviors
    root.classList.remove("light", "dark");

    // Apply the active theme class (Required for Tailwind darkMode: 'class')
    root.classList.add(theme);

    // Persist to localStorage
    localStorage.setItem("kizuna-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
