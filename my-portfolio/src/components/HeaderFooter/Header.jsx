import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
// import { useNavigate } from 'react-router-dom';
import { HeaderS } from './Style';

function Header() {
  const { /* mode,  */setMode } = useContext(PortfolioContext);
  return (
    <HeaderS>
      <p id="logo">Samuel Reis</p>
      <div id="modeBtn">
        <button
          type="button"
          onClick={() => {
            setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
          }}
        >
          Mode
        </button>
      </div>
      <div id="navegation">
        <a href="/">Principal</a>
        <a href="/projetos">Projetos</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>
        <a href="/myskills">Minhas Skills</a>
      </div>
      {/* {console.log(mode)} */}
    </HeaderS>
  );
}

export default Header;
