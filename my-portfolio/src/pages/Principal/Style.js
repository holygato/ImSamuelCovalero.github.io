// usar a font conthrax
import styled from 'styled-components';
// import fonte from '../../data/conthrax-sb.ttf';

export const DivExterna = styled.div`
  /* font-family: 'Conthrax'; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const PrincipalS = styled.div` 
  /* font-family: 'Conthrax'; */
  border: 1px solid red;
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  #principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  //cria uma animação para exibir o texto
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(30px);
    } 
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  #firstPart {
    opacity: 0;
    animation: fadeIn 3s;
    animation-fill-mode: forwards;
    animation-delay: 0s;
  }
  #secondPart {
    opacity: 0;
    animation: show 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  #contato {
    opacity: 0;
    animation: show 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
`;

export const SkillsS = styled.div`  
  border: 1px solid red;
  margin-top: 45px;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  #tecnologias {
    /* margin-left:25%; */
    border: 1px solid blue;
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    gap: 20px;
  }
  #tecnologiesPosition {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      margin-bottom: 10px;
    }
  }
`;

export const ProjetosS = styled.div`  
  border: 1px solid red;
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const ProjectCardS = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;

export const ContatoS = styled.div`  
  border: 1px solid red;
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
`;
