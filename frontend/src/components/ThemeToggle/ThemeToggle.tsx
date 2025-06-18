import { useState } from "react"
import "./ThemeToggle.scss"

type Props = {}

function ThemeToggle({ }: Props) {
  
  const [theme, setTheme] = useState("dark")

  return (
    <div className="themeToggle__btnContainer">
      <button type="button" className="themeToggle_btn">
        { theme === "light" ? `🌙 `: `🌞 ` }
      </button>
    </div>
  )
}

export default ThemeToggle