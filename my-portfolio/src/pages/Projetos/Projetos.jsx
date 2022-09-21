import React from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Projects from '../../components/Projects';

function Projetos({ deviceType }) {
  // Cria um carrousel para exibir os projetos
  // Cria uma array com os 5 projetos
  // const projetos = [
  //   {
  //     id: 1,
  //     nome: 'Projeto 1',
  //     descricao: 'Descrição do projeto 1',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 2,
  //     nome: 'Projeto 2',
  //     descricao: 'Descrição do projeto 2',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 3,
  //     nome: 'Projeto 3',
  //     descricao: 'Descrição do projeto 3',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 4,
  //     nome: 'Projeto 4',
  //     descricao: 'Descrição do projeto 4',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 5,
  //     nome: 'Projeto 5',
  //     descricao: 'Descrição do projeto 5',
  //     imagem: 'https://picsum.photos/200/300',
  //   },
  // ];
  return (
    <DivExterna>
      <ProjetosS>
        <Header />
        <Projects deviceType={deviceType} isFromMain={false} />
      </ProjetosS>
      <Footer phrase="Fazer ou não fazer, tentativa não há" />
    </DivExterna>
  );
}

Projetos.propTypes = {
  deviceType: PropTypes.string.isRequired,
};

export default Projetos;
