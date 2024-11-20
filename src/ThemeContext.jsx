import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleClick = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  <>
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={handleClick}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  </>;
}
