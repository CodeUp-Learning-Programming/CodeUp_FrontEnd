import React,{ useState} from 'react'
import { Link, useNavigate  } from "react-router-dom";
import logo from '../assets/Codeup.png'
import styles from './Header.module.css'
import coin from '../assets/moeda.svg'
import padrao from '../assets/Loja/halloween.jpg'


const Header = () => {
  const [foto, setFoto] = useState(sessionStorage.fotoPerfil ? padrao : sessionStorage.fotoPerfil);

  const navigate = useNavigate()

  var materiaSelecionada = sessionStorage.materiaSelecionada ? sessionStorage.materiaSelecionada : "";
  var ofensivaUsuario = sessionStorage.ofensivaUsuario ? sessionStorage.ofensivaUsuario : "0";
  var moeda = sessionStorage.moedas ? sessionStorage.moedas : 0
  return (
    <header className={styles.bg}>
    <div className={styles.header + ' container'}>
    <Link to={"/menu"}>
      <img className={styles.logo} src={logo} alt="Logo CodeUp" />
    </Link>
      <nav className={styles.nav}>
    <Link to={"/"}>
      <p className={styles.p}>Sair</p>
    </Link>
      <Link to={"/loja"}>
      <p className={styles.p}>Loja</p>
     </Link>
      <Link to={"/menu"}>
      <p className={styles.p}>Menu</p>
     </Link>
      <Link to={"/perfil"}>
      <p className={styles.p}>Meu Perfil</p>
     </Link>
        <p className={styles.p}>{materiaSelecionada ? 
        <Link to={"/roadmap"}>{materiaSelecionada}</Link> : ""}</p>
        <p className={styles.p}>{ofensivaUsuario} dias</p>
        <p className={styles.p2}>{moeda} <img className={styles.moeda} src={coin} alt="Moeda"/></p>
        <Link to={"/perfil"}>
        <img className={styles.imagem} src={foto} alt="Circulo Cinza" />
        </Link>
      </nav>
    </div>
    </header>
  )
}


export default Header