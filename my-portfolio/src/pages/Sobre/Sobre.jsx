import React from 'react';
import { AiOutlineDownload/* , AiOutlineArrowDown */ } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, SobreS } from './Style';
import curriculum from '../../data/curriculum.pdf';
import MySkills from '../../components/MySkills';

function Sobre() {
  const navigate = useNavigate();
  return (
    <DivExterna>
      <Header />
      <SobreS>
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
            Eu acredito no pensamento surpreendente, no improvável e na melhora da realidade.
            E a forma com que contribuo para isto é através da criatividade, do foco, da paixão em
            codar, da presença, da constância e da busca pela excelência
            em meus códigos e minha vida.
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
        <button type="button" onClick={() => navigate('/')}>Principal</button>
      </SobreS>
      <Footer phrase="Seja a mudança que quer ver no mundo, tudo muda quando a gente muda" isFooterRelative />
    </DivExterna>
  );
}

export default Sobre;
