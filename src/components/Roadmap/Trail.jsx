import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import styles from './Trail.module.css'

const Trail = () => {
  return (
  <section className={styles.bg}>
    <div className='container'>
      <div className={styles.titulo}>
        <Link className={styles.link} to='/menu'>Menu</Link>
        <h1 className={styles.h1}>Algoritmo</h1>
        <span className={styles.span}></span>
      </div>
      <div className={styles.containerCards}>
        <Link to="/terminal">
          <Card titulo="O Começo" subtitulo="Aprenda" status="on"/>
        </Link>
        
        <Card titulo="O Começo" subtitulo="Aprenda" />
        <Card titulo="O Começo" subtitulo="Aprenda" />
        <div className={styles.barra}>
      </div>
      

      </div>
    </div>
  </section>
  )
}

export default Trail