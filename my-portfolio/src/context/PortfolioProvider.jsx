import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export function PortfolioProvider({ children }) {
  const [mode, setMode] = useState('light');
  const [project, setProject] = useState({});

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
    mode, setMode, project, setProject,
  }), [mode]);

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
