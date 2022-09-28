import styled from 'styled-components';

export const DivExterna = styled.div`
  border: 3px solid green;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, (120px, 1fr));
  /* grid-template-columns: 120px 1fr; */
  grid-template-rows: 1fr 25px;
  grid-template-areas: 
    "h m"
    "f f";
`;

export const ProjetosS = styled.div`  
  grid-area: m;
  border: 1px solid red;
  /* margin-top: 45px; */
  width: 80vw;
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  #projetosDivS {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
  }
  /* width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center; */
`;

export const ProjectCardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  gap: 20px; 
  padding: 10px; 
  margin-right: 20px;
  h2 {
    font-size: 30px;
  }
  // Cria uma animação ao passar o mouse sobre o card
`;
