import React, { createContext, useContext, useState, useEffect } from 'react';
import getTheme, { theme } from './theme';

export type DefaultTheme = typeof theme;

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ mode, userTheme, children }) {
  const [consolidatedTheme, setConsolidatedTheme] = useState<DefaultTheme>(
    theme
  );

  useEffect(() => {
    setConsolidatedTheme(getTheme(mode));
  }, [mode]);

  return (
    <ThemeContext.Provider value={userTheme ?? consolidatedTheme}>
      {children}
    </ThemeContext.Provider>
  )
}