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

export const HeaderS = styled.div`
  grid-area: h;
  position: sticky;
  top: 300px;
  /* width: 100%; */
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  #logo {
    /* top: 0 !important; */
    border: 1px solid blue;
    margin-bottom: 20px;
  }

  #modeBtn {
    margin-bottom: 280px;
  }

  #navegation {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  #navegation a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    margin-bottom: 10px;
    // adiciona estilização de botão nos links com box shadow, deixa todos com o mesmo width e height
    border: 1px solid black;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 140px;
    cursor: pointer;
  }
  #navegation a:hover {
    color: #f1f1f1;
  }
  #navegation a.active {
    color: #f1f1f1;
  }
  #navegation a.active:hover {
    color: #f1f1f1;
  }
`;

export const FooterS = styled.div`
  // recebe isWheelActive como propriedade e caso seja true deixa a posição relativa
  position: ${(props) => (props.isFooterRelative ? 'relative' : 'fixed')};
  grid-area: f;
  bottom: 0;
  width: 100%;
  h3 {
    font-size: 14px;
  }
`;

// export default HeaderS;
