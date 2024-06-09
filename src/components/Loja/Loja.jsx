import React, { useState, useEffect } from 'react';
import Header from '../Header'
import { LojaOptions } from './LojaOptions'
import halloween from '../../assets/Loja/halloween.jpg';

export const Loja = () => {

  const [fotoUsuario, setFotoUsuario] = useState(sessionStorage.fotoPerfil ?? halloween);
  const [moedasUsuario, setMoedasUsuario] = useState(sessionStorage.moedas ?? 0);

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
  const atualizarMoedasUsuario = (moedas) => {
    setMoedasUsuario(moedas);
    sessionStorage.setItem('moedas', moedas); // Atualiza o sessionStorage quando a foto é atualizada
  };

  return (
    <>
        <Header fotoUsuario={fotoUsuario} moedas={moedasUsuario}/>
        <LojaOptions atualizarFotoUsuario = {atualizarFotoUsuario} atualizarMoedasUsuario = {atualizarMoedasUsuario}/>
    </>
  )
}
