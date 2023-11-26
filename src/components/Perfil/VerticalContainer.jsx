import {React, useState} from 'react'
import style from './VerticalContainer.module.css';
import padrao from '../../assets/padrao.jpeg'

const VerticalContainer = ({ nome, posicao, foto, classe }) => {

  return (
    <div className={style.main + " " + classe}>
      <div className={style.box}>
        <img className={style.imagem} src={sessionStorage.fotoPerfil == null ? `data:image/png;base64,${sessionStorage.fotoPerfil}`: padrao} alt="Sua foto" />
        <p className={style.name}>{nome}</p>
      </div>
      <div className={style.box}>
        <p className={style.ranking}>Ranking</p>
        <p className={style.text}>{"#" + posicao}</p>
      </div>
    </div>
  );
};

export default VerticalContainer;
