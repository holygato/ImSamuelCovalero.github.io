// Cria um componente para exibir o rodapé

import React from 'react';
import PropTypes from 'prop-types';
import { FooterS } from './Style';

function Footer({ phrase, isFooterRelative }) {
  return (
    <FooterS isFooterRelative={isFooterRelative}>
      <h3 id="phrase">{phrase}</h3>
      {/* <p>Fazer ou não fazer, tentativa não há</p> */}
      <p id="copyright">Desenvolvido por Samuel em ReactJS e Styled C. © 2022</p>
    </FooterS>
  );
}

Footer.propTypes = {
  phrase: PropTypes.string.isRequired,
  isFooterRelative: PropTypes.bool,
};

Footer.defaultProps = {
  isFooterRelative: false,
};

export default Footer;
