import { React, useState, useEffect } from 'react';
import style from './PerfilBody.module.css';
import VerticalContainer from './VerticalContainer';
import TopSideContainer from './TopSideContainer';
import BottomSideContainer from './BottomSideContainer';
import { GET_FASES_MATERIA } from '../../api';

const PerfilBody = ({ atualizarFotoUsuario, fotoUsuario }) => {
  const [fases, setFases] = useState([]);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    buscarFases();
  }, []);

  useEffect(() => {
    calcularProgresso();
  }, [fases]);

  async function buscarFases() {
    const { url, options } = GET_FASES_MATERIA(sessionStorage.tokenBearer, sessionStorage.materiaSelecionadaId ?? 1);
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setFases(data);
    }
  }

  function calcularProgresso() {
    let totalExerciciosConcluidos = 0;
    let totalExerciciosFase = 0;

    for (let i = 0; i < fases.length; i++) {
      totalExerciciosConcluidos += fases[i].qtdExerciciosFaseConcluidos;
      totalExerciciosFase += fases[i].qtdExerciciosFase;
    }

    const progressoCalculado = totalExerciciosFase > 0 ? (totalExerciciosConcluidos / totalExerciciosFase) * 100 : 0;
    setProgresso(progressoCalculado);
  }

  return (
    <div className={style.bg}>
      <main className={style.main + " container"}>
        <VerticalContainer classe={style.perfil} nome={sessionStorage.nome} posicao={1} foto={fotoUsuario} />
        <TopSideContainer classe={style.progresso} titulo={"Trilha Recente"} progresso={progresso.toFixed(0)} />
        <BottomSideContainer classe={style.itens} titulo={"Meus itens"} atualizarFotoUsuario={atualizarFotoUsuario} />
      </main>
    </div>
  );
};

export default PerfilBody;
