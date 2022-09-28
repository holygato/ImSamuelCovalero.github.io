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

export const ContatoS = styled.div`  
  grid-area: m;
  border: 1px solid red;
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  #h1Title {
    margin-bottom: 15px;
    h1 {
      font-size: 30px;
    }
  }
`;
