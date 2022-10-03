import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ContatoS } from './Style';
import Contact from '../../components/Contact';

function Contato() {
  const navigate = useNavigate();
  return (
    <DivExterna>
      <Header />
      <ContatoS>
        <Contact />
        <button type="button" onClick={() => navigate('/')}>Principal</button>
      </ContatoS>
      <Footer phrase="O bom as vezes é inimigo do melhor" isFooterRelative />
    </DivExterna>
  );
}

export default Contato;
