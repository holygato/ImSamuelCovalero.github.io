import React from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';
import ToMainBtn from '../../components/toMainBtn';

function Contato() {
  return (
    <DivExterna>
      <Header defaultPositionHeader />
      <ContatoS>
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
