// Header.js

import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Codeup.png'
import styles from './Header.module.css'
import coin from '../assets/moeda.svg'
import UserDropdownMenu from './Perfil/profile'

const Header = ({fotoUsuario, moedas}) => {
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
        <Link to="/roadmap">
        <p className={styles.p}>Roadmap</p>
          </Link>
          <Link to={"/loja"}>
            <p className={styles.p}>Loja</p>
          </Link>
          <p className={styles.p2}>{moedas ?? sessionStorage.moedas} <img className={styles.moeda} src={coin} alt="Moeda"/></p>
          <div className={styles["user-dropdown-container"]}>
          <UserDropdownMenu fotoUsuario = {fotoUsuario ?? sessionStorage.fotoPerfil}/>
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
