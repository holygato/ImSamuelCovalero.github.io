import React, { useContext } from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';
import ToMainBtn from '../../components/toMainBtn';
import PortfolioContext from '../../context/PortfolioContext';
import HamburgerMenu from '../../components/HeaderFooter/HamburgerMenu';

function Contato() {
  const { smallScreen, isBurgerClicked } = useContext(PortfolioContext);

  return (
    <DivExterna smallScreen={smallScreen}>
      <Header defaultPositionHeader />
      <ContatoS smallScreen={smallScreen}>
        {
          isBurgerClicked
          && <HamburgerMenu />
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
