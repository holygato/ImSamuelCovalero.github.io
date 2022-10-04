import styled from 'styled-components';

// export const ProjectImageS = styled.div`
//   border: 3px solid green;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 450px;
//   height: 400px;
//   box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
//   // recebe uma props projectImg e a usa como background
//   background: url(${(props) => props.projectImg});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   // altera o background-color de acordo com o mouse hover
//   /* background-color: ${(props) => (props.isHover ?
// 'background-color: rgb(216 212 242 / 82%)' : 'transparent')}; */
//   #projectBadgesDiv {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     // seta o width e height do div para ser igual ao do ProjectImageS
//     width: 450px;
//     height: 400px;
//     background-color: ${(props) => (props.isHover ? 'rgb(216 212 242 / 72%)' : 'transparent')};
//   }
//   #projectBadgesImgs {
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap: 5px;
//     width: 90%;
//     // altera a visibilidade das skills de acordo com o mouse hover
//     visibility: ${(props) => (props.isHover ? 'visible' : 'hidden')};
//     // adiciona box-shadow em cada um dos itens
//     img {
//       box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
//     }
//   }
// `;

export const ToMainButtonS = styled.button`
  background-color: var(--buttonBackground);
  color: var(--buttonText);
  border: 2px solid var(--buttonBorder);
  width: 130px;
  height: 35px;
  line-height: 2.5em;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: 'Conthrax';
  box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
  cursor: pointer;
`;

export default ToMainButtonS;
