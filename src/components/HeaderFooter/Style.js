import styled from 'styled-components';

export const NormalMenuS = styled.div`
  grid-area: h;
  position: sticky;
  top: 0;
  // recebe a prop isFooterRelative e se for true o height recebe 100vh
  // por padrão recebe 97vh
  /* border: 1px solid red; */
  height: ${(props) => (props.defaultPositionHeader ? '90vh' : '100vh')};
  @media (max-height: 700px) {
    height: 100vh;
  }
  transition: height 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--main);
  // coloca box-shadow na borda direita do componente
  /* box-shadow: 0 0 1px 0px var(--buttonBorder); */

  #logoAndModeDiv {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 20px;
    @media (max-height: 700px) {
      top: 0;
    }
    position: absolute;

    #logo {
      top: 10px;
      margin-bottom: 20px;
      width: 135.344px;
      height: 128px;
    }

    #modeBtn {
      /* border: 1px solid green; */
      top: 60px;
      @media (max-height: 700px) {
        position: fixed;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        bottom: 35px;
      }
      #modeIcon {
        cursor: pointer;
        width: 25px;
        height: 25px;
        color: var(--headline);
      }
    }
  }

  #navegation {
    margin-top: 20px;
    display: flex;
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
  /* border: 2px solid green; */
  grid-area: h;
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
    background-color: var(--main);
    cursor: pointer;
    width: 100%;
    width: 30px;
    height: 30px;
    #XIcon {
      width: 30px;
      height: 30px;
      color: var(--extra);
    }
  }
`;

export const MenuBurgerContentS = styled.div`
  /* border: 1px solid blue; */
  grid-area: m;
  background-color: var(--main);
  // posiciona o elemento sobreposto aos demais
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #a7a9be;
  // aplica box-shadow na borda esquerda do componente
  box-shadow: 0 0 2px 0px var(--buttonBorder);
  top: 35px;
  position: absolute;
  right: 0;

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
    width: 135.344px;
    height: 128px;
    background-color: var(--main);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const FooterS = styled.div`
  // recebe isWheelActive como propriedade e caso seja true deixa a posição relativa
  position: ${(props) => (props.isFooterRelative ? 'relative' : 'fixed')};
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
    margin-top: 8px;
    display: flex;
    margin-left: auto;
    margin-right: 10px;
    font-size: 10px;
  }
  // coloca box-shadow apenas borda superior do componente
  box-shadow: 0px -2px 2px var(--buttonBorder);
`;
