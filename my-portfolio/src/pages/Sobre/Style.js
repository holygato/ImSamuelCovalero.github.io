// Estiliza o Sobre

import styled from 'styled-components';

export const DivExterna = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const SobreS = styled.div`  
  border: 1px solid red;
  margin-top: 45px;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 30px;
  }
  #skillsTitle {
    text-align: center;
  }
  #tecnologias {
    /* margin-left:25%; */
    margin-bottom: 35px;
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
  #footer {
    h3 {
      position: fixed;
      bottom: 0;
      margin-bottom: 0;
      font-size: 14px;
    }
  }
`;

// export const ImagesS = styled.div`
//   border: 1px solid red;
//   display: flex;
//   /* flex-direction: wrap; */
//   img{
//     height: 40px;
//     width: 50px;
//   }
// `;

export default SobreS;
