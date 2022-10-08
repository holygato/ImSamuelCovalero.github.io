import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { AiOutlineDownload/* , AiOutlineArrowDown */ } from 'react-icons/ai';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, SobreS } from './Style';
import curriculum from '../../data/curriculum.pdf';
import MySkills from '../../components/MySkills';
import ToMainBtn from '../../components/toMainBtn';
import myPicture2 from '../../images/myPicture2.jpg';
import PortfolioContext from '../../context/PortfolioContext';
import HamburgerMenu from '../../components/HeaderFooter/HamburgerMenu';

function Sobre() {
  const [goingUp, setGoingUp] = useState(false);
  const [defaultPositionHeader, setDefaultPositionHeader] = useState(false);
  const { smallScreen, isBurgerClicked } = useContext(PortfolioContext);

  const prevScrollY = useRef(0);

  // Cria um useEffect para verificar se está no final da página
  // e seta como true isPageOnBottom
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        console.log('descendo');
        setGoingUp(false);
      }
      if (currentScrollY < prevScrollY.current) {
        console.log('subindo');
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('final da página');
        setDefaultPositionHeader(true);
      } else {
        console.log('não está no final da página');
        setDefaultPositionHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <DivExterna smallScreen={smallScreen}>
      <Header defaultPositionHeader={defaultPositionHeader} />
      <SobreS smallScreen={smallScreen}>
        {
          isBurgerClicked
          && <HamburgerMenu />
        }
        <div id="aboutDiv">
          <h1>Sobre Mim:</h1>
          <img id="myPicture" src={myPicture2} alt="Foto de Samuel Covalero dos Reis" />
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
            codar, da constância e da busca pela excelência
            em meus códigos.
          </p>
        </div>
        {/* <div id="myPictureDiv">

        </div> */}
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
        <div id="toMainBtn">
          <ToMainBtn />
        </div>
      </SobreS>
      <Footer phrase="Seja a mudança que quer ver no mundo, tudo muda quando a gente muda" isFooterRelative />
    </DivExterna>
  );
}

export default Sobre;
