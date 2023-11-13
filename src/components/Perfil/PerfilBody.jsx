import React from 'react'
import style from './PerfilBody.module.css'
import halloween from '../../assets/Loja/halloween.jpg'
import VerticalContainer from './VerticalContainer'
import TopSideContainer from './TopSideContainer'
import BottomSideContainer from './BottomSideContainer'

const PerfilBody = () => {
  return (
    <div className={style.bg}>
      <main className={style.main + " container"}>
          <VerticalContainer classe={style.perfil} nome={sessionStorage.nome} posicao={1} foto={halloween}/>
          <TopSideContainer classe={style.progresso} titulo={"Trilha Recente"} progresso={20}/>
          <BottomSideContainer classe={style.itens} titulo = {"Meus itens"}/>
      </main>
    </div>
  )
}

export default PerfilBody;
