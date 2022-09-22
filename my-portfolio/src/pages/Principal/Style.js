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
  text-align: center;
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
  // posiciona o elemento deslize na parte inferior esquerda da tela
  #deslize {
    /* border: 1px solid red; */
    position: fixed;
    bottom: 18px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55px;
    img {
      /* border: 1px solid blue; */
      width: 35px;
      height: 35px;
      display: flex;
    }
  }
`;

export const SkillsS = styled.div`  
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  // posiciona a divSobremimCurriculo no topo da página
  #divSobremimCurriculo {
    display: flex;
    flex-direction: column;
    /* align-items: start; */
    /* width: 100%; */
    height: 40%;
    margin-top: 100px;
  }
  #mySkillsComponent {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 100vh;
  }
  /* #imagesDiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-self: center;
  } */
  /* #imageElement {
    display: flex;
    img{
      height: 40px;
      width: 50px;
    }
  } */
  #skills {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-self: center;
    width: 100%;
    height: 100%;
    animation: rotate 15s infinite linear;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    animation-name: spincircle;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 25s;
    transform-style: preserve-3d;
    transform-origin: 50px 50px 0;
    width: 50px;
    height: 50px;
    perspective: 1000px;
    perspective-origin: 50px 50px;
    @keyframes spincircle {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      100% {
        transform: rotateY(360deg) rotateX(360deg);
      }
    }
    
    div {
      position: absolute;
      margin-top: 150px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      transform-style: preserve-3d;
      transform-origin: 50px 50px 0;
      perspective: 1000px;
      perspective-origin: 50px 50px;
      animation-name: spincircle;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite; 
      @keyframes spincircle {
        0% {
          transform: rotateY(0deg) rotateX(0deg);
        }
        100% {
          transform: rotateY(360deg) rotateX(360deg);
        }
      }
    }

    div:nth-child(1) {
      transform: rotateY(240deg) rotateZ(300deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(2) {
      transform: rotateZ(90deg) rotateZ(100deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(3) {
      transform: rotateY(240deg) rotateZ(60deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(4) {
      transform: rotateX(60deg)  rotateX(-300deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(5) {
      transform: rotateY(-180deg) rotateX(100deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(6) {
      transform: rotateY(300deg) rotateX(-90deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(7) {
      transform: rotateY(-30deg) rotateZ(100deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(8) {
      transform: rotateZ(150deg) rotateX(-100deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(9) {
      transform: rotateX(-270deg) rotateZ(120deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(10) {
      transform: rotateY(240deg) rotateX(300deg) rotateZ(120deg) translateZ(100px);
    }
    div:nth-child(11) {
      transform: rotateZ(120deg) rotateZ(100deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(12) {
      transform: rotateX(60deg)  rotateX(-150deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(13) {
      transform: rotateY(-180deg) rotateX(180deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(14) {
      transform: rotateY(300deg) rotateX(1800deg) rotateX(320deg) translateZ(100px);
    }
    /* div:nth-child(15) {
      transform: rotateY(30deg) rotateZ(-100deg) rotateX(120deg) translateZ(100px);
    } */
    div:nth-child(16) {
      transform: rotateZ(150deg) rotateX(-100deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(17) {
      transform: rotateX(-270deg) rotateZ(120deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(18) {
      transform: rotateY(90deg) rotateZ(180deg) rotateX(30deg) translateZ(100px);
    }
    div:nth-child(19) {
      transform: rotateZ(120deg) rotateY(-100deg) rotateX(-120deg) translateZ(100px);
    }
    div:nth-child(20) {
      transform: rotateY(240deg) rotateZ(60deg) rotateX(120deg) translateZ(100px);
    }
    div:nth-child(21) {
      transform: rotateX(40deg)  rotateX(120deg) rotateZ(-120deg) translateZ(100px);
    }
    div:nth-child(22) {
      transform: rotateY(-180deg) rotateX(180deg) rotateZ(120deg) translateZ(100px);
    }
    div:nth-child(23) {
      transform: rotateY(300deg) rotateX(-90deg) rotateX(120deg) translateZ(100px);
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #fff;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      position: absolute;
      top: 0;
      left: 0;
      transform-style: preserve-3d;
      transform-origin: 50px 50px 0;
    }
  }
  

  @keyframes spincircle {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
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

// export const ProjectCardS = styled.div`
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
//   height: 80vh;
// `;

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
