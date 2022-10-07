import React, { useContext, useEffect, useState } from 'react';
// import { CgDarkMode } from 'react-icons/cg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import PortfolioContext from '../../context/PortfolioContext';
import { NormalMenuS, MenuBurgerS } from './Style';
import covalero from '../../images/covalero.png';
import covaleroBurger from '../../images/covalero_burger.png';

function Header({ defaultPositionHeader }) {
  const {
    theme, setTheme, setSmallScreen, smallScreen, setIsBurgerClicked, isBurgerClicked,
  } = useContext(PortfolioContext);
  const [mountedComponent, setMountedComponent] = useState(false);
  // const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  // const [isScreenSmall, setIsScreenSmall] = useState(false);

  // Cria uma função que utiliza o useMediaQuery para verificar se o display está menor do que 768px
  // e seta como true isScreenSmall
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  // Cria um useEffect para verificar se isScreenSmall é true o false e seta o valor
  // de setGlobalScreenMode
  useEffect(() => {
    if (isSmallScreen) {
      // console.log('é menor que 768px');
      // console.log('xablau1');
      setSmallScreen(true);
    } else {
      // console.log('é maior que 768px');
      // console.log('xablau2');
      setSmallScreen(false);
    }
  }, [isSmallScreen]);

  // console.log('smallScreen', isSmallScreen);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  // cria função para chamar o setMode e mudar o tema
  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      setMountedComponent(true);
    }
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <div>
      {/* {console.log('smallScreen', smallScreen)} */}
      {smallScreen
        ? (
          <MenuBurgerS logo={covaleroBurger}>
            <div id="modeBtnBurger">
              <abbr title="Mode">
                {theme === 'light'
                  ? <MdDarkMode id="modeIcon" onClick={themeToggler} />
                  : <MdLightMode id="modeIcon" onClick={themeToggler} />}
              </abbr>
            </div>
            <div id="logoBurger">
              {/* Cria um botão com a imagem covalero que ao ser clicado seta como
              true isBurgerClicked */}
              <abbr title="Abra o Menu">
                <button id="logoBurgerBtn" type="button" onClick={() => setIsBurgerClicked(!isBurgerClicked)}>
                  <GiHamburgerMenu id="hamburgerIcon" />
                  {/* <img id="logoBurgerImg" src={covaleroBurger} alt="logo" /> */}
                </button>
              </abbr>
            </div>
            {console.log(isBurgerClicked)}
            {/* {
              isBurgerClicked
              && (
                <div id="menuBurgerDiv">
                  <a href="/">Principal</a>
                  <a href="/about">Sobre</a>
                  <a href="/projetos">Projetos</a>
                  <a href="/contact">Contato</a>
                </div>
              )
            } */}
          </MenuBurgerS>
        )
        : (
          <NormalMenuS defaultPositionHeader={defaultPositionHeader} smallScreen={smallScreen}>
            <div id="logoAndModeDiv">
              <div>
                <a href="/">
                  <img id="logo" src={covalero} alt="Covalero" />
                </a>
              </div>
              <div id="modeBtn">
                <abbr title="Mode">
                  {theme === 'light'
                    ? <MdDarkMode id="modeIcon" onClick={themeToggler} />
                    : <MdLightMode id="modeIcon" onClick={themeToggler} />}
                </abbr>
              </div>
            </div>
            <div id="navegation">
              <a href="/">Principal</a>
              <a href="/about">Sobre</a>
              <a href="/projetos">Projetos</a>
              <a href="/contact">Contato</a>
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
