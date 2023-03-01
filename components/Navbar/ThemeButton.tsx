import { BrightnessHighFill, MoonStarsFill } from "react-bootstrap-icons"
import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes';


const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;
  return (

    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme == "light" ? <MoonStarsFill /> : <BrightnessHighFill />}
    </button>
  )
}

export default ThemeButton