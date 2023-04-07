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

export const ProjetosS = styled.div`  
  grid-area: m;
  /* border: ${(props) => (props.smallScreen ? '1px solid red' : '1px solid blue')}; */
  width: ${(props) => (props.smallScreen ? '100vw' : '80vw')};
  height: ${(props) => (props.smallScreen ? '92vh' : '96vh')};
  @media (max-width: 768px) {
    height: 100%;
  }
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5px;

  h1 {
    font-size: 32px;
    margin-top: 25px;
  }

  #projetosDivS {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    @media (max-width: 768px) {
      min-height: 100vh;
    }
  }
`;

export const ProjectCardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  @media (max-width: 768px) {
    min-height: 100%;
  }
  gap: 20px; 
  padding: 10px; 
  margin-right: 20px;
  #projectName {
    font-size: 28px;
    @media (max-width: 768px) {
      font-size: 18px !important;
    }
  }
  #title {
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 12px !important;
    }
  }
  #verDetalhes {
    background-color: var(--tertiary);
    color: var(--buttonText);
    border: 2px solid var(--secundary);
    width: 110px;
    height: 28px;
    line-height: 2.5em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: 'Conthrax';
    box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
    cursor: pointer;
    border-radius: 3px;
  }
  #vercelGithub {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7px;
    #vercelGithubIcons {
          width: 23px;
          height: 23px;
        }
    a {
      color: var(--extra);
    }
  }
`;

export const ProjectImageS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 400px;
  @media (max-width: 768px) {
    width: 280px;
    height: 200px;
  }
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  // recebe uma props projectImg e a usa como background
  background: url(${(props) => props.projectImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  #projectBadgesDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
    height: 400px;
    @media (max-width: 768px) {
      width: 280px;
      height: 200px;
    }
    background-color: ${(props) => (props.isHover ? 'rgb(216 212 242 / 72%)' : 'transparent')};
  }
  
  #projectBadgesImgs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 90%;
    // altera a visibilidade das skills de acordo com o mouse hover
    visibility: ${(props) => (props.isHover ? 'visible' : 'hidden')};
    // adiciona box-shadow em cada um dos itens
    img {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
