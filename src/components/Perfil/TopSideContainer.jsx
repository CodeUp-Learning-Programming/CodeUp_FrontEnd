import React, { useState, useEffect } from 'react';
import style from './TopSideContainer.module.css';

const TopSideContainer = ({ titulo, progresso, classe }) => {
  
  useEffect(() => {
    const progressBar = document.querySelector(`.${style.barra}`);
    if (progressBar) {
      progressBar.style.width = `${progresso > 100 ? 100 : progresso < 0 ? 0 : progresso}%`;
    }
  },[progresso]);


  return (
    <div className={style.borda + " " + classe}>
      <div className={style.titulo}>{titulo}</div>
      <div className={style.progress}>
        <div className={style.materia}>
          <p>Algoritmo</p>
          <p id="number">{progresso > 100 ? 100 : progresso < 0 ? 0 : progresso}%</p>
        </div>
        <div className={style.progressBar}>
          <div className={style.barra}></div>
        </div>
      </div>
    </div>
  );
};

export default TopSideContainer;
