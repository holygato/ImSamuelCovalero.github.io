import React, { useEffect, useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PortfolioContext from '../context/PortfolioContext';

function ThemeComponent() {
  const { theme, setTheme } = useContext(PortfolioContext);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  // cria função para chamar o setMode e trocar o tema
  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <div id="modeBtn">
      <abbr title="Mode">
        {theme === 'light'
          ? <MdDarkMode id="modeIcon" onClick={themeToggler} />
          : <MdLightMode id="modeIcon" onClick={themeToggler} />}
      </abbr>
    </div>
  );
}

export default ThemeComponent;
