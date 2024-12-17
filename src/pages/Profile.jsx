import React from 'react';

const Profile = () => {
  const email = "usuario@example.com";

  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <div className="container text-center">
      <h2>Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
    </div>
  );
};

export default Profile;