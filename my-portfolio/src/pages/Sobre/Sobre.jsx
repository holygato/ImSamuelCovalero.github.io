// Cria uma página para exibir a informação sobre mim

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DivExterna, SobreS } from './Style';

function Sobre() {
  // cria uma array de objetos das tecnologias que já conheço
  const tecnologiesAlreadyKnowed = [
    { nome: 'HTML5', imagem: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { nome: 'CSS3', imagem: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { nome: 'JavaScript', imagem: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { nome: 'ReactJS', imagem: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { nome: 'GitHub', imagem: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
    { nome: 'VSCode', imagem: 'https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
    { nome: 'Trello', imagem: 'https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white' },
    { nome: 'Slack', imagem: 'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white' },
    { nome: 'Redux', imagem: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
    { nome: 'RTL', imagem: 'https://img.shields.io/badge/RTL-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
    { nome: 'Styled Components', imagem: 'https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' },
    { nome: 'Context API', imagem: 'https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
    { nome: 'npm', imagem: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' },
  ];
  const tecnologiesLearning = [
    { nome: 'NodeJS', imagem: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
    { nome: 'MySQL', imagem: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' },
    { nome: 'Docker', imagem: 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white' },
    { nome: 'Sequelize', imagem: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white' },
    { nome: 'Api', imagem: 'https://img.shields.io/badge/API-000000?style=for-the-badge&logo=api&logoColor=white' },
    { nome: 'Express', imagem: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' },
    { nome: 'Joi', imagem: 'https://img.shields.io/badge/Joi-7B0051?style=for-the-badge&logo=joi&logoColor=white' },
    { nome: 'JWT', imagem: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white' },
    { nome: 'Mocha', imagem: 'https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white' },
    { nome: 'Chai', imagem: 'https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white' },
    { nome: 'Rest', imagem: 'https://img.shields.io/badge/REST-000000?style=for-the-badge&logo=rest&logoColor=white' },
    { nome: 'TypeScript', imagem: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
    { nome: 'OOP', imagem: 'https://img.shields.io/badge/OOP-000000?style=for-the-badge&logo=oop&logoColor=white' },
  ];

  const tecnologiesLearningSoon = [
    { nome: 'C#', imagem: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' },
    { nome: 'Python', imagem: 'https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white' },
  ];

  // const tecnologiesImages = [
  //   { nome: 'Redux', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  //   { nome: 'RTL', imagem: 'https://external-preview.redd.it/ipDqIMGooKjcZY8gvo-SKMjV23dXdO4szBpoFFsSZQA.jpg?auto=webp&s=64fa5d043dc6b4f0dc9e3b40e0b8e221ceb7af5d' },
  //   { nome: 'Styled Components', imagem: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4' },
  //   { nome: 'JWT', imagem: 'https://img.icons8.com/color/480/java-web-token.png' },
  //   { nome: 'Joi', imagem: 'https://joi.dev/img/joiLogo.jpg' },
  //   { nome: 'Express', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  //   { nome: 'Sequelize', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
  //   { nome: 'Chai', imagem: 'https://avatars.githubusercontent.com/u/1515293?s=280&v=4' },
  //   { nome: 'Mocha', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
  //   { nome: 'NodeJS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  // ];
  return (
    <DivExterna>
      <SobreS>
        <Header />
        <h1>Sobre Mim:</h1>
        <p>
          Oĺa, meu nome é Samuel Covalero dos Reis, sou formado em Engenharia da Computação e
          atualmente estudo Desenvolvimento Web na Trybe, buscando atuar como desenvolvedor
          Full Stack.
          Sempre me interessei por tencologia e inovação, e me fascina a possibilidade de impactar
          positivamente a vida das pessoas através da tecnologia, transformando o mundo em um lugar
          mais próspero e justo.
          Eu acredito no pensamento surpreendente, no improvável e na melhora da realidade atual.
          E a forma com que contribuo para isto é através da criatividade, da constância e da
          busca pela excelência em meus códigos.
        </p>
        <br />
        <div id="tecnologias">
          {/* <h3>Tecnologias:</h3> */}
          <div id="tecnologiesPosition">
            <h4>Tecnologias que conheço:</h4>
            {tecnologiesAlreadyKnowed.map((tecnology) => (
              <div key={tecnology.nome}>
                <abbr title={tecnology.nome}>
                  <img src={tecnology.imagem} alt={tecnology.nome} />
                </abbr>
              </div>
            ))}
          </div>
          <div id="tecnologiesPosition">
            <h4>Tecnologias que estou estudando:</h4>
            {tecnologiesLearning.map((tecnology) => (
              <div key={tecnology.nome}>
                <abbr title={tecnology.nome}>
                  <img src={tecnology.imagem} alt={tecnology.nome} />
                </abbr>
              </div>
            ))}
          </div>
          <div id="tecnologiesPosition">
            <h4>Tecnologias que pretendo estudar:</h4>
            {tecnologiesLearningSoon.map((tecnology) => (
              <div key={tecnology.nome}>
                <abbr title={tecnology.nome}>
                  <img src={tecnology.imagem} alt={tecnology.nome} />
                </abbr>
              </div>
            ))}
          </div>
          {/* <div>
            <h4>Imagens de Tecnologias:</h4>
            {tecnologiesImages.map((tecnology) => (
              <ImagesS
                key={tecnology.nome}
              >
                <abbr title={tecnology.nome}>
                  <img src={tecnology.imagem} alt={tecnology.nome} />
                </abbr>
              </ImagesS>
            ))}
          </div> */}
        </div>
        {/* Para testar a visualização do header e do footer quando a página estiver maior
        <h4>Tecnologias que conheço:</h4>
        {tecnologiesAlreadyKnowed.map((tecnology) => (
          <div key={tecnology.nome}>
            <abbr title={tecnology.nome}>
              <img src={tecnology.imagem} alt={tecnology.nome} />
            </abbr>
          </div>
        ))} */}
        <Footer id="footer" phrase="Seja a mudança que quer ver no mundo, tudo muda quando a gente muda" />
      </SobreS>
    </DivExterna>
  );
}

export default Sobre;
