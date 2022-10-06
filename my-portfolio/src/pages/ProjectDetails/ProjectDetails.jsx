import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
// import PortfolioContext from '../../context/PortfolioContext';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
// import Projects from '../../components/Projects';
import projectTecnologies from '../../data/skillBadges';
import ToMainBtn from '../../components/toMainBtn';

function ProjectDetails() {
  // Desestrutura o projeto de dentro de state e de dentro de location
  const { state: { projeto } } = useLocation();
  const navigate = useNavigate();

  const renderBadges = (skills) => skills.map((skill) => (
    projectTecnologies.map((tecnology) => (
      skill === tecnology.nome
        ? <img src={tecnology.imagem} alt={tecnology.nome} key={tecnology.nome} />
        : null
    ))
  ));

  return (
    <DivExterna>
      <Header defaultPositionHeader />
      <ProjetosS>
        <h1 id="projectName">{projeto.nome}</h1>
        <h3>{projeto.titulo}</h3>
        <div id="projectBody">
          <div>
            <img src={projeto.imagem} alt={projeto.nome} id="projectImg" />
          </div>
          <div id="projectDetails">
            <p>{projeto.description}</p>
            {/* Cria uma span para mostrar as skills */}
            <div id="skills">
              {renderBadges(projeto.skills)}
            </div>
            <div id="vercelGithub">
              <abbr title="abrir o projeto">
                <a href={projeto.linkApp} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt id="vercelGithubIcons" />
                </a>
              </abbr>
              <abbr title="ver o código">
                <a href={projeto.linkGitHub} target="_blank" rel="noreferrer">
                  <FaGithub id="vercelGithubIcons" />
                </a>
              </abbr>
            </div>
          </div>
        </div>
        {/* Cria um botão para voltar para a página de projetos */}
        <button id="toProjectsBtn" type="button" onClick={() => navigate('/projetos', { state: { projeto } })}>Página de Projetos</button>
        <div id="toMainBtn">
          <ToMainBtn />
        </div>
      </ProjetosS>
      <Footer phrase="Seu foco determina a sua realidade" isFooterRelative />
    </DivExterna>
  );
}

export default ProjectDetails;
