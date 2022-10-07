import React, { useContext } from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';
import ToMainBtn from '../../components/toMainBtn';
import PortfolioContext from '../../context/PortfolioContext';

function Contato() {
  const { smallScreen } = useContext(PortfolioContext);
  console.log('smallScreen_contact', smallScreen);

  // if (!smallScreen) return <div />;

  return (
    <DivExterna smallScreen={smallScreen === true}>
      {console.log('smallScreen_contact', smallScreen)}
      <Header defaultPositionHeader />
      <ContatoS smallScreen={smallScreen}>
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
