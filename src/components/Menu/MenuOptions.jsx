import React from 'react'
import CardEstudar from './CardEstudar'
import EmBreve from './EmBreve'
import styles from './MenuOptions.module.css'
import { Link } from 'react-router-dom'
import { GET_MATERIA } from '../../api'

const MenuOptions = () => {

  async function buscarMaterias() {

    const { url, options } = GET_MATERIA(sessionStorage.tokenBearer);

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      for(var i = 0; i< data.length; i++){
        console.log(data[i])
        sessionStorage.setItem("materiaSelecionadaId", data[0].id)
        sessionStorage.setItem("materiaSelecionada", data[0].nome)
      }
    }

  }
  return (
    <section className={styles.bg}>
      <div className={styles.grid + ' container'}>
        <Link className={styles.estudo} onClick={buscarMaterias} to="/roadmap">
          <CardEstudar classe={styles.estudo2} />
        </Link>

        <EmBreve classe={styles.emBreve} />
        <EmBreve classe={styles.emBreve2} />
        <EmBreve classe={styles.emBreve3} />

      </div>
    </section>
  )
}

export default MenuOptions