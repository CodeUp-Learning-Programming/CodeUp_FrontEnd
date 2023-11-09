import Monaco, { useMonaco } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';
import { TemasComprados } from './TemasComprados.jsx';
import Amy from './themes/Amy.json';
import MonokaiBrightTheme from './themes/Monokai Bright.json';
import Monokai from './themes/Monokai.json';

import './monaco.css';

function MonacoEditor({classe}) {
  //const [data, setData] = useState([]);
  const monaco = useMonaco();
  const [conteudoTeorico, setConteudoTeorico] = useState('');
  const [desafio, setDesafio] = useState('');
  const [instrucao, setInstrucao] = useState('');
  const [layoutFuncao, setLayoutFuncao] = useState('function exercicio1() {\n /* Implemente aqui */ \n}');
  const [theme, setTheme] = useState('vs-dark'); // Initialize with vs-dark theme
  const [errorMessages, setErrorMessages] = useState([]);
  const [consoleMessages, setConsoleMessages] = useState([]);

  

    // function buscarFase() {

    //   const config = {
    //     method: 'GET',
    //     url: `/fases/${sessionStorage.faseSelecionada}`,
    //     headers: {
    //       'Authorization': `Bearer ${sessionStorage.tokenBearer}` // Aqui, adicionamos o token Bearer ao cabeçalho Authorization
    //     }
    //   };
  
    //   api(config)
    //   .then((respostaObtida) => {
    //   // cairá aqui se a requisição for realizada;
    //   console.log(respostaObtida);
    //   // objeto que representa a resposta enviada pela API;
    //   console.log(respostaObtida.status);
    //   // vendo status da resposta (OK - 200);
    //   console.log(respostaObtida.data);
    //   // vendo os dados da resposta (data: []);

    //   setLayoutFuncao(respostaObtida.data.conteudo_exec)
    //   setData(respostaObtida.data)
    //   // setando "musicas" com os mesmos dados recebidos pela resposta da requisição;
    //   })
    //   .catch((erroOcorrido) => { // cairá aqui se houver algum erro durante a requisição
    //   console.log(erroOcorrido);
    //   })
    //   }

  const editorRef = useRef(null);

  const handleSave = () => {
    //Salvar no banco assim
    console.log(editorRef.current.getValue())
  }

  function handleEditorValidation(markers) {
    // Filtra apenas os marcadores de erro
    const errorMarkers = markers.filter((marker) => marker.severity === monaco.MarkerSeverity.Error);

    // Obtém as mensagens de erro dos marcadores
    const errorMessages = errorMarkers.map((marker) => marker.message);

    // Atualiza o estado com as mensagens de erro
    setErrorMessages(errorMessages);
  }

  function validar(){

    // Pega o conteudo do editor
    var conteudo = editorRef.current.getValue(); 

    // Números para fazer o teste
    const listaNumeros = [5,6,7,8,9,10,11,22,13,14];

    // Total de acertos necessários para passar 
    const acertosNecessarios = 5;
    let acertosTotais = 0;

    // Inicio dos testes
    for(var i = 0; i < listaNumeros.length; i+=2){
      
      //Chamando a função digitada
      const exec = `
      ${conteudo}
      exercicio(${listaNumeros[i]}, ${listaNumeros[i+1]});
      `
      
      // Executa o teste
      const resultado = eval(exec);

      // Valida se acertou o teste
      if(resultado === listaNumeros[i] + listaNumeros[i+1]){
        acertosTotais++;
        console.log("Acertou")
      }
    }
    
    
    var msg = `O seu código não está correto! Acertou um total de ${acertosTotais} dos testes`
    if(acertosNecessarios === acertosTotais){
      msg = `O seu código está correto! Acertou um total de ${acertosTotais} dos testes`
    }
    setConsoleMessages(msg)

  }

  

  const listaTemas = ['vs', 'vs-dark', 'hc-black', Amy, MonokaiBrightTheme, Monokai]
  const handleThemeChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10); // Parse the value as an integer
    console.log("aaa")
    if (selectedValue === 0) {
      monaco.editor.setTheme('vs');
    } else if (selectedValue === 1) {
      monaco.editor.setTheme('vs-dark');
    } else if (selectedValue === 2) {
      monaco.editor.setTheme('hc-black');
    } else {
      monaco.editor.defineTheme('meu-tema', listaTemas[selectedValue]);
      monaco.editor.setTheme('meu-tema');
    }
  };
  

  const selecionarFase = (event) =>{
    var faseSelecionada = event.target.value;
    sessionStorage.setItem("faseSelecionada", faseSelecionada)
  }


  return (
    <div className={classe}>
    <TemasComprados/>      
      {/* <button className='botao' onClick={validar}>Verificar</button>
      <button className='botao' onClick={handleSave}>Salvar</button>
      <button className='botao' onClick={buscarFase}>Buscar fase</button> */}

      <span className='monacoContainer'>
        <div className='monaco'>
          <span className='titulo'><span>JS</span> JavaScript</span>
          <Monaco
            height='60vh'
            width='50vw'
            theme={theme}
            defaultLanguage='javascript'
          
            value={layoutFuncao}
            onChange={(textoDigitado) => setLayoutFuncao(textoDigitado)}
            onValidate={handleEditorValidation}
          />
        </div>

        <div id='console' className='console'>
        
        <div>
          
        
        {consoleMessages}
        
      {/* Exibe mensagens de erro */}
      
      {errorMessages.length > 0 && (
        <div>
          <h2>Mensagens de Erro:</h2>
          
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          
        </div>
      )}</div>
        
        </div>
        <button className='botao' onClick={validar}>Verificar</button>
      </span>




    </div>
  )
}

export default MonacoEditor;
