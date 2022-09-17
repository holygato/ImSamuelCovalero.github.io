// página principal
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DivExterna, PrincipalS } from './Style';

function Principal() {
  return (
    <DivExterna>
      <PrincipalS>
        <Header />
        <div
          style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // flexDirection: 'column',
            // height: '100vh',
            // marginLeft: '25%',
          }}
          id="principal"
        >
          <p>Olá, meu nome é Samuel Covalero dos Reis, seja muito bem vindo (a) ao meu Portfólio</p>
          <br />
          <p>
            Aqui você conhecerá um pouco sobre mim e aonde me encontrar, as tecnologias que conheço
            e utilizo e terá acesso a alguns projetos que desenvolvi.
          </p>
        </div>
        {/* Adiciona o Footer posicionado na parte de baixo da página */}
        <div>
          <Footer phrase="Transformação pela informação, evolução pela tecnologia" />
        </div>
      </PrincipalS>
    </DivExterna>
  );
}

export default Principal;
