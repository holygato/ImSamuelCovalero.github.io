import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import PortfolioContext from './PortfolioContext';

export function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [project, setProject] = useState({});
  const [smallScreen, setSmallScreen] = useState(useMediaQuery({ query: '(max-width: 768px)' }));
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  useEffect(() => {
    const checkProject = () => {
      const actualProject = project;
      return actualProject;
    };
    checkProject();
  }, [project]);

  // Cria um useEffect para verificar se smallScreen é true o false e seta o valor
  // de isBurgetClicked para false
  useEffect(() => {
    const checkSmallScreen = () => {
      if (!smallScreen) {
        setIsBurgerClicked(false);
      }
    };
    checkSmallScreen();
  }, [smallScreen]);

  /*
    Versão mais atual do React, foi alterado o modo de passar o contexto,
    necessitando a utilização do useMemo, os estados que precisam ser atualizados
    nos componentes são passados na array de dependências do useMemo
  */
  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    project,
    setProject,
    smallScreen,
    setSmallScreen,
    isBurgerClicked,
    setIsBurgerClicked,
  }), [theme, smallScreen, isBurgerClicked]);

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioProvider;
