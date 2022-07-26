import React, { useState } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import classes from "./Header.module.css";
export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    if (document.documentElement.hasAttribute("data-theme")) {
      document.documentElement.removeAttribute("data-theme");
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.containerTitle}>devfinder</h1>
        <div onClick={darkModeHandler} className={classes.containerDarkMode}>
          <span className={classes.containerDarkModeTitle}>
            {isDarkMode ? "Light" : "Dark"}
          </span>
          <img
            className={classes.containerDarkModeImg}
            src={isDarkMode ? sun : moon}
            alt={isDarkMode ? "lightMode" : "DarkMode"}
          />
        </div>
      </div>
    </header>
  );
};
