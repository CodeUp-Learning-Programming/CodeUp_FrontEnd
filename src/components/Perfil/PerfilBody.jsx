import React from 'react'
import style from './PerfilBody.module.css'
import halloween from '../../assets/Loja/halloween.jpg'
import VerticalContainer from './VerticalContainer'
import TopSideContainer from './TopSideContainer'
import BottomSideContainer from './BottomSideContainer'

const PerfilBody = () => {
  return (
    <div className={style.bg}>
      <main className={style.main}>
        <div className={style.leftContainer}>
          <VerticalContainer nome={sessionStorage.nome} posicao={1} foto={halloween}/>
        </div>
        <div className={style.rightContainer}>
          <TopSideContainer titulo={"Trilha Recente"} progresso={120}/>
          <BottomSideContainer titulo = {"Meus itens"}/>
        </div>
      </main>
    </div>
  )
}

export default PerfilBody;
