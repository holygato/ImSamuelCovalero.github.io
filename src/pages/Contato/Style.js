import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid green; */
  height: 100%;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, (120px, 1fr)); */
  grid-template-columns: ${(props) => (props.smallScreen ? '1fr' : '140px 1fr')};
  grid-template-rows: ${(props) => (props.smallScreen ? '35px 1fr 30px' : '1fr 30px')};
  grid-template-areas: ${(props) => (props.smallScreen
    ? `'h'
      'm'
      'f'`
    : `'h m'
    'f f'`)};
`;

export const ContatoS = styled.div`  
  grid-area: m;
  /* border: ${(props) => (props.smallScreen ? '1px solid red' : '1px solid blue')}; */
  width: ${(props) => (props.smallScreen ? '100%' : '80vw')};
  height: ${(props) => (props.smallScreen ? '93vh' : '97vh')};
  @media (max-width: 768px) {
    width: 100%;
    height: 89vh;
  }
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;

  #contactItens {
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }
    a {
      text-decoration: none;
      color: var(--secundary);
    }
    abbr[title] {
      text-decoration: none;
    }
    @media (max-width: 768px) {
      width: 95vw;
    }
  }
  #h1Title {
    margin-bottom: 15px;
    h1 {
      font-size: 32px;
    }
  }
`;
