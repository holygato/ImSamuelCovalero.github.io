import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { TbArrowBigDownLines } from 'react-icons/tb';
import curriculum from '../../data/CV2023.pdf';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, PrincipalS } from './Style';
import Contact from '../../components/Contact';
import MySkillsMain from '../../components/MySkillsMain';
import Projects from '../../components/Projects';
import myPicture from '../../images/myPicture.png';
import PortfolioContext from '../../context/PortfolioContext';
import HamburgerMenu from '../../components/HeaderFooter/HamburgerMenu';

function Principal() {
  const [isWheelActive, setIsWheelActive] = useState(false);
  const [isFooterRelative, setIsFooterRelative] = useState(false);
  const [isPageOnBottom, setIsPageOnBottom] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  const [defaultPositionHeader, setDefaultPositionHeader] = useState(true);
  const { smallScreen, isBurgerClicked } = useContext(PortfolioContext);

  const navigate = useNavigate();

  const prevScrollY = useRef(0);

  // useEffect para verificar se está no final da página
  // e seta como true isPageOnBottom
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setGoingUp(false);
      }
      if (currentScrollY < prevScrollY.current) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsPageOnBottom(true);
        setDefaultPositionHeader(true);
      } else {
        setIsPageOnBottom(false);
        setDefaultPositionHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  // useEffect que seta isWheelActive como false após 5 segundos de inatividade no scroll
  useEffect(() => {
    if (isWheelActive) {
      setTimeout(() => {
        setIsWheelActive(false);
      }, 5000);
    }
  }, [isWheelActive]);

  // useEffect para verificar se o scroll ativo e seta como true isWheelActive
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setGoingUp(false);
        setIsWheelActive(true);
      }
      if (currentScrollY < prevScrollY.current) {
        setGoingUp(true);
        setIsWheelActive(true);
      }
      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
      setIsWheelActive(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  // useEffect para verificar se está no topo da página
  // e seta como false setIsFooterRelative e setIsWheelActive
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsFooterRelative(false);
        setDefaultPositionHeader(false);
      } else {
        setIsFooterRelative(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFooterRelative, isWheelActive]);

  return (
    <DivExterna smallScreen={smallScreen}>
      <Header defaultPositionHeader={defaultPositionHeader} />
      <PrincipalS smallScreen={smallScreen}>
        {
          isBurgerClicked
          && <HamburgerMenu />
        }
        <div id="principalS">
          <p id="firstPart">Olá, eu sou Samuel dos Reis,</p>
          <p id="secondPart">seja muito bem vindo (a) ao meu Portfólio!</p>
          <br />
          <p id="secondPart">
            Aqui você conhecerá um pouco sobre mim e aonde me encontrar, as tecnologias que conheço
            e utilizo e terá acesso a alguns projetos que desenvolvi.
          </p>
          <div id="contactMe">
            <button id="contacteMeBtn" type="button" onClick={() => navigate('/contato')}>Me Contacte!</button>
          </div>
          {!isWheelActive && !isPageOnBottom && (
            <div>
              <div id="deslizeRight">
                <abbr title="Deslize para baixo">
                  <TbArrowBigDownLines id="arrowDown" />
                  <p>Deslize</p>
                </abbr>
              </div>
              <div id="deslizeLeft">
                <abbr title="Deslize para baixo">
                  <TbArrowBigDownLines id="arrowDown" />
                  <p>Deslize</p>
                </abbr>
              </div>
            </div>
          )}
        </div>
        <div id="skillsS">
          <div>
            <img id="myPicture" src={myPicture} alt="Foto de Samuel dos Reis" />
          </div>
          <div id="divSobremimCurriculo">
            <h1>Saiba mais sobre mim...</h1>
            <button id="sobreMimBtn" type="button" onClick={() => navigate('/sobre')}>Sobre mim</button>
            <div>
              <a href={curriculum} target="_blank" rel="noreferrer">
                <button id="curriculum" type="button">
                  <AiOutlineDownload />
                  Currículum
                </button>
              </a>
            </div>
          </div>
          <MySkillsMain />
        </div>
        <div id="projetosS">
          <Projects isFromMain />
          {!isWheelActive && !isPageOnBottom && (
            <div>
              <div id="deslizeRight">
                <abbr title="Deslize para baixo">
                  <TbArrowBigDownLines id="arrowDown" />
                  <p>Deslize</p>
                </abbr>
              </div>
              <div id="deslizeLeft">
                <abbr title="Deslize para baixo">
                  <TbArrowBigDownLines id="arrowDown" />
                  <p>Deslize</p>
                </abbr>
              </div>
            </div>
          )}
        </div>
        <div id="contatosS">
          <Contact />
        </div>
      </PrincipalS>
      <Footer phrase="Transformação pela informação, evolução pela tecnologia" isFooterRelative={isFooterRelative} />
    </DivExterna>
  );
}

export default Principal;
