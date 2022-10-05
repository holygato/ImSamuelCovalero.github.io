import React, { useContext, useEffect, useState } from 'react';
// import { CgDarkMode } from 'react-icons/cg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import PortfolioContext from '../../context/PortfolioContext';
// import { useNavigate } from 'react-router-dom';
import { HeaderS } from './Style';

function Header({ defaultPositionHeader }) {
  const { theme, setTheme } = useContext(PortfolioContext);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  // cria função para chamar o setMode e mudar o tema
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
      setMountedComponent(true);
    }
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <HeaderS defaultPositionHeader={defaultPositionHeader}>
      <p id="logo">Samuel Reis</p>
      <div id="modeBtn">
        {theme === 'light'
          ? <MdDarkMode id="modeIcon" onClick={themeToggler} />
          : <MdLightMode id="modeIcon" onClick={themeToggler} />}
        {/* <button
          type="button"
          onClick={() => {
            setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
          }}
        >
          <MdDarkMode />
        </button> */}
      </div>
      <div id="navegation">
        <a href="/">Principal</a>
        <a href="/about">Sobre</a>
        <a href="/projetos">Projetos</a>
        <a href="/contact">Contato</a>
        {/* <a href="/myskills">Minhas Skills</a> */}
      </div>
      {/* {console.log(mode)} */}
    </HeaderS>
  );
}

Header.propTypes = {
  defaultPositionHeader: PropTypes.bool.isRequired,
};

export default Header;
