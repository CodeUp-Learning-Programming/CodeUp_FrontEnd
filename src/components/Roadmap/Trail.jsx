import {React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import styles from './Trail.module.css'
import { GET_FASES_MATERIA } from '../../api'
import { func } from 'prop-types'

const Trail = () => {
  
  const [fases, setFases] = useState([]);
  var materiaSelecionada = sessionStorage.materiaSelecionada ? sessionStorage.materiaSelecionada : "Algoritmos";

  useEffect(() => {
    buscarFases();
  }, []);
  
  async function buscarFases() {
    const { url, options } = GET_FASES_MATERIA(sessionStorage.tokenBearer, sessionStorage.materiaSelecionadaId);
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setFases(data);
    }
  }

  function redirectFase(id, qtdExerciciosFaseConcluidos, qtdExerciciosFase){
    sessionStorage.setItem('faseSelecionadaId', id)
    sessionStorage.setItem('qtdExerciciosFaseConcluidos', qtdExerciciosFaseConcluidos)
    sessionStorage.setItem('qtdExerciciosFase', qtdExerciciosFase)
  }

  return (
  <section className={styles.bg}>
    <div className='container'>
      <div className={styles.titulo}>
        <Link className={styles.link} to='/menu'>Menu</Link>
        <h1 className={styles.h1}>{materiaSelecionada}</h1>
        <span className={styles.span}></span>
      </div>
      <div className={styles.containerCards}>
      {fases.map((fase) => (
        console.log(fase),
        <Link onClick={() => redirectFase(fase.faseId, fase.qtdExerciciosFaseConcluidos, fase.qtdExerciciosFase)} to="/exercicio" key={fase.faseId}>
              <Card
                id={fase.faseId}
                titulo={fase.tituloFase}
                subtitulo="Aprenda"
                status={fase.qtdExerciciosFaseConcluidos >= fase.qtdExerciciosFase  && fase.qtdExerciciosFase != 0 || fase.numFase == 1? "on" : ""}
                />
            </Link>
          ))}
        {/* <Link to="/exercicio">
          <Card titulo="O Começo" subtitulo="Aprenda" status="on"/>
        </Link>
        
        <Card titulo="O Começo" subtitulo="Aprenda" />
        <Card titulo="O Começo" subtitulo="Aprenda" /> */}
        <div className={styles.barra}>
      </div>
      

      </div>
    </div>
  </section>
  )
}

export default Trail