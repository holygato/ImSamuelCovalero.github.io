import React from 'react';
import { PortfolioProvider } from './context/PortfolioProvider';
import Content from './routers/Content';
import GlobalStyle from './styles/Globals';

function App() {
  return (
    <PortfolioProvider>
      <div>
        <p>My Portfolio</p>
        <GlobalStyle />
        <Content />
      </div>
    </PortfolioProvider>
  );
}

export default App;
