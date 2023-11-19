import { React, useEffect, useState } from 'react'
import Content from './Content'
import style from './ExercicioGrid.module.css'
import MonacoEditor from '../Monaco/MonacoEditor'
import {GET_EXERCICIOS_FASE} from '../../api'

const ExercicioGrid = () => {

  const [exercicios, setExercicios] = useState([]);
  const [exercicioAtual, setExercicioAtual] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await buscarExercicios();
    };
    
    setExercicioAtual(sessionStorage.qtdExerciciosFaseConcluidos == sessionStorage.qtdExerciciosFase ?
      sessionStorage.qtdExerciciosFase -1 : sessionStorage.qtdExerciciosFaseConcluidos != 0 ?
      sessionStorage.qtdExerciciosFaseConcluidos: 0)
    fetchData();
  }, [exercicioAtual]); // exercicioAtual adicionado como dependência
  
  async function buscarExercicios() {
    const { url, options } = GET_EXERCICIOS_FASE(sessionStorage.tokenBearer, sessionStorage.faseSelecionadaId);
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setExercicios(data);
    }
  }

  return (
    <div className={style.grid}>
      {exercicios.length > 0 ? (
        <>  
          <Content
            titulo={exercicios[exercicioAtual].titulo ? exercicios[exercicioAtual].titulo : "Aprendendo"}
            totalExerciciosConcluidos={Number(exercicioAtual) + 1}
            totalExercicios={sessionStorage.qtdExerciciosFase}
            conteudoTeorico={exercicios[exercicioAtual].conteudoTeorico}
            desafio={exercicios[exercicioAtual].desafio}
            instrucao={exercicios[exercicioAtual].instrucao}
            classe={style.content}
          />
          <MonacoEditor
            layoutFuncao={exercicios[exercicioAtual].layoutFuncao}
            moeda = {exercicios[exercicioAtual].moeda}
            xp = {exercicios[exercicioAtual].xp}
            className={style.terminal}
          />
        </>
      ) : (
        <p>Nenhum exercício disponível.</p>
      )}
    </div>
  );
};

export default ExercicioGrid

