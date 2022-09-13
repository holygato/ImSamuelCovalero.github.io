// Cria uma página para exibir os contatos

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contato() {
  return (
    <div>
      <Header />
      <h1>Contato</h1>
      <Footer phrase="O bom as vezes é inimigo do melhor" />
    </div>
  );
}

export default Contato;
