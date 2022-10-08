import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import { DivExterna, ProjetosS/* , ProjectCardS  */ } from './Style';
import Projects from '../../components/Projects';
import PortfolioContext from '../../context/PortfolioContext';
import HamburgerMenu from '../../components/HeaderFooter/HamburgerMenu';

function Projetos({ deviceType }) {
  const { smallScreen, isBurgerClicked } = useContext(PortfolioContext);
  return (
    <DivExterna smallScreen={smallScreen}>
      <Header defaultPositionHeader />
      <ProjetosS smallScreen={smallScreen}>
        {console.log('isBurgerClicked', isBurgerClicked)}
        {
          isBurgerClicked
          && <HamburgerMenu />
        }
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
