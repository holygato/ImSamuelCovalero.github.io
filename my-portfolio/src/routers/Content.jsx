import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Principal from '../pages/Principal/Principal';
import Sobre from '../pages/Sobre/Sobre';
import Projetos from '../pages/Projetos/Projetos';
import Contato from '../pages/Contato/Contato';

function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default Content;
