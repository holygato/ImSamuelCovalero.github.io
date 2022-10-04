import React, { useContext } from 'react';
// import { CgDarkMode } from 'react-icons/cg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PortfolioContext from '../../context/PortfolioContext';
// import { useNavigate } from 'react-router-dom';
import { HeaderS } from './Style';

function Header() {
  const { theme, setTheme } = useContext(PortfolioContext);
  console.log('theme', theme);
  return (
    <HeaderS>
      <p id="logo">Samuel Reis</p>
      <div id="modeBtn">
        {theme === 'light'
          ? <MdDarkMode id="modeIcon" onClick={() => setTheme('dark')} />
          : <MdLightMode id="modeIcon" onClick={() => setTheme('light')} />}
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
        <a href="/projetos">Projetos</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>
        {/* <a href="/myskills">Minhas Skills</a> */}
      </div>
      {/* {console.log(mode)} */}
    </HeaderS>
  );
}

export default Header;
