import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ProjectCardS } from '../pages/Projetos/Style';
import PortfolioContext from '../context/PortfolioContext';
import trybetunesImg from '../images/trybetunes.png';
import metawalletImg from '../images/metawallet.png';
import triviaImg from '../images/trivia.png';
import starwarsImg from '../images/starwars.png';
import appReceitasImg from '../images/appReceitas.png';

function Projects({ deviceType, isFromMain }) {
  const { setProject } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Recebe a props isFromMain e cria um objeto com o número de exibições dependendo de onde veio
  const projectSpec = isFromMain
    ? {
      desktop: 3, tablet: 1, mobile: 1, centermode: true, slidesToSlid: 2,
    }
    : {
      desktop: 1, tablet: 1, mobile: 1, centermode: false, slidesToSlid: 1,
    };

  const projetos = [
    {
      id: 1,
      nome: 'Trybetunes',
      descricao: 'Projeto de player de músicas',
      imagem: trybetunesImg,
      linkApp: 'https://project-tryetunes.vercel.app/',
      linkGitHub: 'https://github.com/holygato/Project-Trybetunes',
    },
    {
      id: 2,
      nome: 'Meta Wallet',
      descricao: 'Projeto de carteira de controle de gastos',
      imagem: metawalletImg,
      linkApp: 'https://project-trybewallet-drab.vercel.app/',
      linkGitHub: 'https://github.com/holygato/Project-Trybewallet',
    },
    {
      id: 3,
      nome: 'Trivia',
      descricao: 'Projeto de jogo de perguntas e respostas',
      imagem: triviaImg,
      linkApp: 'https://project-trivia-dun.vercel.app/',
      linkGitHub: 'https://github.com/holygato/Project-Trivia',
    },
    {
      id: 4,
      nome: 'Star Wars: Planets Search',
      descricao: 'Projeto de busca de planetas do Star Wars',
      imagem: starwarsImg,
      linkApp: 'https://project-star-wars-planets-search.vercel.app/',
      linkGitHub: 'https://github.com/holygato/Project-StarWars-Planets-Search',
    },
    {
      id: 5,
      nome: 'Recipes App',
      descricao: 'Projeto de receitas de comidas e bebidas',
      imagem: appReceitasImg,
      linkApp: 'https://project-recipes-app-jet.vercel.app/foods',
      linkGitHub: 'https://github.com/holygato/Project-Recipes-App',
    },
  ];

  // const HandleNavigate = (projeto) => {
  //   setProject(projeto);
  //   navigate(`/projetos/${projeto.id}`, { state: { projeto } });
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
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: projectSpec.mobile,
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
        }}
      >
        {projetos.map((projeto) => (
          <ProjectCardS key={projeto.id}>
            <h2>{projeto.nome}</h2>
            {!isFromMain && <p>{projeto.descricao}</p>}
            <img src={projeto.imagem} alt={projeto.nome} id="projectImg" />
            {setProject(projeto)}
            {isFromMain
              ? <button type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
              : (
                <>
                  {/* cria um botão para direcionar para a tela de detalhes */}
                  <button type="button" onClick={() => navigate(`/projetos/${projeto.id}`, { state: { projeto } })}>Ver detalhes</button>
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
  deviceType: PropTypes.string,
  isFromMain: PropTypes.bool.isRequired,
};

Projects.defaultProps = {
  deviceType: 'desktop',
};

export default Projects;
