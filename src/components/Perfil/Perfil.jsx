import React, { useState, useEffect } from 'react';
import Header from '../Header';
import PerfilBody from './PerfilBody';
import halloween from '../../assets/Loja/halloween.jpg';

const Perfil = () => {
  const [fotoUsuario, setFotoUsuario] = useState(sessionStorage.fotoPerfil ?? halloween);

  useEffect(() => {
    const fotoPerfil = sessionStorage.getItem('fotoPerfil');
    if (fotoPerfil) {
      setFotoUsuario(fotoPerfil);
    }
  }, []);

  const atualizarFotoUsuario = (novaFoto) => {
    setFotoUsuario(novaFoto);
    sessionStorage.setItem('fotoPerfil', novaFoto); // Atualiza o sessionStorage quando a foto é atualizada
  };

  return (
    <>
      <Header fotoUsuario={fotoUsuario ?? sessionStorage.fotoPerfil} />
      <PerfilBody atualizarFotoUsuario={atualizarFotoUsuario} fotoUsuario = {fotoUsuario} />
    </>
  );
};

export default Perfil;
