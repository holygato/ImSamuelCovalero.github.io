import React, { useContext } from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';
import ToMainBtn from '../../components/toMainBtn';
import PortfolioContext from '../../context/PortfolioContext';
import { MenuBurgerContentS } from '../../components/HeaderFooter/Style';

function Contato() {
  const { smallScreen, isBurgerClicked } = useContext(PortfolioContext);
  console.log('isBurgerClicked', isBurgerClicked);
  console.log('smallScreen', smallScreen);

  return (
    <DivExterna smallScreen={smallScreen}>
      <Header defaultPositionHeader />
      <ContatoS smallScreen={smallScreen}>
        {
          isBurgerClicked
          && (
            <MenuBurgerContentS>
              <a href="/">Principal</a>
              <a href="/about">Sobre</a>
              <a href="/projetos">Projetos</a>
              <a href="/contact">Contato</a>
            </MenuBurgerContentS>
          )
        }
        <Contact />
        <div id="toMainBtn">
          <ToMainBtn />
        </div>
      </ContatoS>
      <Footer phrase="O bom as vezes é inimigo do melhor" isFooterRelative />
    </DivExterna>
  );
}

export default Contato;
