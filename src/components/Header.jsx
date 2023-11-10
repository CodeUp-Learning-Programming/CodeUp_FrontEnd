import React from 'react'
import logo from '../assets/Codeup.png'
import styles from './Header.module.css'
import img from '../assets/img.png'

const Header = () => {
  var materiaSelecionada = sessionStorage.materiaSelecionada ? sessionStorage.materiaSelecionada : "Materia não encontrada";
  var ofensivaUsuario = sessionStorage.ofensivaUsuario ? sessionStorage.ofensivaUsuario : "0";

  return (
    <header className={styles.bg}>
    <div className={styles.header + " container"}>
      <img className={styles.logo} src={logo} alt="Logo CodeUp" />
      <nav className={styles.nav}>
        <p className={styles.p}>{materiaSelecionada}</p>
        <p className={styles.p}>{ofensivaUsuario} dias</p>
        <img src={img} alt="Circulo Cinza" />
      </nav>
    </div>
    </header>
  )
}

export default Header