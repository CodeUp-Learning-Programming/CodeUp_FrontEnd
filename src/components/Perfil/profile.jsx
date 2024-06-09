import React, { useState } from 'react';
import styles from './profile.css'

function UserDropdownMenu({fotoUsuario} ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.clear()
    console.log("Fazendo logout...");
  };

  return (
    <div className="user-dropdown">
      <button onClick={toggleMenu} className="user-dropdown-toggle">
        <img src={fotoUsuario == "" ? sessionStorage.fotoPerfil : fotoUsuario}  className="avatar" />
      </button>
      {isOpen && (
        <div className="user-dropdown-menu">
          <ul>
            <li><a href="/perfil" className='text-drop-box'>Perfil</a></li>
            <li><a href="/" className='text-drop-box'>Sair</a></li>
            {/* Adicione outras opções de menu aqui, se necessário */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdownMenu;
