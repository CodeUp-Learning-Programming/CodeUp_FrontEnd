import React from "react";
import style from "./Content.module.css";

const Content = ({classe, titulo, totalExerciciosConcluidos, totalExercicios, conteudoTeorico, desafio, instrucao}) => {
  console.log(classe)
  var listaInstrucao = instrucao.split("^")

  return (
    <div className={style.container + " " + classe}>
      <div className={style.containerTitulo}>
        <h1 className={style.titulo}>{titulo}</h1>
        <p>{totalExerciciosConcluidos}/{totalExercicios}</p>
      </div>
      <p>
        {conteudoTeorico}
      </p>
      <span className={style.divisoria}></span>
      {listaInstrucao.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <p>{desafio}</p>
    </div>

  );
};

export default Content;
