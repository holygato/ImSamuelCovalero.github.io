import React from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';

function Contato() {
  return (
    <DivExterna>
      <Header />
      <ContatoS>
        <Contact />
        <button type="button" onClick={() => window.history.back()}>Voltar</button>
      </ContatoS>
      <Footer phrase="O bom as vezes é inimigo do melhor" isFooterRelative />
    </DivExterna>
  );
}

export default Contato;
