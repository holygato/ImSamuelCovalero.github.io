// cria componete para o botão que direciona para a página principal

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToMainButtonS } from './Style';

function ToMainBtn() {
  const navigate = useNavigate();
  return (
    <ToMainButtonS type="button" onClick={() => navigate('/')}>Principal</ToMainButtonS>
  );
}

export default ToMainBtn;
