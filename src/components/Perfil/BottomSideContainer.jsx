import React, { useState, useEffect } from 'react';
import style from './BottomSideContainer.module.css';
import blackCat from '../../assets/Loja/black-cat.jpg';
import candy from '../../assets/Loja/candy.jpg';
import ghost from '../../assets/Loja/ghost.jpg';
import halloween from '../../assets/Loja/halloween.jpg';

const BottomSideContainer = ({ titulo }) => {
  const item1 = {
    imagem: blackCat
  };
  const item2 = {
    imagem: candy
  };
  const item3 = {
    imagem: ghost
  };
  const item4 = {
    imagem: halloween
  };

  const listaItens = Array(7).fill([item1, item2, item3, item4]).flat();
  const [numero, setNumero] = useState(10);
  const [itensComprados, setItensComprados] = useState(listaItens); // Exemplo de três itens

  useEffect(() => {
    const progressBar = document.querySelector(`.${style.barra}`);
    if (progressBar) {
      progressBar.style.width = `${numero}%`;
    }
  }, [numero]);

  return (
    <div className={style.borda}>
      <div className={style.titulo}>{titulo}</div>
      <div className={style.lista}>
        {itensComprados.map((item, index) => (
          <div className={style.item} key={index}>
            <img src={item.imagem} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSideContainer;
