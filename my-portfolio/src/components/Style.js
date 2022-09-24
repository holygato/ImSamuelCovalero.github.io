import styled from 'styled-components';

export const ProjectImageS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 400px;
  // recebe uma props projectImg e a usa como background
  background: url(${(props) => props.projectImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // altera o background-color de acordo com o mouse hover
  /* background-color: ${(props) => (props.isHover ? 'background-color: rgb(216 212 242 / 82%)' : 'transparent')}; */
  #projectBadgesDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // seta o width e height do div para ser igual ao do ProjectImageS
    width: 450px;
    height: 400px;
    background-color: ${(props) => (props.isHover ? 'rgb(216 212 242 / 62%)' : 'transparent')};
  }
  #projectBadgesImgs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 90%;
    // altera a visibilidade das skills de acordo com o mouse hover
    visibility: ${(props) => (props.isHover ? 'visible' : 'hidden')};
    // altera a cor do fundo das skills de acordo com o mouse hover
  }


`;

export default ProjectImageS;
