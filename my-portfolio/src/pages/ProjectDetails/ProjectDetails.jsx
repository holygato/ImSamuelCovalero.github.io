import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import PortfolioContext from '../../context/PortfolioContext';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
// import Projects from '../../components/Projects';

function ProjectDetails() {
  // Desestrutura o projeto de dentro de state e de dentro de location
  const { state: { projeto } } = useLocation();

  return (
    <DivExterna>
      <ProjetosS>
        <Header />
        <h2>{projeto.nome}</h2>
        <h3>{projeto.titulo}</h3>
        <div id="projectBody">
          <div>
            <img src={projeto.imagem} alt={projeto.nome} id="projectImg" />
          </div>
          <div id="projectDetails">
            <p>{projeto.description}</p>
            {/* Cria uma span para mostrar as skills */}
            <div id="skills">
              {projeto.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div>
              <button type="button" onClick={() => window.open(projeto.linkApp, '_blank')}>Abrir projeto</button>
              <button type="button" onClick={() => window.open(projeto.linkGitHub, '_blank')}>Ver código</button>
            </div>
          </div>
        </div>
      </ProjetosS>
      <Footer phrase="Seu foco determina a sua realidade" />
    </DivExterna>
  );
}

export default ProjectDetails;
