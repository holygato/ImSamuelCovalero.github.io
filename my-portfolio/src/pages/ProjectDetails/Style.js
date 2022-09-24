import styled from 'styled-components';

export const DivExterna = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const ProjetosS = styled.div`  
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  gap: 20px; 
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
  #projectBody {
    display: flex;
    flex-direction: row;
    width: 860px;
    justify-content: center;
    img {
      width: 430px;
      height: 400px;
    }
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
      gap: 10px;
      width: 430px;
      height: 400px;
      p {
        font-size: 16px;
      }
      #skills {
        border: 1px solid red;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
        span {
          font-size: 12px !important;
        }
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
