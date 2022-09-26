/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ProjectCardS } from '../pages/Projetos/Style';
// import PortfolioContext from '../context/PortfolioContext';
import projects from '../data/projects';
import { ProjectImageS } from './Style';
import projectTecnologies from '../data/skillBadges';

function Projects({ deviceType, isFromMain }) {
  // Realizei um test em enviar o projeto para o context e puxar ele no ProjectDetails
  // porém não funcionou, então passei pelo navigate
  // const { setProject } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Recebe a props isFromMain e cria um objeto com o número de exibições dependendo de onde veio
  const projectSpec = isFromMain
    ? {
      desktop: 1, tablet: 1, mobile: 1, centermode: true, slidesToSlid: 2,
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
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  // Cria uma função para exbibir o alerta na tela de ver mais detalhes
  // const handleMouseOver = () => {
  //   console.log('Clique para ver mais detalhes');
  //   alert('Clique para ver mais detalhes');
  // };

  return (
    <div>
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
            <h2>{projeto.nome}</h2>
            {!isFromMain && <p>{projeto.titulo}</p>}
            {isFromMain
              ? (
                <div
                  onClick={() => HandleClick(projeto)}
                >
                  <abbr title="Clique para ver mais detalhes">
                    <img src={projeto.imagem} alt={projeto.nome} id="projectImg" />
                  </abbr>
                </div>
              )
              : (
                <ProjectImageS
                  onClick={() => HandleClick(projeto)}
                  projectImg={projeto.imagem}
                  isHover={isHover}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div id="projectBadgesDiv">
                    <div id="projectBadgesImgs">
                      {renderBadges(projeto.skills)}
                    </div>
                  </div>
                </ProjectImageS>
              )}
            {isFromMain
              ? <button type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
              : (
                <>
                  {/* cria um botão para direcionar para a tela de detalhes */}
                  <button type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
                  <button type="button" onClick={() => window.open(projeto.link, '_blank')}>Abrir projeto</button>
                  <button type="button" onClick={() => window.history.back()}>Voltar</button>
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
