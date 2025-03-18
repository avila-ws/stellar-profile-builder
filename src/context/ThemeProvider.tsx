
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    // Add transition styles to root element for smooth theme changes
    const root = window.document.documentElement;
    root.style.transition = "background-color 0.5s ease, color 0.5s ease";
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);

    // Apply transition for specific elements
    const elementsToTransition = document.querySelectorAll('.bg-card, .bg-background, .bg-muted, .text-foreground, .border-border');
    elementsToTransition.forEach(element => {
      (element as HTMLElement).style.transition = "background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease";
    });
    
    return () => {
      // Clean up transition styles
      root.style.transition = '';
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
