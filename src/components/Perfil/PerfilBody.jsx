import React from 'react';
import style from './PerfilBody.module.css';
import VerticalContainer from './VerticalContainer';
import TopSideContainer from './TopSideContainer';
import BottomSideContainer from './BottomSideContainer';

const PerfilBody = ({ atualizarFotoUsuario, fotoUsuario }) => {
  return (
    <div className={style.bg}>
      <main className={style.main + " container"}>
        <VerticalContainer classe={style.perfil} nome={sessionStorage.nome} posicao={1} foto={fotoUsuario} />
        <TopSideContainer classe={style.progresso} titulo={"Trilha Recente"} progresso={27} />
        <BottomSideContainer classe={style.itens} titulo={"Meus itens"} atualizarFotoUsuario={atualizarFotoUsuario} />
      </main>
    </div>
  );
};

export default PerfilBody;
