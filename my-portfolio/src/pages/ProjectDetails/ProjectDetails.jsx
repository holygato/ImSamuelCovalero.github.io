import React from 'react';
import PropTypes from 'prop-types';
// import project1 from '../../images/trybetunes.png';

function ProjectDetails({ project }) {
  // Recebe a props project e exibe os dados do projeto
  console.log('projectDetails', project);

  return (
    <div>
      <h1>{project.nome}</h1>
      <p>{project.descricao}</p>
      <img src={project.imagem} alt={project.nome} />
      <a href={project.link} target="_blank" rel="noreferrer">
        Acessar
      </a>
    </div>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    nome: PropTypes.string,
    descricao: PropTypes.string,
    imagem: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectDetails;
