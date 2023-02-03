import React, { memo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import Calculate from "./Calculate";

export const ThemeContext = createContext(null);

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, [setTheme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="header" id={theme}>
        <Calculate />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default memo(Header);
