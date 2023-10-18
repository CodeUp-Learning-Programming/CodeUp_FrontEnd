import React from 'react'
import CardEstudar from './CardEstudar'
import EmBreve from './EmBreve'
import styles from './MenuOptions.module.css'

const MenuOptions = () => {
  return (
    <section className={styles.bg}>
        <div className={styles.grid + ' container'}>
            <CardEstudar classe={styles.estudo}/>
            <EmBreve classe={styles.emBreve}/>
            <EmBreve classe={styles.emBreve2}/>
            <EmBreve classe={styles.emBreve3}/>
            
        </div>
    </section>
  )
}

export default MenuOptions