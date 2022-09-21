// Cria um componente para exibir o rodapé

import React from 'react';
import PropTypes from 'prop-types';
import { FooterS } from './Style';

function Footer({ phrase, isWheelActive }) {
  return (
    <FooterS isWheelActive={isWheelActive}>
      <h3>{phrase}</h3>
      {/* <p>Fazer ou não fazer, tentativa não há</p> */}
    </FooterS>
  );
}

Footer.propTypes = {
  phrase: PropTypes.string.isRequired,
  isWheelActive: PropTypes.bool,
};

Footer.defaultProps = {
  isWheelActive: false,
};

export default Footer;
