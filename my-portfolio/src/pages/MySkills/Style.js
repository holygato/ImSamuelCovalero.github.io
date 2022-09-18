// Página para estilizar a página MySkills

import styled from 'styled-components';

export const DivExterna = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const SkillsS = styled.div`  
  border: 1px solid red;
  margin-top: 45px;
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
