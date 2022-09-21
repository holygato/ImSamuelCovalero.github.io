import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ProjectCardS } from '../pages/Projetos/Style';
import project1 from '../images/trybetunes.png';
import PortfolioContext from '../context/PortfolioContext';

function Projects({ deviceType, isFromMain }) {
  const { setProject } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Recebe a props isFromMain e cria um objeto com o número de exibições dependendo de onde veio
  const projectNumber = isFromMain
    ? { desktop: 5, tablet: 2, mobile: 1 }
    : { desktop: 1, tablet: 1, mobile: 1 };

  const projetos = [
    {
      id: 1,
      nome: 'Trybetunes',
      descricao: 'Projeto de player de músicas',
      imagem: project1,
      link: 'https://project-tryetunes.vercel.app/',
    },
    {
      id: 2,
      nome: 'Projeto 2',
      descricao: 'Descrição do projeto 2',
      imagem: 'https://picsum.photos/200/300',
      link: 'https://project-tryetunes.vercel.app/',
    },
    {
      id: 3,
      nome: 'Projeto 3',
      descricao: 'Descrição do projeto 3',
      imagem: 'https://picsum.photos/200/300',
      link: 'https://project-tryetunes.vercel.app/',
    },
    {
      id: 4,
      nome: 'Projeto 4',
      descricao: 'Descrição do projeto 4',
      imagem: 'https://picsum.photos/200/300',
      link: 'https://project-tryetunes.vercel.app/',
    },
    {
      id: 5,
      nome: 'Projeto 5',
      descricao: 'Descrição do projeto 5',
      imagem: 'https://picsum.photos/200/300',
      link: 'https://project-tryetunes.vercel.app/',
    },
  ];

  const HandleNavigate = (projeto) => {
    // envia para a rota de detalhes do projeto o projeto clicado e direciona para a página
    setProject(projeto);
    navigate('/projetos/detalhes');
  };

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
        centerMode={false}
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
        slidesToSlide={1}
        swipeable
        ssr
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: projectNumber.desktop,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: projectNumber.mobile,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: projectNumber.tablet,
            partialVisibilityGutter: 30,
          },
        }}
      >
        {projetos.map((projeto) => (
          <ProjectCardS key={projeto.id}>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <img src={projeto.imagem} alt={projeto.nome} />
            {isFromMain
              ? <button type="button">Ver detalhes</button>
              : (
                <>
                  {/* cria um botão para direcionar para a tela de detalhes */}
                  <button type="button" onClick={HandleNavigate(projeto)}>Ver detalhes</button>
                  <button type="button" onClick={() => window.open(projeto.link, '_blank')}>Abrir projeto</button>
                </>
              )}
          </ProjectCardS>
        ))}
      </Carousel>
    </div>
  );
}

Projects.propTypes = {
  deviceType: PropTypes.string.isRequired,
  isFromMain: PropTypes.bool.isRequired,
};

export default Projects;
