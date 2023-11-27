import {React, useState} from 'react'
import style from './PerfilBody.module.css'
import halloween from '../../assets/Loja/halloween.jpg'
import VerticalContainer from './VerticalContainer'
import TopSideContainer from './TopSideContainer'
import BottomSideContainer from './BottomSideContainer'

const PerfilBody = () => {

  const [fotoUsuario, setFotoUsuario] = useState(sessionStorage.fotoPerfil ?? halloween);

  const atualizarFotoUsuario = (novaFoto) => {
    setFotoUsuario(novaFoto);
  };


  return (
    <div className={style.bg}>
      <main className={style.main + " container"}>
          <VerticalContainer classe={style.perfil} nome={sessionStorage.nome} posicao={1} foto={fotoUsuario} />
          <TopSideContainer classe={style.progresso} titulo={"Trilha Recente"} progresso={27}/>
          <BottomSideContainer classe={style.itens} titulo = {"Meus itens"} atualizarFotoUsuario={atualizarFotoUsuario} />
      </main>
    </div>
  )
}

export default PerfilBody;
