// usar a font conthrax
import styled from 'styled-components';
// import fonte from '../../data/conthrax-sb.ttf';

export const DivExterna = styled.div`
  /* border: 3px solid blue; */
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

export const PrincipalS = styled.div` 
  /* background-color: rgb(216 212 242 / 82%); */
  grid-area: m;
  /* border: 2px solid green; */
  width: 92vw;
  @media (max-width: 1150px) {
    width: 86vw;
  }
  @media (max-width: 1050px) {
    width: 84vw;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;

  /**
    ** Div da Main
  */
  #principalS {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    // centraliza o conteúdo
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: 50%;
    padding: 50px;
    @media (max-width: 1688px) {
      width: 65%;
    }
    @media (max-width: 1488px) {
      width: 80%;
    }
    @media (max-width: 1088px) {
      width: 90%;
    }
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
    margin-top: 20px;
    #meContacteBtn{
      background-color: var(--buttonBackground);
      color: var(--buttonText);
      border: 2px solid var(--buttonBorder);
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-decoration: none !important;
      width: 170px;
      height: 40px;
      border-radius: 3px;
      line-height: 2.5em;
      font-size: 14px;
      font-family: 'Conthrax';
      box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
      cursor: pointer;
    }
  }

  // posiciona o elemento deslize na parte inferior direita da tela
  #deslize {
    /* border: 1px solid red; */
    position: fixed;
    bottom: 18px;
    right: 0;
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55px;
    font-size: 12px;
    #arrowDown {
      width: 30px;
      height: 30px;
      color: var(--tertiary);
      // posiciona o elemento no canto direito
      margin-right: -30px;
    }
    p {
      font-size: 12px;
      color: var(--secundary);
    }
    img {
      /* border: 1px solid blue; */
      width: 55px;
      height: 35px;
      display: flex;
      color: var(--secundary);
    }
  }
  #deslize2 {
    /* border: 1px solid red; */
    position: fixed;
    bottom: 18px;
    left: 0;
    margin-left: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55px;
    font-size: 12px;
    #arrowDown {
      width: 30px;
      height: 30px;
      color: var(--tertiary);
      // posiciona o elemento no canto direito
      margin-left: -30px;
    }
    p {
      font-size: 12px;
      color: var(--secundary);
    }
    img {
      /* border: 1px solid blue; */
      width: 55px;
      height: 35px;
      display: flex;
      color: var(--secundary);
    }
  }

  /**
    ** Div de Tecnologias
  */
  #skillsS {
    /* grid-area: m; */
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    /* margin-top: 45px; */
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;

    #divSobremimCurriculo {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 40%;
      margin-top: 100px;
      gap: 15px;
      h1 {
        font-size: 32px;
        margin-bottom: 10px;
      }
      #sobreMimBtn {
        background-color: var(--tertiary);
        color: var(--buttonText);
        border: 2px solid var(--secundary);
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        width: 110px;
        height: 28px;
        border-radius: 3px;
        font-size: 12px;
        line-height: 2.5em;
        font-size: 14px;
        font-family: 'Conthrax';
        box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
        cursor: pointer;
      }
      #curriculum {
        background-color: var(--buttonBackground);
        color: var(--buttonText);
        border: 2px solid var(--buttonBorder);
        text-decoration: none !important;
        width: 170px;
        height: 40px;
        border-radius: 3px;
        line-height: 2.5em;
        font-size: 14px;
        font-family: 'Conthrax';
        box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
        cursor: pointer;
      }
    }
    #mySkillsComponent {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 100vh;
      h1 {
        font-size: 22px;
        margin-bottom: 20px;
      }
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
          border: 2px solid var(--headline);
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
    }
  }

  #projetosS {
    /* grid-area: m; */
    /* border: 1px solid green; */
    /* margin-top: 45px; */
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    h1 {
      font-size: 32px;
      margin-top: 30px;
    }
    #projetosDiv {
      /* border: 2px solid red; */
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      #verDetalhes {
        background-color: var(--tertiary);
        color: var(--buttonText);
        border: 2px solid var(--secundary);
        width: 110px;
        height: 28px;
        border-radius: 3px;
        line-height: 2.5em;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-family: 'Conthrax';
        box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
        cursor: pointer;
      }
    }
    h2 {
      font-size: 24px !important;
      @media (max-width: 968px) {
        font-size: 18px !important;
      }
      @media (max-width: 768px) {
        font-size: 12px !important;
      }
    }

    #projectImg {
      &:hover {
        transform: scale(1.015);
        transition: 0.8s;
      }
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    }

    img {
      width: 350px;
      height: 300px;

      @media (max-width: 968px) {
        width: 280px;
        height: 230px;
      }

      @media (max-width: 768px) {
        width: 200px;
        height: 150px;
      }
    }

    #deslize {
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
  }

  #contatosS {
    /* border: 1px solid red; */
    /* margin-top: 45px; */
    width: 100%;
    height: 100vh;
    justify-content: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
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
  }
