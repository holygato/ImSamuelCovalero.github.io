import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Content from './routers/Content';
import GlobalStyle from './styles/Globals';
import PortfolioContext from './context/PortfolioContext';
import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const { theme } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <GlobalStyle />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
