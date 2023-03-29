import styled from 'styled-components';

export const DivExterna = styled.div`
  /* border: 3px solid green; */
  height: 100%;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, (120px, 1fr)); */
  grid-template-columns: ${(props) => (props.smallScreen ? '1fr' : '140px 1fr')};
  grid-template-rows: ${(props) => (props.smallScreen ? '35px 1fr 30px' : '1fr 30px')};
  grid-template-areas: ${(props) => (props.smallScreen
    ? `'h'
      'm'
      'f'`
    : `'h m'
    'f f'`)};
`;

export const SobreS = styled.div`  
  grid-area: m;
  /* border: ${(props) => (props.smallScreen ? '1px solid red' : '1px solid blue')}; */
  width: ${(props) => (props.smallScreen ? '98vw' : '80vw')};
  height: ${(props) => (props.smallScreen ? '100%' : '100%')};
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;

  #aboutDiv {
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
    margin-top: 20px;
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
      margin-top: 15px;
    }
    p {
      font-size: 14px;
      @media (max-width: 768px) {
        font-size: 12px;
      }
      text-align: justify;
    }
    @media (max-width: 968px) {
      width: 90%;
    }

    #myPicture{
      width: 200px;
      height: 230px;
      border-radius: 10px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: 2px solid var(--buttonBorder);
      box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
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
      width: 170px;
      height: 40px;
      line-height: 2.5em;
      font-size: 14px;
      font-family: 'Conthrax';
      box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
      cursor: pointer;
      border-radius: 3px;
    }
  }

  #skillsDiv {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 98vw;
    }
    #skillsTitle {
      text-align: center;
      font-size: 24px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    #skills {
      margin-bottom: 35px;
      display: flex;
      justify-content: center;
      padding: 10px;
      gap: 20px;
      @media (max-width: 768px) {
        width: 98vw;
      }
      #tecnologiesPosition {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 768px) {
          width: 25vw;
        }
        #subTitle {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
          width: 150px;
          height: 45px;
          @media (max-width: 768px) {
            font-size: 12px;
            width: 100px;
            height: 40px;
          }
          border-radius: 8px;
          box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
          border: 1px solid #e6e6e6;
        }
        img {
          border-radius: 3px;
          box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
          @media (max-width: 668px) {
            height: 25px;
            max-width: 110px;
          }
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
`;

export default SobreS;
