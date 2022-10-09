import { createGlobalStyle } from 'styled-components';
import conthrax from '../fonts/conthrax-sb.ttf';
import neuropol from '../fonts/neuropol.otf';
import technoCapture from '../fonts/techno_capture.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Conthrax';
    src: local('Conthrax'), local('Conthrax'),
    url(${conthrax}) format('truetype');
    font-style: normal;
    font-family: 'Neuropol';
    src: local('Neuropol'), local('Neuropol'),
    url(${neuropol}) format('opentype');
    font-style: normal;
    font-family: 'TechnoCapture';
    src: local('TechnoCapture'), local('TechnoCapture'),
    url(${technoCapture}) format('truetype');
    font-style: normal;
  }
  * {
    padding: 0;
    font-size: 16px;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Conthrax';
    background: ${({ theme }) => theme.background};
    /* transition: all 0.03s linear; */
    color: ${({ theme }) => theme.paragraph};
    h1 {
      color: ${({ theme }) => theme.headline};
    }
  }
  
  body html #root {
    height: 100%;
  }

  //define as cores do root
  :root {
    --background: ${({ theme }) => theme.background};
    --main: ${({ theme }) => theme.main};
    --headline: ${({ theme }) => theme.headline};
    --paragraph: ${({ theme }) => theme.paragraph};
    --buttonBorder: ${({ theme }) => theme.buttonBorder};
    --buttonText: ${({ theme }) => theme.buttonText};
    --buttonBackground: ${({ theme }) => theme.buttonBackground};
    --secundary: ${({ theme }) => theme.secundary};
    --tertiary: ${({ theme }) => theme.tertiary};
    --extra: ${({ theme }) => theme.extra};
  }
`;
