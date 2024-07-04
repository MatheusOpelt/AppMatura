import React from 'react';
import './ProgressScreen.css';

const ProgressScreen = () => {
  return (
    <div className="progress-screen">
      <h1>Progresso</h1>
      <input type="text" placeholder="Pesquisar" />
      <div className="tabs">
        <button className="active">Todos</button>
        <button>Favoritos</button>
      </div>
      <div className="lesson-list">
        <div className="lesson">Como Evitar Anexos Perigosos</div>
        <div className="lesson">Ameaça Interna Maliciosa</div>
        <div className="lesson">Como saber se sua senha é segura?</div>
        <div className="lesson">Phising introdução</div>
        <div className="lesson">Como criar uma senha segura?</div>
      </div>
    </div>
  );
}

export default ProgressScreen;
