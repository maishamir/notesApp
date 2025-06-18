import { useState } from "react";
import "./ThemeToggle.scss";

type Props = {};

function ThemeToggle({}: Props) {
  const [theme, setTheme] = useState("dark");

  function handleToggle() {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="themeToggle">
      <button type="button" className="themeToggle__button" onClick={handleToggle}>
        <p className="themeToggle__button-icon">{theme === "light" ? `🌙 ` : `🌞 `}</p>
      </button>
    </div>
  );
}

export default ThemeToggle;
