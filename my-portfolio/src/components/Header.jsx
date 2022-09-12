// Cria uma header para navegar pela página principal, sobre, contato e projetos

import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
// import { useNavigate } from 'react-router-dom';

function Header() {
  const { mode, setMode } = useContext(PortfolioContext);
  return (
    <div>
      <div>
        <a href="/">Principal</a>
        <a href="/sobre">Sobre</a>
        <a href="/projetos">Projetos</a>
        <a href="/contato">Contato</a>
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
    </div>
  );
}

export default Header;
