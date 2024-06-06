import React from "react";
import style from "./Content.module.css";

const Content = ({ classe, titulo, totalExerciciosConcluidos, totalExercicios, conteudoTeorico, desafio, instrucao }) => {
  const listaConteudoTeorico = conteudoTeorico.split("^");
  const listaInstrucao = instrucao.split("^");

  const coresJson = {
    "palavrasChave": {
      "function": "#0000FF",
      "if": "#800080",
      "else": "#800080",
      "for": "#800080",
      "while": "#800080",
      "switch": "#800080",
      "case": "#800080",
      "return": "#800080",
      "const": "#e7760c",
      "let": "#0000FF",
      "var": "#e7b40c",
      "Object": "#008000",
      "Array": "#008000",
      "String": "#FF0000",
      "Number": "#FFA500",
      "comentario": "#808080",
      "linha": "#808080",
      "cadeiasCaracteres": "#FF0000",
      "numeros": "#FFA500"
    },
  };

  function colorirPalavrasReservadas(frase) {
    const palavrasReservadas = coresJson.palavrasChave;

    return frase.split(/\b/).map((palavra, index) => {
      if (palavrasReservadas[palavra.toLowerCase()]) {
        return (
          <span key={index} className={style.colorir} style={{ color: palavrasReservadas[palavra.toLowerCase()], fontWeight: 600 }}>
            {palavra}
          </span>
        );
      }
      return palavra;
    });
  }

  return (
    <div className={style.container + " " + classe}>
      <div className={style.containerTitulo}>
        <h1 className={style.titulo}>{titulo}</h1>
        <p>
          {totalExerciciosConcluidos}/{totalExercicios}
        </p>
      </div>
      <p className={style.conteudo}>
        {listaConteudoTeorico.map((item, index) => (
          <p key={index} id={`texto_${index}`} className={style.recuo}>
            {colorirPalavrasReservadas(item)}
          </p>
        ))}
      </p>
      <span className={style.divisoria}></span>
      {listaInstrucao.map((item, index) => (
        <p key={index}>
          {colorirPalavrasReservadas(item)}
          </p>
      ))}
      {/* <p>{desafio}</p> */}
    </div>
  );
};

export default Content;
