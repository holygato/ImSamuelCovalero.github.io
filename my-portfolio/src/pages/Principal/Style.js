import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid blue; */
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

export const PrincipalS = styled.div` 
  grid-area: m;
  /* border: ${(props) => (props.smallScreen ? '1px solid green' : '1px solid blue')}; */
  width: ${(props) => (props.smallScreen ? '100vw' : '92vw')};
  height: ${(props) => (props.smallScreen ? '100%' : '100%')};
  @media (max-width: 1150px) {
    width: 86vw;
  }
  @media (max-width: 1050px) {
    width: 84vw;
  }
  @media (max-width: 768px) {
    width: 98vw;
  }
  transition: all 0.3s;
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
  #contactMe {
    opacity: 0;
    animation: show 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
    margin-top: 20px;
    #contacteMeBtn{
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

  // posiciona o elemento deslizeRight na parte inferior direita da tela
  #deslizeRight {
    position: fixed;
    bottom: 67px;
    margin-right: 12px;
    @media (max-width: 1488px) {
      bottom: 27px;
      margin-right: 4px;
    }
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55px;
    abbr[title] {
      text-decoration: none;
    }
    #arrowDown {
      width: 60px;
      height: 60px;
      color: var(--tertiary);
      // posiciona o elemento no canto direito
      margin-right: -26px;
      @media (max-width: 1488px) {
        width: 30px;
        height: 30px;
        margin-right: -30px;
      }
      img {
        display: flex;
        color: var(--secundary);
      }
    }
    p {
      font-size: 12px;
      color: var(--secundary);
    }
  }
  // posiciona o elemento deslizeLeft na parte inferior esquerda da tela
  #deslizeLeft {
    position: fixed;
    bottom: 67px;
    margin-left: 152px;
    @media (max-width: 1488px) {
      bottom: 27px;
      margin-left: 144px;
    }
    @media (max-width: 768px) {
      margin-left: 5px;
    } 
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55px;
    font-size: 12px;
    abbr[title] {
      text-decoration: none;
    }
    #arrowDown {
      width: 60px;
      height: 60px;
      color: var(--tertiary);
      // posiciona o elemento no canto esquerdo
      margin-left: -18px;
      @media (max-width: 1488px) {
        width: 30px;
        height: 30px;
        margin-left: -30px;
      }
    }
    p {
      font-size: 12px;
      color: var(--secundary);
    }
  }

  /**
    ** Div de Sobre mim
  */
  #skillsS {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;

    #myPicture {
      width: 648px;
      height: 400px;
      @media (max-width: 1688px) {
        width: 350px;
        height: 200px;
      }
      border-radius: 10px;
      border: 2px solid var(--buttonBorder);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    }

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

  /**
    ** Div de Projetos
  */
  #projetosS {
    /* border: 1px solid green; */
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
  }

  /**
    ** Div de Contact Me
  */
  #contatosS {
    /* border: 1px solid red; */
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
