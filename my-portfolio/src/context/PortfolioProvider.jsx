import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export function PortfolioProvider({ children }) {
  const [mode, setMode] = useState('light');

  const contextValue = useMemo(() => ({ mode, setMode }), [mode]);

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
