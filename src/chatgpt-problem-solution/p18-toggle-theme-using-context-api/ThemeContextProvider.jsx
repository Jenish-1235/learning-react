import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("0");

  const toggle = () => {
    if (theme == "0") setTheme("1");
    else setTheme("0");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
