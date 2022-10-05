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

export const ContatoS = styled.div`  
  grid-area: m;
  /* border: 1px solid red; */
  width: 80vw;
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  #contactItens {
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }
    // remove o estilo de link
    a {
      text-decoration: none;
      color: var(--secundary);
    }
    abbr[title] {
      text-decoration: none;
    }
  }
  #h1Title {
    margin-bottom: 15px;
    h1 {
      font-size: 32px;
    }
  }
  /* button {
    --color: #560bad;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 35px;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
  }

  button:before {
    content: "";
    position: absolute;
    text-align: center;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #fff;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  } */
`;
