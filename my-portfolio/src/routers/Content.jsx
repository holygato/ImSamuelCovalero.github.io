import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Principal from '../pages/Principal';

function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal />} />
    </Routes>
  );
}

export default Content;
