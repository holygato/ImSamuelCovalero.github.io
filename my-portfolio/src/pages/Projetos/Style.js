import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid green; */
  height: 100%;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, (120px, 1fr)); */
  grid-template-columns: 140px 1fr;
  grid-template-rows: 1fr 25px;
  grid-template-areas: 
    "h m"
    "f f";
`;

export const ProjetosS = styled.div`  
  grid-area: m;
  /* border: 1px solid red; */
  /* margin-top: 45px; */
  width: 80vw;
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 20px;
  h1 {
    font-size: 32px;;
    margin-top: 30px;
  }
  #projetosDivS {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
  }
  /* width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center; */
`;

export const ProjectCardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  gap: 20px; 
  padding: 10px; 
  margin-right: 20px;
  h2 {
    font-size: 28px;
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
  // Cria uma animação ao passar o mouse sobre o card
`;

export const ProjectImageS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 400px;
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
    // seta o width e height do div para ser igual ao do ProjectImageS
    width: 480px;
    height: 400px;
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
