// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: "white",
    foreground: "black",
  });

  const updateTheme = (isHappy) => {
    if (isHappy) {
      setTheme({ background: "lightyellow", foreground: "black" }); // Light theme for happy
    } else {
      setTheme({ background: "Grey", foreground: "white" }); // Dark theme for sad
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};