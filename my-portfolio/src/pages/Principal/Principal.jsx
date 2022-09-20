// página principal
import React, { useState, useEffect }/* , { useState } */ from 'react';
import { AiOutlineDownload/* , AiOutlineArrowDown */ } from 'react-icons/ai';
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
  DivExterna, PrincipalS, /* ProjectCardS,  */ContatoS, SkillsS, ProjetosS,
} from './Style';
import Contact from '../../components/Contact';
import MySkills from '../../components/MySkills';
import Projects from '../../components/Projects';

function Principal() {
  // const [isCopied, setIsCopied] = useState(false);
  // const [copyMessage, setCopyMessage] = useState('');

  // const HandleCopyEmail = (e) => {
  //   e.preventDefault();
  //   copy('reis_samuel@hotmail.com');
  //   setIsCopied(true);
  //   setCopyMessage('Email copied!');
  //   setTimeout(
  //     () => {
  //       setIsCopied(false);
  //       setCopyMessage('');
  //     },
  //     2000,
  //   );
  //   window.open('mailto: reis_samuel@hotmail.com', '_blank');
  // };

  // const HandleCopyWhats = (e) => {
  //   e.preventDefault();
  //   copy('11984478895');
  //   setIsCopied(true);
  //   setCopyMessage('Whatsapp number copied!');
  //   setTimeout(
  //     () => {
  //       setIsCopied(false);
  //       setCopyMessage('');
  //     },
  //     2000,
  //   );
  //   setTimeout(
  //     () => {
  //       window.open('https://api.whatsapp.com/send?phone=5511984478895', '_blank');
  //     },
  //     2000,
  //   );
  // };

  // const tecnologiesAlreadyKnowed = [
  //   { nome: 'HTML5', imagem: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
  //   { nome: 'CSS3', imagem: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  //   { nome: 'JavaScript', imagem: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
  //   { nome: 'ReactJS', imagem: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
  //   { nome: 'GitHub', imagem: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
  //   { nome: 'VSCode', imagem: 'https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
  //   { nome: 'Trello', imagem: 'https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white' },
  //   { nome: 'Slack', imagem: 'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white' },
  //   { nome: 'Redux', imagem: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
  //   { nome: 'RTL', imagem: 'https://img.shields.io/badge/RTL-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
  //   { nome: 'Styled Components', imagem: 'https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' },
  //   { nome: 'Context API', imagem: 'https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
  //   { nome: 'npm', imagem: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' },
  // ];
  // const tecnologiesLearning = [
  //   { nome: 'NodeJS', imagem: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
  //   { nome: 'MySQL', imagem: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' },
  //   { nome: 'Docker', imagem: 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white' },
  //   { nome: 'Sequelize', imagem: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white' },
  //   { nome: 'Api', imagem: 'https://img.shields.io/badge/API-000000?style=for-the-badge&logo=api&logoColor=white' },
  //   { nome: 'Express', imagem: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' },
  //   { nome: 'Joi', imagem: 'https://img.shields.io/badge/Joi-7B0051?style=for-the-badge&logo=joi&logoColor=white' },
  //   { nome: 'JWT', imagem: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white' },
  //   { nome: 'Mocha', imagem: 'https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white' },
  //   { nome: 'Chai', imagem: 'https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white' },
  //   { nome: 'Rest', imagem: 'https://img.shields.io/badge/REST-000000?style=for-the-badge&logo=rest&logoColor=white' },
  //   { nome: 'TypeScript', imagem: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
  //   { nome: 'OOP', imagem: 'https://img.shields.io/badge/OOP-000000?style=for-the-badge&logo=oop&logoColor=white' },
  // ];

  // const tecnologiesLearningSoon = [
  //   { nome: 'C#', imagem: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' },
  //   { nome: 'Python', imagem: 'https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white' },
  // ];

  // const projetos = [
  //   {
  //     id: 1,
  //     nome: 'Projeto 1',
  //     descricao: 'Descrição do projeto 1',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 2,
  //     nome: 'Projeto 2',
  //     descricao: 'Descrição do projeto 2',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 3,
  //     nome: 'Projeto 3',
  //     descricao: 'Descrição do projeto 3',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 4,
  //     nome: 'Projeto 4',
  //     descricao: 'Descrição do projeto 4',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 5,
  //     nome: 'Projeto 5',
  //     descricao: 'Descrição do projeto 5',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  // ];
  const [isWheelActive, setIsWheelActive] = useState(false);

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

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setIsWheelActive(false);
      }
    };
  }, []);

  const handleOnWheel = (e) => {
    e.preventDefault();
    if (window.pageYOffset === 0) {
      setIsWheelActive(false);
    }
    if (e.nativeEvent.wheelDelta < 0 && window.pageYOffset !== 0) {
      setIsWheelActive(true);
    }
    // if (e.deltaY > 20 || e.deltaX > 20) {
    //   setIsWheelActive(true);
    // }
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
          { }
        </div>
        <SkillsS onWheel={handleOnWheel}>
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
          <MySkills />
        </SkillsS>
        <ProjetosS onWheel={handleOnWheel}>
          <Projects isFromMain />
        </ProjetosS>
        <ContatoS onWheel={handleOnWheel}>
          <Contact />
        </ContatoS>
        <div>
          <Footer phrase="Transformação pela informação, evolução pela tecnologia" isWheelActive={isWheelActive} />
        </div>
      </PrincipalS>
    </DivExterna>
  );
}

// Principal.propTypes = {
//   deviceType: PropTypes.string.isRequired,
// };

export default Principal;
