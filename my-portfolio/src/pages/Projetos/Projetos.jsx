import React from 'react';
import PropTypes from 'prop-types';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Projects from '../../components/Projects';

function Projetos({ deviceType }) {
  return (
    <DivExterna>
      <Header defaultPositionHeader />
      <ProjetosS>
        <div id="projetosDivS">
          <Projects deviceType={deviceType} isFromMain={false} />
        </div>
      </ProjetosS>
      <Footer phrase="Fazer ou não fazer, tentativa não há" isFooterRelative />
    </DivExterna>
  );
}

Projetos.propTypes = {
  deviceType: PropTypes.string,
};

Projetos.defaultProps = {
  deviceType: 'desktop',
};

export default Projetos;
