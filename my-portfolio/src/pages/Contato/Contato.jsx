// Cria uma página para exibir os contatos

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DivExterna, ContatoS } from './Style';

function Contato() {
  return (
    <DivExterna>
      <ContatoS>
        <Header />
        <h1>Contato</h1>
        <div>
          <label htmlFor="linkedIn">
            LinkedIn:
            {' '}
            <a href="https://www.linkedin.com/in/samuelcovalero/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

          </label>
        </div>
        <div>
          <label htmlFor="gitHub">
            GitHub:
            {' '}
            <a href="https://github.com/holygato" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </label>
        </div>
        <Footer phrase="O bom as vezes é inimigo do melhor" />
      </ContatoS>
    </DivExterna>
  );
}

export default Contato;
