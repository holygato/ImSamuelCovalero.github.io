// Cria uma página para exibir os projetos

import React from 'react';
// import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import Header from '../../components/Header';
import 'react-multi-carousel/lib/styles.css';
import DivS from './Style';

function Projetos(/* { deviceType } */) {
  // Cria um carrousel para exibir os projetos
  // Cria uma array com os 5 projetos
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
      <Header />
      <h1>Projetos</h1>
      <Carousel
        customTransition="all .5"
        transitionDuration={5000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        rewindWithAnimation
        additionalTransfrom={0}
        arrows
        // autoPlay={deviceType !== 'mobile'}
        // autoPlaySpeed={8000}
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
        renderDotsOutside
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
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
      >
        {projetos.map((projeto) => (
          <DivS key={projeto.id}>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <img src={projeto.imagem} alt={projeto.nome} />
          </DivS>
        ))}
      </Carousel>
    </div>
  );
}

// Projetos.propTypes = {
//   deviceType: PropTypes.string.isRequired,
// };

export default Projetos;
