import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Principal from '../pages/Principal/Principal';
import Projetos from '../pages/Projetos/Projetos';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails';
import MySkills from '../pages/MySkills/MySkills';

function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/about" element={<Sobre />} />
      <Route path="/contact" element={<Contato />} />
      <Route path="/projetos/:projectId" element={<ProjectDetails />} />
      <Route path="/myskills" element={<MySkills />} />
    </Routes>
  );
}

export default Content;
