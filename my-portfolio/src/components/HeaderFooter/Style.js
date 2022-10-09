// Estiliza o header
import styled from 'styled-components';

// a barra de vanegação deve estar posicionada a esquerda, pegando toda a tela
// export const HeaderS = styled.div`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   width: 25%;
//   background-color: #f1f1f1;
//   position: fixed;
//   height: 100%;
//   overflow: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   #navegation {
//     display: flex;
//     flex-direction: column;
//   }
//   #navegation a {
//     text-decoration: none;
//     color: black;
//     font-size: 20px;
//     margin-bottom: 10px;
//   }
//   #navegation a:hover {
//     color: #f1f1f1;
//   }
//   #navegation a.active {
//     color: #f1f1f1;
//   }
//   #navegation a.active:hover {
//     color: #f1f1f1;
//   }
// `;

export const NormalMenuS = styled.div`
  grid-area: h;
  position: sticky;
  top: 0;
  // recebe a prop isFooterRelative e se for true o height recebe 100vh
  // por padrão recebe 97vh
  height: ${(props) => (props.defaultPositionHeader ? '97vh' : '100vh')};
  // adiciona transição a mudança de height
  transition: height 0.5s;
  /* height: 100vh;  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border-right: 1px solid var(--secundary); */
  background-color: var(--main);
  // coloca box-shadow na borda direita do componente
  /* box-shadow: 0 0 1px 0px var(--buttonBorder); */

  #logoAndModeDiv {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100%; */
    width: 100%;
    top: 20px;
    position: absolute;

    #logo {
      top: 10px;
      /* border: 1px solid blue; */
      /* position: absolute; */
      margin-bottom: 20px;
      width: 135.344px;
      height: 128px;
    }

    #modeBtn {
      /* margin-bottom: 280px; */
      /* border: 1px solid green; */
      top: 60px;
      // quando diminuir o height do header, o botão de mudar de tema deve ficar posicionado a 10px do bottom
      @media (max-height: 700px) {
        /* top: auto; */
        /* bottom: -500px; */
        position: fixed;
        // centraliza o elemento em relação ao eixo y
        display: flex;
        align-items: flex-end;
        justify-content: center;
        bottom: 35px;
      }
      /* position: absolute; */
      #modeIcon {
        cursor: pointer;
        width: 25px;
        height: 25px;
        color: var(--headline);
      }
    }
  }

  #navegation {
    display: flex;
    /* gap: 20px; */
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #a7a9be;
    width: 100%;
  }
  #navegation a {
    text-decoration: none;
    font-size: 20px;
    color: var(--buttonText);
    border-top: 1px solid #a7a9be;
    padding: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    cursor: pointer;
  }
  #navegation a:hover {
    color: var(--tertiary);
    // adiciona estilização no hover dos links
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  }
  #navegation a.active {
    color: var(--tertiary);
  }
  #navegation a.active:hover {
    color: var(--tertiary);
  }
`;

export const MenuBurgerS = styled.div`
  // estiliza o menu burger
  /* border: 2px solid green; */
  grid-area: h;
  /* top: 0; */
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--main);
  // adiciona box-shadow na borda inferior do componente
  /* box-shadow: 0 0 2px 0px var(--buttonBorder); */
  #modeBtnBurger {
      #modeIcon {
        cursor: pointer;
        width: 25px;
        height: 25px;
        color: var(--headline);
      }
    }
  #iconBurgerBtn {
    border: none;
    background-color: var(--main);
    cursor: pointer;
    width: 30px;
    height: 30px;
    #hamburgerIcon {
      width: 30px;
      height: 30px;
      color: var(--extra);
    }
  }
  #XIconBtn {
    border: none;
    /* color: var(--buttonText); */
    background-color: var(--main);
    cursor: pointer;
    width: 100%;
    width: 30px;
    height: 30px;
    #XIcon {
      // posiciona o XIcon no canto direito do botão
      /* position: absolute; */
      /* right: 50px; */
      width: 30px;
      height: 30px;
      color: var(--extra);
    }
  }
`;

export const MenuBurgerContentS = styled.div`
  // estiliza os links do menu burger
  /* border: 1px solid blue; */
  grid-area: m;
  background-color: var(--main);
  // posiciona o elemento sobreposto aos demais
  z-index: 1;
  display: flex;
  /* gap: 20px; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #a7a9be;
  // aplica box-shadow na borda esquerda do componente
  box-shadow: 0 0 2px 0px var(--buttonBorder);
  /* width: 100%; */
  // posiciona fixado no topo direto abaixo do ícone do menu burger
  top: 35px;
  position: absolute;
  /* top: 35px; */
  right: 0;
  /* #XIconBtn {
    color: var(--buttonText);
    background-color: var(--main);
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border: none;
    #XIcon {
      margin-right: 10px;
      width: 35px;
      height: 35px;
      color: var(--extra);
    }
  } */
  a {
    text-decoration: none;
    font-size: 20px;
    color: var(--buttonText);
    border-top: 1px solid #a7a9be;
    padding: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    cursor: pointer;
    z-index: 1;
  }
  a:hover {
    color: var(--tertiary);
    // adiciona estilização no hover dos links
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  }
  a.active {
    color: var(--tertiary);
  }
  a.active:hover {
    color: var(--tertiary);
  }
  #contatoA {
    border-bottom: 1px solid var(--buttonBorder);
  }
  #logo {
    /* border: 1px solid red; */
    /* margin-top: 5px; */
    width: 135.344px;
    height: 128px;
    background-color: var(--main);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const FooterS = styled.div`
  // recebe isWheelActive como propriedade e caso seja true deixa a posição relativa
  position: ${(props) => (props.isFooterRelative ? 'relative' : 'fixed')};
  // posiciona os textos no centro
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: f;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: var(--main);
  gap: 10px;
  #phrase {
    font-size: 14px;
    @media (max-width: 568px) {
      font-size: 11px;
    }
    margin-left: 10px;
    margin-top: 4px;
  }
  #copyright {
    /* border: 1px solid red; */
    margin-top: 8px;
    display: flex;
    margin-left: auto;
    margin-right: 10px;
    font-size: 10px;
  }
  // coloca box-shadow apenas borda superior do componente
  box-shadow: 0px -2px 2px var(--buttonBorder);
`;

// export default HeaderS;
