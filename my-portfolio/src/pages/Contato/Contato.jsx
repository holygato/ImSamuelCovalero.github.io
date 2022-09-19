// Cria uma página para exibir os contatos

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import copy from 'copy-to-clipboard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DivExterna, ContatoS } from './Style';

function Contato() {
  // const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  // const [isCopiedWhats, setIsCopiedWhats] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const HandleCopyEmail = (e) => {
    e.preventDefault();
    copy('reis_samuel@hotmail.com');
    setIsCopied(true);
    setCopyMessage('Email copied!');
    setTimeout(
      () => {
        setIsCopied(false);
        setCopyMessage('');
      },
      2000,
    );
    window.open('mailto: reis_samuel@hotmail.com', '_blank');
  };

  const HandleCopyWhats = (e) => {
    e.preventDefault();
    copy('11984478895');
    setIsCopied(true);
    setCopyMessage('Whatsapp number copied!');
    setTimeout(
      () => {
        setIsCopied(false);
        setCopyMessage('');
      },
      2000,
    );
    // executar window.opne após 3 segundos
    setTimeout(
      () => {
        window.open('https://api.whatsapp.com/send?phone=5511984478895', '_blank');
      },
      2000,
    );
    // window.open('https://wa.me/5511984478895', '_blank');
  };

  return (
    <DivExterna>
      <ContatoS>
        <Header />
        <div>
          <h1>Me Contacte</h1>
        </div>
        <div>
          <label htmlFor="linkedIn">
            {' '}
            <abbr title="https://www.linkedin.com/in/samuelcovalero/">
              <a href="https://www.linkedin.com/in/samuelcovalero/" target="_blank" rel="noreferrer">
                LinkedIn:
                <FaLinkedin />
              </a>
            </abbr>
          </label>
          <label htmlFor="gitHub">
            {' '}
            <abbr title="https://github.com/holygato">
              <a href="https://github.com/holygato" target="_blank" rel="noreferrer">
                GitHub:
                <FaGithub />
              </a>
            </abbr>
          </label>
          <label htmlFor="email">
            {' '}
            <abbr title="reis_samuel@hotmail.com">
              <a href="mailto: reis_samuel@hotmail.com" target="_blank" rel="noreferrer" onClick={HandleCopyEmail}>
                Email:
                <AiOutlineMail />
              </a>
            </abbr>
          </label>
          {/* Cria uma label para compartilhar o whatsapp */}
          <label htmlFor="whatsapp">
            {' '}
            <abbr title="https://api.whatsapp.com/send?phone=5511984478895">
              <a href="https://api.whatsapp.com/send?phone=5511984478895" target="_blank" rel="noreferrer" onClick={HandleCopyWhats}>
                WhatsApp:
                <FaWhatsapp />
              </a>
            </abbr>
          </label>
          {isCopied && <p id="copyMsg">{copyMessage}</p>}
        </div>
        <Footer phrase="O bom as vezes é inimigo do melhor" />
      </ContatoS>
    </DivExterna>
  );
}

export default Contato;
