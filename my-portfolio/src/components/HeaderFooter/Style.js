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
    top: 10px;
    position: absolute;

    #logo {
      top: 10px;
      /* border: 1px solid blue; */
      /* position: absolute; */
      margin-bottom: 20px;
      width: 130px;
      height: 100px;
    }

    #modeBtn {
      /* margin-bottom: 280px; */
      /* border: 1px solid green; */
      top: 60px;
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
    color: black;
    font-size: 20px;
    /* margin-bottom: 10px; */
    // adiciona estilização de botão nos links com box shadow, deixa todos com o mesmo width e height
    /* background-color: var(--buttonBackground); */
    color: var(--buttonText);
    border-top: 1px solid #a7a9be;
    padding: 12px;
    /* border-radius: 12px; */
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
  /* border: 1px solid red; */
  grid-area: h;
  /* top: 0; */
  width: 100%;
  height: 39px;
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
  #logoBurgerBtn {
    border: none;
    background-color: var(--main);
    cursor: pointer;
    // recebe a prop logo e coloca no background como cover do botão
    background-image: url(${(props) => props.logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 40px;
    height: 40px;
    #hamburgerIcon {
      background-size: cover;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      color: rgb(216 212 242 / 65%);
      // deixa com visibilidade parcial
      opacity: 0.5;
    }
  }
`;

export const MenuBurgerContentS = styled.div`
  // estiliza os links do menu burger
  /* border: 1px solid red; */
  display: flex;
  /* gap: 20px; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #a7a9be;
  /* width: 100%; */
  // posiciona fixado no topo direto abaixo do menu burger
  position: fixed;
  top: 39px;
  right: 0;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    /* margin-bottom: 10px; */
    // adiciona estilização de botão nos links com box shadow, deixa todos com o mesmo width e height
    /* background-color: var(--buttonBackground); */
    color: var(--buttonText);
    border-top: 1px solid #a7a9be;
    padding: 12px;
    /* border-radius: 12px; */
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    cursor: pointer;
  }
  a:hover {
    color: var(--tertiary);
    // adiciona estilização no hover dos links
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  }
  a.active {
    color: var(--tertiary);
  }
  a.active:hover {
    color: var(--tertiary);
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
    // posiciona a esquerda do footer com um margin de 10px
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
