import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { ProjectCardS } from '../pages/Projetos/Style';
// import {
//   DivExterna, PrincipalS, ProjectCardS, ContatoS, SkillsS,
// } from './Style';

function Projects({ deviceType, isFromMain }) {
  // Recebe a props isFromMain e cria um objeto com o número de exibições dependendo de onde veio
  const projectNumber = isFromMain
    ? { desktop: 5, tablet: 3, mobile: 3 }
    : { desktop: 1, tablet: 1, mobile: 1 };
  // if (isFromMain) {
  //   const projectNumber = {
  //     desktop: 5,
  //     mobile: 3,
  //     tablet: 4,
  //   };
  // } else {
  //   const projectNumber = {
  //     desktop: 1,
  //     mobile: 1,
  //     tablet: 1,
  //   };
  //   return projectNumber;
  // }
  const projetos = [
    {
      id: 1,
      nome: 'Projeto 1',
      descricao: 'Descrição do projeto 1',
      imagem: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      nome: 'Projeto 2',
      descricao: 'Descrição do projeto 2',
      imagem: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      nome: 'Projeto 3',
      descricao: 'Descrição do projeto 3',
      imagem: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      nome: 'Projeto 4',
      descricao: 'Descrição do projeto 4',
      imagem: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      nome: 'Projeto 5',
      descricao: 'Descrição do projeto 5',
      imagem: 'https://picsum.photos/200/300',
    },
  ];

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
