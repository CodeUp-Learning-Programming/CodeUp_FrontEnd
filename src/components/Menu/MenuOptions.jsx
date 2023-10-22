import React from 'react'
import CardEstudar from './CardEstudar'
import EmBreve from './EmBreve'
import styles from './MenuOptions.module.css'
import { Link } from 'react-router-dom'

const MenuOptions = () => {
  return (
    <section className={styles.bg}>
        <div className={styles.grid + ' container'}>
            <Link className={styles.estudo} to="/roadmap">
            <CardEstudar classe={styles.estudo2}/>
            </Link>
            
            <EmBreve classe={styles.emBreve}/>
            <EmBreve classe={styles.emBreve2}/>
            <EmBreve classe={styles.emBreve3}/>
            
        </div>
    </section>
  )
}

export default MenuOptions