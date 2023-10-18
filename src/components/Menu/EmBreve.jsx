import React from 'react'
import styles from './EmBreve.module.css'

const EmBreve = ({classe}) => {
  return (
    <div className={styles.div + " " + classe}>
        <h1 className={styles.titulo}>Em breve</h1>
    </div>
  )
}

export default EmBreve