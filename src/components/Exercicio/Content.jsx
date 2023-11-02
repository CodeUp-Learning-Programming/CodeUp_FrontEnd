import React from "react";
import style from "./Content.module.css";

const Content = ({classe}) => {
  console.log(classe)

  return (
    <div className={style.container + " " + classe}>
      <div className={style.containerTitulo}>
        <h1 className={style.titulo}>Criando váriaveis</h1>
        <p>1/10</p>
      </div>
      <p>
        Na ciência da computação, dado é qualquer coisa que tenha significado
        para o computador. JavaScript fornece oito tipos de dados diferentes que
        são undefined, null, boolean, string, symbol, bigint, number e object.
        Por exemplo, os computadores distinguem números, como o número12, e
        strings, como o 12, dog, ou 123 cats, as quais são coleções de
        caracteres. Computadores podem realizar operações matemáticas em um
        número, mas não em uma string. Variáveis permitem aos computadores
        armazenar e manipular dados de forma dinâmica. Elas fazem isso usando
        uma etiqueta para apontar para o dado ao invés de usar o próprio dado.
        Qualquer um dos 8 tipos de dados pode ser armazenado em uma variável.
      </p>
      <span className={style.divisoria}></span>
      <p>1. Use o a palavra reserva let para criar a chamado hello.</p>
      <p>2. Atribuia o valor “Olá” a váriavel hello.</p>
    </div>

  );
};

export default Content;
