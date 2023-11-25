import React, { useState, useEffect } from 'react';
import style from './BottomSideContainer.module.css';
import {EQUIPAR_ITEM_ADQUIRIDO} from '../../api';
import { func } from 'prop-types';

const BottomSideContainer = ({ titulo, classe, atualizarFotoUsuario  }) => {
  const listaItens = JSON.parse(sessionStorage.itensAdquiridos);
  const [numero, setNumero] = useState(10);
  const [itensComprados, setItensComprados] = useState(listaItens);

  async function equiparItem(novaFoto) {
    const { url, options } = EQUIPAR_ITEM_ADQUIRIDO(sessionStorage.tokenBearer, novaFoto)
    const response = await fetch(url, options);
    if (response.ok) {
        sessionStorage.setItem('fotoPerfil', novaFoto);
        atualizarFotoUsuario(novaFoto);
    }
}

  useEffect(() => {
    const progressBar = document.querySelector(`.${style.barra}`);
    if (progressBar) {
      progressBar.style.width = `${numero}%`;
    }
  }, [numero]);

  return (
    <div className={style.borda + " " + classe}>
      <div className={style.titulo}>{titulo}</div>
      <div className={style.lista}>
        {itensComprados.map((item, index) => (
          <div className={style.item} key={index} onClick={() => equiparItem(item.fotoItem)}>
            <img src={`data:image/png;base64,${item.fotoItem}`} alt={item.nomeItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSideContainer;
