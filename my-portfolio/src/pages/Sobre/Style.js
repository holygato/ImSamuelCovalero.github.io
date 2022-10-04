import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid green; */
  height: 100%;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, (120px, 1fr)); */
  grid-template-columns: 140px 1fr;
  grid-template-rows: 1fr 25px;
  grid-template-areas: 
    "h m"
    "f f";
`;

export const SobreS = styled.div`  
  grid-area: m;
  /* border: 1px solid red; */
  width: 80vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  #aboutDiv {
    /* border: 1px solid blue; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 748px;
    min-height: 320px;
    box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
    border-radius: 8px;
    padding: 20px;
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
      // posiciona no topo da página
      margin-top: 10px;
    }
    p {
      font-size: 14px;
      text-align: justify;
    }
    @media (max-width: 968px) {
      width: 90%;
    }
  }

  #curriculum {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    button {
      background-color: var(--buttonBackground);
      color: var(--buttonText);
      border: 2px solid var(--buttonBorder);
      text-decoration: none !important;
      margin-top: 15px;
      width: 130px;
      height: 35px;
      line-height: 2.5em;
      font-size: 14px;
      font-family: 'Conthrax';
      box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
      cursor: pointer;
    }
  }

  #skillsDiv {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    #skillsTitle {
      text-align: center;
      font-size: 24px;
    }
    #skills {
      /* margin-left:25%; */
      margin-bottom: 35px;
      display: flex;
      justify-content: center;
      padding: 10px;
      gap: 20px;
      #tecnologiesPosition {
        display: flex;
        flex-direction: column;
        align-items: center;
        #subTitle {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
          width: 150px;
          height: 45px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
          border: 1px solid #e6e6e6;
        }
        img {
          border-radius: 3px;
          box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
        }
      }
      @media (max-width: 768px) {
        width: 95%;
      }
    }
  }
  #toMainBtn{
    margin-bottom: 15px;
  }
  /* #footer {
    h3 {
      border: 1px solid red;
      position: fixed;
      bottom: 0;
      margin-bottom: 0;
      font-size: 14px;
    }
  } */
`;

// export const ImagesS = styled.div`
//   border: 1px solid red;
//   display: flex;
//   /* flex-direction: wrap; */
//   img{
//     height: 40px;
//     width: 50px;
//   }
// `;

export default SobreS;
