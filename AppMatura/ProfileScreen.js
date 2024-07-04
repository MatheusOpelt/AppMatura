import React from 'react';
import './ProfileScreen.css';

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <img src="/images/profile-picture.png" alt="profile" className="profile-picture" />
      <h1>Matheus Opelt</h1>
      <p>matheus.opelt@univille.br</p>
      <button className="edit-profile-button">Editar Perfil</button>
      <div className="notifications">
        <label>
          <input type="checkbox" />
          Ligar as notificações
        </label>
      </div>
      <div className="invite-link">
        <button className="invite-button">Convidar colegas</button>
      </div>
    </div>
  );
}

export default ProfileScreen;
