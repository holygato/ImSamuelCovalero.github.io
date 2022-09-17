// Cria uma página para exibir os contatos

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DivExterna, ContatoS } from './Style';

function Contato() {
  return (
    <DivExterna>
      <ContatoS>
        <Header />
        <h1>Contato</h1>
        <Footer phrase="O bom as vezes é inimigo do melhor" />
      </ContatoS>
    </DivExterna>
  );
}

export default Contato;
