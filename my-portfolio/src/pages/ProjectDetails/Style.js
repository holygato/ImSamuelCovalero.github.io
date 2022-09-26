import styled from 'styled-components';

export const DivExterna = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const ProjetosS = styled.div`  
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 100%;
  height: 100%;
  @media (max-width: 880px) {
    min-height: 100%;
    margin-top: 45px;
  }
  gap: 20px; 
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  #projectName {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
  #projectBody {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    @media (max-width: 880px) {
      width: 90%;
      flex-direction: column;
      // alinha os itens ao centro
      align-items: center;
      justify-content: center;
      justify-items: center;
      height: 76%;
    }
    width: 860px;
    justify-content: center;
    #projectImg {
      width: 430px;
      height: 400px;
    }
    /* img {
      width: 430px;
      height: 400px;
    } */
    span {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    #projectDetails {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
      width: 430px;
      height: 400px;
      @media (max-width: 880px) {
        height: 38%;
      }
      p {
        font-size: 16px;
        // exibe o texto justificado
        text-align: justify;
      }
      #skills {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 90%;
      }
    }
  }
`;

export const ProjectCardS = styled.div`
  /* border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  img {
    width: 350px;
    height: 300px;
  } */
`;
