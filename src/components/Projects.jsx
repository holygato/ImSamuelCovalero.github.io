/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectCardS, ProjectImageS } from '../pages/Projetos/Style';
import projects from '../data/projects';
import projectTecnologies from '../data/skillBadges';
import ToMainBtn from './toMainBtn';

function Projects({ deviceType, isFromMain }) {
  const navigate = useNavigate();
  // Recebe a props isFromMain e cria um objeto com o número de exibições dependendo de onde veio
  const projectSpec = isFromMain
    ? {
      desktop: 3, tablet: 2, mobile: 1, centermode: false, slidesToSlid: 1,
    }
    : {
      desktop: 1, tablet: 1, mobile: 1, centermode: false, slidesToSlid: 1,
    };

  // Cria uma função renderBadges que recebe a array de skills do projeto, percorre
  // o array projectTecnologies e retorna as imagens que possuem o nome igual ao da skill
  const renderBadges = (skills) => skills.map((skill) => (
    projectTecnologies.map((tecnology) => (
      skill === tecnology.nome
        ? <img src={tecnology.imagem} alt={tecnology.nome} key={tecnology.nome} />
        : null
    ))
  ));

  const HandleClick = (projeto) => {
    navigate(`/projetos/${projeto.id}`, { state: { projeto } });
  };

  // Cria uma função para verificar se o mouse está sobre o card e mudar o estado isHover
  // para true ou false
  const [isHover, setIsHover] = React.useState(false);

  const HandleMouseEnter = () => {
    setIsHover(true);
  };
  const HandleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div id="projetosDiv">
      <h1>Projetos</h1>
      <Carousel
        customTransition="all .5"
        transitionDuration={500}
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        rewindWithAnimation
        additionalTransfrom={0}
        arrows
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={10000}
        centerMode={projectSpec.centermode}
        className=""
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        draggable
        focusOnSelect
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={50}
        renderButtonGroupOutside
        renderDotsOutside={false}
        showDots
        sliderClass=""
        slidesToSlide={projectSpec.slidesToSlid}
        swipeable
        ssr
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1448,
            },
            items: projectSpec.desktop,
            partialVisibilityGutter: null,
          },
          tablet: {
            breakpoint: {
              max: 1448,
              min: 464,
            },
            items: projectSpec.tablet,
            partialVisibilityGutter: null,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: projectSpec.mobile,
            partialVisibilityGutter: null,
          },
        }}
      >
        {projects.map((projeto) => (
          <ProjectCardS key={projeto.id}>
            <h2 id="projectName">{projeto.nome}</h2>
            {!isFromMain && <p>{projeto.titulo}</p>}
            {isFromMain
              ? (
                <abbr title="Clique para ver mais detalhes">
                  <div onClick={() => HandleClick(projeto)}>
                    <img src={projeto.imagem} alt={projeto.nome} id="projectImg" />
                  </div>
                </abbr>
              )
              : (
                <abbr title="Clique para ver mais detalhes">
                  <ProjectImageS
                    onClick={() => HandleClick(projeto)}
                    projectImg={projeto.imagem}
                    isHover={isHover}
                    onMouseEnter={HandleMouseEnter}
                    onMouseLeave={HandleMouseLeave}
                  >
                    <div id="projectBadgesDiv">
                      <div id="projectBadgesImgs">
                        {renderBadges(projeto.skills)}
                      </div>
                    </div>
                  </ProjectImageS>
                </abbr>
              )}
            {isFromMain
              ? <button id="verDetalhes" type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
              : (
                <>
                  <button id="verDetalhes" type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
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
                  <div id="toMainBtn">
                    <ToMainBtn />
                  </div>
                </>
              )}
          </ProjectCardS>
        ))}
      </Carousel>
    </div>
  );
}

Projects.propTypes = {
  deviceType: PropTypes.string,
  isFromMain: PropTypes.bool.isRequired,
};

Projects.defaultProps = {
  deviceType: 'desktop',
};

export default Projects;
