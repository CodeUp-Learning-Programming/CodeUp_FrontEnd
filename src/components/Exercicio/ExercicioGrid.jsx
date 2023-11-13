import { React, useEffect, useState } from 'react'
import Content from './Content'
import style from './ExercicioGrid.module.css'
import MonacoEditor from '../Monaco/MonacoEditor'
import {GET_EXERCICIOS_FASE} from '../../api'

const ExercicioGrid = () => {

  const [exercicios, setExercicios] = useState([]);
  const [exercicioAtual, setExercicioAtual] = useState([1]);

  useEffect(() => {
    buscarExercicios();
    setExercicioAtual(sessionStorage.qtdExerciciosConcluidos);
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
  
  return (
    <div className={style.grid}>
      {exercicios.length > 0 ? (
        <>
          <Content
            titulo="Aprendendo"
            totalExerciciosConcluidos={exercicioAtual != 0? exercicioAtual : 1}
            totalExercicios={sessionStorage.qtdExercicios}
            conteudoTeorico={exercicios[exercicioAtual].conteudoTeorico}
            desafio={exercicios[exercicioAtual].desafio}
            instrucao={exercicios[exercicioAtual].instrucao}
            classe={style.content}
          />
          <MonacoEditor
            layoutFuncao={exercicios[exercicioAtual].layoutFuncao}
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

