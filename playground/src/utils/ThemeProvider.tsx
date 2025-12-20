import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import getTheme, { theme } from "./theme";
import type { ColorMode } from "./theme";

export type DefaultTheme = typeof theme;

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  mode: ColorMode;
  userTheme: DefaultTheme | undefined;
  children: ReactNode;
}

export function ThemeProvider({ mode, userTheme, children }: ThemeProviderProps) {
  const [consolidatedTheme, setConsolidatedTheme] = useState<DefaultTheme>(theme);

  useEffect(() => {
    setConsolidatedTheme(getTheme(mode));
  }, [mode]);

  return (
    <ThemeContext.Provider value={userTheme ?? consolidatedTheme}>{children}</ThemeContext.Provider>
  );
}
