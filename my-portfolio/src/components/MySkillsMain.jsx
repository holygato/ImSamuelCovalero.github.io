import React from 'react';
// import { ImagesS } from '../pages/Sobre/Style';

function MySkills() {
  // const tecnologiesImages = [
  //   { nome: 'HTML5', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  //   { nome: 'CSS3', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  //   { nome: 'JavaScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  //   { nome: 'React', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  //   { nome: 'NodeJS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  //   { nome: 'MySQL', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  //   { nome: 'Docker', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  //   { nome: 'TypeScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  //   { nome: 'Docker', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  // ];

  // Cria um componentes para mostrar as imagens das tecnologias que conheço
  const tecnologiesImages = [
    { nome: 'HTML5', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { nome: 'CSS3', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { nome: 'JavaScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { nome: 'React', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { nome: 'GitHub', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { nome: 'Visual Studio Code', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { nome: 'Trello', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { nome: 'Slack', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { nome: 'Redux', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { nome: 'RTL', imagem: 'https://external-preview.redd.it/ipDqIMGooKjcZY8gvo-SKMjV23dXdO4szBpoFFsSZQA.jpg?auto=webp&s=64fa5d043dc6b4f0dc9e3b40e0b8e221ceb7af5d' },
    { nome: 'Styled Components', imagem: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4' },
    // { nome: 'Context API', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { nome: 'NPM', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { nome: 'NodeJS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { nome: 'MySQL', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { nome: 'Docker', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { nome: 'Sequelize', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
    { nome: 'REST API', imagem: 'https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg' },
    { nome: 'Express', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { nome: 'Joi', imagem: 'https://joi.dev/img/joiLogo.jpg' },
    { nome: 'JWT', imagem: 'https://img.icons8.com/color/480/java-web-token.png' },
    { nome: 'Mocha', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
    { nome: 'Chai', imagem: 'https://avatars.githubusercontent.com/u/1515293?s=280&v=4' },
    { nome: 'TypeScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ];

  return (
    <div id="mySkillsComponent">
      <div>
        <h1>Minhas Skills</h1>
      </div>
      <div id="skills">
        {tecnologiesImages.map((tecnology) => (
          <div key={tecnology.nome}>
            <abbr title={tecnology.nome}>
              <img src={tecnology.imagem} alt={tecnology.nome} />
            </abbr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
