// página principal
import React, { useState, useEffect, useRef }/* , { useState } */ from 'react';
import { AiOutlineDownload/* , AiOutlineArrowDown */ } from 'react-icons/ai';
import arrowDown from '../../images/icons8-double-down-100.png';
import curriculum from '../../data/curriculum.pdf';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import PropTypes from 'prop-types';
// import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
// import { AiOutlineMail } from 'react-icons/ai';
// import copy from 'copy-to-clipboard';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import {
  DivExterna, PrincipalS, ContatoS, SkillsS, ProjetosS,
} from './Style';
import Contact from '../../components/Contact';
import MySkillsMain from '../../components/MySkillsMain';
import Projects from '../../components/Projects';

function Principal() {
  const [isWheelActive, setIsWheelActive] = useState(false);
  const [isFooterRelative, setIsFooterRelative] = useState(false);

  // useEffect(() => {
  //   if (isWheelActive) {
  //     setTimeout(() => {
  //       setIsWheelActive(false);
  //     }, 5000);
  //   }
  // }, [isWheelActive]);

  // useEffect(() => {
  //   if (document.getElementById('firstPart')) {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             setIsWheelActive(false);
  //           }
  //         });
  //       },
  //       {
  //         threshold: [0.5],
  //       },
  //     );
  //     observer.observe(document.getElementById('firstPart'));
  //   }
  // }, []);

  // Cria um useEffect para verificar se o scroll ativo ou parado e habilitar o botão de
  // scroll para baixo baseado em timer
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
      let timer = null;
      if (!goingUp) {
        timer = setTimeout(() => {
          setIsWheelActive(false);
        }, 4000);
      }
      if (goingUp) {
        clearTimeout(timer);
        setIsWheelActive(true);
      }

      // if (currentScrollY > 0) {
      //   setIsFooterRelative(true);
      // } else {
      //   setIsFooterRelative(false);
      // }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  // Cria um useEffect para verificar se está no topo da página
  // e seta como false setIsFooterRelative e setIsWheelActive
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        let timer = null;
        timer = setTimeout(() => {
          setIsWheelActive(false);
        }, 4000);
        clearTimeout(timer);
        setIsFooterRelative(false);
      } else {
        setIsFooterRelative(true);
        setIsWheelActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFooterRelative, isWheelActive]);

  const handleOnWheel = (e) => {
    e.preventDefault();
    if (window.pageYOffset === 0) {
      setIsFooterRelative(false);
      setIsWheelActive(false);
    }
    if (e.nativeEvent.wheelDelta < 0 && window.pageYOffset !== 0) {
      setIsFooterRelative(true);
    }
    // if (e.deltaY > 20 || e.deltaX > 20) {
    //   setIsWheelActive(true);
    // }
    setIsFooterRelative(true);
    setIsWheelActive(true);
  };

  return (
    <DivExterna>
      <PrincipalS>
        <Header />
        <div id="principal" onWheel={handleOnWheel}>
          <p id="firstPart">Olá, eu sou Samuel dos Reis,</p>
          <p id="secondPart">seja muito bem vindo (a) ao meu Portfólio</p>
          <br />
          <p id="secondPart">
            Aqui você conhecerá um pouco sobre mim e aonde me encontrar, as tecnologias que conheço
            e utilizo e terá acesso a alguns projetos que desenvolvi.
          </p>
          <div id="contato">
            <a href="/contact">
              <button type="button">Me Contacte!</button>
            </a>
          </div>
          {/* insere o elemento deslize para baixo caso exiba na tela o texto Olá,
          eu sou Samuel dos Reis */}
          {!isWheelActive && (
            <div id="deslize">
              <img src={arrowDown} alt="deslize para baixo" />
              <p>Deslize para baixo</p>
            </div>
          )}
        </div>
        <SkillsS onWheel={handleOnWheel}>
          <div id="divSobremimCurriculo">
            <div>
              <h1>Saiba mais sobre mim...</h1>
              <a href="/about">
                <button type="button">Sobre mim</button>
              </a>
            </div>
            <div id="curriculum">
              <a href={curriculum} target="_blank" rel="noreferrer">
                <button type="button">
                  <AiOutlineDownload />
                  Currículum
                </button>
              </a>
            </div>
          </div>
          <MySkillsMain />
          {!isWheelActive && (
            <div id="deslize">
              <img src={arrowDown} alt="deslize para baixo" />
              <p>Deslize para baixo</p>
            </div>
          )}
        </SkillsS>
        <ProjetosS onWheel={handleOnWheel}>
          <Projects isFromMain />
          {!isWheelActive && (
            <div id="deslize">
              <img src={arrowDown} alt="deslize para baixo" />
              <p>Deslize para baixo</p>
            </div>
          )}
        </ProjetosS>
        <ContatoS onWheel={handleOnWheel}>
          <Contact />
        </ContatoS>
        <Footer phrase="Transformação pela informação, evolução pela tecnologia" isFooterRelative={isFooterRelative} />
      </PrincipalS>
    </DivExterna>
  );
}

// Principal.propTypes = {
//   deviceType: PropTypes.string.isRequired,
// };

export default Principal;
