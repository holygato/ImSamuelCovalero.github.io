// Cria um componente para exibir o rodapé

import React from 'react';
import PropTypes from 'prop-types';
import { FooterS } from './Style';

function Footer({ phrase, isFooterRelative }) {
  // console.log('Footer', isFooterRelative);
  return (
    <FooterS isFooterRelative={isFooterRelative}>
      <h3>{phrase}</h3>
      {/* <p>Fazer ou não fazer, tentativa não há</p> */}
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
