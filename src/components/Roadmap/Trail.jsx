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
    console.log(qtdExerciciosFaseConcluidos)
    sessionStorage.setItem('faseSelecionadaId', id)
    sessionStorage.setItem('qtdExerciciosFaseConcluidos', qtdExerciciosFaseConcluidos)
    sessionStorage.setItem('exercicioAtual', qtdExerciciosFaseConcluidos == 0 ? 0 : --qtdExerciciosFaseConcluidos) 
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
        fase.desbloqueada ?
        <Link onClick={() => redirectFase(fase.faseId, fase.qtdExerciciosFaseConcluidos, fase.qtdExerciciosFase)} to="/exercicio" key={fase.faseId}>
              <Card
                id={fase.faseId}
                titulo={fase.tituloFase}
                subtitulo="Aprenda"
                status={"on"}
                />
            </Link> :
             <Link key={fase.faseId}>
             <Card
               id={fase.faseId}
               titulo={fase.tituloFase}
               subtitulo="Aprenda"
               status={""}
               />
           </Link>
          ))}
        <div className={styles.barra}>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Trail