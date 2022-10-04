import { createGlobalStyle } from 'styled-components';
import conthrax from '../fonts/conthrax-sb.ttf';
import neuropol from '../fonts/neuropol.otf';
import technoCapture from '../fonts/techno_capture.ttf';
// import PortfolioContext from '../context/PortfolioContext';

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
  }
  
  body html #root {
    height: 100%;
  }
`;
