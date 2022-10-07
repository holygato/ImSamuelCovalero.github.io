import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useMediaQuery } from 'react-responsive';
import PortfolioContext from './PortfolioContext';

export function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [project, setProject] = useState({});
  const [smallScreen, setSmallScreen] = useState(false);
  // const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const checkProject = () => {
      const actualProject = project;
      return actualProject;
    };
    checkProject();
  }, [project]);

  // Cria um useEffect para verificar se a tela está menor do que 768px
  useEffect(() => {
    const checkScreenSize = () => {
      // setSmallScreen(isScreenSmall);
      if (smallScreen) {
        console.log('PROVIDER é menor que 768px');
        setSmallScreen(true);
        console.log('PROVIDER smallScreen_provider', smallScreen);
      } else {
        console.log('PROVIDERé maior que 768px');
        setSmallScreen(false);
        console.log('PROVIDER smallScreen_provider', smallScreen);
      }
    };
    checkScreenSize();
  }, [smallScreen, smallScreen]);

  // Cria uma função que utiliza o useMediaQuery para verificar se o display está menor do que 768px
  // e seta como true isScreenSmall
  // const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  // Cria um useEffect para verificar se isScreenSmall é true o false e seta o valor
  // de setGlobalScreenMode
  // useEffect(() => {
  //   if (isSmallScreen) {
  //     console.log('é menor que 768px');
  //     setSmallScreen(true);
  //   } else {
  //     console.log('é maior que 768px');
  //     setSmallScreen(false);
  //   }
  // }, [isSmallScreen]);

  // console.log('projeto', projeto);
  //   ProjectDetails({ projeto });
  //   navigate(`/projetos/${projeto.id}`);

  const contextValue = useMemo(() => ({
    theme, setTheme, project, setProject, smallScreen, setSmallScreen,
  }), [theme]);

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
