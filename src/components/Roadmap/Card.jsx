import React from 'react'
import styles from './Card.module.css'

const Card = ({subtitulo, titulo, status}) => {
  return (
    <>
    {status ? 
    <div className={styles.div}>
        <p className={styles.subtitulo}>{subtitulo}</p>
        <h1 className={styles.titulo}>{titulo}</h1>
    </div> :
    <div className={styles.divDisable}>
      <p className={styles.subtituloDisable}>{subtitulo}</p>
      <h1 className={styles.tituloDisable}>{titulo}</h1>
    </div>
  }
    </>
    
  )
}

export default Card