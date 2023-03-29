import React from 'react';
import { MenuBurgerContentS } from './Style';

function HamburgerMenu() {
  return (
    <MenuBurgerContentS>
      <a href="/">Principal</a>
      <a href="/sobre">Sobre</a>
      <a href="/projetos">Projetos</a>
      <a id="contatoA" href="/contato">Contato</a>
      <img id="logo" src="/images/covaleroLogo.svg" alt="Logo Covalero" />
    </MenuBurgerContentS>
  );
}

export default HamburgerMenu;
