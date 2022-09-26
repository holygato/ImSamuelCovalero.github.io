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
  display: flex;
  flex-direction: column;
  #aboutDiv {
    /* border: 1px solid blue; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 748px;
    min-height: 320px;
    box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
    border-radius: 8px;
    padding: 20px;
    h1 {
      font-size: 30px;
      margin-bottom: 15px;
      // posiciona no topo da página
      margin-top: 10px;
    }
    p {
      font-size: 14px;
      text-align: justify;
    }
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  #curriculum {
    margin-top: 15px;
  }

  #skillsDiv {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    #skillsTitle {
      text-align: center;
      font-size: 24px;
    }
    #skills {
    /* margin-left:25%; */
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    padding: 10px;
    gap: 20px;
    #tecnologiesPosition {
      display: flex;
      flex-direction: column;
      align-items: center;
      #subTitle {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        width: 150px;
        height: 45px;
      }
    }
    @media (max-width: 768px) {
      width: 95%;
    }
  }
  }
  /* #footer {
    h3 {
      border: 1px solid red;
      position: fixed;
      bottom: 0;
      margin-bottom: 0;
      font-size: 14px;
    }
  } */
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
