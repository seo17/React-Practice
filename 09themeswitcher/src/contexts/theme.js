import { createContext, useContext } from "react";

// Create the context/store
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Provide my context
export const ThemeProvider = ThemeContext.Provider;

// allow other components to use value of context
const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
