import React from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="header">
        <img src="/images/header-image.png" alt="header" />
      </div>
      <h1>Treinamento Sobre Segurança</h1>
      <button className="email-button">Entrar com o e-mail</button>
      <div className="social-buttons">
        <button className="google-button">Google</button>
        <button className="apple-button">Apple ID</button>
      </div>
    </div>
  );
}

export default HomeScreen;
