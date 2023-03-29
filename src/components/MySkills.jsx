import React from 'react';

function MySkills() {
  // teste
  const tecnologiesAlreadyKnowed = [
    { nome: 'VSCode', imagem: 'https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
    { nome: 'Trello', imagem: 'https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white' },
    { nome: 'Slack', imagem: 'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white' },
    { nome: 'GitHub', imagem: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' },
    { nome: 'HTML5', imagem: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { nome: 'CSS3', imagem: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { nome: 'JavaScript', imagem: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' },
    { nome: 'ReactJS', imagem: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { nome: 'Redux', imagem: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
    { nome: 'RTL', imagem: 'https://img.shields.io/badge/RTL-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
    { nome: 'Styled Components', imagem: 'https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' },
    { nome: 'Context API', imagem: 'https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
    { nome: 'npm', imagem: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' },
    { nome: 'Jest', imagem: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white' },
    { nome: 'NodeJS', imagem: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
    { nome: 'MySQL', imagem: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' },
    { nome: 'Docker', imagem: 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white' },
    { nome: 'Sequelize', imagem: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white' },
    { nome: 'Rest API', imagem: 'https://img.shields.io/badge/REST_API-61DAFB?style=for-the-badge&logo=rest&logoColor=black' },
    { nome: 'Express', imagem: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' },
    { nome: 'Joi', imagem: 'https://img.shields.io/badge/Joi-7B0051?style=for-the-badge&logo=joi&logoColor=white' },
    { nome: 'JWT', imagem: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white' },
    { nome: 'Mocha', imagem: 'https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white' },
    { nome: 'Chai', imagem: 'https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white' },
    { nome: 'TypeScript', imagem: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
    { nome: 'Object-Oriented Programming', imagem: 'https://img.shields.io/badge/OOP-000000?style=for-the-badge&logo=oop&logoColor=white' },
    { nome: 'SOLID', imagem: 'https://img.shields.io/badge/SOLID-000000?style=for-the-badge&logo=solid&logoColor=white' },
    { nome: 'MongoDB', imagem: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },
    { nome: 'Mongoose', imagem: 'https://img.shields.io/badge/Mongoose-47A248?style=for-the-badge&logo=mongoose&logoColor=white' },
    { nome: 'Python', imagem: 'https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white' },
  ];

  const tecnologiesLearning = [
    { nome: 'C#', imagem: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' },
  ];

  const tecnologiesLearningSoon = [
    { nome: 'Java', imagem: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white' },
    { nome: 'NextJS', imagem: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white' },
    { nome: 'Angular', imagem: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
  ];

  return (
    <div id="skillsDiv">
      <h1 id="skillsTitle">Linguagens e Tecnologias:</h1>
      <div id="skills">
        <div id="tecnologiesPosition">
          <h4 id="subTitle">Conheço:</h4>
          {tecnologiesAlreadyKnowed.map((tecnology) => (
            <div key={tecnology.nome}>
              <abbr title={tecnology.nome}>
                <img src={tecnology.imagem} alt={tecnology.nome} />
              </abbr>
            </div>
          ))}
        </div>
        <div id="tecnologiesPosition">
          <h4 id="subTitle">Estou estudando:</h4>
          {tecnologiesLearning.map((tecnology) => (
            <div key={tecnology.nome}>
              <abbr title={tecnology.nome}>
                <img src={tecnology.imagem} alt={tecnology.nome} />
              </abbr>
            </div>
          ))}
        </div>
        <div id="tecnologiesPosition">
          <h4 id="subTitle">Pretendo aprender:</h4>
          {tecnologiesLearningSoon.map((tecnology) => (
            <div key={tecnology.nome}>
              <abbr title={tecnology.nome}>
                <img src={tecnology.imagem} alt={tecnology.nome} />
              </abbr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySkills;
