import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid green; */
  height: 100vh;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, (120px, 1fr)); */
  grid-template-columns: 140px 1fr;
  grid-template-rows: 1fr 30px;
  grid-template-areas: 
    "h m"
    "f f";
`;

export const ProjetosS = styled.div` 
  grid-area: m;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  /* gap: 20px;  */
  @media (max-width: 780px) {
    min-height: 100%;
    margin-top: 45px;
    /* gap: 15px;  */
  }
  @media (max-width: 580px) {
    min-height: 100%;
    margin-top: 10px;
    /* gap: 10px;  */
  }
  
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  #projectName {
    height: 100px;
    font-size: 30px;
    display: flex;
    align-items: center;
    /* margin-bottom: 15px; */
  }
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  #projectBody {
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    @media (max-width: 1080px) {
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
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      width: 430px;
      height: 320px;
      @media (max-width: 600px) {
        width: 330px;
        height: 250px;
      }
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
      /* border: 1px solid red; */
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
      width: 430px;
      height: 320px;;
      @media (max-width: 1080px) {
        height: 42%;
      }
      @media (max-width: 600px) {
        height: 60%;
        width: 330px;
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
      #vercelGithub {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 60px;
        gap: 15px;
        a {
          color: var(--extra);
        }
        #vercelGithubIcons {
          width: 23px;
          height: 23px;
        }
      }    
    }
  }
  #toProjectsBtn {
    background-color: var(--tertiary);
    color: var(--buttonText);
    border: 2px solid var(--secundary);
    margin-bottom: 15px;
    margin-top: 10px;
    width: 170px;
    height: 40px;
    border-radius: 3px;
    line-height: 2.5em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: 'Conthrax';
    box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
    cursor: pointer;
  }
  #toMainBtn {
    margin-bottom: 15px;
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
