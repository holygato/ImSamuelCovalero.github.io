// Criam um componente para o HamburgerMenu
import React from 'react';
// import { TbLetterX } from 'react-icons/tb';
import { MenuBurgerContentS } from './Style';
// import PortfolioContext from '../../context/PortfolioContext';
import covalero from '../../images/covaleroLogo.svg';

function HamburgerMenu() {
  // const { setIsBurgerClicked } = useContext(PortfolioContext);
  return (
    <MenuBurgerContentS>
      {/* <button type="button" id="XIconBtn" onClick={() => setIsBurgerClicked(false)}>
        <TbLetterX id="XIcon" />
      </button> */}
      <a href="/">Principal</a>
      <a href="/about">Sobre</a>
      <a href="/projetos">Projetos</a>
      <a id="contatoA" href="/contact">Contato</a>
      <img id="logo" src={covalero} alt="Covalero" />
    </MenuBurgerContentS>
  );
}

export default HamburgerMenu;
