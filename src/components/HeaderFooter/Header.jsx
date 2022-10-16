import React, { useContext, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbLetterX } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import PortfolioContext from '../../context/PortfolioContext';
import { NormalMenuS, MenuBurgerS } from './Style';
import ThemeComponent from '../ThemeComponent';

function Header({ defaultPositionHeader }) {
  const {
    setSmallScreen, smallScreen, setIsBurgerClicked, isBurgerClicked,
  } = useContext(PortfolioContext);

  // Cria uma função que utiliza o useMediaQuery para verificar se o display está menor do que 768px
  // e seta como true isScreenSmall
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  // Cria um useEffect para verificar se isScreenSmall é true o false e seta o valor
  // de setGlobalScreenMode
  useEffect(() => {
    if (isSmallScreen) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [isSmallScreen]);

  return (
    <div>
      {smallScreen
        ? (
          <MenuBurgerS>
            <div id="modeBtnBurger">
              <ThemeComponent />
            </div>
            <div id="logoBurger">
              {isBurgerClicked
                ? (
                  <abbr title="Feche o Menu">
                    <button type="button" id="XIconBtn" onClick={() => setIsBurgerClicked(false)}>
                      <TbLetterX id="XIcon" />
                    </button>
                  </abbr>
                )
                : (
                  <abbr title="Abra o Menu">
                    <button id="iconBurgerBtn" type="button" onClick={() => setIsBurgerClicked(!isBurgerClicked)}>
                      <GiHamburgerMenu id="hamburgerIcon" />
                    </button>
                  </abbr>
                )}
            </div>
          </MenuBurgerS>
        )
        : (
          <NormalMenuS defaultPositionHeader={defaultPositionHeader} smallScreen={smallScreen}>
            <div id="logoAndModeDiv">
              <div>
                <a href="/">
                  <img id="logo" src="/images/covaleroLogo.svg" alt="Logo Covalero" />
                </a>
              </div>
              <ThemeComponent />
            </div>
            <div id="navegation">
              <a href="/">Principal</a>
              <a href="/sobre">Sobre</a>
              <a href="/projetos">Projetos</a>
              <a href="/contato">Contato</a>
            </div>
          </NormalMenuS>
        )}
    </div>
  );
}

Header.propTypes = {
  defaultPositionHeader: PropTypes.bool.isRequired,
};

export default Header;
