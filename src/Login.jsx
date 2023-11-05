import React from 'react';

function LoginButton({ isLoggedIn, onLogin, onLogout }) {
  return (
    <div className="login-button">
      {isLoggedIn ? (
        <div>
          <img src="lien de la photo de profil" alt="Photo de profil" />
          <button onClick={onLogout}>Déconnexion</button>
        </div>
      ) : (
        <button onClick={onLogin}>Connexion</button>
      )}
    </div>
  );
}

export default LoginButton;