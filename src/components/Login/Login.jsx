import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_CADASTRO, USER_LOGIN } from "../../api";
import logo from "../../assets/Codeup-big.png";
import Button from "../Button";
import Input from "../Input";
import styles from "./Login.module.css";
import { func } from "prop-types";

const Login = () => {
  /* Login */
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [loginCadastro, setLoginCadastro] = React.useState(false);

  /* Cadastro */
  const [nome, setNome] = React.useState("");
  const [dataNasc, setDataNasc] = React.useState("");
  const navigate = useNavigate();


  function validado(validado, input) {
    console.log(input)
    console.log(validado)


    var input = document.getElementById(`${input}`);  // Substitua pelo ID do seu input

    if (!validado) {
      input.style = `border-image-source: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 128, 0, 1) 50%, rgba(255, 255, 0, 1) 100%);`;

    } else {
      input.style = `border-image-source: linear-gradient(90deg, rgba(0,226,242,1) 0%, rgba(0,127,251,1) 100%);`;
    }
  }


  function tips(inputId, mensagem) {
    document.addEventListener('DOMContentLoaded', function () {
      var input = document.getElementById(inputId);
      input.addEventListener('input', function () {
        input.title = mensagem;
      });

      // Remova a dica quando o foco estiver no campo
      input.addEventListener('focus', function () {
        input.title = '';
      });
    });

  }

  function mudarDiv() {
    setLoginCadastro(!loginCadastro)
  }


  async function login() {

    const { url, options } = USER_LOGIN({
      email,
      senha
    })

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      sessionStorage.setItem('id', data.id);
      sessionStorage.setItem('nome', data.nome);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('nivel', data.nivel ? data.nivel : 0);
      sessionStorage.setItem('moedas', data.moedas ? data.moedas : 0);
      sessionStorage.setItem('xp', data.xp ? data.xp : 0);
      sessionStorage.setItem('tokenBearer', data.token);
      setTimeout(() => {
        navigate('/menu');
      }, 1000);
    }

  }
  async function cadastrar() {
    if (validarCadastro(nome, dataNasc, email, senha)) {
      const { url, options } = USER_CADASTRO({
        email,
        senha,
        nome,
        "dtNascimento": dataNasc
      })

      const response = await fetch(url, options);
      if (response.ok) {
        login()
        console.log(response)
      } else {
        console.log(response)
      }
    }
  }

  function validarCadastro(nome, data, email, senha) {
    var nomeValido = false;
    var dataValida = false;
    var emailValido = false;
    var senhaValida = false;

    var inputNome = document.getElementById("nome");
    var inputData = document.getElementById("data");
    var inputEmail = document.getElementById("email");
    var inputSenha = document.getElementById("senha");

    var mensagem = "";
    // Validar nome
    if (nome.length < 3) {
      mensagem = "Seu nome deve conter no mínimo 3 caracteres!";
      inputNome.title = mensagem;
    } else if (nome.length > 25) {
      mensagem = "Seu nome deve conter no máximo 25 caracteres!";
      inputNome.title = mensagem;
    } else {
      mensagem = "Nome válido"
      inputNome.title = mensagem;
      nomeValido = true;
    }

    // Validar data de nascimento
    var dataAtual = new Date();
    var dataNascimento = new Date(data);
    if (isNaN(dataNascimento.getTime())) {
      mensagem = "Data de nascimento inválida!";
      inputData.title = mensagem;
    } else if (dataNascimento >= dataAtual) {
      mensagem = "Data de nascimento deve ser anterior à data atual!";
      inputData.title = mensagem;
    } else {
      dataValida = true;
      mensagem = "Data de nascimento válida!";
      inputData.title = mensagem;
    }

    // Validar e-mail (simplificação, sem validar formato)
    if (email.includes("@") && email.length >= 10 && email.length <= 60) {
      emailValido = true;
      mensagem = "E-mail válido!";
      inputEmail.title = mensagem;
    } else {
      mensagem = "E-mail inválido, o email deve conter no minimo 10 caracteres e no máximo 60!";
      inputEmail.title = mensagem;
    }

    // Validar senha
    if (senha.length < 6) {
      mensagem = "A senha deve conter no mínimo 6 caracteres!";
      inputSenha.title = mensagem;

    } else if(senha.length > 25){
      mensagem = "A senha deve conter no máximo 25 caracteres!";
      inputSenha.title = mensagem;

    }else {
      senhaValida = true;
      mensagem = "A senha está válida";
      inputSenha.title = mensagem;
    }

    validado(nomeValido, "nome");
    validado(senhaValida, "senha");
    validado(emailValido, "email");
    validado(dataValida, "data");

    // Se estiver tudo certo, permitir o cadastro
    if (nomeValido && dataValida && emailValido && senhaValida) {
      console.log("Cadastro permitido!");
      return true;
    } else {
      console.log("Corrija os campos inválidos e tente novamente.");
      return false;
    }
  }



  return (
    <>
      <nav className={styles.container + " " + styles.nav}>
        <Link className={styles.link} to="/">
          Voltar
        </Link>
        <img className={styles.logo} src={logo} alt="Logo CodeUp" />
        <span></span>
      </nav>

      <section className={styles.container + " " + styles.containerLogin}>
        {/* Login */}
        {loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Login</h1>
            <div>
              <Input
                className={styles.input}
                label="Email"
                id="email"
                title='Seu nome deve conter no mínimo 3 caracteres e no máximo 25 caracteres.'
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                title='Seu nome deve conter no mínimo 3 caracteres e no máximo 25 caracteres.'
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Entrar" className={styles.button} setValue={login} />
            </div>
          </div>
        )}
        {/* Div intermediária */}
        <div className={styles.preCadastro}>
          {loginCadastro ?
            <>
              <p className={styles.p}>Não tem conta ainda?</p>
              <Button
                className={styles.button}
                texto="Cadastre-se"
                value={loginCadastro}
                setValue={mudarDiv}
              />
            </> : <>
              <p className={styles.p}>Já tem conta?</p>
              <Button
                className={styles.button}
                texto="Entrar"
                value={loginCadastro}
                setValue={mudarDiv}
              />
            </>}


        </div>
        {/* Cadastro */}
        {!loginCadastro && (
          <div className={styles.login}>
            <h1 className={styles.titulo}>Cadastre-se</h1>
            <div>
              <Input
                className={styles.input}
                label="Nome"
                id="nome"
                title='Seu nome deve conter no mínimo 3 caracteres e no máximo 25 caracteres.'
                type="text"
                value={nome}
                setValue={setNome}
              />

              <Input
                className={styles.input + " " + styles.date}
                label="Data de Nascimento"
                id="data"
                title='Coloque sua data de nascimento.'
                type="date"
                value={dataNasc}
                setValue={setDataNasc}
              />
              <Input
                className={styles.input}
                label="Email"
                id="email"
                title='Seu email deve conter @, no minimo 10 e no máximo 60 caracteres.'
                type="text"
                value={email}
                setValue={setEmail}
              />

              <Input
                className={styles.input2}
                label="Senha"
                id="senha"
                title='Sua senha deve conter no minimo 6 e no máximo 25 caracteres.'
                type="password"
                value={senha}
                setValue={setSenha}
              />
              <Button texto="Cadastre-se" className={styles.button} setValue={cadastrar} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
