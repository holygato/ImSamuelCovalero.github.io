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
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
`;

export const FooterS = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// export default HeaderS;
