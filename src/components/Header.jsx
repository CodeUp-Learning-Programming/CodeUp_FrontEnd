import React from 'react'
import logo from '../assets/Codeup.png'
import styles from './Header.module.css'
import img from '../assets/img.png'

const Header = () => {
  return (
    <header className={styles.bg}>
    <div className={styles.header + " container"}>
      <img className={styles.logo} src={logo} alt="Logo CodeUp" />
      <nav className={styles.nav}>
        <p className={styles.p}>Algoritmo</p>
        <p className={styles.p}>0 dias</p>
        <img src={img} alt="Circulo Cinza" />
      </nav>
    </div>
    </header>
  )
}

export default Header