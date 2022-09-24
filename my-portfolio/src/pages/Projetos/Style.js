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
  margin-top: 45px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

export const ProjectCardS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  gap: 20px; 
  padding: 10px; 
  margin-right: 20px;
  h2 {
    font-size: 30px;
  }
  // Cria uma animação ao passar o mouse sobre o card
`;