`;

// export const SkillsS = styled.div`
//   grid-area: m;
//   /* border: 1px solid red; */
//   display: flex;
//   flex-direction: column;
//   margin-top: 45px;
//   width: 90vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   justify-items: center;
//   // posiciona a divSobremimCurriculo no topo da página
//   #divSobremimCurriculo {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     height: 40%;
//     margin-top: 100px;
//     gap: 20px;
//     h1 {
//       font-size: 22px;
//       margin-bottom: 10px;
//     }
//   }
//   #mySkillsComponent {
//     /* border: 1px solid red; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 200px;
//     height: 100vh;
//     h1 {
//       font-size: 22px;
//       margin-bottom: 20px;
//     }
//   }
//   /* #imagesDiv {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-self: center;
//   } */
//   /* #imageElement {
//     display: flex;
//     img{
//       height: 40px;
//       width: 50px;
//     }
//   } */
//   #skills {
//     display: flex;
//     align-items: center;
//     justify-items: center;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-self: center;
//     width: 100%;
//     height: 100%;
//     animation: rotate 15s infinite linear;
//     animation-fill-mode: forwards;
//     animation-delay: 0s;
//     animation-name: spincircle;
//     animation-timing-function: ease-in-out;
//     animation-iteration-count: infinite;
//     animation-duration: 25s;
//     transform-style: preserve-3d;
//     transform-origin: 50px 50px 0;
//     width: 50px;
//     height: 50px;
//     perspective: 1000px;
//     perspective-origin: 50px 50px;
//     @keyframes spincircle {
//       0% {
//         transform: rotateY(0deg) rotateX(0deg);
//       }
//       100% {
//         transform: rotateY(360deg) rotateX(360deg);
//       }
//     }

//     div {
//       position: absolute;
//       margin-top: 150px;
//       width: 50px;
//       height: 50px;
//       border-radius: 50%;
//       background-color: #fff;
//       box-shadow: 0 0 10px rgba(0,0,0,0.5);
//       transform-style: preserve-3d;
//       transform-origin: 50px 50px 0;
//       perspective: 1000px;
//       perspective-origin: 50px 50px;
//       animation-name: spincircle;
//       animation-timing-function: ease-in-out;
//       animation-iteration-count: infinite;
//       @keyframes spincircle {
//         0% {
//           transform: rotateY(0deg) rotateX(0deg);
//         }
//         100% {
//           transform: rotateY(360deg) rotateX(360deg);
//         }
//       }
//     }

//     div:nth-child(1) {
//       transform: rotateY(240deg) rotateZ(300deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(2) {
//       transform: rotateZ(90deg) rotateZ(100deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(3) {
//       transform: rotateY(240deg) rotateZ(60deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(4) {
//       transform: rotateX(60deg)  rotateX(-300deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(5) {
//       transform: rotateY(-180deg) rotateX(100deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(6) {
//       transform: rotateY(300deg) rotateX(-90deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(7) {
//       transform: rotateY(-30deg) rotateZ(100deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(8) {
//       transform: rotateZ(150deg) rotateX(-100deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(9) {
//       transform: rotateX(-270deg) rotateZ(120deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(10) {
//       transform: rotateY(240deg) rotateX(300deg) rotateZ(120deg) translateZ(100px);
//     }
//     div:nth-child(11) {
//       transform: rotateZ(120deg) rotateZ(100deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(12) {
//       transform: rotateX(60deg)  rotateX(-150deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(13) {
//       transform: rotateY(-180deg) rotateX(180deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(14) {
//       transform: rotateY(300deg) rotateX(1800deg) rotateX(320deg) translateZ(100px);
//     }
//     /* div:nth-child(15) {
//       transform: rotateY(30deg) rotateZ(-100deg) rotateX(120deg) translateZ(100px);
//     } */
//     div:nth-child(16) {
//       transform: rotateZ(150deg) rotateX(-100deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(17) {
//       transform: rotateX(-270deg) rotateZ(120deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(18) {
//       transform: rotateY(90deg) rotateZ(180deg) rotateX(30deg) translateZ(100px);
//     }
//     div:nth-child(19) {
//       transform: rotateZ(120deg) rotateY(-100deg) rotateX(-120deg) translateZ(100px);
//     }
//     div:nth-child(20) {
//       transform: rotateY(240deg) rotateZ(60deg) rotateX(120deg) translateZ(100px);
//     }
//     div:nth-child(21) {
//       transform: rotateX(40deg)  rotateX(120deg) rotateZ(-120deg) translateZ(100px);
//     }
//     div:nth-child(22) {
//       transform: rotateY(-180deg) rotateX(180deg) rotateZ(120deg) translateZ(100px);
//     }
//     div:nth-child(23) {
//       transform: rotateY(300deg) rotateX(-90deg) rotateX(120deg) translateZ(100px);
//     }
//     img {
//       width: 50px;
//       height: 50px;
//       border-radius: 50%;
//       // ALTERAR essa borda de acordo com o thema
//       border: 1px solid #fff;
//       box-shadow: 0 0 10px rgba(0,0,0,0.5);
//       position: absolute;
//       top: 0;
//       left: 0;
//       transform-style: preserve-3d;
//       transform-origin: 50px 50px 0;
//     }
//   }

//   @keyframes spincircle {
//     0% {
//       transform: rotateY(0deg);
//     }
//     100% {
//       transform: rotateY(360deg);
//     }
//   }
// `;

// export const ProjetosS = styled.div`
//   grid-area: m;
//   /* border: 1px solid red; */
//   margin-top: 45px;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   justify-items: center;
//   text-align: center;
//   h1 {
//     font-size: 30px;
//     margin-top: 30px;
//   }
//   h2 {
//     font-size: 24px !important;
//     @media (max-width: 768px) {
//       font-size: 12px !important;
//     }
//   }

//   #projectImg {
//     &:hover {
//       transform: scale(1.015);
//       transition: 0.8s;
//     }
//   }

//   img {
//     width: 350px;
//     height: 300px;

//     @media (max-width: 768px) {
//       width: 200px;
//       height: 150px;
//     }
//   }
// `;

// export const ContatoS = styled.div`
//   grid-area: m;
//   border: 2px solid red;
//   margin-top: 45px;
//   width: 100vw;
//   height: 100vh;
//   justify-content: center;
//   justify-items: center;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   h1 {
//     font-size: 30px;
//     margin-bottom: 15px;
//   }
// `;
