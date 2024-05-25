import React from 'react'
import styles from './CardEstudar.module.css'

const CardEstudar = ({classe}) => {
  return (
    <div className={styles.div + " " + classe}>
      <h1 className={styles.titulo}>Comece agora a estudar</h1>
    </div>
  )
}

export default CardEstudar