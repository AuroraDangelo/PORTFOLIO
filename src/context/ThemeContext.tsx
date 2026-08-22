import React, { createContext, useContext } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always dark — light mode removed
  const theme: Theme = 'dark';

  // Ensure the root element stays dark on mount
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('anshika_portfolio_theme', 'dark');
  }

  const toggleTheme = () => {
    // No-op: light mode removed
  };

  const setTheme = (_theme: Theme) => {
    // No-op: light mode removed
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
