import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
// import { useNavigate } from 'react-router-dom';
import { HeaderS } from './Style';

function Header() {
  const { mode, setMode } = useContext(PortfolioContext);
  return (
    <HeaderS>
      <p>Samuel Reis</p>
      <div id="navegation">
        <a href="/">Principal</a>
        <a href="/projetos">Projetos</a>
        <a href="/about">Sobre</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contato</a>
      </div>
      {console.log(mode)}
      <div>
        <button
          type="button"
          onClick={() => {
            setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
          }}
        >
          Mode
        </button>
      </div>
    </HeaderS>
  );
}

export default Header;
