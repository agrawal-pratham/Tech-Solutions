import { Theme } from "@/constants/variables";

const { createContext, useState, useContext, useEffect } = require("react");

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    if (!darkMode) {
      document.documentElement.classList.add(Theme.Dark);
      localStorage.setItem("theme", Theme.Dark);
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove(Theme.Dark);
      localStorage.setItem("theme", Theme.Light);
      setDarkMode(false);
    }
  };

  useEffect(() => {
    handleChangeTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
