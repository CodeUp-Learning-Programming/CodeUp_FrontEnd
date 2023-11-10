import { React, useEffect, useState } from 'react'
import Content from './Content'
import style from './ExercicioGrid.module.css'
import MonacoEditor from '../Monaco/MonacoEditor'
import {GET_EXERCICIOS_FASE} from '../../api'

const ExercicioGrid = () => {

  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    buscarExercicios();
  }, []);
  
  async function buscarExercicios() {
    const { url, options } = GET_EXERCICIOS_FASE(sessionStorage.tokenBearer, sessionStorage.faseSelecionadaId);
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setExercicios(data);
    }
  }

  useEffect(() => {
    buscarExercicios();
  }, []);
  
  useEffect(() => {
    console.log(exercicios);
    console.log(sessionStorage.qtdExerciciosConcluidos-1)
    console.log(sessionStorage.qtdExercicios)
  }, [exercicios]);
  
  //Passar props
  return (
    <div className={style.grid}>
      {exercicios.length > 0 ? (
        <>
          <Content
            titulo="Aprendendo"
            totalExerciciosConcluidos={sessionStorage.qtdExerciciosConcluidos}
            totalExercicios={sessionStorage.qtdExercicios}
            conteudoTeorico={exercicios[sessionStorage.qtdExerciciosConcluidos - 1].conteudoTeorico}
            desafio={exercicios[sessionStorage.qtdExerciciosConcluidos - 1].desafio}
            instrucao={exercicios[sessionStorage.qtdExerciciosConcluidos - 1].instrucao}
            classe={style.content}
          />
          <MonacoEditor
            layoutFuncao={exercicios[sessionStorage.qtdExerciciosConcluidos - 1].layoutFuncao}
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

