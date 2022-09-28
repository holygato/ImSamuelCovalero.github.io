// Página para estilizar a página MySkills

import styled from 'styled-components';

export const DivExterna = styled.div`
  border: 3px solid green;
  /* display: flex;
  flex-direction: column; */
  height: 100%;
  width: 100vw;
  /* align-items: center; */
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 25px;
  grid-template-areas: 
    "h m"
    "f f";
`;

// export const HeaderS = styled.div`
//   /* position: fixed;
//   top: 0; */
//   grid-area: h;
//   border-bottom: 1px solid blue;
//   width: 100%;
//   height: 45px;
//   #xablau {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
//   }
//   #navegation {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
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

export const SkillsS = styled.div`  
  grid-area: m;
  border: 1px solid red;
  /* margin-top: 45px; */
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

// export const FooterS = styled.div`
//   // recebe isWheelActive como propriedade e caso seja true deixa a posição relativa
//   /* position: ${(props) => (props.isFooterRelative ? 'relative' : 'fixed')}; */
//   border-top: 1px solid green;
//   grid-area: footer;
//   width: 100%;
//   h3 {
//     font-size: 18px;
//   }
// `;
