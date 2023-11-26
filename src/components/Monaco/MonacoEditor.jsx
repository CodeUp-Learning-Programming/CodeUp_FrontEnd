import Monaco, { useMonaco } from '@monaco-editor/react';
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import TemasComprados from './TemasComprados';
import { VALIDAR_EXERCICIO, SALVAR_NA_PILHA, DESFAZER_PILHA, REFAZER_PILHA } from '../../api';

import './monaco.css';



function MonacoEditor({ classe, layoutFuncao, xp, moeda, idExercicio, idFase, atualizarConteudo }) {
  //const [data, setData] = useState([]);
  // const lay = layoutFuncao.replace(/\\n/g, '\n')
  const monaco = useMonaco();
  const [layout, setLayout] = useState("");
  const [theme, setTheme] = useState('vs-dark'); // Initialize with vs-dark theme
  const [errorMessages, setErrorMessages] = useState([]);
  const [consoleMessages, setConsoleMessages] = useState([]);
  const navigate = useNavigate();
  const salvarComTimeOut = useRef(null);

  // function handleEditorValidation(markers) {
  //   // Filtra apenas os marcadores de erro
  //   const errorMarkers = markers.filter((marker) => marker.severity === monaco.MarkerSeverity.Error);
  //   // Obtém as mensagens de erro dos marcadores
  //   const errorMessages = errorMarkers.map((marker) => marker.message);
  //   // Atualiza o estado com as mensagens de erro
  //   setErrorMessages(errorMessages);
  // }

  async function validar() {
    console.log(layout)
    var validar = document.getElementById("validar");
    validar.style.animation = 'trocarCores 2s infinite';
    if (!layout) {
      setLayout(" ");
    }
    var layoutCerto = layoutFuncao.replace('{resposta}', `${layout}`);
    const { url, options } = VALIDAR_EXERCICIO(sessionStorage.tokenBearer, layoutCerto, idExercicio, idFase)

    const response = await fetch(url, options);
    if (response.ok) {
      validar.style.animation = 'none';
      validar.style = `border-image-source: linear-gradient(90deg, rgba(0,226,242,1) 0%, rgba(0,127,251,1) 100%);`;


      var data = await response.json();
      console.log(data)
      if (data.passou) {
        if (sessionStorage.qtdExerciciosFase == sessionStorage.qtdExerciciosFaseConcluidos) {
          console.log("Você já terminou essa fase!")
        } else {
          console.log(data.resultado)
          console.log("ir para a proxima fase")
          setTimeout(() => {
            sessionStorage.xp = Number(sessionStorage.xp) + Number(xp);
            sessionStorage.moedas = Number(sessionStorage.moedas) + Number(moeda);
            sessionStorage.qtdExerciciosFaseConcluidos++;
            atualizarConteudo
            // window.location.reload();
            console.log("Trocando de fase")
          }, 1000);
        }

      } else {
        validar.style.animation = 'none';
        validar.style = `border-image-source: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 128, 0, 1) 50%, rgba(255, 255, 0, 1) 100%);`;

        var result = data.resultado
        result = data.resultado.replace(layoutCerto, layout)

        if (result.includes("Thread was interrupted.")) {
          setConsoleMessages("Timeout, seu código demorou muito para rodar, fique atento com um loop infinito!")
        }
        if (result.includes("Expected ;")) {
          setConsoleMessages("Você esqueceu de colocar ; em alguma linha do código!");
        }

        if (result.includes("ReferenceError:") && result.includes("is not defined")) {
          result = result.replace("ReferenceError:", "")
          result = result.replace("is not defined", "")
          setConsoleMessages(`A variável${result}não está definida (undefined)`)
        }
      }

    }

  }

  function handleThemeChange() {
    console.log(selectTemas.options.select)
    if (selectedTheme === 'vs') {
      monaco.editor.setTheme('vs');
    } else if (selectedTheme === 'vs-dark') {
      monaco.editor.setTheme('vs-dark');
    } else if (selectedTheme === 'hc-black') {
      monaco.editor.setTheme('hc-black');
    } else {
      monaco.editor.defineTheme('meu-tema', selectedTheme);
      monaco.editor.setTheme('meu-tema');
    }
  }

  const mudarFase = (event) => {
    if (event === "voltar") {
      if (sessionStorage.qtdExerciciosFaseConcluidos - 1 < 0) {
        console.log("Você já está na primeira fase!")
      } else {
        console.log("Voltando uma fase!");
        sessionStorage.qtdExerciciosFaseConcluidos--;
        window.location.reload();
      }
    } else if (event === "avancar") {

      if (sessionStorage.qtdExerciciosFaseConcluidos >= sessionStorage.qtdExerciciosFase - 1) {
        console.log("Você já está na ultima fase!")
      } else {
        console.log("Avançando uma fase!")
        sessionStorage.qtdExerciciosFaseConcluidos++;
        window.location.reload();
      }

    }
  }

  async function validarAntesDeSalvar(layout) {
    setLayout(layout)
    if (salvarComTimeOut.current) {
      clearTimeout(salvarComTimeOut.current);
    }

    salvarComTimeOut.current = setTimeout(async () => {
      await salvar(layout);
      salvarComTimeOut.current = null;
    }, 1000);
  }

  async function salvar(layout) {
    setLayout(layout)
    const { url, options } = SALVAR_NA_PILHA(sessionStorage.tokenBearer, layout)

    const response = await fetch(url, options);
    if (response.ok) {
      console.log("salvo")
    }
  }

  async function desfazer() {

    const { url, options } = DESFAZER_PILHA(sessionStorage.tokenBearer)

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setLayout(data);
    }else{
      console.log("Não há o que desfazer")
    }

  }

  async function refazer() {

    const { url, options } = REFAZER_PILHA(sessionStorage.tokenBearer)

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setLayout(data);
    }else{
      console.log("Não há o que refazer")
    }

  }

  return (
    <div className={classe}>
      <span className='monacoContainer'>
        <div className='monaco'>
          <span className='titulo'><span>JS</span> JavaScript</span>
          <Monaco
            height='60vh'
            width='50vw'
            theme={theme}
            defaultLanguage='javascript'
            value={layout}
            onChange={(e) => validarAntesDeSalvar(e)}
            // onValidate={handleEditorValidation}
          />
        </div>
        <div id='console' className='console'>
          {/* <TemasComprados handleThemeChange={handleThemeChange} /> */}
          {/* <div> */}
            {consoleMessages}
            {/* Exibe mensagens de erro
            {errorMessages.length > 0 && (
              <div>
                <h2>Mensagens de Erro:</h2>
                <ul>
                  {errorMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            )}</div> */}
        </div>

        <div className='botoes'>
          {/* <button className='botao' onClick={salvar}>Salvar</button> */}
          <button className='botao' onClick={desfazer}>Desfazer</button>
          <button className='botao' onClick={refazer}>Refazer</button>
          <button className='botao' onClick={() => { mudarFase("voltar") }}>Voltar</button>
          <button className='botao' onClick={() => { mudarFase("avancar") }}>Proxima</button>
          <button className='botao' id='validar' onClick={validar}>Verificar</button>

        </div>
      </span>
    </div>
  )
}

export default MonacoEditor;
