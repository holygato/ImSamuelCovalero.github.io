// Cria uma página para exibir a informação sobre mim

import React from 'react';
import { AiOutlineDownload/* , AiOutlineArrowDown */ } from 'react-icons/ai';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, SobreS } from './Style';
import curriculum from '../../data/curriculum.pdf';
import MySkills from '../../components/MySkills';

function Sobre() {
  return (
    <DivExterna>
      <SobreS>
        <Header />
        <div id="aboutDiv">
          <h1>Sobre Mim:</h1>
          <p>
            Olá, meu nome é Samuel Covalero dos Reis, resido em São Carlos, SP.
            Sou formado em Engenharia da Computação e
            atualmente estudo Desenvolvimento Web na Trybe, buscando atuar como desenvolvedor
            Full Stack.
          </p>
          <br />
          <p>
            Sempre me interessei por cultura Geek, inovação e tecnologia, e me fascina a
            possibilidade de impactar positivamente a vida das pessoas através da mesma,
            transformando o mundo em um lugar mais próspero, conectado e justo.
          </p>
          <br />
          <p>
            Eu acredito no pensamento surpreendente, no improvável e na melhora da realidade atual.
            E a forma com que contribuo para isto é através da criatividade, da constância e da
            busca pela excelência em meus códigos.
          </p>
        </div>
        <div id="curriculum">
          <a href={curriculum} target="_blank" rel="noreferrer">
            <button type="button">
              <AiOutlineDownload />
              Currículum
            </button>
          </a>
        </div>
        <br />
        <MySkills />
      </SobreS>
      <Footer phrase="Seja a mudança que quer ver no mundo, tudo muda quando a gente muda" isFooterRelative />
    </DivExterna>
  );
}

export default Sobre;
