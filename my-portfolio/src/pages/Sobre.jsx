// Cria uma página para exibir a informação sobre mim

import React from 'react';
import Header from '../components/Header';

function Sobre() {
  return (
    <div>
      <Header />
      <h1>Sobre Mim:</h1>
      <p>
        Sou formado em Engenharia da Computação e atualmente estudo Desenvolvimento Web na
        Trybe, buscando me tornar um desenvolvedor Full Stack.
        Sempre me interessei por tencologia e inovação, e me fascina a possibilidade de impactar
        positivamente a vida das pessoas através da tecnologia, transformando o mundo em um lugar
        mais próspero e justo.
        Eu acredito no pensamento diferente, no improvável e na mudança da realidade atual. E a
        forma com que contribuo para conseguir isto é através da criatividade, da constância e da
        busca por excelência em meus códigos.
      </p>
    </div>
  );
}

export default Sobre;
