import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedColorScheme = localStorage.getItem("colorScheme");
    if (storedColorScheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleColorScheme = () => {
    const newColorScheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");

    localStorage.setItem("colorScheme", newColorScheme);
  };

  return (
    <li onClick={toggleColorScheme}>
      <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} fixedWidth />
    </li>
  );
};

export default DarkMode;
