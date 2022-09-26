import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
// import PortfolioContext from '../../context/PortfolioContext';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
// import Projects from '../../components/Projects';
import projectTecnologies from '../../data/skillBadges';

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
              {renderBadges(projeto.skills)}
            </div>
            <div>
              <button type="button" onClick={() => window.open(projeto.linkApp, '_blank')}>Abrir projeto</button>
              <button type="button" onClick={() => window.open(projeto.linkGitHub, '_blank')}>Ver código</button>
            </div>
          </div>
        </div>
        {/* Cria um botão para voltar para a página de projetos */}
        <button type="button" onClick={() => window.history.back()}>Voltar</button>
        {/* Cria um botão que direciona para a página de projetos */}
        <button type="button" onClick={() => navigate('/projetos', { state: { projeto } })}>Página de Projetos</button>
      </ProjetosS>
      <Footer phrase="Seu foco determina a sua realidade" />
    </DivExterna>
  );
}

export default ProjectDetails;
