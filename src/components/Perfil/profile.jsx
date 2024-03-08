import React, { useState } from 'react';
import styles from './profile.css'

function UserDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implemente a lógica para fazer logout do usuário aqui
    console.log("Fazendo logout...");
  };

  return (
    <div className="user-dropdown">
      <button onClick={toggleMenu} className="user-dropdown-toggle">
        <img src="img.avatar"  className="avatar" />
      </button>
      {isOpen && (
        <div className="user-dropdown-menu">
          <ul>
            <li><a href="/perfil">Profile</a></li>
            <li><a href="#" onClick={handleLogout}>Sign Out</a></li>
            {/* Adicione outras opções de menu aqui, se necessário */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdownMenu;
