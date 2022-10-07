import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [project, setProject] = useState({});
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkProject = () => {
      const actualProject = project;
      return actualProject;
    };
    checkProject();
  }, [project]);

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
