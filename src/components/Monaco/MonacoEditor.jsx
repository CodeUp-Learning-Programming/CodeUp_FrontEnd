import Monaco, { useMonaco } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';
import TemasComprados from './TemasComprados';


import './monaco.css';

function MonacoEditor({classe, layoutFuncao}) {
  //const [data, setData] = useState([]);
  const lay = layoutFuncao.replace(/\\n/g, '\n')
  const monaco = useMonaco();
  const [layout, setLayout] = useState(lay);
  const [theme, setTheme] = useState('vs-dark'); // Initialize with vs-dark theme
  const [errorMessages, setErrorMessages] = useState([]);
  const [consoleMessages, setConsoleMessages] = useState([]);


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
      const exec = `${conteudo}exercicio(${listaNumeros[i]}, ${listaNumeros[i+1]});`
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
  

  const selecionarFase = (event) =>{
    var faseSelecionada = event.target.value;
    sessionStorage.setItem("faseSelecionada", faseSelecionada)
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
            onChange={(textoDigitado) => setLayoutFuncao(textoDigitado)}
            onValidate={handleEditorValidation}
          />
        </div>
        <div id='console' className='console'> 
      <TemasComprados handleThemeChange={handleThemeChange} />
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
