import React from 'react';
import style from './VerticalContainer.module.css';

const VerticalContainer = ({ nome, posicao, foto, classe }) => {

  return (
    <div className={style.main + " " + classe}>
      <div className={style.box}>
        <img className={style.imagem} src={foto} alt="Sua foto" />
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
