import React from 'react'
import styles from './Card.module.css'

const Card = ({subtitulo, titulo}) => {
  return (
    <div className={styles.div}>
        <p className={styles.subtitulo}>{subtitulo}</p>
        <h1 className={styles.titulo}>{titulo}</h1>
    </div>
  )
}

export default Card