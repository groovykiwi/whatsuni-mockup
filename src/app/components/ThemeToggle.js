"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [icon, setIcon] = useState();
  const currentTheme = theme === "system" ? "light" : theme; // Defaults to light theme on first launch

  useEffect(() => {
    setTheme(currentTheme);
    setIcon(currentTheme === "dark" ? "dark" : "light");
  }, [currentTheme, setTheme]);
  return (
    <>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="cursor-pointer text-xl"
      >
        {icon === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
