import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Principal from '../pages/Principal/Principal';
import Projetos from '../pages/Projetos/Projetos';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';
import MySkills from '../pages/MySkills/MySkills';

function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/about" element={<Sobre />} />
      <Route path="/skills" element={<MySkills />} />
      <Route path="/contact" element={<Contato />} />
    </Routes>
  );
}

export default Content;
