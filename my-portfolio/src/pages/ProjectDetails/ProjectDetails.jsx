import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import PortfolioContext from '../../context/PortfolioContext';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';

function ProjectDetails() {
  // Desestrutura o projeto de dentro de state e de dentro de location
  const { state: { projeto } } = useLocation();

  return (
    <DivExterna>
      <ProjetosS>
        <Header />
        <h1>{projeto.nome}</h1>
        <p>{projeto.descricao}</p>
        <img src={projeto.imagem} alt={projeto.nome} />
        <a href={projeto.link} target="_blank" rel="noreferrer">
          Acessar
        </a>
      </ProjetosS>
      <Footer phrase="Seu foco determina a sua realidade" />
    </DivExterna>
  );
}

export default ProjectDetails;
