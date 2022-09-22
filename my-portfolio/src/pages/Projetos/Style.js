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
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  gap: 20px; 
  padding: 10px; 
  margin-right: 20px;
  // Cria uma animação ao passar o mouse sobre o card
  &:hover {
    transform: scale(1.015);
    transition: 0.8s;
  }

  img {
    width: 350px;
    height: 300px;

    @media (max-width: 768px) {
    width: 250px;
    height: 200px;
    }

    @media (max-width: 425px) {
       width: 150px;
       height: 100px;
    }

     @media (max-width: 375px) {
       width: 100px;
       height: 50px;
     }

     @media (max-width: 320px) {
       width: 50px;
       height: 25px;
     }
  }
`;
