import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="swtich__wrap">
      {theme === "light" ? (
        <a className="header__link switcher" onClick={() => setTheme("dark")}>
          <FiMoon size={24} className="icon icon-home" />
          Dark Mode
        </a>
      ) : (
        <a className="header__link switcher" onClick={() => setTheme("light")}>
          <FiSun size={24} className="icon icon-home" />
          Light Mode
        </a>
      )}
    </div>
  );
};

export default ThemeChanger;
